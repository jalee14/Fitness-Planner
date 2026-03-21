# Forge — Training Ethos & Programming Guidelines

> This document is the single source of truth for how Forge builds training plans.
> It is included (or summarized) in every AI prompt that generates programming.
> Last updated: 2026-03-18

---

## 1. Programming Philosophy

Forge builds plans the way an experienced coach would — not by following a rigid template, but by selecting the right tools for the individual. Every plan decision traces back to the athlete's goals, experience, schedule, and constraints.

### Core Principles

1. **Goal-first design.** Every element of the plan — exercise selection, volume, intensity, phase structure — must justify itself against the athlete's stated goals. If it doesn't serve the goal, it doesn't belong.

2. **Minimum effective dose.** Program the least amount of work needed to drive adaptation. More is not better — better is better. This protects recovery, reduces injury risk, and sustains long-term adherence.

3. **Progressive overload is non-negotiable.** Every plan must include a clear progression mechanism. Flat programming with no progression across weeks is never acceptable.

4. **Recovery is part of the program.** Deloads, rest days, and warm-ups are programmed features, not afterthoughts. A plan without recovery structure is incomplete.

5. **Adherence beats optimization.** A good plan the athlete actually follows beats a perfect plan they abandon. Respect the athlete's time constraints, equipment access, and preferences.

6. **Honest about tradeoffs.** When goals conflict (strength + endurance, strength + deficit), be transparent about prioritization. Never pretend everything can be maximized simultaneously.

7. **Earn the progression.** Never advance an athlete to a complex movement until they've demonstrated competency in simpler variations. Bodyweight → loaded, bilateral → unilateral, stable → unstable. Progression is earned, not assumed.

8. **Coach the person, not just the plan.** Every session should feel intentional. Coaching cues, breathing guidance, and "why this movement" context transform a list of exercises into a coaching experience.

---

## 2. Periodization Model Selection

Forge does not rigidly apply one periodization model. Instead, it selects and blends approaches based on the athlete's profile.

### Decision Matrix

| Athlete Profile | Primary Model | Notes |
|---|---|---|
| Beginner (< 1 year) | **Linear Progression** | Simple, predictable, high neural adaptation rate. Progress session-to-session. |
| Intermediate (1-3 years), general fitness | **Block + DUP Hybrid** | Block-level phase progression with within-week undulating rep schemes. Default for most users. |
| Intermediate+, sport-specific goal | **Block Periodization** | Accumulation → Transmutation → Realization. Clear peaking path. |
| Advanced (3+ years), strength sport | **Block + DUP** or **Conjugate principles** | Higher variation tolerance, concurrent quality training. |
| Body composition focus | **Block + DUP Hybrid** | Hypertrophy-dominant blocks with reduced volume during deficit phases. |
| Event deadline (Murph, race, competition) | **Block with defined peak** | Work backward from event date. Taper in final 1-2 weeks. |

### Model Definitions

**Linear Progression (LP):**
- Volume decreases and intensity increases week-to-week and phase-to-phase.
- Phase 1: High volume / moderate intensity (3-4×10-12 @ 65-75%)
- Phase 2: Moderate volume / higher intensity (3-5×4-6 @ 80-85%)
- Phase 3: Low volume / peak intensity (3-5×1-3 @ 90%+)
- Best for: Beginners who can add weight session-to-session.

**Block + DUP Hybrid (default):**
- Macro structure uses blocks (3-4 week mesocycles with a clear emphasis).
- Within each block, daily sessions vary in rep scheme and intensity.
- Example week in a strength block: Mon = heavy (4×4 @ 85%), Wed = moderate (3×8 @ 72%), Fri = power (5×3 @ 75% with speed).
- Best for: Most intermediate athletes. Provides sufficient variation and manages fatigue well.

**Block Periodization:**
- Accumulation (3-4 weeks): High volume, moderate intensity. Build work capacity.
- Transmutation (2-3 weeks): Moderate volume, higher intensity. Convert fitness to specific strength.
- Realization (1-2 weeks): Low volume, peak intensity. Express fitness.
- Best for: Sport-specific peaking, athletes with a defined competition date.

---

## 3. Plan Architecture

### Duration Defaults

| Profile | Default Duration | Phases |
|---|---|---|
| Beginner | 10 weeks | 2 phases (5+5, including deloads) |
| Intermediate, general | 12 weeks | 3 phases (4+4+4) |
| Intermediate+, sport-specific | 12-16 weeks | 3-4 phases |
| Event-driven (known deadline) | Calculate backward from event | Variable, always ends with peak/taper |

