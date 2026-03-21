import { IAIService } from '../../types/ai';
import { UserProfile } from '../../types/profile';
import { TrainingPlan, PlanPreview } from '../../types/plan';
import { v4 as uuid } from 'uuid';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class MockAIService implements IAIService {
  async extractProfile(intake: string): Promise<Partial<UserProfile>> {
    await delay(1500);
    return {
      demographics: {
        age: 46,
        weight: 230,
        height: 71,
        biologicalSex: 'male',
      },
      experience: {
        yearsTraining: 5,
        frequency: 5,
        background: intake.slice(0, 200),
      },
      existingTraining: {
        description: 'CrossFit 5x/week at a local box',
        activitiesPerWeek: [{ activity: 'CrossFit', frequencyPerWeek: 5 }],
        planRelationship: 'modification',
      },
      goals: [
        {
          id: uuid(),
          type: 'event',
          description: 'Complete Murph with 20 lb vest',
          target: 'Sub-60 minutes',
          deadline: '2026-05-25',
          status: 'active',
        },
        {
          id: uuid(),
          type: 'skill',
          description: 'Bar muscle-up',
          target: '1 strict rep',
          deadline: null,
          status: 'active',
        },
        {
          id: uuid(),
          type: 'body_composition',
          description: 'Lose weight while maintaining strength',
          target: '220 lbs',
          deadline: '2026-05-25',
          status: 'active',
        },
      ],
      baselines: [
        { id: uuid(), name: 'Bench Press', value: '350', unit: 'lbs', recordedAt: new Date().toISOString() },
        { id: uuid(), name: 'Back Squat', value: '375', unit: 'lbs', recordedAt: new Date().toISOString() },
        { id: uuid(), name: 'Deadlift', value: '405', unit: 'lbs', recordedAt: new Date().toISOString() },
        { id: uuid(), name: 'Mile Run', value: '9:30', unit: 'min', recordedAt: new Date().toISOString() },
      ],
      movementLimitations: [],
      schedule: {
        daysPerWeek: 5,
        preferredDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        sessionLengthMinutes: 60,
        equipment: ['Full gym', 'Pull-up bar', '20 lb vest'],
      },
      preferences: {
        likedPrograms: ['CrossFit'],
        dislikedPrograms: [],
        preferredStyle: 'High intensity, varied',
        notes: '',
      },
    };
  }

  async generateFollowUps(partialProfile: Partial<UserProfile>): Promise<string[]> {
    await delay(1000);
    const questions: string[] = [];

    if (!partialProfile.demographics?.age) {
      questions.push('What is your age, height, and current weight?');
    }
    if (!partialProfile.existingTraining?.description) {
      questions.push(
        'What training are you currently doing that will continue alongside this plan? (e.g., team practices, gym sessions, classes)'
      );
    }
    if (!partialProfile.goals?.length || !partialProfile.goals.some((g) => g.deadline)) {
      questions.push(
        'Do you have a specific event date or deadline you\'re training toward? If so, what is it and when?'
      );
    }
    if (!partialProfile.movementLimitations?.length) {
      questions.push(
        'Any movement limitations we should program around? (e.g., areas of stiffness, past injuries that affect certain movements)'
      );
    }

    return questions.length > 0
      ? questions.slice(0, 3)
      : [
          'What does your typical training week look like right now?',
          'What programs or training styles have worked well for you in the past?',
        ];
  }

  async refineProfile(
    profile: Partial<UserProfile>,
    followUpAnswers: { question: string; answer: string }[]
  ): Promise<UserProfile> {
    await delay(1500);
    return {
      id: uuid(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      demographics: profile.demographics || { age: null, weight: null, height: null, biologicalSex: null },
      experience: profile.experience || { yearsTraining: null, frequency: null, background: '' },
      existingTraining: profile.existingTraining || { description: '', activitiesPerWeek: [], planRelationship: null },
      goals: profile.goals || [],
      baselines: profile.baselines || [],
      movementLimitations: profile.movementLimitations || [],
      schedule: profile.schedule || { daysPerWeek: null, preferredDays: [], sessionLengthMinutes: null, equipment: [] },
      preferences: profile.preferences || { likedPrograms: [], dislikedPrograms: [], preferredStyle: '', notes: '' },
      rawIntake: '',
      rawFollowUps: followUpAnswers,
    };
  }

  async generatePlanPreview(profile: UserProfile): Promise<PlanPreview> {
    await delay(2000);
    return {
      title: 'Murph Domination: 12-Week Vest-Ready Program',
      summary:
        'A 3-phase program that modifies your existing CrossFit schedule to integrate Murph-specific prep. 2-3 CF sessions per week are replaced with targeted work — you keep training at your box, but the sessions are purposeful toward Memorial Day.',
      whyThisPlan:
        'Your strength base is elite — 350/375/405 is serious. The limiter for Murph is muscular endurance and running under fatigue, not raw strength. This plan preserves your big lifts while building the engine and skills you need.',
      rationale: [
        {
          topic: 'Modification, not addition',
          explanation: 'You\'re already training 5x/week at CrossFit. Adding Murph prep on top would push you to overtraining. Instead, 2-3 CF sessions per week get replaced with Murph-specific work. You still train at your box, but with purpose.',
        },
        {
          topic: 'Strength maintenance, not building',
          explanation: 'At 350/375/405, your strength is a major asset — but trying to increase it while cutting weight and building endurance would spread you too thin. We maintain with minimal effective volume so recovery goes toward the Murph goal.',
        },
        {
          topic: 'Progressive vest exposure',
          explanation: 'The vest gets introduced in Week 5, not Week 1. Your connective tissue and joints need time to adapt to the additional 20 lbs under running and bodyweight movements. Too early = injury risk.',
        },
      ],
      planRelationship: 'modification',
      durationWeeks: 12,
      daysPerWeek: 5,
      phases: [
        {
          name: 'Foundation',
          weeks: '1-4',
          focus: 'Build running base, skill mechanics (BMU progression), no vest. Half Murph test Week 4.',
          rationale: 'Establish the aerobic base and movement patterns before adding the vest. The Half Murph test gives us a baseline to measure progress against.',
        },
        {
          name: 'Integration',
          weeks: '5-8',
          focus: 'Vest introduced, full Murph simulation Week 8, increase WOD intensity.',
          rationale: 'Now that the base is there, we layer in the vest and start simulating race conditions. Full Murph sim in Week 8 tells us where you stand with 4 weeks to adjust.',
        },
        {
          name: 'Peak & Taper',
          weeks: '9-12',
          focus: 'Race-pace work, refine strategy, taper Week 12, race day.',
          rationale: 'Sharpen race-pace effort, lock in your partition strategy, then pull back volume in the final week so you\'re fresh on Memorial Day.',
        },
      ],
    };
  }

  async refinePlanPreview(
    preview: PlanPreview,
    feedback: string,
    _profile: UserProfile
  ): Promise<PlanPreview> {
    await delay(1500);
    return {
      ...preview,
      summary: preview.summary + ' (Adjusted based on your feedback.)',
    };
  }

  async generateFullPlan(profile: UserProfile, preview: PlanPreview): Promise<TrainingPlan> {
    await delay(3000);

    const planId = uuid();
    const phases = [
      { id: uuid(), name: 'Foundation', startWeek: 1, endWeek: 4, focus: 'Build base, skill mechanics', goals: ['Running base', 'BMU progression', 'Half Murph test'], rationale: 'Establish aerobic base and movement patterns before adding vest.' },
      { id: uuid(), name: 'Integration', startWeek: 5, endWeek: 8, focus: 'Vest work, full Murph sim', goals: ['Vest adaptation', 'Full Murph simulation', 'WOD intensity'], rationale: 'Layer in vest, simulate race conditions, assess readiness at Week 8.' },
      { id: uuid(), name: 'Peak & Taper', startWeek: 9, endWeek: 12, focus: 'Race pace, taper', goals: ['Race-pace Murph', 'Taper', 'Race day'], rationale: 'Sharpen race pace, lock in strategy, taper for race day.' },
    ];

    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const dayTypes = ['CF (Modified)', 'Murph Prep', 'CF WOD', 'Murph Prep', 'CF (Modified)'];

    const weeks = Array.from({ length: 12 }, (_, i) => {
      const weekNum = i + 1;
      const phase = phases.find((p) => weekNum >= p.startWeek && weekNum <= p.endWeek)!;

      return {
        weekNum,
        phaseId: phase.id,
        focus: `Week ${weekNum}: ${phase.focus}`,
        days: dayLabels.map((label, dayIdx) => ({
          dayIndex: dayIdx,
          dayLabel: label,
          type: dayTypes[dayIdx],
          sessions: [
            {
              id: uuid(),
              type: dayTypes[dayIdx],
              tasks: [
                {
                  id: uuid(),
                  movement: '800m Easy Jog + Dynamic Stretching',
                  prescription: '800m jog, then 10 min dynamic warm-up',
                  category: 'warmup' as const,
                  coachingCues: ['Keep the jog conversational pace — you should be able to talk', 'Hip circles, leg swings, inchworms, world\'s greatest stretch'],
                },
                {
                  id: uuid(),
                  movement: dayTypes[dayIdx] === 'Murph Prep' ? 'Pull-up Progression' : 'CrossFit WOD',
                  prescription: dayTypes[dayIdx] === 'Murph Prep' ? '5x5 strict pull-ups, 60s rest' : 'Coach\'s programming',
                  category: dayTypes[dayIdx] === 'Murph Prep' ? 'skill' as const : 'conditioning' as const,
                  why: dayTypes[dayIdx] === 'Murph Prep'
                    ? 'Building strict pull-up volume before transitioning to kipping — strength base prevents shoulder issues under fatigue'
                    : 'Maintaining your CrossFit fitness while the Murph-specific work builds on top',
                  coachingCues: dayTypes[dayIdx] === 'Murph Prep'
                    ? ['Start from a dead hang — full extension', 'Initiate with scapular retraction, then pull elbows down', 'Chin clears the bar, controlled 2-second descent']
                    : ['Scale intensity to RPE 7 — save your energy for Murph prep days'],
                  commonFaults: dayTypes[dayIdx] === 'Murph Prep'
                    ? ['Kipping when fatigued — stay strict for now', 'Partial range of motion — full extension at the bottom']
                    : undefined,
                },
                {
                  id: uuid(),
                  movement: 'Cool-Down Walk + Stretch',
                  prescription: '5 min easy walk, 5 min static stretching',
                  category: 'cooldown' as const,
                  coachingCues: ['Focus on hip flexors, lats, and shoulders', 'Hold each stretch 30-45 seconds, breathe into it'],
                },
              ],
            },
          ],
        })),
      };
    });

    return {
      id: planId,
      profileId: profile.id,
      title: preview.title,
      summary: preview.summary,
      whyThisPlan: preview.whyThisPlan,
      rationale: preview.rationale,
      planRelationship: preview.planRelationship,
      createdAt: new Date().toISOString(),
      durationWeeks: 12,
      status: 'active',
      phases,
      weeks,
    };
  }
}
