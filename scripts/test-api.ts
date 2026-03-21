/**
 * Forge — API Test Script
 *
 * Tests the real Anthropic API with different user profiles.
 * Run: npx tsx scripts/test-api.ts
 *
 * Tests one profile at a time to stay within rate limits.
 */

import { AnthropicAIService } from '../src/services/ai/anthropic';
import { UserProfile } from '../src/types/profile';
import { coachingCueLibrary } from '../src/services/coachingCueLibrary';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('ERROR: ANTHROPIC_API_KEY not found in .env');
  process.exit(1);
}

const ai = new AnthropicAIService(apiKey);

// ---------------------------------------------------------------------------
// Test profiles — different user types
// ---------------------------------------------------------------------------

const TEST_INTAKES: Record<string, string> = {
  beginner: `I'm a 34 year old woman, 5'6" and about 155 lbs. I've never really worked out consistently before — I did some yoga a few years ago and I walk my dog daily, but that's about it. I want to get stronger and feel more confident in the gym. I just joined a gym that has everything — dumbbells, barbells, machines, cables. I can go 3 days a week, maybe 4 if I push it. Sessions need to be under 45 minutes because I go during lunch. No injuries but my shoulders are pretty tight from desk work. I don't have any specific events — I just want to feel strong and look better. My biggest fear is hurting myself because I don't know what I'm doing.`,

  intermediate_crossfit: `46 year old male, 230 lbs, 5'11". Been doing CrossFit 5x/week for about 5 years. My lifts are decent — 375 squat, 350 bench, 405 deadlift. I want to do Murph on Memorial Day (May 25) with the 20 lb vest and get sub-60 minutes. Currently I can run a mile in about 9:30 and do maybe 15 strict pull-ups unbroken. I'm also trying to lose about 10 lbs before then. I train at my box which has everything including rowers, bikes, barbells, rigs. I'd keep going 5 days a week. No injuries but my left knee gets cranky with heavy front squats sometimes.`,

  advanced_powerlifter: `I'm 28M, 198 lbs, competing in USAPL at 90kg. Current total is 1350 (505 squat, 325 bench, 520 deadlift). I have a meet in 16 weeks and need to peak for it. My bench has been stuck for 6 months — that's my biggest weak point. I train at a powerlifting gym 4 days a week, sessions are 90 minutes. I use RPE-based programming. No injuries but I have some chronic lower back tightness that flares up if I don't manage it. I've run Sheiko, Calgary Barbell, and RTS templates in the past. I like structured, data-driven programming.`,

  jason_crossfit: `I am a 45 year old male with years of weightlifting experience. I have recently switched to crossfit over the past 4 months and go around 4-5 times per week. I really want to improve some of the high skill movements and be able to perform a bar and ring muscle up, get double unders consistently. In addition to this, one of the most important crossfit workouts is Murph at the end of May. I am a poor runner and would like to start adding in training now to be able to have a good murph time. Can you build a plan that balances all this? I also do GoWod mobility work 15-20mins 3-4 times a week currently. After Murph is done, I want to shift into a strength training focus. I'll keep doing crossfit but want to work on improving my bench press and back squat - currently at around 350 bench and 375 squat, and I want to get to 405 bench and 450 squat.`,

  older_returning: `I'm 57, female, 170 lbs, 5'4". I used to lift weights pretty seriously in my 30s and 40s — at my peak I was squatting 185 and deadlifting 225. But I had knee surgery (meniscus) 8 months ago and haven't done much since. My PT cleared me for everything as of last month but said to ease back in. I have a full gym membership. I can train 3 days a week for about an hour. My goals are to get my strength back, improve my bone density (osteoporosis runs in my family), and just feel like myself again. My knees are the main concern — I can squat but deep flexion under heavy load is still uncomfortable.`,
};

// ---------------------------------------------------------------------------
// Test runner
// ---------------------------------------------------------------------------