### Phase Structure

- Standard mesocycle: **3-4 weeks of progressive work + 1 deload week** (the "3:1" or "4:1" pattern).
- Every plan with 4+ weeks must include at least one deload week.
- Phase transitions should not jump average intensity by more than 5-10% of 1RM.

### Accessory Periodization Across Phases

Tier 2-3 (accessory/isolation) work should evolve with the training phase:

| Phase | Accessory Approach |
|---|---|
| Accumulation | Higher isolation volume, more exercise variety, address weak points and imbalances |
| Transmutation | Reduce isolation volume, keep only accessories that directly support main lifts |
| Realization / Peak | Minimal accessories — just enough for joint health, blood flow, and maintenance |
| Deload | Light accessory work only, focus on mobility and movement quality |

### Deload Protocol

| Experience | Frequency | Method |
|---|---|---|
| Beginner (< 1 year) | Every 5-6 weeks | Reduce volume 40-50%, maintain frequency, moderate intensity (60-70%) |
| Intermediate (1-3 years) | Every 4th week (3:1) | Reduce volume 40-50%, maintain frequency, moderate intensity (60-70%) |
| Advanced (3+ years) | Every 3-4 weeks | Reduce volume 40-50% OR reduce intensity to 50-60% |
| During caloric deficit | Every 3-4 weeks regardless | Recovery is impaired; err on the side of more rest |

### Progressive Overload Strategy

**Default mechanism: Double Progression**
1. Work within a prescribed rep range (e.g., 3×8-12).
2. When the athlete can complete all sets at the top of the range, increase weight by 2.5-5% and drop back to the bottom of the range.
3. This is self-regulating and works across all experience levels.

**Fallback strategies (when load/rep progression stalls):**
- Add sets (2→3→4 sets over weeks)
- Increase density (shorter rest periods)
- Increase exercise complexity (goblet squat → front squat → back squat)
- Increase frequency (add a session for the lagging muscle group)

**Hard limit:** Total weekly training volume (sets × reps × load) must not increase by more than 10% per week.

---

## 4. Exercise Selection Rules

### Movement Pattern Coverage

Every training week must include at least one exercise from each primary pattern:

| Pattern | Examples |
|---|---|
| Horizontal Push | Bench press, push-up, dumbbell floor press |
| Vertical Push | Overhead press, pike push-up, landmine press |
| Horizontal Pull | Barbell row, cable row, dumbbell row |
| Vertical Pull | Pull-up, lat pulldown, chin-up |
| Squat (bilateral) | Back squat, front squat, goblet squat, leg press |
| Hinge | Deadlift, RDL, kettlebell swing, hip thrust |
| Lunge / Single-leg | Walking lunge, Bulgarian split squat, step-up |
| Carry | Farmer's walk, suitcase carry, overhead carry |
| Rotation / Anti-rotation | Pallof press, cable woodchop, dead bug |

**Balance rules:**
- Push and pull volume should be 1:1 or slightly pull-dominant (1.2:1).
- Squat and hinge volume should be roughly equal.
- At least one unilateral lower-body movement per week.
- Carries and rotation can be lower volume (1-3 sets) but should not be omitted.

### Movement Progression Gates

Athletes must demonstrate competency at simpler variations before being programmed on complex ones. The AI should never skip levels.

| Movement | Prerequisite | Full Version |
|---|---|---|
| Barbell Back Squat | Bodyweight squat with full depth, goblet squat with load | Barbell back squat |
| Barbell Deadlift | Hip hinge pattern (KB deadlift, DB RDL) | Conventional/sumo deadlift |
| Overhead Press | DB shoulder press with full ROM | Barbell overhead press |
| Power Clean | KB swing, DB hang clean, front squat competency | Barbell power clean |
| Snatch | Overhead squat, muscle snatch, hang power snatch | Full snatch |
| Pistol Squat | Single-leg squat to box, Bulgarian split squat | Full pistol |
| Muscle-up | Strict pull-up (5+ reps), strict dip (5+ reps) | Bar/ring muscle-up |
| Handstand Push-up | Pike push-up, wall walk, wall-supported HSPU | Freestanding HSPU |

**For beginners:** Default to the prerequisite movements for the first 4-8 weeks regardless. Only advance when the athlete reports consistent form at prescribed loads.

**Form regression trigger:** If an athlete reports "couldn't maintain form" or "felt something off" during a movement, consider regressing to a simpler variation — don't just push forward at the same level.

### Exercise Tier System

