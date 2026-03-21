/**
 * Forge — Real Anthropic AI Service
 *
 * Implements IAIService using the Anthropic Claude API.
 * Uses claude-sonnet-4-20250514 for all operations.
 *
 * Cost optimizations:
 * - Prompt caching on system prompts (90% input token savings on repeated calls)
 * - Trimmed ethos for week generation (only session-relevant rules, not full ethos)
 */

import Anthropic from '@anthropic-ai/sdk';
import { IAIService } from '../../types/ai';
import { UserProfile } from '../../types/profile';
import { TrainingPlan, PlanPreview } from '../../types/plan';
import {
  SYSTEM_PROMPTS,
  buildExtractProfileMessages,
  buildFollowUpMessages,
  buildRefineProfileMessages,
  buildPlanPreviewMessages,
  buildRefinePlanPreviewMessages,
  buildFullPlanMessages,
} from './prompts';

const MODEL = 'claude-sonnet-4-20250514';

function parseJSON<T>(text: string): T {
  let cleaned = text.trim();

  // Strip markdown code fences if present
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  // If the response starts with prose, try to find JSON within it
  if (!cleaned.startsWith('{') && !cleaned.startsWith('[')) {
    const jsonStart = cleaned.indexOf('{');
    const arrayStart = cleaned.indexOf('[');
    const start = jsonStart >= 0 && (arrayStart < 0 || jsonStart < arrayStart) ? jsonStart : arrayStart;
    if (start >= 0) {
      cleaned = cleaned.slice(start);
      const isArray = cleaned.startsWith('[');
      const openChar = isArray ? '[' : '{';
      const closeChar = isArray ? ']' : '}';
      let depth = 0;
      let end = -1;
      for (let i = 0; i < cleaned.length; i++) {
        if (cleaned[i] === openChar) depth++;
        if (cleaned[i] === closeChar) depth--;
        if (depth === 0) { end = i + 1; break; }
      }
      if (end > 0) cleaned = cleaned.slice(0, end);
    }
  }

  try {
    return JSON.parse(cleaned) as T;
  } catch (err) {
    console.error('Failed to parse JSON response. First 500 chars:');
    console.error(text.slice(0, 500));
    throw err;
  }
}

export class AnthropicAIService implements IAIService {
  private client: Anthropic;

  constructor(apiKey: string) {
    this.client = new Anthropic({
      apiKey,
      // Required for Expo web dev. In production, API calls go through a server proxy
      // and this flag is not needed. The .env key exposure is dev-only.
      dangerouslyAllowBrowser: true,
    });
  }

  /**
   * Standard call — no caching.
   * Used for one-off operations (profile extraction, follow-ups, etc.)
   */
  private async call(
    systemPrompt: string,
    messages: { role: 'user' | 'assistant'; content: string }[],
    maxTokens: number
  ): Promise<string> {
    const response = await this.client.messages.create({
      model: MODEL,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages,
    });

    const block = response.content[0];
    if (block.type !== 'text') {
      throw new Error('Unexpected response type: ' + block.type);
    }

    const usage = response.usage as any;
    const cached = usage.cache_read_input_tokens || 0;
    const cacheCreated = usage.cache_creation_input_tokens || 0;
    console.log(
      `[Forge AI] ${response.usage.input_tokens} input` +
      (cached ? ` (${cached} cached)` : '') +
      (cacheCreated ? ` (${cacheCreated} cache-created)` : '') +
      `, ${response.usage.output_tokens} output tokens`
    );
    return block.text;
  }

  /**
   * Cached call — marks the system prompt for caching.
   * Used for repeated calls with the same system prompt (week generation).
   * After the first call, subsequent calls pay 90% less for the cached system prompt.
   */
  private async callCached(
    systemPrompt: string,
    messages: { role: 'user' | 'assistant'; content: string }[],
    maxTokens: number
  ): Promise<string> {
    const response = await this.client.messages.create({
      model: MODEL,
      max_tokens: maxTokens,
      system: [
        {
          type: 'text' as const,
          text: systemPrompt,
          cache_control: { type: 'ephemeral' as const },
        },
      ],
      messages,
    });

    const block = response.content[0];
    if (block.type !== 'text') {
      throw new Error('Unexpected response type: ' + block.type);
    }

    const usage = response.usage as any;
    const cached = usage.cache_read_input_tokens || 0;
    const cacheCreated = usage.cache_creation_input_tokens || 0;
    console.log(
      `[Forge AI] ${response.usage.input_tokens} input` +
      (cached ? ` (${cached} cached)` : '') +
      (cacheCreated ? ` (${cacheCreated} cache-created)` : '') +
      `, ${response.usage.output_tokens} output tokens`
    );
    return block.text;
  }