async function testProfile(name: string, intake: string) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`TEST: ${name.toUpperCase()}`);
  console.log('='.repeat(70));

  // Step 1: Extract profile
  console.log('\n--- Step 1: Extract Profile ---');
  const startExtract = Date.now();
  const partialProfile = await ai.extractProfile(intake);
  console.log(`Time: ${((Date.now() - startExtract) / 1000).toFixed(1)}s`);
  console.log('Goals:', partialProfile.goals?.map((g) => g.description).join(', '));
  console.log('Experience:', partialProfile.experience?.yearsTraining, 'years');
  console.log('Schedule:', partialProfile.schedule?.daysPerWeek, 'days/week');
  console.log('Limitations:', partialProfile.movementLimitations?.map((m) => `${m.area}: ${m.limitation}`).join(', ') || 'none');

  // Step 2: Generate follow-ups
  console.log('\n--- Step 2: Follow-Up Questions ---');
  const startFollowUp = Date.now();
  const questions = await ai.generateFollowUps(partialProfile);
  console.log(`Time: ${((Date.now() - startFollowUp) / 1000).toFixed(1)}s`);
  questions.forEach((q, i) => console.log(`  ${i + 1}. ${q}`));

  // Step 3: Refine profile (simulate answers)
  console.log('\n--- Step 3: Refine Profile (simulated answers) ---');
  const simulatedAnswers = questions.map((q) => ({
    question: q,
    answer: 'No additional details to add — the intake covered everything.',
  }));
  const startRefine = Date.now();
  const fullProfile = await ai.refineProfile(partialProfile, simulatedAnswers);
  console.log(`Time: ${((Date.now() - startRefine) / 1000).toFixed(1)}s`);
  console.log('Profile ID:', fullProfile.id);

  // Step 4: Generate plan preview
  console.log('\n--- Step 4: Plan Preview ---');
  const startPreview = Date.now();
  const preview = await ai.generatePlanPreview(fullProfile);
  console.log(`Time: ${((Date.now() - startPreview) / 1000).toFixed(1)}s`);
  console.log('Title:', preview.title);
  console.log('Duration:', preview.durationWeeks, 'weeks');
  console.log('Days/week:', preview.daysPerWeek);
  console.log('Relationship:', preview.planRelationship);
  console.log('Why:', preview.whyThisPlan);
  console.log('Phases:');
  preview.phases.forEach((p) => console.log(`  - ${p.name} (${p.weeks}): ${p.focus}`));
  console.log('Rationale:');
  preview.rationale.forEach((r) => console.log(`  - ${r.topic}: ${r.explanation.slice(0, 100)}...`));

  // Step 5: Generate full plan (THIS IS THE BIG ONE)
  console.log('\n--- Step 5: Full Plan Generation ---');
  console.log('(This may take 1-3 minutes due to output token rate limits...)');
  const startPlan = Date.now();
  const plan = await ai.generateFullPlan(fullProfile, preview);
  const planTime = ((Date.now() - startPlan) / 1000).toFixed(1);
  console.log(`Time: ${planTime}s`);
  console.log('Plan ID:', plan.id);
  console.log('Weeks generated:', plan.weeks.length);
  console.log('Phases:', plan.phases.map((p) => p.name).join(', '));

  // Analyze the plan
  const allTasks = plan.weeks.flatMap((w) => w.days.flatMap((d) => d.sessions.flatMap((s) => s.tasks)));
  const uniqueMovements = [...new Set(allTasks.map((t) => t.movement))];
  console.log('Total exercises programmed:', allTasks.length);
  console.log('Unique movements:', uniqueMovements.length);

  // Check movement matching against curated library
  const libraryNames = new Set(coachingCueLibrary.map((m) => m.name.toLowerCase()));
  const matched = uniqueMovements.filter((m) => libraryNames.has(m.toLowerCase()));
  const unmatched = uniqueMovements.filter((m) => !libraryNames.has(m.toLowerCase()));

  console.log(`\nLibrary match rate: ${matched.length}/${uniqueMovements.length} (${Math.round(matched.length / uniqueMovements.length * 100)}%)`);
  if (unmatched.length > 0) {
    console.log('Unmatched movements (would need AI-generated cues):');
    unmatched.forEach((m) => console.log(`  - ${m}`));
  }

  // Check structural quality
  console.log('\n--- Quality Checks ---');
  const hasWarmups = plan.weeks.every((w) => w.days.every((d) => d.sessions.every((s) => s.tasks.some((t) => t.category === 'warmup'))));
  const hasCooldowns = plan.weeks.every((w) => w.days.every((d) => d.sessions.every((s) => s.tasks.some((t) => t.category === 'cooldown'))));
  const restDaysPerWeek = plan.weeks.map((w) => 7 - w.days.length);
  const hasRestDays = restDaysPerWeek.every((r) => r >= 1);

  console.log(`✓ Every session has warmup: ${hasWarmups ? 'YES' : 'NO ⚠'}`);
  console.log(`✓ Every session has cooldown: ${hasCooldowns ? 'YES' : 'NO ⚠'}`);
  console.log(`✓ Rest days every week: ${hasRestDays ? 'YES' : 'NO ⚠'} (${restDaysPerWeek.join(', ')} rest days/wk)`);
  console.log(`✓ Weeks match duration: ${plan.weeks.length === plan.durationWeeks ? 'YES' : 'NO ⚠'}`);

  // Sample output: show Week 1 Day 1
  const w1d1 = plan.weeks[0]?.days[0];
  if (w1d1) {
    console.log(`\n--- Sample: Week 1, ${w1d1.dayLabel} (${w1d1.type}) ---`);
    w1d1.sessions[0]?.tasks.forEach((t) => {
      console.log(`  [${t.category}] ${t.movement}: ${t.prescription}`);
      if (t.why) console.log(`    Why: ${t.why}`);
    });
  }

  // Write full plan to file for review
  const fs = await import('fs');
  const outPath = path.resolve(__dirname, `test-output-${name}.json`);
  fs.writeFileSync(outPath, JSON.stringify(plan, null, 2));
  console.log(`\nFull plan written to: ${outPath}`);

  return { name, plan, preview, profile: fullProfile, uniqueMovements, matched, unmatched };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const profileName = process.argv[2] || 'beginner';

  if (profileName === 'all') {
    // Run all profiles sequentially (respects rate limits)
    for (const [name, intake] of Object.entries(TEST_INTAKES)) {
      try {
        await testProfile(name, intake);
        console.log('\n⏳ Waiting 60s before next test (rate limits)...\n');
        await new Promise((r) => setTimeout(r, 60000));
      } catch (err) {
        console.error(`\n❌ FAILED: ${name}`);
        console.error(err);
      }
    }
  } else if (TEST_INTAKES[profileName]) {
    try {
      await testProfile(profileName, TEST_INTAKES[profileName]);
    } catch (err) {
      console.error(`\n❌ FAILED: ${profileName}`);
      console.error(err);
    }
  } else {
    console.log('Available profiles:', Object.keys(TEST_INTAKES).join(', '));
    console.log('Usage: npx tsx scripts/test-api.ts [profile|all]');
  }
}

main();