**Tier 1 — Primary Compounds** (multi-joint, highest loading potential)
- Backbone of every session. 1-2 per session, always performed first.
- Examples: Back squat, deadlift, bench press, overhead press, barbell row, pull-up.

**Tier 2 — Secondary Compounds** (multi-joint, moderate load)
- Variations and accessories. 1-3 per session after Tier 1.
- Examples: Incline DB press, RDL, front squat, lunges, dumbbell row.

**Tier 3 — Isolation** (single-joint)
- Target specific muscles, address weak points. 1-3 per session as finishing work.
- More for hypertrophy goals, fewer/none for pure strength or conditioning.
- Examples: Curls, tricep extensions, lateral raises, leg curls, calf raises.

### Session Structure (Exercise Order)

1. **Dynamic warm-up** (5-7 min) — limitation-aware, session-specific (see Section 8)
2. **Power / Olympic lifts** (if programmed) — most neurally demanding, always first
3. **Tier 1 compounds** — 3-5 sets
4. **Tier 2 compounds** — 3-4 sets
5. **Tier 3 isolation / accessories** — 2-3 sets
6. **Conditioning** (if programmed) — after strength, not before
7. **Cool-down** (5 min) — easy movement + static stretching

### Equipment-Based Substitution

When the athlete's equipment is limited, substitute by matching the movement pattern first, then the target muscles.

**Home gym (dumbbells + pull-up bar + bands):**
- Barbell squat → Goblet squat, Bulgarian split squat
- Bench press → DB floor press, push-up variations
- Deadlift → DB RDL, single-leg RDL
- Barbell row → Single-arm DB row, band rows

**Bodyweight only:**
- Use leverage progressions (incline push-up → push-up → archer push-up)
- When 3×15+ reps with good form, advance to the next variation
- Pulling is hardest to program — prioritize pull-up bar access or inverted rows

**CrossFit box:**
- Full barbell access + rigs + conditioning equipment
- Session structure: Strength (15-20 min compound work) → MetCon (8-20 min) → optional accessory/skill

### Volume Landmarks (Sets Per Muscle Group Per Week)

| Landmark | Sets/Week | Purpose |
|---|---|---|
| Maintenance (MV) | 4-8 | Preserve existing muscle during deloads or cuts |
| Minimum Effective (MEV) | 8-12 | Minimum for measurable growth |
| Maximum Adaptive (MAV) | 12-20 | Optimal range for most people |
| Maximum Recoverable (MRV) | 20-25+ | Upper ceiling before recovery breaks down |

**Programming rule:** Start each mesocycle at MEV. Add 1-2 sets per muscle group per week, progressing toward MAV. Deload back to MV.

### Muscle-Group-Specific Volume Ranges

Not all muscle groups respond to the same volume. Use these as guidelines:

| Muscle Group | MEV (sets/wk) | MAV (sets/wk) | MRV (sets/wk) |
|---|---|---|---|
| Quads | 8 | 12-18 | 20+ |
| Hamstrings | 6 | 10-16 | 20 |
| Glutes | 4 | 8-12 | 16 |
| Chest | 8 | 12-20 | 22 |
| Back (lats + upper) | 8 | 14-22 | 25 |
| Shoulders (side/rear) | 8 | 16-22 | 26 |
| Biceps | 6 | 10-14 | 20 |
| Triceps | 6 | 8-12 | 18 |
| Abs | 0* | 8-16 | 20 |
| Calves | 6 | 8-16 | 20 |

*Abs receive indirect stimulus from compounds; direct work is optional for strength-focused trainees but recommended for hypertrophy.

### Volume by Experience Level

| Experience | Sets/Muscle/Week | Max Hard Sets/Muscle/Session |
|---|---|---|
| Beginner | 8-12 | 6-8 |
| Intermediate | 12-18 | 8-10 |
| Advanced | 16-22 | 10-12 |
| Maintenance (any) | 6-8 | 4-6 |

### Training Frequency and Splits

| Days/Week | Recommended Split |
|---|---|
| 2 | Full body ×2 |
| 3 | Full body ×3 |
| 4 | Upper/Lower ×2 |
| 5 | Upper/Lower/Push/Pull/Legs or U/L + Full Body |
| 6 | Push/Pull/Legs ×2 |

**Each muscle group should be trained 2-3×/week.** This is superior to 1×/week when volume is equated.

**Split progression:** As athletes advance through a plan, the split can evolve. A beginner starting on full body 3×/week may transition to upper/lower 4×/week in phase 2 if frequency increases.

### Unilateral Balance