  async extractProfile(intake: string): Promise<Partial<UserProfile>> {
    const text = await this.call(
      SYSTEM_PROMPTS.extractProfile,
      buildExtractProfileMessages(intake),
      2000
    );
    return parseJSON<Partial<UserProfile>>(text);
  }

  async generateFollowUps(partialProfile: Partial<UserProfile>): Promise<string[]> {
    const text = await this.call(
      SYSTEM_PROMPTS.generateFollowUps,
      buildFollowUpMessages(partialProfile),
      500
    );
    return parseJSON<string[]>(text);
  }

  async refineProfile(
    profile: Partial<UserProfile>,
    followUpAnswers: { question: string; answer: string }[]
  ): Promise<UserProfile> {
    const text = await this.call(
      SYSTEM_PROMPTS.refineProfile,
      buildRefineProfileMessages(profile, followUpAnswers),
      2000
    );
    return parseJSON<UserProfile>(text);
  }

  async generatePlanPreview(profile: UserProfile): Promise<PlanPreview> {
    const text = await this.call(
      SYSTEM_PROMPTS.generatePlanPreview,
      buildPlanPreviewMessages(profile),
      3000
    );
    return parseJSON<PlanPreview>(text);
  }

  async refinePlanPreview(
    preview: PlanPreview,
    feedback: string,
    profile: UserProfile
  ): Promise<PlanPreview> {
    const text = await this.call(
      SYSTEM_PROMPTS.refinePlanPreview,
      buildRefinePlanPreviewMessages(preview, feedback, profile),
      3000
    );
    return parseJSON<PlanPreview>(text);
  }

  async generateFullPlan(
    profile: UserProfile,
    preview: PlanPreview
  ): Promise<TrainingPlan> {
    // Step 1: Generate the plan shell (metadata + phases, no weeks)
    const shellText = await this.call(
      SYSTEM_PROMPTS.generatePlanShell,
      buildFullPlanMessages(profile, preview),
      2000
    );
    const shell = parseJSON<TrainingPlan>(shellText);

    // Step 2: Generate week-by-week using CACHED calls with TRIMMED ethos
    const allWeeks: TrainingPlan['weeks'] = [];
    const profileContext = JSON.stringify({
      demographics: profile.demographics,
      experience: profile.experience,
      existingTraining: profile.existingTraining,
      goals: profile.goals,
      baselines: profile.baselines,
      movementLimitations: profile.movementLimitations,
      schedule: profile.schedule,
      preferences: profile.preferences,
    });

    for (const phase of shell.phases) {
      for (let wk = phase.startWeek; wk <= phase.endWeek; wk++) {
        const isDeload = wk === phase.endWeek && (phase.endWeek - phase.startWeek) >= 3;
        const prevWeek = allWeeks.length > 0 ? allWeeks[allWeeks.length - 1] : null;
        console.log(`[Forge AI] Generating week ${wk}/${shell.durationWeeks} (${phase.name})${isDeload ? ' [DELOAD]' : ''}...`);

        // Use callCached — the system prompt (trimmed ethos) gets cached after first call
        // For Week 1, tell the AI what day we're starting on
        const startDayNote = wk === 1
          ? `\n## IMPORTANT: This is Week 1. The plan starts TODAY, ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} (dayIndex ${new Date().getDay() === 0 ? 6 : new Date().getDay() - 1}). Only include sessions for TODAY and the remaining days of this week. Do NOT include days that have already passed.\n`
          : '';

        const weekText = await this.callCached(
          SYSTEM_PROMPTS.generateSingleWeek,
          [{
            role: 'user' as const,
            content: `## Plan: ${shell.title} (${shell.planRelationship})\n## Phase: ${phase.name} (weeks ${phase.startWeek}-${phase.endWeek})\nFocus: ${phase.focus}\nGoals: ${phase.goals.join(', ')}${startDayNote}\n\n## This is Week ${wk}${isDeload ? ' — THIS IS A DELOAD WEEK. Reduce volume by 40-50%, moderate intensity, maintain frequency.' : ''}\n\n${prevWeek ? `## Previous Week Summary (for progression):\n${prevWeek.days.map((d) => `${d.dayLabel}: ${d.sessions[0]?.tasks.map((t) => `${t.movement} ${t.prescription}`).join(', ')}`).join('\n')}\n\n` : ''}## Athlete Profile\n${profileContext}`,
          }],
          4000
        );
        const weekData = parseJSON<TrainingPlan['weeks'][0]>(weekText);
        allWeeks.push(weekData);
      }
    }

    shell.weeks = allWeeks;
    return shell;
  }
}