- If an athlete reports one side being noticeably weaker, **always start sets with the weaker side** and match volume (the strong side does not do extra reps).
- Use unilateral movements diagnostically: if single-leg squat performance is dramatically asymmetric, prioritize unilateral lower-body work until the gap closes.
- At minimum, include 1-2 unilateral movements per session to prevent imbalances from developing.

### Rest Periods

| Goal | Rest Between Sets |
|---|---|
| Maximal Strength (1-5 reps) | 3-5 min |
| Hypertrophy, Compounds (6-12 reps) | 2-3 min |
| Hypertrophy, Isolation (10-20 reps) | 60-120 sec |
| Muscular Endurance (15+ reps) | 30-60 sec |
| Conditioning / Circuits | Work:rest ratios (1:1 or 2:1) |

---

## 5. Tempo Prescriptions

Tempo controls time under tension and is one of the most effective tools for driving adaptation without adding load.

### Notation

Forge uses the standard 4-digit tempo notation: **E-P1-C-P2**
- **E** = Eccentric (lowering) duration in seconds
- **P1** = Pause at the bottom/stretch position
- **C** = Concentric (lifting) duration in seconds (X = explosive)
- **P2** = Pause at the top/lockout

Example: `3-1-1-0` = 3 second lowering, 1 second pause at bottom, 1 second lift, no pause at top.

### When to Prescribe Tempo

| Context | Recommended Tempo | Why |
|---|---|---|
| Beginners (all movements) | 3-1-1-0 | Forces control, builds body awareness, reduces injury risk |
| Hypertrophy phases | 2-1-1-0 or 3-0-1-0 | Increases time under tension for muscle growth |
| Strength/power phases | 2-0-X-0 | Controlled eccentric, explosive concentric for max force production |
| Injury/limitation work | 3-2-2-0 | Slow tempo reduces load requirement while maintaining stimulus |
| Deload sessions | 2-0-1-0 | Standard tempo, lower load — focus on movement quality |
| Bodyweight progressions | 3-1-2-0 | Slower tempos make bodyweight work harder without adding load |

### Rules

- **Always prescribe tempo for beginners.** This is non-negotiable for the first 4-8 weeks.
- Tempo is optional for advanced athletes performing strength/power work — they self-regulate.
- When an athlete is struggling with a weight, **slowing the tempo** is preferable to reducing load (preserves the stimulus while building control).
- Include tempo in the `prescription` field: e.g., "3×8 @ RPE 7, tempo 3-1-1-0"

---

## 6. Conditioning & Energy System Development

Conditioning is not an afterthought — it's a programmable element with its own progression and periodization.

### Energy System Framework

| System | Work Duration | Work:Rest | Examples | When to Program |
|---|---|---|---|---|
| Phosphagen (ATP-CP) | 0-10 sec | 1:12-20 | Heavy singles, short sprints, box jumps | Strength/power phases, sport-specific |
| Glycolytic | 30 sec - 2 min | 1:3-5 | Intervals, WODs, hill sprints | Transmutation phases, general fitness |
| Aerobic (Zone 2) | 20-60+ min | Continuous | Easy run/bike/row, incline walk | Year-round base, accumulation phases |

### Conditioning by Goal

| Goal | Conditioning Approach |
|---|---|
| Strength-focused | Minimal — 1-2× /week low-interference (sled push, incline walk, bike). Preserve recovery for lifting. |
| Hypertrophy | Light-moderate — 2× /week zone 2 cardio. Avoid high-volume HIIT that competes for recovery. |
| General fitness | Mixed — 2-3× /week combining zone 2 base + 1-2 interval sessions |
| Body composition / fat loss | Higher — 3-4× /week. Mix zone 2 + intervals. Don't sacrifice lifting volume for cardio. |
| Endurance event (5K, marathon, Murph) | Sport-specific — running/rowing/mixed modal is primary. Strength becomes supplemental (2×/week). |
| CrossFit-style | Integrated — MetCon follows strength in most sessions. Vary modalities (AMRAP, EMOM, For Time, intervals). |

### MetCon Structure Types

For CrossFit-style or general conditioning work:

| Format | Structure | Best For |
|---|---|---|
| AMRAP | As Many Rounds As Possible in X minutes | Pacing, work capacity, mixed modal fitness |
| EMOM | Every Minute On the Minute for X minutes | Skill practice, consistent pacing, moderate intensity |
| For Time | Complete prescribed work ASAP | Max effort output, competition simulation |
| Intervals | X rounds of work:rest | Targeted energy system development |
| Chipper | Long list of movements, work through once | Endurance, mental toughness, accumulation phase |

### Conditioning Periodization

| Phase | Conditioning Emphasis |
|---|---|
| Accumulation | Aerobic base building. Zone 2 dominates. Build volume tolerance. |
| Transmutation | Shift toward higher intensity. More intervals, sport-specific conditioning. |
| Realization / Peak | Reduce conditioning volume. Maintain intensity. Taper. |
| Deload | Light movement only. Easy walks, yoga, swimming. Active recovery. |

### Rules

- **Conditioning comes after strength work, never before.** Exception: a light 5-min cardio warm-up.
- HIIT: 2×/week max for athletes primarily focused on strength or hypertrophy.
- Cycling and rowing cause less interference with strength gains than running.
- **Heart-rate zones may not be accurate for all users.** Forge defaults to RPE as the primary intensity measure for conditioning. Zone 2 = "conversational pace" (RPE 4-5). Threshold = "can speak in short phrases" (RPE 7-8).
- When programming running: always include form cues (midfoot strike, slight forward lean, relaxed shoulders, arm drive).

---

## 7. Concurrent Goal Programming

### Strength + Endurance

- The interference effect is less severe than historically feared — mainly affects power, not maximal strength or hypertrophy.
- Separate sessions by 6+ hours when possible (strength AM, cardio PM).
- Prioritize the primary goal first in training order.
- Cycling causes less interference than running.
- HIIT: 2×/week max. Prefer low-intensity steady-state for minimal interference.

### Strength + Weight Loss (Caloric Deficit)

- Maintain training intensity but reduce volume by ~33%.
- Keep protein high (1.6-2.2 g/kg bodyweight).
- Deload more frequently (every 3-4 weeks).
- Do not add aggressive volume during a deficit.
- Prioritize compound movements for caloric expenditure.

### Nutrition Context (High-Level Only)

Forge does not track nutrition, but the athlete's nutrition context affects programming decisions:

| Context | Programming Adjustment |
|---|---|
| Caloric surplus (gaining) | Full volume, can push toward MAV. Recovery is supported. |
| Caloric deficit (cutting) | Reduce volume by ~33%, deload more frequently, prioritize intensity over volume |
| Maintenance | Standard programming applies |
| Unknown / not stated | Program at standard levels, include guidance that recovery depends on nutrition |

This should be asked during onboarding: "Are you currently trying to lose weight, gain weight, or maintain?"

### General Rule

**Ask: "What is your primary goal?"** Structure the dominant training stimulus around that answer. Include maintenance-level work for the secondary goal. Never pretend both can be maximized simultaneously.

---

## 8. Auto-Regulation & Feedback Loops

A plan is a starting point — a great coach adjusts based on how the athlete responds. Forge monitors logged data and adapts.

### Reactive Adjustment Triggers

| Signal | Detection | AI Response |
|---|---|---|
| **RPE drift up** | Athlete logs RPE 9+ on work prescribed at RPE 7-8 for 2+ consecutive sessions | Suggest load reduction (drop 5-10%) or trigger early deload |
| **Performance decline** | Estimated 1RM or logged weights trending down over 2+ weeks | Flag to athlete: "Your numbers are trending down. Let's pull back this week." Suggest deload or volume reduction. |
| **Incomplete sessions** | Athlete consistently not finishing prescribed work for 2+ weeks | Plan is too dense. Auto-suggest trimming 1-2 exercises per session or reducing set count. |
| **Session RPE consistently high** | Athlete rates overall session difficulty 8+ when plan targets moderate sessions | Reduce overall session density. Drop a Tier 3 movement or add rest time. |
| **Missed sessions** | Athlete misses 2+ sessions in a week | See missed session policy below. |
| **Motivation decline** | Athlete reports sessions feel stale or motivation is dropping | Suggest exercise variation swap (keep movement pattern, change the specific exercise). |

### Missed Session Policy

Life happens. When an athlete misses a session:

| Scenario | Rule |
|---|---|
| Missed 1 session in a week | Skip it and move on. Do NOT try to cram it into remaining days. |
| Missed 2+ sessions in a week | Repeat the week if it was a key progression week. Otherwise, move on. |
| Missed an entire week | Resume where you left off, but reduce loads by 10% for the first session back. |
| Chronic missed sessions (3+ weeks of incomplete adherence) | The schedule doesn't fit the athlete's life. Suggest reducing training days/week. |

**The golden rule: never double up sessions to "catch up."** This spikes fatigue, increases injury risk, and creates a negative association with training.

### Session Load Management

Individual set RPE tracks exercise difficulty. **Session RPE** tracks overall session stress:

| Session Type | Target Session RPE | Purpose |
|---|---|---|
| Recovery / Deload | 4-5 | Active recovery, maintain movement patterns |
| Light | 5-6 | Technique work, low stress, higher frequency training |
| Moderate | 6-7 | Bread and butter. Most training sessions live here. |
| Hard | 7-8 | Key progression sessions, heavy compound days |
| Peak / Test | 9 | PR attempts, competition simulation. Rare. |

**A well-programmed week is NOT all hard sessions.** Typical distribution for a 4-day week: 1 hard, 2 moderate, 1 light. The hard session should target the athlete's primary goal.

### Overtraining Warning Signals

When 2+ of these appear concurrently, Forge should proactively suggest scaling back:

1. Performance plateau or decline lasting 2+ weeks
2. Persistent fatigue — athlete-reported energy trending down
3. Recurring minor aches in a 4-week window
4. Prolonged soreness (DOMS lasting 72+ hours regularly)
5. Incomplete sessions — consistently not finishing prescribed work
6. Motivation/mood decline — athlete reports dreading sessions

**AI response:** "I'm seeing some patterns that suggest you might be accumulating more fatigue than you're recovering from. Let's pull back this week — reduce intensity to RPE 6-7 and cut volume by 30-40%."

---

## 9. Safety Guardrails

### Hard Refusal Triggers

The AI must **refuse to generate a plan** and recommend medical clearance if the user reports:
- Chest pain, dizziness, or loss of consciousness during exercise
- Known uncontrolled cardiovascular disease, hypertension, or diabetes
- Acute injury symptoms (sharp pain, swelling, inability to bear weight, radiating numbness/tingling)
- Pregnancy with absolute obstetric contraindications

For users under 13: refuse to generate an unsupervised plan.

### Universal Prohibitions

- NEVER generate a plan with zero rest days per week.
- NEVER program more than 2 consecutive days of high-intensity (RPE 8+) training targeting overlapping muscle groups.
- NEVER program training to absolute failure on unspotted barbell movements — cap at RPE 9 (1 rep in reserve).
- NEVER program 1RM testing for users with < 1 year training experience.
- NEVER exceed 4 heavy compound lifts per session (2-3 for sessions under 60 min).

### Population-Specific Rules

**Beginners (< 1 year):**
- Full-body routines 3-4 days/week, not body-part splits.
- RPE 6-7 for the first 4 weeks. No RPE 9+ until 8 weeks of consistent training.
- Max 2 compound movements + 2-3 accessories per session.
- No Olympic lifts — use simplified power variants (DB hang clean, KB swing).
- 8-12 working sets per muscle group per week ceiling.
- Estimated 1RM from submaximal sets only (5RM or 8RM).
- **Tempo is mandatory** for all compound movements (default 3-1-1-0).

**Youth (13-17):**
- All sessions note "qualified adult supervision recommended."
- Higher rep ranges (10-15 reps), moderate loads. No sets below 6 reps.
- Never program to failure.
- Sessions limited to 45-60 min including warm-up/cool-down.
- Under 14: prioritize bodyweight, bands, light dumbbells. No barbell work above bodyweight on the bar.
- Minimum 2 rest days/week.

**Older Adults (50+):**
- Extended warm-ups (10-15 min).
- Include balance work and grip strength in every program.
- 65+: Start at 40-50% estimated capacity, prioritize supported/machine exercises.
- If osteoporosis reported as limitation: avoid loaded spinal flexion, prioritize axial loading.
- Extended rest periods (2-3 min for compounds).

**Returning After Layoff:**
- 2-4 weeks off: Resume at 70-80% of previous weights. Full ramp over 2 weeks.
- 1-3 months off: Resume at 50-60%. First 2 weeks are adaptation phase. Full ramp over 4-6 weeks.
- 3+ months off: Treat as beginner for programming purposes.
- **Critical:** Muscles re-adapt faster than tendons and connective tissue. The first 2-4 weeks back must be conservative even if the athlete "feels fine."

### Injury/Limitation Modification

The AI must classify each limitation:

| Status | Behavior |
|---|---|
| Active pain with movement | Completely avoid aggravating patterns. Substitute pain-free alternatives. Flag for professional evaluation. |
| Stiffness / restricted ROM | Program within available ROM. Add targeted mobility work. Progress gradually. |
| Past injury, fully recovered | Program normally with conservative initial loading. Include prehab. Monitor. |

**Area-specific substitution tables** (shoulder, lower back, knee, hip, wrist, neck) are maintained in the system prompt. Key principle: match the movement pattern first, then the target muscles.

### Progressive Overload Limits

- Max weekly volume increase: **10%**
- Max intensity jump between phases: **5-10% of 1RM**
- Min rest between same-muscle heavy sessions: **48 hours** (72 preferred)
- Max high-RPE (8+) sessions/week: Beginner 1-2, Intermediate 2-3, Advanced 3-4

---

## 10. Plan Validation Checks

Every generated plan must pass these checks before being presented to the user.

### Structural Checks
- [ ] Plan includes ≥ 1 rest day per 7-day block
- [ ] Deload weeks present if plan > 4 weeks
- [ ] Training days/week matches user's stated availability
- [ ] Estimated session duration ≤ user's stated session length + 10 min buffer
- [ ] Every training day has at least one session with at least one task

### Volume & Intensity Checks
- [ ] Weekly sets per muscle group falls within range for user's experience level
- [ ] No two consecutive days program heavy compounds (RPE 8+) for the same muscle group
- [ ] Working percentages match declared phase goal
- [ ] Prescribed loads/volume increase across weeks within a phase
- [ ] Muscle-group-specific volume is within MEV-MRV range (Section 4)

### Goal Alignment Checks
- [ ] Every user goal maps to at least one session type, exercise, or training block
- [ ] Event deadlines have a taper/peak built into the timeline
- [ ] Plan relationship (standalone/supplemental/modification) respected — total load doesn't exceed reasonable limits
- [ ] Conditioning is included appropriate to the athlete's goals (Section 6)

### Safety Checks
- [ ] Every session begins with a warm-up (category: warmup)
- [ ] Every session ends with a cool-down (category: cooldown)
- [ ] No exercise appears on the "avoid" list for user's movement limitations
- [ ] All population-specific rules satisfied
- [ ] Equipment-appropriate exercises only
- [ ] Movement progression gates respected — no advanced movements for beginners
- [ ] Tempo prescribed for all beginner compound movements

### Coaching Quality Checks
- [ ] Every exercise has coaching cues (from curated library or AI-generated)
- [ ] Breathing cues included for all heavy compound lifts
- [ ] Warm-up is specific to the session's primary movements AND the athlete's limitations

---

## 11. Warm-Up & Cool-Down Standards

### Warm-Up (Every Session, Non-Negotiable)

**Phase 1 — General (3-5 min):** Light cardio to raise body temperature. Easy jog, row, bike, or jumping jacks.

**Phase 2 — Dynamic Mobility (3-5 min):** Must be specific to BOTH the session's primary movements AND the athlete's limitations.

Examples of limitation-aware warm-ups:
- **Shoulder stiffness + bench press day:** Band pull-aparts, shoulder CARs, thoracic extension on foam roller, light DB external rotations
- **Hip tightness + squat day:** 90/90 hip switches, goblet squat holds, banded hip distractions, hip circles, pigeon stretch (dynamic)
- **Lower back stiffness + deadlift day:** Cat-cow, dead bugs, bird dogs, light hip hinges, glute bridges

General warm-up if no specific limitations:
- Upper day: arm circles, band pull-aparts, shoulder dislocates, thoracic rotations
- Lower day: leg swings, walking lunges, hip circles, inchworms, bodyweight squats
- **No static stretching before lifting** (reduces force production 5-10%)

**Phase 3 — Specific Warm-Up Sets (2-4 sets per primary lift):** Progressive loading. Example for 225 lb squat: bar×8, 135×5, 185×3, 205×2, then working sets. The heavier the working sets, the more warm-up sets needed.

### Cool-Down (Every Session, Recommended)

1. Active cool-down (2-3 min): easy walk, light cycling
2. Optional foam rolling (2-3 min): 30-60 sec per trained muscle group
3. Static stretching (3-5 min): 20-30 sec holds on trained muscles

---

## 12. Coaching Cue Philosophy

Forge provides coaching cues for every movement in a plan. This is a core differentiator.

### Approach

**Curated library for common movements:** 44+ movements with hand-written cues maintained in `src/services/coachingCueLibrary.ts`. These cues are reviewed for accuracy and use concise, coach-voice language.

**AI-generated for uncommon movements:** When the plan includes a movement not in the curated library, the AI generates cues following the same format. The AI is instructed to:
- Use 2-4 concise, actionable cues
- Include 1-3 common faults
- Provide easier and harder scaling options
- Use coach-voice language ("Drive through your heels" not "You should push through your heels")

### Cue Format

Every programmed exercise includes:
- **movement**: Exercise name
- **prescription**: Sets, reps, load, tempo, rest
- **why** (optional): Why this exercise is in the plan — connects to the athlete's goals
- **coachingCues**: 2-4 concise cues
- **commonFaults**: 1-3 common mistakes
- **scaling**: Easier and harder alternatives

### Breathing Cues

Every heavy compound lift must include breathing guidance. This is one of the most universal and impactful coaching cues:

| Movement Type | Breathing Pattern |
|---|---|
| Heavy compounds (squat, deadlift, press) | "Big breath in, brace your core before the rep. Exhale through the sticking point or at lockout." |
| Isolation / lighter work | "Exhale on the effort (concentric), inhale on the return (eccentric)." |
| Planks / isometric holds | "Breathe steadily — don't hold your breath. Short, controlled breaths." |
| Conditioning / MetCons | "Find a breathing rhythm that matches your pace. Don't let breathing become erratic." |

**Never prescribe holding breath without a brace cue.** Valsalva without bracing is dangerous. Valsalva WITH proper bracing is a legitimate technique for advanced heavy lifts — but always include the context.

### When to Include "Why"

Include the `why` field when:
- The exercise is non-obvious for the goal (e.g., "Running drills in a strength plan")
- It's a Murph/event-specific drill
- It addresses a specific limitation the athlete reported
- It's a recovery/deload session element

Skip `why` for obvious choices (squats in a strength plan, bench press on chest day).

---

## 13. Event Taper & Peak Protocol

When the athlete has a specific event date (competition, race, Murph, etc.), the plan must include a proper taper.

### Taper Structure

| Timeframe | Volume | Intensity | Frequency | Focus |
|---|---|---|---|---|
| 3 weeks out | Reduce 20-30% | Maintain 85-90% | Maintain | Start pulling back volume, keep sharpness |
| 2 weeks out | Reduce 40-50% | Maintain 85-90% | Reduce by 1 day | Prioritize event-specific movements only |
| 1 week out | Reduce 60-70% | Light-moderate (70-75%) | Reduce to 2-3 sessions | Movement quality, activation, confidence |
| 2-3 days out | Very light or rest | RPE 4-5 if anything | 0-1 session | Light mobility, activation drills, mental prep |
| Day before | Rest or 20 min light movement | Minimal | Optional | Trust the training |

### Rules
- Never introduce new exercises during a taper — only use movements the athlete has practiced.
- Reduce volume first, intensity last. Maintaining intensity preserves neural readiness.
- The taper should feel "too easy" — that's the point. The athlete is storing energy, not building fitness.

---

## 14. RPE (Rate of Perceived Exertion) Scale

Forge uses RPE to communicate intensity when percentage-based loading isn't practical.

| RPE | Description | Reps in Reserve |
|---|---|---|
| 5-6 | Light-moderate. Warm-up quality. | 5+ RIR |
| 7 | Moderate. Could do 3 more reps. | 3 RIR |
| 8 | Hard. Could do 2 more reps. | 2 RIR |
| 9 | Very hard. Could do 1 more rep. | 1 RIR |
| 10 | Maximum effort. Could not do another rep. | 0 RIR |

**Why RPE over heart rate:** Heart-rate zones are unreliable for many users (varying fitness levels, individual physiology, external factors). RPE is universally applicable, requires no equipment, and correlates well with actual training intensity when athletes are educated on the scale.

**Programming rules:**
- Beginners: RPE 6-7 for first 4 weeks
- Most working sets: RPE 7-8
- Peak/test sessions: RPE 9-10 (advanced athletes only)
- Deload: RPE 5-6
- Never prescribe RPE 10 on unspotted barbell lifts

---

## 15. Superset & Time-Saving Rules

When session time is limited, use supersets to increase density:

- **Agonist/antagonist pairs** (bench + row, curl + tricep extension) — safe, minimal performance loss
- **Upper/lower pairs** (press + lunge) — good for time-limited full-body sessions
- **NEVER superset two heavy compounds with high spinal loading** (heavy squat + heavy deadlift)
- Rest 30-60 sec between exercises within a superset, 2-3 min between rounds for strength

---

## 16. Medical Disclaimer

Every generated plan must include:

> This training plan is generated by AI based on the information you provided. It is not medical advice. Consult a physician before beginning any exercise program, especially if you have pre-existing health conditions. If you experience chest pain, dizziness, or unusual symptoms during exercise, stop immediately and seek medical attention.
