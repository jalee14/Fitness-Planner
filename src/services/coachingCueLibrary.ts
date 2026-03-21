/**
 * Forge — Coaching Cue Library
 *
 * Curated reference of coaching cues, common faults, and scaling options
 * for 180 movements across 16 categories (plus mobility, prehab, and yoga/recovery). Every entry includes setup instructions,
 * breathing cues, structured faults (what/why/fix), and contextual scaling.
 *
 * This library is the quality floor for exercise coaching in Forge.
 * AI-generated cues are only used for movements NOT in this library.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CommonFault {
  fault: string;
  consequence: string;
  fix: string;
}

export interface ScalingOption {
  movement: string;
  when: string;
}

export interface MovementCueData {
  /** Display name of the movement */
  name: string;
  /** Category grouping */
  category:
    | "barbell_compound"
    | "bodyweight"
    | "dumbbell"
    | "conditioning"
    | "core"
    | "olympic_lift"
    | "machine_cable"
    | "carry"
    | "kettlebell"
    | "mobility"
    | "gymnastics"
    | "prehab"
    | "yoga_recovery"
    | "running_drill"
    | "plyometric"
    | "sport_functional";
  /** Primary muscles worked */
  primaryMuscles: string[];
  /** Starting position description */
  setup: string;
  /** Breathing pattern for this movement */
  breathingCue: string;
  /** 2-4 concise, actionable coaching cues */
  cues: string[];
  /** Common faults / mistakes — structured format */
  commonFaults: CommonFault[];
  /** Scaling options – easier and/or harder variations */
  scaling: {
    easier: ScalingOption[];
    harder: ScalingOption[];
  };
}

// ---------------------------------------------------------------------------
// BARBELL COMPOUNDS (13 entries)
// ---------------------------------------------------------------------------

const barbellCompounds: MovementCueData[] = [
  // ---- Back Squat ----
  {
    name: "Back Squat",
    category: "barbell_compound",
    primaryMuscles: ["quads", "glutes", "spinal erectors"],
    setup:
      "Set the bar in the rack at mid-chest height. Step under and position the bar across your upper traps (high bar). Grip the bar just outside your shoulders, pull your elbows down to lock it in. Feet shoulder-width apart, toes turned out 15-30 degrees. Unrack by standing tall, then take two small steps back.",
    breathingCue:
      "Take a big breath at the top and brace your core hard — like you are about to get punched in the stomach. Hold that brace the entire way down and up. Exhale only once you reach full lockout at the top.",
    cues: [
      "Screw your feet into the floor like you are spreading it apart — this keeps your knees tracking over your toes",
      "Break at the hips and knees at the same time, sitting down between your hips",
      "Drive your back into the bar on the way up — do not let your chest drop",
      "Stand all the way up and squeeze your glutes at the top before the next rep",
    ],
    commonFaults: [
      {
        fault: "Knees caving inward at the bottom of the squat",
        consequence:
          "Puts shearing force on the knee ligaments and leaks power out of the lift",
        fix: "Cue 'spread the floor apart with your feet' and push your knees out over your pinky toes on the way up",
      },
      {
        fault: "Chest drops forward and the squat turns into a good morning",
        consequence:
          "Shifts load onto the lower back instead of the legs and increases spinal injury risk",
        fix: "Keep your elbows pulled down and think 'chest up, back into the bar' — if it keeps happening, reduce the weight and build upper back strength",
      },
      {
        fault: "Rising onto the toes or heels lifting off the ground",
        consequence:
          "Unstable base means less force production and a higher chance of losing the bar forward",
        fix: "Keep your weight balanced over mid-foot. If ankle mobility is the issue, elevate your heels on small plates or use squat shoes",
      },
    ],
    scaling: {
      easier: [
        { movement: "Goblet Squat", when: "Building the squat pattern with a lighter load and a natural counterbalance" },
        { movement: "Box Squat", when: "Learning depth control or rebuilding confidence after a layoff — the box gives a consistent target" },
        { movement: "Bodyweight Air Squat", when: "Complete beginner who needs to own the movement pattern before adding any load" },
      ],
      harder: [
        { movement: "Pause Squat (3-sec hold at the bottom)", when: "Building strength out of the hole and eliminating the bounce at the bottom" },
        { movement: "Tempo Squat (3 seconds down, 1 second pause, 3 seconds up)", when: "Forcing positional control under fatigue and increasing time under tension" },
        { movement: "Pin Squat from dead stop in the rack", when: "Training concentric-only strength and eliminating the stretch reflex" },
      ],
    },
  },

  // ---- Front Squat ----
  {
    name: "Front Squat",
    category: "barbell_compound",
    primaryMuscles: ["quads", "upper back", "core"],
    setup:
      "Set the bar in the rack at collarbone height. For clean grip: step in, bring your elbows high until your upper arms are parallel to the floor, and let the bar rest on the front of your shoulders with fingertips under the bar. For cross-arm grip: cross your arms and place your hands on top of the bar at opposite shoulders, elbows up. Feet shoulder-width apart, toes out 15-30 degrees. Unrack by standing tall and take two short steps back.",
    breathingCue:
      "Take a big breath at the top and brace hard before you descend. Keep the air locked in throughout the rep. Exhale at lockout. Re-brace between every rep — the front rack punishes loose bracing.",
    cues: [
      "Elbows high the entire time — if your elbows drop, the bar rolls forward and you lose the lift",
      "Sit straight down between your hips, keeping your torso as vertical as possible",
      "Lead with the elbows out of the bottom — think 'elbows to the ceiling' as you stand up",
      "Drive through your whole foot and stand tall at the top",
    ],
    commonFaults: [
      {
        fault: "Elbows drop during the squat, causing the bar to roll forward",
        consequence:
          "You lose the bar forward or have to dump it, and the load shifts dangerously onto your wrists and lower back",
        fix: "Practice the rack position with an empty bar — focus on keeping upper arms parallel to the floor. If wrist mobility is the issue, use the cross-arm grip or work on wrist and lat stretches",
      },
      {
        fault: "Torso collapses forward out of the bottom",
        consequence:
          "Turns the lift into a spine-loaded good morning and you will likely miss the rep",
        fix: "Strengthen your upper back with rows and front rack holds. Also cue 'big chest' and reduce the weight until you can maintain posture",
      },
      {
        fault: "Cutting depth short — not reaching parallel",
        consequence:
          "Reduces quad stimulus and limits carryover to athletic movements and Olympic lifts",
        fix: "Use a pause at the bottom with lighter weight to build comfort in the deep position. Front squat to a box can also teach depth",
      },
    ],
    scaling: {
      easier: [
        { movement: "Goblet Squat", when: "Learning the upright squat pattern without the front rack position demands" },
        { movement: "Front Squat with cross-arm grip", when: "Wrist or shoulder mobility limits the clean grip — the cross-arm grip still trains the same squat pattern" },
        { movement: "Front Squat to a box", when: "Building confidence with depth and learning to stay upright at the bottom" },
      ],
      harder: [
        { movement: "Pause Front Squat (3-sec hold at the bottom)", when: "Building positional strength and eliminating the bounce" },
        { movement: "1-and-a-quarter Front Squat", when: "Increasing time under tension in the weakest part of the lift — go to the bottom, come up a quarter, go back down, then stand" },
        { movement: "Zombie Front Squat (arms straight out, no hands on the bar)", when: "Forcing an absolutely vertical torso — if you lean forward, the bar falls" },
      ],
    },
  },

  // ---- Deadlift ----
  {
    name: "Deadlift",
    category: "barbell_compound",
    primaryMuscles: ["glutes", "hamstrings", "spinal erectors", "traps"],
    setup:
      "Walk up to the bar and position your feet hip-width apart with the bar over your mid-foot (about 1 inch from your shins). Hinge at the hips and grip the bar just outside your knees — double overhand or mixed grip. Bend your knees until your shins touch the bar. Flatten your back, pull your chest up, and pull the slack out of the bar by engaging your lats (you should hear the bar click against the plates before it leaves the ground).",
    breathingCue:
      "Take a big breath and brace your core hard at the top of the setup, before the bar leaves the floor. Hold that brace the entire pull. Exhale only at lockout when you are standing tall. Reset your breath at the top before each rep.",
    cues: [
      "Push the floor away with your legs — do not think about pulling the bar up with your arms",
      "Squeeze your lats like you are tucking oranges in your armpits — this keeps the bar glued to your body",
      "Lock your hips and knees at the same time at the top — do not hyperextend your back",
      "Lower the bar by pushing your hips back first, then bend the knees once the bar passes them",
    ],
    commonFaults: [
      {
        fault: "Lower back rounds during the pull",
        consequence:
          "Puts enormous shearing force on the lumbar discs — the single most common cause of deadlift injuries",
        fix: "Flatten your back before you pull by lifting your chest and engaging your lats. If you cannot maintain a flat back, the weight is too heavy. Drop the load and rebuild",
      },
      {
        fault: "Hips shoot up first while the bar stays on the floor (stripper pull)",
        consequence:
          "Your legs straighten before the bar moves, turning it into a stiff-leg deadlift and overloading the lower back",
        fix: "Think 'push the floor away' and keep your chest rising at the same rate as your hips. Your back angle should not change until the bar passes your knees",
      },
      {
        fault: "Bar drifts away from the body during the pull",
        consequence:
          "Creates a longer lever arm that makes the weight feel heavier and puts more stress on the back",
        fix: "Engage your lats before you pull and drag the bar up your shins and thighs. Long pants or high socks can help if shin contact bothers you",
      },
    ],
    scaling: {
      easier: [
        { movement: "Trap Bar / Hex Bar Deadlift", when: "The handles keep you more upright and reduce lower back demand — great for learning the hip hinge under load" },
        { movement: "Elevated / Block Pull (bar on 2-4 inch blocks)", when: "Reducing the range of motion while still training the lockout and hip extension pattern" },
        { movement: "Kettlebell Deadlift", when: "Complete beginner who needs to learn the hinge pattern with a lighter, more manageable load" },
      ],
      harder: [
        { movement: "Deficit Deadlift (stand on a 1-2 inch plate)", when: "Building more speed off the floor and strengthening the bottom range of the pull" },
        { movement: "Pause Deadlift (2-sec pause at knee height)", when: "Building positional strength and eliminating any hitching habit" },
        { movement: "Snatch-Grip Deadlift", when: "Increasing upper back and grip demand with the wider grip — brutal for back development" },
      ],
    },
  },

  // ---- Romanian Deadlift ----
  {
    name: "Romanian Deadlift",
    category: "barbell_compound",
    primaryMuscles: ["hamstrings", "glutes", "spinal erectors"],
    setup:
      "Start from the top — unrack the bar from a rack at hip height or clean it to a standing position. Feet hip-width apart, soft bend in the knees (unlock them but do not bend them much). Grip the bar just outside your thighs with a double overhand grip. Stand tall with your shoulders back.",
    breathingCue:
      "Inhale as you hinge and lower the bar — fill your belly and brace your core against your belt. Hold the brace at the bottom. Exhale as you squeeze your glutes to stand back up.",
    cues: [
      "Push your hips straight back like you are closing a car door with your backside",
      "Drag the bar down your thighs — it should stay in contact with your legs the entire time",
      "Lower until you feel a strong stretch in your hamstrings, then squeeze your glutes to drive back up",
      "Keep a soft knee bend throughout — the knees do not move forward or straighten completely",
    ],
    commonFaults: [
      {
        fault: "Rounding the back instead of hinging at the hips",
        consequence:
          "Loads the spinal discs instead of the hamstrings — defeats the purpose and risks injury",
        fix: "Think 'proud chest' the whole time. If your back rounds before you feel a hamstring stretch, your hamstring mobility is the limiter — work on that separately and only go as low as you can with a flat back",
      },
      {
        fault: "Bending the knees too much — turning it into a conventional deadlift",
        consequence:
          "Shifts the work to the quads and takes tension off the hamstrings, which is the whole point of the RDL",
        fix: "Lock a slight bend in your knees at the start and keep them there. Think 'hips back, not down'",
      },
      {
        fault: "Bar drifts away from the body on the descent",
        consequence:
          "Creates a longer moment arm that overloads the lower back and reduces hamstring loading",
        fix: "Actively squeeze your lats and think about painting your thighs with the bar on the way down and up",
      },
    ],
    scaling: {
      easier: [
        { movement: "Dumbbell RDL", when: "Lighter load and more freedom to find a comfortable path — good for learning the hinge" },
        { movement: "Single-Leg RDL holding a rack for balance", when: "Building the pattern one leg at a time with support when balance is a limiting factor" },
        { movement: "Kettlebell RDL", when: "The compact load stays closer to the body and is easier to manage than a barbell" },
      ],
      harder: [
        { movement: "Single-Leg Barbell RDL", when: "Challenging balance, hip stability, and unilateral hamstring strength" },
        { movement: "Deficit RDL (stand on a 1-2 inch plate)", when: "Increasing range of motion and the stretch on the hamstrings at the bottom" },
        { movement: "Snatch-Grip RDL", when: "The wide grip increases upper back demand and makes lighter weight feel much heavier" },
      ],
    },
  },

  // ---- Bench Press ----
  {
    name: "Bench Press",
    category: "barbell_compound",
    primaryMuscles: ["chest", "front delts", "triceps"],
    setup:
      "Lie on the bench with your eyes directly under the bar. Plant your feet flat on the floor and drive them into the ground. Pull your shoulder blades together and down (pinch a pencil between them) — they stay pinched the entire set. Grip the bar about 1.5 times shoulder width. Create a slight natural arch in your lower back — your upper back and glutes stay on the bench. Unrack with straight arms, position the bar over your shoulders.",
    breathingCue:
      "Inhale as you lower the bar to your chest — this expands your ribcage and creates a stable platform. Press through the sticking point and exhale once the bar passes it. Re-brace at the top before the next rep.",
    cues: [
      "Lower the bar to your lower sternum — not your neck, not your belly",
      "Tuck your elbows to about 45 degrees from your body — not flared out at 90",
      "Push yourself away from the bar, not the bar away from you — drive your back into the bench",
      "Lock out over your shoulders, not over your face — the bar path is a slight diagonal",
    ],
    commonFaults: [
      {
        fault: "Elbows flare to 90 degrees from the body",
        consequence:
          "Puts the shoulder in a vulnerable position and increases risk of rotator cuff impingement",
        fix: "Tuck your elbows to about 45 degrees — think about bending the bar into a U shape with your hands. This naturally sets the right angle",
      },
      {
        fault: "Shoulder blades flatten against the bench during the press",
        consequence:
          "You lose the stable base your shoulders need — reduces power and increases shoulder strain",
        fix: "Set your shoulder blades before you unrack and keep them pinched the entire set. If they are slipping, the bar might be racked too high, forcing you to protract to reach it",
      },
      {
        fault: "Bouncing the bar off the chest",
        consequence:
          "Risks cracking a rib, masks weakness off the chest, and does not train the full range of motion",
        fix: "Touch the bar to your chest with control — a light touch, then press. Practice a 1-second pause on the chest to build the habit",
      },
    ],
    scaling: {
      easier: [
        { movement: "Dumbbell Bench Press", when: "More shoulder-friendly range of motion and easier to bail on without a spotter" },
        { movement: "Push-ups (incline if needed)", when: "No bench available or building pressing strength from scratch" },
        { movement: "Machine Chest Press", when: "Learning the pressing pattern with a fixed path that does not require stabilization" },
      ],
      harder: [
        { movement: "Paused Bench Press (2-3 sec pause on the chest)", when: "Building strength off the chest and eliminating the bounce — competition-style" },
        { movement: "Close-Grip Bench Press (hands shoulder width)", when: "Overloading the triceps and building lockout strength" },
        { movement: "Spoto Press (pause 1 inch off the chest)", when: "Building tension and control in the weakest part of the lift without the chest as a shelf" },
      ],
    },
  },

  // ---- Overhead Press ----
  {
    name: "Overhead Press",
    category: "barbell_compound",
    primaryMuscles: ["shoulders", "triceps", "upper chest", "core"],
    setup:
      "Set the bar in the rack at collarbone height. Grip the bar just outside shoulder width with your wrists stacked over your elbows. Unrack into the front rack with the bar resting on your front delts, elbows slightly in front of the bar. Feet hip-width apart, squeeze your glutes and brace your abs hard — your whole body should be rigid from the floor up.",
    breathingCue:
      "Take a big breath and brace before you press. Hold the brace as you drive the bar up. Exhale through the sticking point (roughly forehead height). Re-brace at the top or once the bar is back on your shoulders.",
    cues: [
      "Squeeze your glutes and abs — this is a full-body lift, not just a shoulder exercise",
      "Press the bar in a straight line — move your chin back to let the bar pass, then push your head through once it clears your forehead",
      "Lock out with the bar stacked directly over your spine, biceps by your ears",
      "Lower the bar with control back to your shoulders — do not just let it drop",
    ],
    commonFaults: [
      {
        fault: "Excessive lower back arch — leaning way back to press the weight",
        consequence:
          "Turns the overhead press into an incline press and puts dangerous compression on the lumbar spine",
        fix: "Squeeze your glutes and brace your abs like you are about to take a punch. If you still arch, the weight is too heavy. Drop the load",
      },
      {
        fault: "Pressing the bar forward in an arc instead of straight up",
        consequence:
          "The bar ends up in front of you at lockout, requiring your shoulders and back to work much harder to stabilize it",
        fix: "Think 'bar goes straight up, head goes back then through.' The bar path should be a straight vertical line, not a curve around your face",
      },
      {
        fault: "Using leg drive without intending to (turning it into a push press)",
        consequence:
          "Cheats the shoulders out of the work and makes it hard to track true pressing strength progress",
        fix: "Lock your knees and squeeze your quads before you press. If you catch yourself dipping, reduce the weight. A strict press should feel harder than a push press — that is the point",
      },
    ],
    scaling: {
      easier: [
        { movement: "Seated Dumbbell Press", when: "The seat provides back support and dumbbells allow a more natural pressing path" },
        { movement: "Push Press (intentionally using leg drive)", when: "You can handle more weight overhead and are building confidence in the lockout position" },
        { movement: "Landmine Press", when: "The angled bar path is easier on the shoulders and requires less overhead mobility" },
      ],
      harder: [
        { movement: "Z-Press (seated on the floor, no back support)", when: "Eliminates all leg drive and lower body compensation — pure shoulder and core strength" },
        { movement: "Strict Press with slow eccentric (3-sec lower)", when: "Building shoulder strength and control through the full range under time-based tension" },
        { movement: "Push Press for heavier loads", when: "When the goal shifts to moving maximum weight overhead and building explosive power" },
      ],
    },
  },

  // ---- Barbell Row ----
  {
    name: "Barbell Row",
    category: "barbell_compound",
    primaryMuscles: ["lats", "rhomboids", "rear delts", "biceps"],
    setup:
      "Stand with feet hip-width apart. Hinge at the hips by pushing your butt back until your torso is roughly 45 degrees to the floor (some lifters go more horizontal — find what lets you keep a flat back). Grip the bar just outside your knees with a double overhand or underhand grip. Let the bar hang at arm's length with a slight bend in your knees. Brace your core and keep your back flat.",
    breathingCue:
      "Inhale at the bottom with the bar at arm's length. Exhale as you pull the bar to your body. Breathe in again as you lower the bar with control.",
    cues: [
      "Drive your elbows past your body toward the ceiling — do not just shrug your shoulders up",
      "Pull the bar to your lower chest or upper belly, not your neck",
      "Squeeze your shoulder blades together hard at the top of each rep — hold for a beat",
      "Lower the bar with control — do not just let gravity yank it back down",
    ],
    commonFaults: [
      {
        fault: "Using too much body English — torso rises with every rep",
        consequence:
          "Turns the row into a cheat movement that uses momentum instead of back muscles, and increases lower back strain",
        fix: "Lock your torso angle and keep it there. If you cannot row the weight without your chest rising, it is too heavy. Your upper body should be a stationary table — only your arms move",
      },
      {
        fault: "Shrugging the shoulders up toward the ears instead of pulling with the lats",
        consequence:
          "The traps take over and the lats — the primary target — barely work",
        fix: "Before you row, depress your shoulders (push them away from your ears). Then pull by driving your elbows back, not up",
      },
      {
        fault: "Pulling to the wrong spot (too high toward the chin or neck)",
        consequence:
          "Changes the muscle emphasis and can strain the neck and upper traps",
        fix: "Aim for the bar to touch your lower sternum or the spot where your ribcage ends. This ensures your lats and mid-back do the work",
      },
    ],
    scaling: {
      easier: [
        { movement: "Single-Arm Dumbbell Row (bench supported)", when: "The bench supports your torso so you can focus on the pulling motion without worrying about back position" },
        { movement: "Inverted Row on a barbell in a rack", when: "Bodyweight pulling is easier to control and teaches the pulling path well" },
        { movement: "Chest-Supported Row (on an incline bench)", when: "Eliminates the lower back demand entirely — pure pulling work" },
      ],
      harder: [
        { movement: "Pendlay Row (dead stop on the floor each rep)", when: "Building explosive pulling power — each rep starts from zero momentum" },
        { movement: "Paused Barbell Row (2-sec hold at the top)", when: "Forcing the back to contract maximally without momentum and building positional endurance" },
        { movement: "Seal Row (lying face down on an elevated bench)", when: "Strict pulling with zero body English — total back isolation with no cheating possible" },
      ],
    },
  },

  // ---- Power Clean ----
  {
    name: "Power Clean",
    category: "barbell_compound",
    primaryMuscles: ["glutes", "hamstrings", "traps", "quads", "shoulders"],
    setup:
      "Feet hip-width apart (your jumping stance), bar over mid-foot. Grip the bar just outside your knees — use a hook grip if you can (thumb wraps around the bar first, then fingers wrap over the thumb — it will feel uncomfortable at first but it is the most secure grip for pulling movements). Hinge at the hips with your chest up, shoulders slightly in front of the bar, arms straight. Pull the slack out of the bar by engaging your lats.",
    breathingCue:
      "Take a big breath and brace hard before the pull begins. Hold that brace through the entire first pull, explosion, and catch. Exhale once you have the bar secured in the front rack and you are standing tall.",
    cues: [
      "First pull is slow and controlled — push the floor away, keep your chest over the bar until it passes your knees",
      "Explode your hips forward like you are jumping — this is where all the power comes from",
      "Once you have fully extended your hips, pull yourself under the bar with fast elbows — whip them around and up",
      "Catch the bar on your front shoulders with high elbows in a partial front squat, absorb the weight, then stand",
    ],
    commonFaults: [
      {
        fault: "Pulling with the arms too early — bending the elbows before the hips fully extend",
        consequence:
          "Kills power because the arms are much weaker than the hips — you end up muscling the bar up instead of using the explosive hip drive",
        fix: "Think of your arms as ropes with hooks. They stay straight and just hold on until your hips have fully popped. The arm pull happens AFTER the jump, not during it",
      },
      {
        fault: "Not finishing the hip extension — cutting the pull short",
        consequence:
          "The bar does not get high enough and you have to muscle it into the catch, usually with a crash landing",
        fix: "Fully extend — you should be on your toes at the top of the pull with your hips all the way through. Practice hang clean pulls to feel what full extension is like",
      },
      {
        fault: "Catching with low elbows and a rounded back",
        consequence:
          "The bar crashes forward, strains the wrists, and can dump out of the rack. Also teaches bad front squat habits",
        fix: "Drill fast elbows with muscle cleans and front rack holds. The cue is 'elbows up' — your upper arms should be parallel to the floor the moment you catch",
      },
    ],
    scaling: {
      easier: [
        { movement: "Hang Power Clean (start from the hip, not the floor)", when: "Simplifying by removing the first pull — focuses on the hip explosion and catch" },
        { movement: "Muscle Clean (no catch squat, just pull and rack)", when: "Learning the bar path and turnover without the speed and timing demands of a full catch" },
        { movement: "Dumbbell Hang Clean", when: "Lighter load, no hook grip needed, and the dumbbells allow more freedom of movement while learning" },
      ],
      harder: [
        { movement: "Full Squat Clean (catch in a full front squat)", when: "Moving heavier weight by receiving the bar lower — required for Olympic weightlifting" },
        { movement: "Power Clean from blocks at various heights", when: "Isolating specific positions in the pull to build strength and speed at weak points" },
        { movement: "Clean complex (clean + front squat + push jerk)", when: "Building work capacity and linking multiple high-skill movements under fatigue" },
      ],
    },
  },

  // ---- Hip Thrust ----
  {
    name: "Hip Thrust",
    category: "barbell_compound",
    primaryMuscles: ["glutes", "hamstrings"],
    setup:
      "Sit on the floor with your upper back (bottom of your shoulder blades) resting against the long side of a flat bench. Roll or position the barbell over your hips — use a thick bar pad, folded towel, or hip thrust pad so the bar does not dig into your hip bones. Plant your feet flat on the floor about hip-width apart, positioned so your shins will be vertical at the top of the movement. Grip the bar lightly with both hands to keep it from rolling.",
    breathingCue:
      "Inhale at the bottom as you prepare to drive. Brace your core and drive your hips up. Exhale hard at lockout as you squeeze your glutes at the top. Lower with control while breathing in for the next rep.",
    cues: [
      "Drive through your heels and squeeze your glutes to push the bar straight up — your hips should do all the work",
      "At the top, your body should form a straight line from your shoulders to your knees — do not hyperextend your lower back",
      "Tuck your chin slightly — look forward, not at the ceiling — this helps keep your ribs down and prevents arching",
      "Lower under control until your glutes almost touch the floor, then drive back up",
    ],
    commonFaults: [
      {
        fault: "Hyperextending the lower back at the top instead of finishing with the glutes",
        consequence:
          "The glutes stop working and the lower back takes over, which causes pain over time and robs you of the exercise's purpose",
        fix: "Think about tucking your tailbone under at the top — posterior pelvic tilt. Your ribs should stay down, not flaring up. Squeeze your glutes as hard as possible at lockout",
      },
      {
        fault: "Feet too far forward or too close to the bench",
        consequence:
          "Too far forward shifts work to the hamstrings. Too close shifts work to the quads. Neither maximizes glute activation",
        fix: "At the top of the rep, check that your shins are vertical (perpendicular to the floor). Adjust foot position until that is the case",
      },
      {
        fault: "Pushing through the toes instead of the heels",
        consequence:
          "Activates the quads instead of the glutes and can cause the feet to slip forward",
        fix: "Focus on driving through your heels. Some people find it helpful to slightly lift their toes off the ground to force heel drive",
      },
    ],
    scaling: {
      easier: [
        { movement: "Glute Bridge (back on the floor, bodyweight)", when: "Learning the hip extension pattern without the bench setup or barbell loading" },
        { movement: "Single-Leg Glute Bridge", when: "Building unilateral glute strength with just bodyweight before adding the barbell and bench" },
        { movement: "Dumbbell Hip Thrust", when: "The bench setup is available but a barbell is too heavy or awkward to position — a dumbbell on the hips is easier to manage" },
      ],
      harder: [
        { movement: "Paused Hip Thrust (3-sec hold at the top)", when: "Building peak contraction strength and teaching full glute activation at lockout" },
        { movement: "Single-Leg Barbell Hip Thrust", when: "Addressing side-to-side imbalances and dramatically increasing the demand on each glute" },
        { movement: "Banded Barbell Hip Thrust (band around knees)", when: "Forcing the glutes to work harder by resisting knee cave — the band adds an abduction challenge on top of the extension" },
      ],
    },
  },

  // ---- Sumo Deadlift ----
  {
    name: "Sumo Deadlift",
    category: "barbell_compound",
    primaryMuscles: ["glutes", "adductors", "quads", "hamstrings", "spinal erectors"],
    setup:
      "Walk up to the bar and take a wide stance — feet roughly 1.5x shoulder-width apart with toes pointed out 30-45 degrees. The bar should be over your mid-foot. Hinge at the hips and grip the bar with a shoulder-width or slightly narrower grip (double overhand or mixed). Drop your hips, lift your chest, and pull the slack out of the bar until you feel tension in your hamstrings.",
    breathingCue:
      "Take a deep belly breath and brace your core hard before you initiate the pull. Hold that brace until you reach full lockout. Exhale at the top, then re-brace before your next rep.",
    cues: [
      "Spread the floor apart with your feet — think about pushing your knees out over your toes as you drive up",
      "Push the floor away with your legs rather than pulling the bar up with your back",
      "Keep the bar in contact with your legs the entire way up — it should drag along your shins and thighs",
      "Lock out by squeezing your glutes at the top — do not hyperextend your lower back",
    ],
    commonFaults: [
      {
        fault: "Hips shoot up first and the chest drops, turning it into a stiff-leg pull",
        consequence:
          "Shifts all the load onto the lower back and removes the quad and adductor advantage of the sumo stance",
        fix: "Think 'chest and hips rise together' — if your hips always shoot first, the weight is too heavy or your quads are weak. Add pause deadlifts at 1 inch off the floor to build leg drive",
      },
      {
        fault: "Knees cave inward during the pull",
        consequence:
          "Puts dangerous shearing force on the knee joint and leaks power out of the lift",
        fix: "Cue 'spread the floor' aggressively and make sure your toes are turned out enough. Strengthen your adductors with Copenhagen planks and adductor work",
      },
      {
        fault: "Bar drifts away from the body mid-pull",
        consequence:
          "Creates a longer moment arm, making the lift harder on your back and increasing injury risk",
        fix: "Engage your lats by thinking 'protect your armpits' or 'bend the bar around your legs.' Keep the bar glued to your body from floor to lockout",
      },
    ],
    scaling: {
      easier: [
        { movement: "Sumo Dumbbell Deadlift or Kettlebell Sumo Deadlift", when: "Learning the wide-stance hip hinge pattern with a lighter, more manageable load" },
        { movement: "Conventional Deadlift", when: "The wide stance feels uncomfortable due to hip anatomy — some people are built better for conventional pulling" },
        { movement: "Sumo Deadlift from blocks or elevated pins", when: "Building confidence in the lockout portion before training the full range of motion from the floor" },
      ],
      harder: [
        { movement: "Deficit Sumo Deadlift (standing on a 1-2 inch platform)", when: "You want to increase range of motion and build more strength off the floor" },
        { movement: "Paused Sumo Deadlift (2-3 second hold 1 inch off the floor)", when: "Building positional strength and eliminating any reliance on momentum off the floor" },
        { movement: "Sumo Deadlift with chains or bands", when: "Adding accommodating resistance to overload the lockout while keeping the bottom manageable" },
      ],
    },
  },

  // ---- Incline Barbell Bench Press ----
  {
    name: "Incline Barbell Bench Press",
    category: "barbell_compound",
    primaryMuscles: ["upper chest", "front deltoids", "triceps"],
    setup:
      "Set an adjustable bench to 30-45 degrees inside a power rack or Smith machine. Lie back with your eyes directly under the bar. Plant your feet flat on the floor and squeeze your shoulder blades together behind you. Grip the bar slightly wider than shoulder-width. Unrack the bar with straight arms and position it over your upper chest.",
    breathingCue:
      "Inhale as you lower the bar to your upper chest. Hold your breath and brace through the sticking point, then exhale as you press through to lockout.",
    cues: [
      "Squeeze your shoulder blades together and down — create a stable shelf for your upper back to press from",
      "Lower the bar to your upper chest, just below the collarbone — not to the same spot as flat bench",
      "Drive the bar up and slightly back so it finishes over your shoulders at lockout",
      "Keep your wrists stacked directly over your elbows throughout the press",
    ],
    commonFaults: [
      {
        fault: "Flaring the elbows out to 90 degrees",
        consequence:
          "Puts excessive stress on the shoulder joint and rotator cuff, especially at the incline angle",
        fix: "Tuck your elbows to about 45-60 degrees from your torso — think about bending the bar into a U-shape to engage your lats and protect your shoulders",
      },
      {
        fault: "Setting the bench angle too steep (60+ degrees)",
        consequence:
          "Turns the movement into an overhead press — you lose the upper chest emphasis and overload the front delts",
        fix: "Keep the bench at 30-45 degrees. If you are not feeling it in your upper chest, the angle is probably too high",
      },
      {
        fault: "Bouncing the bar off the chest to get through the sticking point",
        consequence:
          "Reduces time under tension, removes the chest stretch at the bottom, and risks rib or sternum bruising",
        fix: "Control the descent for 2 seconds and touch your chest lightly before pressing — if you need to bounce, the weight is too heavy",
      },
    ],
    scaling: {
      easier: [
        { movement: "Incline Dumbbell Press", when: "The barbell feels too heavy or you need a freer range of motion for shoulder comfort" },
        { movement: "Incline Machine Press", when: "You want the incline angle with a guided bar path that removes the stabilization demand" },
        { movement: "Incline Push-up (hands on a bench)", when: "You are building pressing strength before adding external load" },
      ],
      harder: [
        { movement: "Paused Incline Bench (2-sec hold on chest)", when: "You want to eliminate momentum and build strength out of the bottom position" },
        { movement: "Close-grip Incline Bench Press", when: "You want more triceps emphasis while still training the incline pattern" },
        { movement: "Incline Bench with slow eccentric (4 seconds down)", when: "You want to maximize muscle damage and time under tension for the upper chest" },
      ],
    },
  },

  // ---- Push Press ----
  {
    name: "Push Press",
    category: "barbell_compound",
    primaryMuscles: ["shoulders", "triceps", "upper chest", "quads", "core"],
    setup:
      "Unrack the bar from a rack at collarbone height into a front rack position — bar resting on the front of your shoulders, elbows slightly in front of the bar. Feet hip-width apart, toes pointed slightly out. Stand tall with your core braced and ribs down.",
    breathingCue:
      "Take a big breath and brace before the dip. Hold that brace through the dip and drive. Exhale as the bar passes your forehead or once you reach lockout overhead.",
    cues: [
      "Dip straight down by bending your knees 3-4 inches — keep your torso completely vertical, do not lean forward",
      "Explode out of the dip by driving hard through your legs and immediately press the bar overhead",
      "Push your head through once the bar passes your forehead so the bar finishes directly over your spine",
      "Lock out with straight arms, active shoulders, and your biceps by your ears",
    ],
    commonFaults: [
      {
        fault: "Dipping forward instead of straight down — the chest drops and the hips push back",
        consequence:
          "The bar path goes forward instead of straight up, making the press much harder and putting your lower back at risk",
        fix: "Think 'dip like you are riding an elevator straight down.' Keep your chest up and your torso vertical — only your knees bend",
      },
      {
        fault: "Not finishing the leg drive before pressing — the arms start too early",
        consequence:
          "You lose the power from the legs and it turns into a slow, grinding strict press with worse mechanics",
        fix: "Think of the dip-drive as a jump — your legs should finish their job (full extension) before your arms take over. Drill push press with a pause at the top of the drive to feel the timing",
      },
      {
        fault: "Bar finishes in front of the head instead of directly overhead",
        consequence:
          "The weight is forward of your base of support, overloading your shoulders and lower back",
        fix: "Push your head through the window once the bar passes your forehead — your ears should be in front of your arms at lockout",
      },
    ],
    scaling: {
      easier: [
        { movement: "Strict Overhead Press", when: "You want to build raw shoulder strength without the leg drive component" },
        { movement: "Dumbbell Push Press", when: "The barbell feels too heavy or you want a freer range of motion" },
        { movement: "Landmine Press", when: "Overhead mobility is limited — the angled bar path is more shoulder-friendly" },
      ],
      harder: [
        { movement: "Push Jerk (full re-dip under the bar)", when: "You want to move heavier loads overhead by adding a catch in a partial squat" },
        { movement: "Behind-the-Neck Push Press", when: "You have excellent shoulder mobility and want to train a more direct bar path for Olympic lifting carryover" },
        { movement: "Push Press with 3-second negative", when: "You want to build eccentric strength and shoulder stability on the way down" },
      ],
    },
  },

  // ---- Pendlay Row ----
  {
    name: "Pendlay Row",
    category: "barbell_compound",
    primaryMuscles: ["lats", "rhomboids", "rear deltoids", "biceps", "spinal erectors"],
    setup:
      "Set a loaded barbell on the floor. Stand with feet shoulder-width apart, bar over mid-foot. Hinge at the hips until your torso is parallel to the floor — flat back, not rounded. Grip the bar slightly wider than shoulder-width with a pronated (overhand) grip. Each rep starts and ends with the bar on the floor — completely dead stop.",
    breathingCue:
      "Brace your core and inhale before you pull. Exhale as the bar touches your lower chest. Reset your breath on the floor between each rep.",
    cues: [
      "Explosively row the bar from the floor to your lower chest — this is not a slow, controlled row",
      "Keep your torso parallel to the floor throughout — do not stand up to cheat the weight",
      "Squeeze your shoulder blades together hard at the top, then return the bar to the floor under control",
      "Let the bar come to a complete dead stop on the floor before pulling the next rep — no bouncing",
    ],
    commonFaults: [
      {
        fault: "Torso rises up during the pull so you are rowing at 45 degrees instead of parallel",
        consequence:
          "Turns the Pendlay row into a regular bent-over row and reduces the strict pulling stimulus it is designed for",
        fix: "Reduce the weight until you can keep your torso flat for every rep. Film yourself from the side — your back should stay at the same angle from start to finish",
      },
      {
        fault: "Bouncing the bar off the floor instead of pulling from a dead stop",
        consequence:
          "Removes the concentric-only demand that makes the Pendlay row unique and lets momentum do the work",
        fix: "Let the bar settle completely on the floor between reps — you should be able to release your grip momentarily if needed. Each rep is its own pull",
      },
      {
        fault: "Pulling to the belly instead of the lower chest",
        consequence:
          "Changes the muscle emphasis and reduces upper back engagement",
        fix: "Aim for the bar to touch your lower chest, roughly at the bottom of your sternum. Think about driving your elbows toward the ceiling rather than back toward your hips",
      },
    ],
    scaling: {
      easier: [
        { movement: "Bent-Over Barbell Row (standing torso at 45 degrees)", when: "You cannot maintain a flat-back position parallel to the floor — the 45-degree angle is less demanding on the hamstrings and lower back" },
        { movement: "Dumbbell Row (one arm at a time, supported)", when: "You want to train each side independently with a bench for support" },
        { movement: "Chest-Supported Row", when: "Your lower back fatigues before your upper back — the chest support removes the spinal load" },
      ],
      harder: [
        { movement: "Deficit Pendlay Row (standing on a 1-2 inch platform)", when: "You want more range of motion and a harder pull off the floor" },
        { movement: "Pendlay Row with a pause (2-sec hold at the chest)", when: "You want to eliminate any momentum and build peak contraction strength in the upper back" },
        { movement: "Heavy Pendlay Row singles or doubles", when: "You want maximal strength development — treat the Pendlay row like a heavy compound lift with low reps and full resets" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// BODYWEIGHT (11 entries — Plank removed, kept in core section)
// ---------------------------------------------------------------------------

const bodyweight: MovementCueData[] = [
  // ---- Push-up ----
  {
    name: "Push-up",
    category: "bodyweight",
    primaryMuscles: ["chest", "triceps", "anterior deltoids"],
    setup: "Place your hands on the floor just outside shoulder width with fingers spread wide. Extend your legs behind you so your body forms one straight line from the crown of your head to your heels — squeeze your glutes, brace your core, and set your feet together or hip-width apart.",
    breathingCue: "Inhale as you lower your chest toward the floor; exhale as you press back up to lockout.",
    cues: [
      "Screw your hands into the floor to create external rotation — this protects your shoulders",
      "Keep your elbows at roughly 45 degrees from your torso, not flared straight out to the sides",
      "Lower until your chest touches or nearly touches the floor, then press to full arm extension",
    ],
    commonFaults: [
      { fault: "Hips sagging toward the floor", consequence: "Puts excessive stress on the lower back and takes tension off the chest and triceps", fix: "Squeeze your glutes and brace your abs before every rep — think 'rigid plank' from head to heels" },
      { fault: "Elbows flaring out to 90 degrees", consequence: "Increases shoulder impingement risk and reduces pressing power", fix: "Aim your elbows about 45 degrees back from your shoulders — imagine making an arrow shape, not a T shape" },
      { fault: "Snaking up off the floor (hips rise first, then chest)", consequence: "Turns the movement into two separate pieces and reduces chest engagement", fix: "Press your entire body up as one unit — if you can't, drop to an easier variation and build strength there" },
    ],
    scaling: {
      easier: [
        { movement: "Incline push-up (hands on a bench or box)", when: "You cannot maintain a rigid plank or hit full depth on the floor" },
        { movement: "Knee push-up with a straight line from knees to shoulders", when: "Incline is too easy but full push-ups break form after a few reps" },
        { movement: "Negative push-up (lower slowly for 3-5 seconds, then reset at the top)", when: "You want to build strength through the full range of motion but can't press back up yet" },
      ],
      harder: [
        { movement: "Deficit push-up (hands on plates or parallettes for extra depth)", when: "Full-depth push-ups feel easy for sets of 15+ and you want more chest stretch" },
        { movement: "Weighted push-up (plate on the upper back)", when: "Bodyweight push-ups are no longer challenging and you want to build raw pressing strength" },
        { movement: "Ring push-up", when: "You want to add an instability challenge that forces more shoulder stabilizer work" },
      ],
    },
  },

  // ---- Pull-up ----
  {
    name: "Pull-up",
    category: "bodyweight",
    primaryMuscles: ["latissimus dorsi", "biceps", "rear deltoids"],
    setup: "Grip the bar overhand (palms facing away) with hands just outside shoulder width. Hang with arms fully extended, shoulders pulled down away from your ears, and feet off the ground. This is a dead hang — start every rep from here.",
    breathingCue: "Exhale as you pull your chin over the bar; inhale as you lower back to a full dead hang.",
    cues: [
      "Initiate by pulling your shoulder blades down and together — engage your lats before you bend your arms",
      "Drive your elbows down and back as if you are trying to put them in your back pockets",
      "Pull until your chin clears the bar, then lower with control — no dropping",
    ],
    commonFaults: [
      { fault: "Kipping or swinging when strict reps are the goal", consequence: "Removes the strength stimulus and can cause shoulder strain from uncontrolled movement", fix: "Start each rep from a dead stop — if you need momentum, use a scaling option instead" },
      { fault: "Partial range of motion — not starting from a full dead hang", consequence: "Reduces lat engagement and builds strength only in a shortened range", fix: "Fully extend your arms at the bottom of every rep before pulling again" },
      { fault: "Shrugging shoulders up to the ears instead of pulling them down first", consequence: "Upper traps take over and lats don't do their job", fix: "Before bending your elbows, actively depress your shoulder blades — think 'pull your shoulders into your back pockets'" },
    ],
    scaling: {
      easier: [
        { movement: "Banded pull-up (loop band over the bar and under your foot or knee)", when: "You can hang from the bar but cannot complete a full strict pull-up" },
        { movement: "Jumping pull-up with a slow 3-5 second negative", when: "You want to build pulling strength through the full range without a band" },
        { movement: "Inverted row (barbell in a rack or rings at waist height)", when: "You are building foundational pulling strength and the bar is not yet accessible" },
      ],
      harder: [
        { movement: "Weighted pull-up (belt, vest, or dumbbell between feet)", when: "You can do strict sets of 8-10 with good form and want to increase strength" },
        { movement: "Chest-to-bar pull-up", when: "You want to increase the range of motion and build toward more advanced gymnastics movements" },
        { movement: "L-sit pull-up (hold legs straight out in front while pulling)", when: "You want to add a serious core challenge and increase total-body tension" },
      ],
    },
  },

  // ---- Chin-up ----
  {
    name: "Chin-up",
    category: "bodyweight",
    primaryMuscles: ["latissimus dorsi", "biceps", "forearms"],
    setup: "Grip the bar with palms facing you (supinated grip) at roughly shoulder width. Hang with arms fully extended, shoulders pulled down and packed. Feet off the ground, body still — this is your start and end position for every rep.",
    breathingCue: "Exhale as you pull your chin over the bar; inhale on the controlled descent back to a dead hang.",
    cues: [
      "Depress your shoulder blades first — engage your lats before your biceps",
      "Drive your elbows straight down toward your hips, keeping them close to your body",
      "Pull until your chin clears the bar, pause briefly, then lower under control to a full hang",
    ],
    commonFaults: [
      { fault: "Relying entirely on the biceps and ignoring the back", consequence: "Limits the weight you can handle and can lead to bicep tendon overuse", fix: "Focus on pulling your elbows down rather than curling your hands up — this shifts emphasis to the lats" },
      { fault: "Craning the neck forward to get the chin over the bar", consequence: "Puts strain on the cervical spine and counts as a partial rep", fix: "Keep your neck neutral and pull your body up until the bar is at collarbone height — your chin will clear naturally" },
      { fault: "Excessive kipping or swinging", consequence: "Removes the strength-building stimulus and increases shoulder injury risk", fix: "Pause for a full second at the dead hang between reps — this kills the swing and forces strict pulling" },
    ],
    scaling: {
      easier: [
        { movement: "Banded chin-up", when: "You can hang from the bar but cannot complete a strict chin-up on your own" },
        { movement: "Jumping chin-up with a slow 3-5 second negative", when: "You want to build eccentric strength without a band" },
        { movement: "Machine-assisted chin-up (counterweight machine)", when: "You want consistent resistance reduction and are training in a gym with the equipment" },
      ],
      harder: [
        { movement: "Weighted chin-up (belt or vest)", when: "You can do strict sets of 10+ and need more resistance to keep progressing" },
        { movement: "Towel chin-up (drape a towel over the bar and grip the ends)", when: "Grip strength is a goal and you want a serious forearm challenge" },
        { movement: "Slow tempo chin-up (3 seconds up, 3 seconds down)", when: "You want to increase time under tension without adding external weight" },
      ],
    },
  },

  // ---- Dip ----
  {
    name: "Dip",
    category: "bodyweight",
    primaryMuscles: ["triceps", "chest", "anterior deltoids"],
    setup: "Grip the parallel bars or dip handles and press yourself up to full arm lockout. Shoulders should be depressed (pulled down, not shrugged), elbows fully extended, and your body steady — this is the top position where every rep starts and finishes.",
    breathingCue: "Inhale as you lower yourself into the bottom of the dip; exhale as you press back up to lockout.",
    cues: [
      "Lower until your upper arm is at least parallel to the floor — own the full range of motion",
      "A slight forward lean targets more chest; staying upright shifts emphasis to the triceps",
      "Press through your palms and drive to full lockout — don't stop short at the top",
    ],
    commonFaults: [
      { fault: "Partial range of motion — barely bending the elbows", consequence: "Limits strength development and shortchanges the chest and shoulders", fix: "Lower until your upper arm is at least parallel to the ground — if you can't get there, use an easier variation" },
      { fault: "Shoulders rolling forward and internally rotating at the bottom", consequence: "Puts the shoulder joint in a vulnerable position and increases injury risk", fix: "Keep your chest open and shoulder blades pulled back — think about bending a barbell across your chest" },
      { fault: "Elbows flaring excessively wide", consequence: "Shifts stress to the shoulder joint instead of the pressing muscles", fix: "Keep your elbows tracking roughly 45 degrees from your torso — similar cue to a push-up" },
    ],
    scaling: {
      easier: [
        { movement: "Bench dip (hands on a bench behind you, feet on the floor)", when: "Parallel bar dips are too difficult — this reduces the load significantly" },
        { movement: "Banded dip (loop a band across the bars and place your knees or feet in it)", when: "You can support yourself at the top but cannot complete full-depth reps" },
        { movement: "Machine-assisted dip", when: "You want consistent, adjustable resistance reduction while learning the movement" },
      ],
      harder: [
        { movement: "Weighted dip (belt with plates or dumbbell between your feet)", when: "Bodyweight dips are comfortable for sets of 12+ and you need more resistance" },
        { movement: "Ring dip", when: "You want to challenge shoulder stability — the rings force you to actively stabilize throughout" },
        { movement: "Tempo dip (3 seconds down, 1 second pause, 3 seconds up)", when: "You want to increase time under tension and build control through the full range" },
      ],
    },
  },

  // ---- Air Squat ----
  {
    name: "Air Squat",
    category: "bodyweight",
    primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
    setup: "Stand with your feet shoulder-width apart and toes turned out 15-30 degrees. Arms can be at your sides or extended in front of you for counterbalance. Stand tall, chest up, weight distributed evenly across your whole foot.",
    breathingCue: "Inhale as you descend into the bottom of the squat; exhale as you drive up to standing.",
    cues: [
      "Sit your hips back and down simultaneously — imagine sitting into a chair that is just behind you",
      "Push your knees out over your toes — they should track in the same direction your toes point",
      "Descend until the crease of your hip passes below the top of your knee, then drive through your whole foot to stand",
    ],
    commonFaults: [
      { fault: "Knees caving inward on the way down or up", consequence: "Places shearing stress on the knee ligaments and reduces power output", fix: "Actively push your knees out toward your pinky toes — a light band above the knees can help you feel the correction" },
      { fault: "Heels rising off the ground at the bottom", consequence: "Shifts your center of gravity forward and limits depth — usually an ankle mobility issue", fix: "Try a wider stance with more toe-out, or temporarily elevate your heels on small plates while working on ankle mobility" },
      { fault: "Chest falling forward and back rounding", consequence: "Loads the lower back instead of the legs and reduces squat depth", fix: "Reach your arms straight forward for counterbalance and focus on keeping your chest pointed at the wall in front of you" },
    ],
    scaling: {
      easier: [
        { movement: "Squat to a box or chair (sit down and stand up)", when: "You are learning the squat pattern and need a depth target to build confidence" },
        { movement: "TRX or band-assisted squat (hold a support for balance)", when: "Balance is the limiting factor rather than strength" },
        { movement: "Wall-facing squat (face a wall at arm's length and squat)", when: "You tend to lean forward and need a physical cue to stay upright" },
      ],
      harder: [
        { movement: "Pistol squat (single-leg squat to full depth)", when: "Bilateral air squats are easy for 20+ reps and you want a serious single-leg challenge" },
        { movement: "Jump squat (explode up and leave the ground at the top)", when: "You want to build power and explosiveness from the squat pattern" },
        { movement: "Tempo air squat (5 seconds down, 5 seconds up)", when: "You want to increase time under tension and improve positional awareness without adding load" },
      ],
    },
  },

  // ---- Lunge ----
  {
    name: "Lunge",
    category: "bodyweight",
    primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
    setup: "Stand tall with your feet hip-width apart, arms at your sides or hands on your hips. Your step should be long enough that when you lower, both knees form roughly 90-degree angles — typically about two to three feet depending on your height.",
    breathingCue: "Inhale as you step forward and lower your back knee toward the floor; exhale as you drive through your front heel to return to standing.",
    cues: [
      "Take a long enough step that both knees reach 90 degrees at the bottom — front shin roughly vertical",
      "Back knee lightly taps the floor — controlled, not a crash landing",
      "Keep your torso upright with your core braced — resist the urge to lean forward over your front thigh",
    ],
    commonFaults: [
      { fault: "Front knee shooting way past the toes with the heel lifting off the floor", consequence: "Overloads the knee joint and reduces glute engagement", fix: "Take a longer step so your shin stays close to vertical — your front heel should stay planted" },
      { fault: "Torso collapsing forward over the front leg", consequence: "Loads the lower back and takes emphasis off the legs", fix: "Brace your core, pull your shoulders back, and keep your chest pointing straight ahead" },
      { fault: "Wobbling side to side — feet landing on a tightrope line", consequence: "Makes the movement unstable and reduces force production", fix: "Step into a position where your feet are still hip-width apart, as if you are walking on railroad tracks, not a balance beam" },
    ],
    scaling: {
      easier: [
        { movement: "Reverse lunge (step backward instead of forward)", when: "Forward lunges feel unstable or bother your knees — stepping back gives you more control" },
        { movement: "Split squat (stay in a static split stance and move up and down)", when: "The stepping component is too challenging and you need to build single-leg strength first" },
        { movement: "TRX-assisted lunge (hold suspension straps for balance)", when: "Balance is the limiting factor and you need support while building stability" },
      ],
      harder: [
        { movement: "Walking lunge with weight overhead", when: "Bodyweight lunges are easy for 20+ steps and you want to challenge core stability and coordination" },
        { movement: "Bulgarian split squat (rear foot elevated on a bench)", when: "You want a deep single-leg challenge with increased range of motion" },
        { movement: "Jumping alternating lunge", when: "You want to add a plyometric power element to the lunge pattern" },
      ],
    },
  },

  // ---- Burpee ----
  {
    name: "Burpee",
    category: "bodyweight",
    primaryMuscles: ["quadriceps", "chest", "shoulders", "hip flexors"],
    setup: "Stand tall with feet hip-width apart, arms at your sides. This is your start position — every rep begins and ends here at full standing extension.",
    breathingCue: "Find a breathing rhythm that matches the movement cycle — exhale on the jump at the top, inhale as you descend to the floor. Avoid holding your breath across multiple reps.",
    cues: [
      "Hands down on the floor, then jump or step your feet back to a solid plank position",
      "Lower your chest to the floor and press back up — maintain a rigid torso like a push-up",
      "Jump or step your feet forward to your hands, then explode up and clap overhead with full hip extension",
    ],
    commonFaults: [
      { fault: "No full hip extension at the top — lazy jump or skipping the jump entirely", consequence: "Reduces the training stimulus and shortchanges the conditioning effect", fix: "Stand all the way up and jump with intention — your hips, knees, and ankles should all extend at the top" },
      { fault: "Worming off the floor (hips rise first, then chest catches up)", consequence: "Reduces the push-up stimulus and can strain the lower back", fix: "Press your body off the floor as one rigid unit — if you cannot, step back instead of jumping back and use an incline" },
      { fault: "Starting too fast and completely dying halfway through the set", consequence: "Total work output drops and form degrades — injury risk goes up", fix: "Pick a pace you can maintain for the entire set — a steady rhythm beats a sprint-and-crash every time" },
    ],
    scaling: {
      easier: [
        { movement: "Step-back burpee (step feet back and forward instead of jumping)", when: "The jumping component is too taxing or you have joint concerns" },
        { movement: "Elevated burpee (hands on a box or bench instead of the floor)", when: "Getting all the way to the floor and back is too demanding" },
        { movement: "No push-up burpee (plank position only, skip the chest-to-floor)", when: "The push-up is the bottleneck and you want to focus on the conditioning piece" },
      ],
      harder: [
        { movement: "Burpee box jump-over (burpee facing a box, jump over it)", when: "Standard burpees feel routine and you want a plyometric and coordination challenge" },
        { movement: "Burpee pull-up (perform a pull-up at the top instead of a clap)", when: "You want to combine upper-body pulling with the burpee for a full-body metabolic hit" },
        { movement: "Bar-facing burpee with lateral jump over a barbell", when: "You are training for competitive fitness or want to add a lateral agility component" },
      ],
    },
  },

  // ---- Box Jump ----
  {
    name: "Box Jump",
    category: "bodyweight",
    primaryMuscles: ["quadriceps", "glutes", "calves"],
    setup: "Stand about one foot away from the box with feet shoulder-width apart in an athletic position — slight bend in the knees and hips, weight on the balls of your feet, arms ready to swing.",
    breathingCue: "Exhale forcefully as you jump and extend; inhale as you step down and reset for the next rep.",
    cues: [
      "Swing your arms aggressively and explode through your hips, knees, and ankles simultaneously",
      "Land softly with your whole foot on the box — aim for quiet feet, not a loud stomp",
      "Stand to full hip extension on top of the box, then step down — do not repeatedly rebound-jump off the ground",
    ],
    commonFaults: [
      { fault: "Landing in a very deep squat on the box with knees near your chest", consequence: "This means the box is too high — you are pulling your knees up rather than actually jumping higher", fix: "Lower the box height until you land with your thighs at or above parallel — a proper box jump lands with open hips" },
      { fault: "Not standing to full extension on top of the box", consequence: "Skipping lockout removes the hip extension component and can mean reps don't count in structured workouts", fix: "Stand all the way up and squeeze your glutes at the top before stepping down" },
      { fault: "Rebounding off the ground on high-volume sets", consequence: "Repeated high-impact landings stress the Achilles tendon and increase injury risk significantly", fix: "Step down from the box and reset your feet before each jump — treat each rep as its own effort" },
    ],
    scaling: {
      easier: [
        { movement: "Lower box height (start with 12-16 inches)", when: "You are new to box jumps or lack confidence jumping to a higher surface" },
        { movement: "Box step-up (step up one foot at a time instead of jumping)", when: "The jumping component is too intimidating or you have joint concerns" },
        { movement: "Seated box jump (start seated on a second box to remove the stretch reflex)", when: "You want to build raw explosive power from a dead stop" },
      ],
      harder: [
        { movement: "Higher box (increase height in 2-4 inch increments)", when: "You consistently land on the current box with hips above parallel and quiet feet" },
        { movement: "Weighted box jump (hold light dumbbells at your sides)", when: "You want to increase power output demands beyond bodyweight" },
        { movement: "Single-leg box jump", when: "You have strong bilateral box jumps and want to develop single-leg explosiveness and landing control" },
      ],
    },
  },

  // ---- Bar Muscle-up ----
  {
    name: "Bar Muscle-up",
    category: "bodyweight",
    primaryMuscles: ["latissimus dorsi", "chest", "triceps", "core"],
    setup: "Hang from a pull-up bar with hands gripping just outside shoulder width, overhand grip. Start in a dead hang with arms fully extended, shoulders engaged (not shrugged to ears), and feet off the ground.",
    breathingCue: "Exhale forcefully during the pull and turnover phase; inhale as you lower back to the hang.",
    cues: [
      "Generate power from an aggressive kip — the force comes from your hips snapping, not your arms yanking",
      "Pull the bar toward your hips, not your chin — this is the key difference from a pull-up",
      "Snap your chest aggressively over the bar during the turnover, then press out to full lockout at the top",
    ],
    commonFaults: [
      { fault: "Pulling the bar to the chin like a regular pull-up", consequence: "You will never get over the bar — the turnover requires the bar to be at hip level", fix: "Practice high pull-ups where the bar touches your sternum or lower — build the pulling height before attempting the turnover" },
      { fault: "Chicken-winging (one arm goes over the bar at a time)", consequence: "Creates an asymmetrical load on the shoulders and usually means insufficient pull height", fix: "Build pulling power with chest-to-bar pull-ups and practice the transition with a low bar or banded setup where both arms turn over together" },
      { fault: "Loose midline during the kip — floppy legs and no core tension", consequence: "Energy leaks through the core and the kip produces no useful power", fix: "Practice hollow body and arch body positions on the bar — your kip should be a controlled snap between these two shapes" },
    ],
    scaling: {
      easier: [
        { movement: "Banded bar muscle-up (band from the bar to your feet for assistance)", when: "You have the pulling height but need help with the turnover" },
        { movement: "Jumping muscle-up transition on a low bar", when: "You want to learn the turnover mechanics without needing full pulling strength" },
        { movement: "Chest-to-bar pull-ups combined with deep dips (train the components separately)", when: "You do not yet have the pulling height or the pressing strength for the full movement" },
      ],
      harder: [
        { movement: "Strict bar muscle-up (no kip — pure pulling and pressing strength)", when: "You can do kipping muscle-ups consistently and want an elite-level strength challenge" },
        { movement: "Weighted muscle-up (vest or belt)", when: "Unweighted muscle-ups are comfortable for sets of 3-5 and you want to build more power" },
        { movement: "Ring muscle-up (unstable surface demands more shoulder stability)", when: "You have solid bar muscle-ups and want to progress to a more technically demanding variation" },
      ],
    },
  },

  // ---- Glute Bridge ----
  {
    name: "Glute Bridge",
    category: "bodyweight",
    primaryMuscles: ["glutes", "hamstrings", "core"],
    setup: "Lie on your back with your knees bent and feet flat on the floor about hip-width apart. Position your feet so that when you bridge up, your shins are roughly vertical. Arms rest at your sides with palms down for stability.",
    breathingCue: "Exhale as you drive your hips up and squeeze your glutes at the top; inhale as you lower your hips back to the floor.",
    cues: [
      "Drive through your heels and squeeze your glutes hard to lift your hips — your body should form a straight line from shoulders to knees at the top",
      "Hold the top position for a one-count squeeze — you should feel this in your glutes, not your lower back",
      "Lower your hips back down with control — do not just drop to the floor between reps",
    ],
    commonFaults: [
      { fault: "Hyperextending the lower back at the top instead of stopping at a straight line", consequence: "Shifts the load from the glutes to the lumbar spine and can cause lower back pain", fix: "Think about tucking your tailbone slightly at the top — stop bridging once your hips are in line with your knees and shoulders" },
      { fault: "Pushing through the toes instead of the heels", consequence: "Shifts emphasis to the quadriceps and reduces glute activation", fix: "Wiggle your toes at the top to confirm your weight is in your heels — you can even lift your toes slightly off the floor" },
      { fault: "Feet too far from or too close to the glutes", consequence: "Too far forward overloads the hamstrings; too close limits the range of motion and glute engagement", fix: "Position your feet so your shins are vertical at the top of the bridge — adjust from there based on where you feel it most" },
    ],
    scaling: {
      easier: [
        { movement: "Glute bridge with shorter range of motion (don't come all the way up)", when: "You are new to glute training or returning from a lower back issue" },
        { movement: "Glute bridge with a pillow or yoga block between the knees", when: "You have trouble activating the glutes and need an adductor squeeze cue to help" },
        { movement: "Wall-supported glute bridge (feet on a wall instead of the floor)", when: "Keeping feet flat on the floor is uncomfortable and you need more hamstring support" },
      ],
      harder: [
        { movement: "Single-leg glute bridge (one foot planted, other leg extended)", when: "Bilateral bridges are easy for 20+ reps and you want to challenge each side independently" },
        { movement: "Barbell hip thrust (back elevated on a bench with a loaded barbell across the hips)", when: "You want to progressively overload the glute bridge pattern with serious weight" },
        { movement: "Banded glute bridge (resistance band above the knees)", when: "You want to add a hip abduction challenge that fires the upper glutes harder" },
      ],
    },
  },

  // ---- Step-Up ----
  {
    name: "Step-Up",
    category: "bodyweight",
    primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
    setup: "Stand facing a box or sturdy bench with one foot planted flat on top of it. The box height should allow your thigh to be roughly parallel to the floor when your foot is on top — typically 12-20 inches depending on your leg length. Stand tall with your core braced.",
    breathingCue: "Exhale as you drive up to standing on the box; inhale as you lower yourself back down under control.",
    cues: [
      "Drive through the heel of the foot on the box — the top leg does all the work, not a push-off from the bottom foot",
      "Stand to full hip extension at the top with both feet on the box before lowering",
      "Lower yourself slowly with the working leg — resist gravity on the way down rather than just dropping",
    ],
    commonFaults: [
      { fault: "Pushing off the back (ground) foot to assist the step-up", consequence: "Turns a single-leg exercise into a bilateral one and reduces the training stimulus on the working leg", fix: "Barely touch the ground foot to the floor between reps — or lift your toes on the ground foot to force the top leg to do the work" },
      { fault: "Knee of the working leg caving inward as you drive up", consequence: "Places harmful stress on the knee joint and indicates weak hip stabilizers", fix: "Actively push your knee out over your toes as you stand — the knee should track in the same direction as the foot" },
      { fault: "Leaning the torso way forward over the box to generate momentum", consequence: "Takes the load off the legs and puts it on the lower back", fix: "Stay upright — imagine a string pulling you straight up from the top of your head as you step" },
    ],
    scaling: {
      easier: [
        { movement: "Lower box height (start with 8-12 inches)", when: "The standard height causes your form to break down or you lack the strength to drive up without the back foot" },
        { movement: "Assisted step-up (hold a rack or wall for light balance support)", when: "Balance is the limiting factor and you need support while building single-leg strength" },
        { movement: "Step-up to a tap (step up, tap the opposite foot on the box, step back down)", when: "Standing fully on the box is too challenging and you need a progression to build toward it" },
      ],
      harder: [
        { movement: "Weighted step-up (hold dumbbells at your sides or a barbell on your back)", when: "Bodyweight step-ups are easy for 15+ reps per leg with good form" },
        { movement: "Higher box step-up (increase box height in 2-4 inch increments)", when: "You want to increase the range of motion and demand more from the glutes and hamstrings" },
        { movement: "Deficit step-up (stand on a plate with the ground foot for extra range of motion)", when: "You want maximum single-leg range of motion and strength through a deep position" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// DUMBBELL (15 entries)
// ---------------------------------------------------------------------------

const dumbbell: MovementCueData[] = [
  // ---- Dumbbell Bench Press ----
  {
    name: "Dumbbell Bench Press",
    category: "dumbbell",
    primaryMuscles: ["chest", "front deltoids", "triceps"],
    setup: "Lie flat on a bench with a dumbbell in each hand at chest level, palms facing your feet. Plant your feet firmly on the floor, pull your shoulder blades together and press them into the bench.",
    breathingCue: "Inhale as you lower the dumbbells to your chest, exhale as you press them up.",
    cues: [
      "Press up and slightly in so the dumbbells nearly touch at the top",
      "Keep your shoulder blades pinched together the entire set — imagine squeezing a pencil between them",
      "Lower until your upper arms are level with the bench, elbows at about 45 degrees from your body",
    ],
    commonFaults: [
      { fault: "Dumbbells drifting toward the belly or over the face", consequence: "Shifts the load off the chest and puts the shoulder joint in a vulnerable position", fix: "Keep the dumbbells tracking over your mid-chest — lower to nipple line, press back to that same spot" },
      { fault: "Losing shoulder blade retraction mid-set — shoulders roll forward at the top", consequence: "Reduces chest activation and increases shoulder impingement risk", fix: "Before every set, actively squeeze your shoulder blades together and down, and keep them pinned to the bench throughout" },
      { fault: "Uneven press — one arm locking out before the other", consequence: "Creates muscle imbalances and can torque the spine", fix: "Use a lighter weight and focus on moving both arms at the same speed; use a mirror or training partner for feedback" },
    ],
    scaling: {
      easier: [
        { movement: "Floor press (lying on the floor instead of a bench)", when: "You feel unstable on the bench or have shoulder discomfort at the bottom — the floor limits how far your elbows drop" },
        { movement: "Single-arm dumbbell press", when: "You need to focus on one side at a time for better control and core engagement" },
        { movement: "Push-ups (incline if needed)", when: "You are brand new to pressing and need to build a base of pressing strength without balancing dumbbells" },
      ],
      harder: [
        { movement: "Paused dumbbell bench press (2-3 sec hold at the bottom)", when: "You can do 3 sets of 10 with good form and want to build more strength out of the bottom position" },
        { movement: "Alternating dumbbell press (one arm at a time while holding the other at lockout)", when: "You want to add a core stability challenge to the movement" },
        { movement: "Dumbbell bench press with slow eccentric (4 sec lower)", when: "You want to build more muscle with the same weight by increasing time under tension" },
      ],
    },
  },

  // ---- Dumbbell Row ----
  {
    name: "Dumbbell Row",
    category: "dumbbell",
    primaryMuscles: ["lats", "rhomboids", "rear deltoids", "biceps"],
    setup: "Place your left hand and left knee on a flat bench so your torso is roughly parallel to the floor. Hold a dumbbell in your right hand with your arm hanging straight down. Keep your back flat like a tabletop.",
    breathingCue: "Exhale as you pull the dumbbell up, inhale as you lower it back down.",
    cues: [
      "Pull the dumbbell toward your hip, not your armpit — think 'elbow to the ceiling'",
      "Squeeze your shoulder blade toward your spine at the top and hold for a beat",
      "Lower the dumbbell with control — match the lowering speed to the pulling speed",
    ],
    commonFaults: [
      { fault: "Rotating the torso to heave the weight up", consequence: "Takes the work off the lats and rhomboids and can strain the lower back", fix: "Keep your shoulders square to the floor; if you have to twist, the weight is too heavy" },
      { fault: "Rowing to the shoulder instead of the hip — the shoulder shrugs up toward the ear", consequence: "Overloads the upper traps and under-trains the lats", fix: "Initiate the pull by driving your elbow back and down toward your hip pocket" },
      { fault: "Using momentum — bouncing or jerking at the bottom of each rep", consequence: "Reduces muscle activation and increases bicep tendon stress", fix: "Pause for a full second at the bottom with your arm fully extended before each pull" },
    ],
    scaling: {
      easier: [
        { movement: "Chest-supported dumbbell row (lying face-down on an incline bench)", when: "You struggle to keep your back flat or your lower back fatigues before your upper back" },
        { movement: "Cable row", when: "You want constant tension and a guided path while learning the rowing pattern" },
        { movement: "Lighter weight with a 2-second pause at the top", when: "You can do the movement but cannot feel your back muscles working" },
      ],
      harder: [
        { movement: "Kroc row (heavy, high-rep set with controlled body english)", when: "You can row strict for 12+ reps and want a heavy back-building challenge" },
        { movement: "Renegade row (row from a push-up position, alternating sides)", when: "You want to combine anti-rotation core work with your rowing" },
        { movement: "Paused dumbbell row (3-sec hold at the top)", when: "You want to increase time under tension and improve the mind-muscle connection with your back" },
      ],
    },
  },

  // ---- Goblet Squat ----
  {
    name: "Goblet Squat",
    category: "dumbbell",
    primaryMuscles: ["quadriceps", "glutes", "core"],
    setup: "Hold one dumbbell vertically at your chest with both hands cupping the top end, elbows pointing down. Stand with your feet shoulder-width apart, toes turned out slightly.",
    breathingCue: "Inhale as you lower into the squat, exhale as you drive back up to standing.",
    cues: [
      "Sit straight down between your hips — the dumbbell acts as a counterbalance to keep you upright",
      "Push your knees out over your toes and let your elbows track inside your knees at the bottom",
      "Stand tall and squeeze your glutes at the top before starting the next rep",
    ],
    commonFaults: [
      { fault: "Leaning forward and letting the dumbbell pull you down", consequence: "Shifts the load to your lower back instead of your legs and can cause you to lose balance", fix: "Keep your elbows high and your chest tall — think about showing the logo on your shirt to someone in front of you" },
      { fault: "Knees caving inward at the bottom of the squat", consequence: "Puts shearing stress on the knee ligaments and reduces the power you can generate", fix: "Actively push your knees out — your elbows can nudge them open at the bottom as a physical reminder" },
      { fault: "Not hitting depth — hip crease stays above the knee", consequence: "You miss out on glute activation and full range of motion strength", fix: "Use a box or bench as a depth target and sit to it on every rep until the depth becomes natural" },
    ],
    scaling: {
      easier: [
        { movement: "Bodyweight air squat", when: "You cannot maintain an upright torso with any added weight" },
        { movement: "Goblet squat to a box (sit on the box briefly, then stand)", when: "You are unsure about depth or lose balance at the bottom" },
        { movement: "Goblet squat with a lighter dumbbell or kettlebell", when: "The full weight is too heavy but you can manage the movement pattern" },
      ],
      harder: [
        { movement: "Goblet squat with a 3-second pause at the bottom", when: "You can do 3 sets of 12 comfortably and want to build more strength and control at depth" },
        { movement: "Double kettlebell front squat", when: "You have outgrown the heaviest single dumbbell available" },
        { movement: "Barbell front squat", when: "You are ready to load the squat pattern heavier and have solid upright torso mechanics" },
      ],
    },
  },

  // ---- Dumbbell Shoulder Press ----
  {
    name: "Dumbbell Shoulder Press",
    category: "dumbbell",
    primaryMuscles: ["front deltoids", "lateral deltoids", "triceps", "upper traps"],
    setup: "Sit on a bench with back support or stand with feet hip-width apart. Hold a dumbbell in each hand at shoulder height with your palms facing forward and elbows bent at about 90 degrees.",
    breathingCue: "Exhale as you press the dumbbells overhead, inhale as you lower them back to shoulder height.",
    cues: [
      "Brace your core and pull your ribs down — do not let your ribcage flare open",
      "Press straight overhead until your biceps are by your ears and the dumbbells nearly touch",
      "Lower with control back to shoulder height — do not let the dumbbells drop or bounce",
    ],
    commonFaults: [
      { fault: "Excessive lower-back arch — the ribcage flares and the spine hyperextends", consequence: "Puts compressive force on the lumbar spine and shifts the work to the upper chest instead of the shoulders", fix: "Squeeze your glutes, tighten your abs, and think about pulling your ribs toward your belt buckle" },
      { fault: "Pressing the dumbbells forward instead of straight overhead", consequence: "Turns the movement into a partial incline press and reduces shoulder engagement", fix: "At lockout, your arms should be directly over your shoulders — if the dumbbells are in front of your face, you are pressing forward" },
      { fault: "Using leg drive to bounce the weight up", consequence: "You are not training the shoulders through the hardest part of the range and may not realize the weight is too heavy", fix: "Stay seated or, if standing, lock your knees and do not dip — if you cannot press it without a bounce, lower the weight" },
    ],
    scaling: {
      easier: [
        { movement: "Seated dumbbell press with back support", when: "You struggle to keep your core stable while pressing standing" },
        { movement: "Landmine press (pressing a barbell anchored in a corner at an angle)", when: "Overhead pressing causes shoulder discomfort — the angled path is more forgiving" },
        { movement: "Lighter dumbbells with a slow 3-second lower", when: "You can get the weight up but cannot control it on the way down" },
      ],
      harder: [
        { movement: "Standing single-arm dumbbell press", when: "You want to add an anti-lateral-flexion core challenge to the press" },
        { movement: "Arnold press (start palms facing you, rotate to palms forward as you press)", when: "You want to increase the range of motion and hit more of the deltoid" },
        { movement: "Z-press (seated on the floor with legs extended, no back support)", when: "You want to expose and fix core weaknesses that a bench hides" },
      ],
    },
  },

  // ---- Dumbbell Curl ----
  {
    name: "Dumbbell Curl",
    category: "dumbbell",
    primaryMuscles: ["biceps", "brachialis", "forearms"],
    setup: "Stand with your feet hip-width apart, a dumbbell in each hand, arms fully extended at your sides with palms facing forward.",
    breathingCue: "Exhale as you curl the dumbbells up toward your shoulders, inhale as you lower them back down.",
    cues: [
      "Pin your elbows to your sides — they should not drift forward or backward during the curl",
      "Squeeze your biceps hard at the top, then lower slowly for at least 2 seconds",
      "Keep your wrists straight and strong — do not let them bend backward under the weight",
    ],
    commonFaults: [
      { fault: "Swinging the torso to heave the weight up", consequence: "Takes the work off the biceps and loads the lower back, which can lead to strain over time", fix: "Stand with your back lightly touching a wall — if your shoulders leave the wall, you are swinging" },
      { fault: "Elbows drifting forward as you curl", consequence: "Shifts the load to the front delts and reduces bicep tension at the top", fix: "Think about keeping your elbows glued to the sides of your ribcage throughout the entire rep" },
      { fault: "Dropping the weight on the way down instead of lowering with control", consequence: "You miss half the muscle-building stimulus and increase elbow joint stress", fix: "Take a full 2-3 seconds to lower the dumbbells on every rep — the lowering phase is where a lot of the growth stimulus comes from" },
    ],
    scaling: {
      easier: [
        { movement: "Concentration curl (seated, elbow braced against your inner thigh)", when: "You cannot stop yourself from swinging — the thigh brace locks you in" },
        { movement: "Cable curl", when: "You want constant tension throughout the range of motion, which is easier to feel" },
        { movement: "Hammer curl (palms facing each other)", when: "Standard curls bother your wrists — the neutral grip is more joint-friendly" },
      ],
      harder: [
        { movement: "Incline dumbbell curl (seated on a bench at 45 degrees, arms hanging behind you)", when: "You want a bigger stretch on the bicep at the bottom for more growth stimulus" },
        { movement: "Slow eccentric curl (5-second lower)", when: "You can do 3 sets of 12 strict and want to increase difficulty without adding weight" },
        { movement: "Zottman curl (curl up with palms up, lower with palms down)", when: "You want to train both the biceps and the forearms in the same exercise" },
      ],
    },
  },

  // ---- Tricep Extension (Overhead) ----
  {
    name: "Tricep Extension (Overhead)",
    category: "dumbbell",
    primaryMuscles: ["triceps (long head)", "triceps (medial head)"],
    setup: "Stand or sit with one dumbbell held overhead using both hands. Cup the inside of the top dumbbell head with both palms, fingers interlocked. Your elbows should point straight up toward the ceiling.",
    breathingCue: "Exhale as you extend (straighten) your arms overhead, inhale as you lower the dumbbell behind your head.",
    cues: [
      "Keep your elbows pointed at the ceiling and close to your head — they should not flare out to the sides",
      "Only your forearms move — lower the dumbbell behind your head by bending at the elbow, then extend to full lockout",
      "Squeeze the triceps hard at the top and hold for a beat before lowering again",
    ],
    commonFaults: [
      { fault: "Elbows flaring out wide to the sides", consequence: "Reduces tricep activation and can strain the shoulder joint under load", fix: "Imagine your elbows are on rails pointing at the ceiling — squeeze them inward as if holding a basketball between your forearms" },
      { fault: "Using the shoulders to press the weight instead of isolating the triceps", consequence: "The triceps do not get enough work and the shoulders take over, defeating the purpose of the exercise", fix: "Keep your upper arms completely still — the only joint that should move is the elbow" },
      { fault: "Arching the lower back under load", consequence: "Puts compressive force on the lumbar spine and means your core is not doing its job", fix: "Brace your abs before every rep, pull your ribs down, or sit on a bench with back support to remove the temptation to lean" },
    ],
    scaling: {
      easier: [
        { movement: "Lying tricep extension / skull crusher (lying on a bench, lowering to your forehead)", when: "Overhead position is uncomfortable for your shoulders or you cannot keep your core stable" },
        { movement: "Cable tricep pushdown", when: "You want an easier way to isolate the triceps without the balance demands of a dumbbell overhead" },
        { movement: "Banded overhead tricep extension", when: "Dumbbells are too heavy in the available increments — bands let you fine-tune the resistance" },
      ],
      harder: [
        { movement: "Single-arm overhead dumbbell extension", when: "You want to address side-to-side strength imbalances" },
        { movement: "Incline dumbbell tricep extension (lying face-up on an incline bench, arms overhead)", when: "You want a greater stretch on the long head of the triceps for more growth stimulus" },
        { movement: "Close-grip dumbbell press", when: "You want to load the triceps heavier than an isolation exercise allows" },
      ],
    },
  },

  // ---- Lateral Raise ----
  {
    name: "Lateral Raise",
    category: "dumbbell",
    primaryMuscles: ["lateral deltoids", "upper traps"],
    setup: "Stand with your feet hip-width apart, a light dumbbell in each hand at your sides. Keep a slight bend in your elbows — about 15 to 20 degrees — and maintain that bend throughout the movement.",
    breathingCue: "Exhale as you raise the dumbbells out to the sides, inhale as you lower them back down.",
    cues: [
      "Lead with your elbows, not your hands — imagine pouring water out of a pitcher at the top",
      "Raise to shoulder height and no higher — going above the shoulder shifts work to the traps",
      "Control the weight on the way down for at least 2 seconds — do not just drop your arms",
    ],
    commonFaults: [
      { fault: "Shrugging the traps — shoulders creep up toward the ears", consequence: "The upper traps take over and the lateral delts, which you are trying to target, do very little work", fix: "Before each rep, actively push your shoulders down away from your ears and keep them there as you raise" },
      { fault: "Swinging or using momentum to get the weight up", consequence: "Reduces time under tension on the delts and can strain the rotator cuff", fix: "Use a lighter weight and add a 1-second pause at the top — if you cannot hold it there, the weight is too heavy" },
      { fault: "Raising the dumbbells in front of the body instead of to the sides", consequence: "Turns the movement into a front raise and trains the wrong part of the shoulder", fix: "Raise your arms directly out to the sides in line with your ears, not in front of your chest" },
    ],
    scaling: {
      easier: [
        { movement: "Cable lateral raise (one arm at a time)", when: "You want constant tension throughout the movement, which is easier to feel than a dumbbell" },
        { movement: "Lean-away lateral raise (hold a rack or pole with one hand for support)", when: "You struggle with balance or want to isolate one side at a time" },
        { movement: "Lighter dumbbells with a 2-second pause at the top", when: "Available dumbbells are too heavy for strict form — slow it down to make less weight harder" },
      ],
      harder: [
        { movement: "1.5-rep lateral raise (full rep up, half-way down, back up, then all the way down = 1 rep)", when: "You want to significantly increase time under tension without adding weight" },
        { movement: "Drop set lateral raise (start heavy, reduce weight twice with no rest)", when: "You want a high-fatigue finisher for shoulder growth" },
        { movement: "Slow eccentric lateral raise (5-second lower on every rep)", when: "You want to build more control and muscle without needing heavier dumbbells" },
      ],
    },
  },

  // ---- Dumbbell Lunge ----
  {
    name: "Dumbbell Lunge",
    category: "dumbbell",
    primaryMuscles: ["quadriceps", "glutes", "hamstrings", "core"],
    setup: "Stand tall with a dumbbell in each hand, arms at your sides, shoulders packed down and back. Feet start hip-width apart.",
    breathingCue: "Inhale as you step forward and lower into the lunge, exhale as you drive through your front heel to return to standing.",
    cues: [
      "Step far enough forward that both knees form roughly 90-degree angles at the bottom",
      "Back knee lightly taps the floor — do not slam it down",
      "Push through the front heel to drive back to the starting position — keep your torso upright the whole time",
    ],
    commonFaults: [
      { fault: "Torso leaning forward over the front knee", consequence: "Shifts load to the lower back and reduces how much the glutes and quads work", fix: "Think about staying tall through the crown of your head — your chest should face the wall in front of you, not the floor" },
      { fault: "Short stepping so the front knee shoots way past the toes", consequence: "Puts excessive shearing force on the front knee", fix: "Take a longer step — at the bottom, your front shin should be close to vertical" },
      { fault: "Feet landing on the same line like a tightrope, causing wobbling", consequence: "Makes balance very difficult and wastes energy stabilizing side to side", fix: "Keep your feet hip-width apart — imagine standing on railroad tracks, not a tightrope" },
    ],
    scaling: {
      easier: [
        { movement: "Bodyweight lunge (no dumbbells)", when: "The added weight causes form breakdown or you are still learning the stepping pattern" },
        { movement: "Reverse dumbbell lunge (step backward instead of forward)", when: "Forward lunges feel unstable or bother your knees — stepping back gives you more control" },
        { movement: "Static split squat with dumbbells (feet stay in place, just go up and down)", when: "The stepping component is too challenging and you want to build leg strength in a stable position" },
      ],
      harder: [
        { movement: "Walking dumbbell lunge (step forward each rep, do not return to start)", when: "You can do 3 sets of 12 stationary lunges per leg with good form" },
        { movement: "Overhead dumbbell lunge (press one or both dumbbells overhead while lunging)", when: "You want to challenge shoulder stability and core bracing at the same time" },
        { movement: "Deficit reverse lunge (front foot on a low platform or plate)", when: "You want a greater range of motion to challenge your glutes and quads through a deeper stretch" },
      ],
    },
  },

  // ---- Incline Dumbbell Press ----
  {
    name: "Incline Dumbbell Press",
    category: "dumbbell",
    primaryMuscles: ["upper chest", "front deltoids", "triceps"],
    setup: "Set an adjustable bench to 30-45 degrees. Sit back with a dumbbell in each hand, feet flat on the floor. Start with the dumbbells at chest height just outside your shoulders, palms facing forward.",
    breathingCue: "Inhale as you lower the dumbbells to your upper chest, exhale as you press them up.",
    cues: [
      "Retract your shoulder blades into the bench — the same way you would for a flat bench press",
      "Press up and slightly in so the dumbbells come together over your upper chest, not over your face",
      "Lower until your upper arms are roughly level with the bench, then press back up with control",
    ],
    commonFaults: [
      { fault: "Bench angle set too high (60+ degrees), turning it into a shoulder press", consequence: "The upper chest gets very little work and the front delts take over completely", fix: "Set the bench to 30-45 degrees — if you feel it mostly in your shoulders, lower the angle" },
      { fault: "Flaring the elbows straight out to 90 degrees from the torso", consequence: "Puts the shoulder joint in a vulnerable position and can cause impingement over time", fix: "Tuck your elbows to about 45 degrees from your body — think about making an arrow shape, not a T shape" },
      { fault: "Pressing the dumbbells forward over the face instead of over the upper chest", consequence: "Reduces chest engagement and puts unnecessary strain on the front deltoids", fix: "At lockout, the dumbbells should be directly above your collarbone, not above your chin or forehead" },
    ],
    scaling: {
      easier: [
        { movement: "Incline push-ups (hands on a bench or box)", when: "You are not strong enough to press dumbbells with good form on an incline bench" },
        { movement: "Machine incline chest press", when: "You want the same angle and muscle emphasis without the stabilization demands of free weights" },
        { movement: "Flat dumbbell bench press", when: "The incline angle causes shoulder discomfort — build flat pressing strength first" },
      ],
      harder: [
        { movement: "Paused incline dumbbell press (3-second hold at the bottom)", when: "You can do 3 sets of 10 and want to build more strength in the stretched position" },
        { movement: "Single-arm incline dumbbell press", when: "You want to add a core anti-rotation challenge and address any strength imbalance between sides" },
        { movement: "Incline dumbbell press with slow eccentric (4-second lower)", when: "You want to increase time under tension and muscle growth stimulus without adding more weight" },
      ],
    },
  },

  // ---- Single-Leg Romanian Deadlift ----
  {
    name: "Single-Leg Romanian Deadlift",
    category: "dumbbell",
    primaryMuscles: ["hamstrings", "glutes", "lower back", "core"],
    setup: "Stand on one leg with a slight bend in the knee. Hold a dumbbell in the hand opposite to your standing leg. Let the other arm extend out to the side for balance if needed.",
    breathingCue: "Inhale as you hinge forward, exhale as you squeeze your glutes and stand back up.",
    cues: [
      "Hinge at the hip by pushing your hips straight back — the dumbbell slides down your standing leg as your free leg extends behind you",
      "Keep your back flat from your head to your tailbone the entire time — your back and free leg should form a straight line at the bottom",
      "Drive through your standing heel and squeeze your glute hard to return to the top",
    ],
    commonFaults: [
      { fault: "Rounding the back instead of hinging at the hip", consequence: "Loads the spine instead of the hamstrings and glutes, which can lead to lower back strain", fix: "Think about reaching your chest forward and your free leg backward at the same time — this keeps the spine neutral" },
      { fault: "Opening the hips — the free leg rotates outward and the hip of the trailing leg rises", consequence: "Turns the movement into a rotation exercise and takes work away from the hamstrings and glutes", fix: "Point the toes of your trailing foot straight down at the floor as if you have a headlight on your kneecap shining at the ground" },
      { fault: "Losing balance and wobbling through every rep", consequence: "You cannot load the movement effectively and the stabilizer muscles fatigue before the prime movers get enough work", fix: "Fix your gaze on a point on the floor about six feet in front of you, keep a slight bend in the standing knee, and slow the movement way down" },
    ],
    scaling: {
      easier: [
        { movement: "Kickstand Romanian deadlift (trail foot stays on the ground with toes down for light support)", when: "You cannot balance on one leg long enough to complete a rep with good form" },
        { movement: "Two-leg dumbbell Romanian deadlift", when: "The single-leg balance demand is too high — build the hinge pattern on two feet first" },
        { movement: "Single-leg RDL holding a rack or wall for balance with your free hand", when: "You want to practice the single-leg pattern but need support to learn it" },
      ],
      harder: [
        { movement: "Single-leg RDL with two dumbbells (one in each hand)", when: "You have mastered the balance and want to load the movement heavier" },
        { movement: "Single-leg RDL with a barbell", when: "You want maximum loading and have excellent balance and hip hinge mechanics" },
        { movement: "Single-leg RDL with a slow eccentric (5-second lower)", when: "You want to increase difficulty and time under tension without adding more weight" },
      ],
    },
  },

  // ---- Dumbbell Pullover ----
  {
    name: "Dumbbell Pullover",
    category: "dumbbell",
    primaryMuscles: ["lats", "chest", "serratus anterior", "triceps (long head)"],
    setup:
      "Lie perpendicular across a flat bench so only your upper back and shoulders are supported. Plant your feet flat on the floor with your hips slightly lower than the bench. Hold one dumbbell with both hands, palms pressing against the underside of the top plate. Start with the dumbbell directly over your chest, arms nearly straight with a slight bend in the elbows.",
    breathingCue:
      "Inhale deeply as you lower the dumbbell behind your head — let the ribcage expand. Exhale as you pull the weight back over your chest.",
    cues: [
      "Keep a slight bend in your elbows and lock that angle — the movement happens at the shoulder, not the elbow",
      "Lower the dumbbell behind your head in a slow arc until you feel a deep stretch in your lats and chest",
      "Pull the dumbbell back over your chest by squeezing your lats and pressing through your palms",
      "Keep your hips slightly dropped — do not let them rise up as you lower the weight",
    ],
    commonFaults: [
      {
        fault: "Bending the elbows excessively and turning the pullover into a tricep extension",
        consequence:
          "Removes the stretch on the lats and chest and shifts the load to the triceps",
        fix: "Lock a slight bend in your elbows at the start and maintain that exact angle throughout. Think about moving from the shoulders, not the elbows",
      },
      {
        fault: "Hips rise up as the weight goes behind the head",
        consequence:
          "Reduces the stretch on the lats and decreases range of motion — you cheat yourself out of the best part of the exercise",
        fix: "Actively drop your hips slightly below the bench and keep them there. If your hips keep rising, the weight is too heavy",
      },
      {
        fault: "Using too much weight and rushing through a short range of motion",
        consequence:
          "The pullover is a stretch-focused movement — cutting range of motion defeats the purpose",
        fix: "Use a moderate weight and lower the dumbbell until you feel a strong stretch in your lats. Control the eccentric for 2-3 seconds",
      },
    ],
    scaling: {
      easier: [
        { movement: "Straight-arm cable pulldown", when: "You want a similar lat-focused movement with constant tension and no balance demand" },
        { movement: "Pullover with a lighter dumbbell or plate", when: "The standard dumbbell is too heavy — start light and prioritize the stretch" },
        { movement: "Pullover lying flat on the bench (not perpendicular)", when: "The perpendicular position is uncomfortable or you are still learning the movement" },
      ],
      harder: [
        { movement: "Decline dumbbell pullover", when: "You want to increase the range of motion and stretch by changing the angle" },
        { movement: "Pullover with slow eccentric (4-5 second lower)", when: "You want to maximize the stretch-under-tension stimulus" },
        { movement: "Barbell pullover", when: "You have mastered the dumbbell version and want to load the movement heavier with a barbell" },
      ],
    },
  },

  // ---- Hammer Curl ----
  {
    name: "Hammer Curl",
    category: "dumbbell",
    primaryMuscles: ["brachioradialis", "biceps", "brachialis"],
    setup:
      "Stand tall with a dumbbell in each hand, arms hanging at your sides. Palms face each other (neutral grip) and stay that way for the entire movement. Feet hip-width apart, core braced, shoulders pulled back.",
    breathingCue:
      "Exhale as you curl the dumbbells up. Inhale as you lower them back down under control.",
    cues: [
      "Keep your palms facing each other throughout — do not rotate your wrists at any point",
      "Curl by bending at the elbow only — your upper arms should stay pinned to your sides",
      "Squeeze at the top when your forearms are roughly vertical, then lower slowly for 2-3 seconds",
    ],
    commonFaults: [
      {
        fault: "Swinging the dumbbells up using body momentum",
        consequence:
          "Takes the load off the biceps and forearms and puts it on your lower back and shoulders",
        fix: "Pin your elbows to your ribs and curl without any body swing. If you cannot complete the rep without swinging, the weight is too heavy",
      },
      {
        fault: "Elbows drifting forward in front of the body during the curl",
        consequence:
          "Shifts the work to the front delts and reduces tension on the biceps at the top",
        fix: "Keep your elbows directly at your sides or slightly behind your torso. Think about only hinging at the elbow joint",
      },
      {
        fault: "Dropping the dumbbells quickly on the way down instead of controlling the eccentric",
        consequence:
          "You lose half the muscle-building stimulus and increase stress on the elbow joint",
        fix: "Lower the dumbbells for a full 2-3 seconds on every rep — the lowering phase is where a lot of the growth happens",
      },
    ],
    scaling: {
      easier: [
        { movement: "Seated Hammer Curl", when: "You tend to swing the weights when standing — sitting removes the temptation to use body momentum" },
        { movement: "Cable Rope Hammer Curl", when: "You want constant tension throughout the range of motion" },
      ],
      harder: [
        { movement: "Incline Hammer Curl (seated on a 45-degree bench)", when: "You want a deeper stretch on the biceps at the bottom by starting with your arms behind your torso" },
        { movement: "Cross-body Hammer Curl", when: "You want to emphasize the brachialis and add a slight angle change to the movement" },
        { movement: "Slow eccentric Hammer Curl (5 seconds down)", when: "You want to increase time under tension without adding more weight" },
      ],
    },
  },

  // ---- Reverse Lunge (Dumbbell) ----
  {
    name: "Reverse Lunge (Dumbbell)",
    category: "dumbbell",
    primaryMuscles: ["quads", "glutes", "hamstrings", "core"],
    setup:
      "Stand tall holding a dumbbell in each hand at your sides. Feet hip-width apart, chest up, shoulders back. Pick a point on the wall at eye level and keep your gaze there throughout the set.",
    breathingCue:
      "Inhale as you step back and lower into the lunge. Exhale as you drive through your front foot to return to standing.",
    cues: [
      "Step straight back — not out to the side or across your body — and land on the ball of your back foot",
      "Lower your back knee straight down toward the floor until both knees form roughly 90-degree angles",
      "Keep 80% of your weight on the front foot — drive through the whole front foot to stand back up",
      "Keep your torso upright throughout — do not lean forward over the front knee",
    ],
    commonFaults: [
      {
        fault: "Front knee collapses inward as you step back",
        consequence:
          "Puts shearing force on the knee joint and reduces glute engagement",
        fix: "Actively push your front knee out over your pinky toe as you lower. If it keeps caving, narrow your step slightly and reduce the weight",
      },
      {
        fault: "Stepping too far back or not far enough, causing imbalanced positions",
        consequence:
          "Too far back shifts the load to the hip flexors; too short puts excessive stress on the front knee",
        fix: "Find a step length where both knees hit 90 degrees at the bottom — practice with bodyweight first to find your ideal distance",
      },
      {
        fault: "Torso falls forward over the front thigh",
        consequence:
          "Overloads the lower back and reduces quad and glute activation",
        fix: "Think 'chest proud' and keep your eyes on a fixed point at eye level. If you keep tipping, your core may be the weak link — reduce the weight and add core work",
      },
    ],
    scaling: {
      easier: [
        { movement: "Bodyweight Reverse Lunge", when: "You are learning the stepping pattern and balance before adding load" },
        { movement: "Reverse Lunge holding one dumbbell goblet-style", when: "Two dumbbells feel unwieldy — a single weight in front provides a counterbalance" },
        { movement: "Static Split Squat (both feet stay planted)", when: "The stepping motion is too challenging for your balance — removing the step lets you focus on the lowering and pressing" },
      ],
      harder: [
        { movement: "Deficit Reverse Lunge (front foot on a 2-4 inch platform)", when: "You want more range of motion and a deeper stretch on the hip flexors and glutes" },
        { movement: "Barbell Reverse Lunge", when: "You have mastered the dumbbell version and want to load the movement heavier" },
        { movement: "Walking Lunge", when: "You want the added challenge of continuous forward movement with no reset between reps" },
      ],
    },
  },

  // ---- Dumbbell Floor Press ----
  {
    name: "Dumbbell Floor Press",
    category: "dumbbell",
    primaryMuscles: ["chest", "triceps", "front deltoids"],
    setup:
      "Lie flat on the floor with your knees bent and feet flat. Hold a dumbbell in each hand and press them up to full lockout over your chest. Your upper arms will touch the floor at the bottom of each rep — that is your range-of-motion endpoint. Tuck your shoulder blades under you as much as possible.",
    breathingCue:
      "Inhale as you lower the dumbbells until your upper arms gently touch the floor. Exhale as you press the dumbbells back up to lockout.",
    cues: [
      "Lower the dumbbells until your upper arms rest on the floor — pause briefly, do not bounce off the ground",
      "Press straight up and slightly inward so the dumbbells finish over your chest, not your face",
      "Keep your elbows at about 45 degrees from your torso — not flared out wide",
      "Squeeze your chest and triceps hard at lockout before starting the next rep",
    ],
    commonFaults: [
      {
        fault: "Bouncing the upper arms off the floor to use momentum",
        consequence:
          "Removes the dead-stop benefit of the floor press and risks elbow or shoulder impact injuries",
        fix: "Let your upper arms gently touch the floor and pause for a full second before pressing — treat each rep as starting from a dead stop",
      },
      {
        fault: "Elbows flared out to 90 degrees",
        consequence:
          "Puts excessive stress on the shoulder joint, especially without a bench to provide upper back support",
        fix: "Tuck your elbows to 45 degrees from your body — think about making an arrow shape with your torso and arms, not a T-shape",
      },
      {
        fault: "Pressing the dumbbells over the face instead of the chest",
        consequence:
          "Shifts the load to the front delts and reduces chest activation",
        fix: "Press up and slightly toward your hips so the dumbbells finish directly over your chest at lockout",
      },
    ],
    scaling: {
      easier: [
        { movement: "Floor Press with lighter dumbbells or kettlebells", when: "You are learning the dead-stop pressing pattern from the floor" },
        { movement: "Push-up (from knees if needed)", when: "You do not have dumbbells or want to build pressing strength with bodyweight first" },
      ],
      harder: [
        { movement: "Barbell Floor Press", when: "You want to load the movement heavier than dumbbells allow" },
        { movement: "Single-Arm Dumbbell Floor Press", when: "You want to challenge core anti-rotation while pressing and address side-to-side imbalances" },
        { movement: "Floor Press with a 3-second pause on the floor", when: "You want to eliminate the stretch reflex completely and build pure concentric pressing strength" },
      ],
    },
  },

  // ---- Arnold Press ----
  {
    name: "Arnold Press",
    category: "dumbbell",
    primaryMuscles: ["anterior deltoids", "lateral deltoids", "triceps"],
    setup:
      "Sit on an upright bench with back support or stand with feet hip-width apart. Hold a dumbbell in each hand at shoulder height with your palms facing you, like the top position of a curl. Elbows close together in front of your chest.",
    breathingCue:
      "Inhale at the starting position. Exhale as you rotate and press the dumbbells overhead. Inhale as you reverse the rotation back to the start.",
    cues: [
      "Start with palms facing you, elbows together in front — then rotate your palms outward as you press up",
      "The rotation and the press happen simultaneously — it is one smooth motion, not rotate then press",
      "Finish with palms facing forward and arms fully locked out overhead, biceps near your ears",
      "Reverse the motion on the way down — palms rotate back to face you as you return to the start",
    ],
    commonFaults: [
      {
        fault: "Separating the rotation from the press into two distinct movements",
        consequence:
          "Loses the continuous tension and unique shoulder engagement that makes the Arnold Press effective",
        fix: "Practice with light weight and focus on making it one seamless motion — as your arms go up, your palms rotate. They start and finish together",
      },
      {
        fault: "Not rotating fully — palms end up sideways at the top instead of facing forward",
        consequence:
          "Reduces lateral deltoid engagement and turns it into a standard shoulder press",
        fix: "Finish each rep with your palms fully facing forward. Use a mirror to check your top position until the full rotation becomes automatic",
      },
      {
        fault: "Arching the lower back excessively to press the weight overhead",
        consequence:
          "Compresses the lumbar spine and shifts the exercise into an incline press pattern",
        fix: "Brace your core, tuck your ribs down, and use a bench with back support. If you are arching, the weight is too heavy",
      },
    ],
    scaling: {
      easier: [
        { movement: "Seated Dumbbell Shoulder Press (no rotation)", when: "You want to build basic overhead pressing strength before adding the rotation component" },
        { movement: "Arnold Press with light dumbbells (5-10 lbs)", when: "You are learning the rotation pattern and do not need heavy load yet" },
      ],
      harder: [
        { movement: "Standing Arnold Press", when: "You want to add a core stability demand by removing the back support of the bench" },
        { movement: "Arnold Press with a slow eccentric (4-second lower with rotation)", when: "You want to increase time under tension through the full rotation" },
        { movement: "Single-Arm Arnold Press", when: "You want to challenge core anti-lateral-flexion and address strength imbalances between shoulders" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// CONDITIONING (8 entries — Kettlebell Swing moved to kettlebell category)
// ---------------------------------------------------------------------------

const conditioning: MovementCueData[] = [
  // ---- Running ----
  {
    name: "Running",
    category: "conditioning",
    primaryMuscles: ["quadriceps", "hamstrings", "glutes", "calves", "hip flexors"],
    setup: "Stand tall with a slight forward lean from the ankles (not the waist). Arms bent at roughly 90 degrees, hands relaxed. If on a treadmill, set your desired speed; if outdoors, pick a route or distance before you start.",
    breathingCue: "Breathe rhythmically — inhale for 2-3 foot strikes, exhale for 2-3 foot strikes. Breathe through both your nose and mouth at higher intensities.",
    cues: [
      "Land with your foot under your hips — not out in front (overstriding)",
      "Run tall — slight forward lean from the ankles, not the waist",
      "Arms drive forward and back, not across the body",
      "Quick cadence — aim for 170-180 steps per minute",
    ],
    commonFaults: [
      { fault: "Heel-striking way out in front of the body", consequence: "Creates a braking force with every step that slows you down and increases impact on the knees and shins", fix: "Focus on landing with your foot directly beneath your center of mass — shorten your stride and increase your cadence" },
      { fault: "Bouncing up and down excessively", consequence: "Wasted vertical energy that should be directed forward — makes running less efficient and more tiring", fix: "Think about running 'smooth and low' — your head should stay at roughly the same height throughout your stride" },
      { fault: "Tension in the shoulders and hands", consequence: "Wastes energy and can cause neck and upper back tightness during longer runs", fix: "Relax your hands like you are holding potato chips you do not want to crush — drop your shoulders away from your ears periodically" },
    ],
    scaling: {
      easier: [
        { movement: "Run/walk intervals (e.g., 1 min run, 1 min walk)", when: "You cannot sustain running for the prescribed duration without form breaking down" },
        { movement: "Slower pace / conversational pace", when: "You are building an aerobic base and should be able to hold a conversation while running" },
        { movement: "Incline treadmill walk", when: "Running is not accessible due to joint issues — walking on an incline provides a similar cardiovascular stimulus" },
      ],
      harder: [
        { movement: "Interval sprints (e.g., 400m repeats)", when: "Steady-state running is easy and you want to build speed and anaerobic capacity" },
        { movement: "Hill sprints", when: "You want to build explosive leg power and conditioning simultaneously" },
        { movement: "Tempo runs (sustained comfortably hard pace)", when: "You want to raise your lactate threshold and improve your ability to hold a faster pace" },
      ],
    },
  },

  // ---- Rowing (Erg) ----
  {
    name: "Rowing (Erg)",
    category: "conditioning",
    primaryMuscles: ["quadriceps", "glutes", "lats", "biceps", "core"],
    setup: "Sit on the rower with feet strapped in at the ball of the foot. Grab the handle with an overhand grip, arms extended, knees bent, shins roughly vertical. Sit tall with your chest up — this is the catch position.",
    breathingCue: "Exhale during the drive phase as you push with your legs. Inhale during the recovery as you slide forward to the catch.",
    cues: [
      "Sequence: legs, back, arms — then reverse on the recovery",
      "Drive with your legs first — the handle doesn't move until legs are almost straight",
      "Lean back slightly at the finish — handle to your lower chest",
      "Slow recovery — the ratio should be 1:2 (quick drive, slow slide forward)",
    ],
    commonFaults: [
      { fault: "Pulling with the arms first before the legs engage", consequence: "Your arms are far weaker than your legs — you lose power and fatigue your biceps early", fix: "Think 'legs, back, arms' on the drive. The arms stay straight until the legs are nearly extended" },
      { fault: "Shooting the seat — legs extend but the handle stays in place", consequence: "Your legs do the work but the energy is not transferred to the handle — the back takes over", fix: "Maintain connection between your feet and the handle — as your legs push, your body and the handle should move together" },
      { fault: "Hunching the back and collapsing the chest", consequence: "Rounds the spine under load and reduces breathing capacity", fix: "Sit tall at the catch, keep your chest open, and engage your core — think about showing the logo on your shirt to the monitor" },
    ],
    scaling: {
      easier: [
        { movement: "Lower damper setting (3-5 is fine for most people)", when: "You are new to rowing and want to focus on technique rather than resistance" },
        { movement: "Focus on stroke rate (18-22 SPM) over wattage", when: "You are learning the sequencing and need to slow down to get the order right" },
        { movement: "Short intervals with rest (500m on, 1 min off)", when: "You cannot maintain good form for a sustained piece" },
      ],
      harder: [
        { movement: "Sprint intervals (250m or 500m max effort)", when: "You want to build peak power and anaerobic capacity on the rower" },
        { movement: "Higher stroke rate work (26-32 SPM) with maintained power", when: "You want to improve your ability to produce power at a faster pace" },
        { movement: "Longer steady-state pieces (5K, 10K)", when: "You want to build aerobic endurance and mental toughness" },
      ],
    },
  },

  // ---- Assault / Echo Bike ----
  {
    name: "Assault / Echo Bike",
    category: "conditioning",
    primaryMuscles: ["quadriceps", "glutes", "hamstrings", "shoulders", "core"],
    setup: "Adjust the seat height so you have a slight bend in your knee at the bottom of the pedal stroke. Sit on the seat, grip the handles, and place your feet on the pedals. Start pedaling to begin — the fan provides the resistance.",
    breathingCue: "Breathe rhythmically — do not hold your breath. At high intensities, use forceful exhales through the mouth on every pedal push.",
    cues: [
      "Drive hard with your legs — the arms are secondary",
      "Stay seated — your power comes from the hips and quads",
      "Push and pull the handles — active arms, not just holding on",
      "Pace yourself — the bike punishes you for going out too hard",
    ],
    commonFaults: [
      { fault: "Going all-out in the first 10 seconds and dying", consequence: "The fan resistance scales exponentially — a sprint start creates an oxygen debt you cannot recover from mid-set", fix: "Start at 70-80% effort for the first quarter of the work period, then build — negative splits are the goal" },
      { fault: "Standing up on the pedals for sustained efforts", consequence: "Less efficient than staying seated and burns out your legs faster", fix: "Stay seated and focus on driving through the pedals with your legs — stand only for very short max-effort bursts" },
      { fault: "Only using arms or only using legs", consequence: "You leave power on the table and fatigue one set of muscles faster than necessary", fix: "Push and pull the handles in sync with your legs — treat it as a full-body machine" },
    ],
    scaling: {
      easier: [
        { movement: "Lower RPM at a steady pace", when: "You are building a conditioning base and need to keep the intensity manageable" },
        { movement: "Interval work with generous rest (10 cal on, 1 min off)", when: "You cannot sustain effort on the bike for the full prescribed duration" },
        { movement: "Arms only or legs only to learn the machine", when: "You are new to the air bike and need to learn each component separately" },
      ],
      harder: [
        { movement: "Max-calorie intervals (e.g., 15 sec sprint / 45 sec rest)", when: "You want to build peak anaerobic power output" },
        { movement: "Longer sustained efforts (5 min for max calories)", when: "You want to build mental toughness and sustained power endurance" },
        { movement: "Tabata protocol (20 sec on / 10 sec off x 8 rounds)", when: "You want a brutally efficient conditioning session in under 5 minutes" },
      ],
    },
  },

  // ---- Jump Rope / Double Unders ----
  {
    name: "Jump Rope / Double Unders",
    category: "conditioning",
    primaryMuscles: ["calves", "shoulders", "forearms", "core"],
    setup: "Stand tall with the rope handles in each hand, elbows bent and pinned to your sides. The rope should be long enough that when you step on it with one foot, the handles reach your armpits. Start with the rope behind your heels.",
    breathingCue: "Breathe in a steady, controlled rhythm — short nasal inhales and mouth exhales. Do not hold your breath, especially during double unders.",
    cues: [
      "Elbows pinned to your sides — wrists do the spinning, not your shoulders",
      "Jump just high enough for the rope to pass — stay on the balls of your feet",
      "For double unders: one big jump, fast wrists — flick, flick",
      "Stay relaxed — tight shoulders kill your rhythm",
    ],
    commonFaults: [
      { fault: "Donkey-kicking (feet fly behind you instead of jumping vertically)", consequence: "Disrupts timing, wastes energy, and makes it impossible to maintain a rhythm for double unders", fix: "Jump straight up and down — think about keeping your heels under your hips, not behind you" },
      { fault: "Big arm circles — moving the whole arm instead of just the wrist", consequence: "The rope becomes unpredictable and you gas out your shoulders before your legs", fix: "Pin your elbows to your sides and only flick your wrists — practice with your elbows touching your torso" },
      { fault: "Piking at the hips in the air", consequence: "Pulls your body out of alignment and makes the rope catch on your feet", fix: "Stay tall and tight — squeeze your core and keep your body in a straight line from head to toes during each jump" },
    ],
    scaling: {
      easier: [
        { movement: "Single unders", when: "You are still learning rope timing and coordination" },
        { movement: "Penguin taps (no rope, slap thighs twice per jump to practice timing)", when: "You want to learn the double under rhythm without the frustration of tripping on the rope" },
        { movement: "Slow single-single-double rhythm", when: "You can do single unders well and want a bridge to unbroken double unders" },
      ],
      harder: [
        { movement: "Unbroken double unders for time", when: "You can string together 10+ double unders and want to build endurance with them" },
        { movement: "Triple unders", when: "Double unders are easy for 50+ unbroken and you want an elite-level coordination challenge" },
        { movement: "Crossover double unders", when: "You want to add a coordination and wrist-speed challenge on top of the double under" },
      ],
    },
  },

  // ---- Sled Push ----
  {
    name: "Sled Push",
    category: "conditioning",
    primaryMuscles: ["quadriceps", "glutes", "calves", "core", "shoulders"],
    setup: "Load the sled with your desired weight. Position yourself behind the sled with your hands on the high or low handles. Lean into the sled at roughly 45 degrees with your arms extended, core braced, and feet staggered.",
    breathingCue: "Breathe rhythmically with each step — short, forceful exhales through the mouth. Do not hold your breath for the entire push.",
    cues: [
      "Arms extended, lean into the sled at a 45-degree angle",
      "Drive with your legs — powerful, quick steps",
      "Keep your head down and your back flat",
      "Push through the balls of your feet — sprint mechanics",
    ],
    commonFaults: [
      { fault: "Standing too upright while pushing", consequence: "You lose mechanical advantage and cannot transfer your leg drive into the sled effectively", fix: "Lean your body into the sled at a 45-degree angle — the lower you get, the more horizontal force you can produce" },
      { fault: "Shuffling instead of driving the knees forward", consequence: "Reduces power output and slows you down — you are pushing with your ankles instead of your hips", fix: "Think about sprinting — drive each knee forward aggressively and push off the ball of each foot" },
      { fault: "Holding your breath the entire push", consequence: "Spikes blood pressure, causes dizziness, and leads to early burnout", fix: "Breathe rhythmically with each step — exhale forcefully through your mouth on every push-off" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter load on the sled", when: "You cannot maintain a consistent pace or your form breaks down before finishing the distance" },
        { movement: "High handles (more upright position)", when: "The low handle position is too demanding on your back or you are new to sled work" },
        { movement: "Shorter distance (e.g., 25 ft instead of 50 ft)", when: "The full distance is too long to maintain good form and consistent effort" },
      ],
      harder: [
        { movement: "Heavy load with low handles", when: "You want to maximize leg drive and build raw pushing strength" },
        { movement: "Sprint sled push (light weight, max speed)", when: "You want to build acceleration and top-end speed with resistance" },
        { movement: "Sled push + drag combo (push down, pull back)", when: "You want to combine pushing and pulling in one brutal conditioning piece" },
      ],
    },
  },

  // ---- Ski Erg ----
  {
    name: "Ski Erg",
    category: "conditioning",
    primaryMuscles: ["lats", "triceps", "core", "glutes", "hamstrings"],
    setup:
      "Stand facing the Ski Erg with feet hip-width apart, roughly one arm's length from the machine. Reach up and grab both handles with a relaxed grip. Stand tall with a slight bend in your knees — you will hinge and extend on every pull.",
    breathingCue:
      "Exhale forcefully as you pull the handles down and hinge forward. Inhale as you stand back up and reach overhead for the next stroke.",
    cues: [
      "Initiate the pull by punching your hands down and hinging at the hips — your arms and torso work together",
      "Drive the handles past your hips with your arms while your torso folds forward to about 45 degrees",
      "Stand back up tall and let your arms sweep overhead in one fluid motion to start the next stroke",
      "Think about pulling with your whole body — lats, core, and hips — not just your arms",
    ],
    commonFaults: [
      {
        fault: "Pulling with just the arms and keeping the torso completely upright",
        consequence:
          "Limits power output, burns out the arms quickly, and misses the whole-body conditioning benefit",
        fix: "Hinge at the hips as you pull — your chest should fold toward your thighs at the bottom of each stroke. Think of it like a standing crunch combined with a pull",
      },
      {
        fault: "Bending the knees excessively and turning each stroke into a squat",
        consequence:
          "Wastes energy on unnecessary knee bend and takes tension off the lats and core",
        fix: "Keep a slight, consistent knee bend — your knees should not change angle much during the stroke. The movement comes from the hips and shoulders, not the knees",
      },
      {
        fault: "Short, choppy strokes instead of long, powerful pulls",
        consequence:
          "Reduces power per stroke and leads to a less efficient, more fatiguing effort",
        fix: "Reach fully overhead at the start and pull the handles all the way past your hips. Think 'long and powerful' rather than 'fast and short'",
      },
    ],
    scaling: {
      easier: [
        { movement: "Ski Erg at a low damper setting (1-3) with a slow pace", when: "You are learning the movement pattern and building endurance without high resistance" },
        { movement: "Banded pull-down (simulates the pull pattern)", when: "You do not have a Ski Erg and want to train a similar arm and lat pulling motion" },
      ],
      harder: [
        { movement: "Ski Erg intervals (30 seconds hard, 30 seconds easy)", when: "You want to build anaerobic capacity and push your power output on the machine" },
        { movement: "Ski Erg at high damper (8-10)", when: "You want a heavier, more strength-biased pull per stroke" },
        { movement: "Single-arm Ski Erg pulls (alternating arms)", when: "You want to challenge core anti-rotation and train each side independently" },
      ],
    },
  },

  // ---- Swimming (Freestyle) ----
  {
    name: "Swimming (Freestyle)",
    category: "conditioning",
    primaryMuscles: ["lats", "shoulders", "core", "hip flexors", "triceps"],
    setup:
      "Push off the wall in a streamlined position — arms extended overhead, biceps squeezing your ears, legs together. Begin your flutter kick first, then start your arm stroke. Keep your body horizontal in the water with your head in a neutral position, eyes looking at the bottom of the pool.",
    breathingCue:
      "Breathe by rotating your head to one side as the same-side arm exits the water — do not lift your head forward. Inhale quickly through your mouth, then exhale steadily through your nose and mouth into the water. Aim to breathe every 2-3 strokes.",
    cues: [
      "Enter the water with your fingertips first, reaching far forward — your hand should enter in line with your shoulder, not crossing the midline",
      "Pull through the water by sweeping your hand under your body from front to hip in an S-shaped path — think about grabbing the water and pushing it behind you",
      "Keep a steady, relaxed flutter kick originating from the hips, not the knees — your legs should be mostly straight with soft knees",
      "Rotate your whole body slightly with each stroke — you swim on your sides, not flat on your stomach",
    ],
    commonFaults: [
      {
        fault: "Lifting the head forward to breathe instead of rotating to the side",
        consequence:
          "Drops the hips and legs, creating drag and making every stroke harder. It also strains the neck over time",
        fix: "Rotate your head to the side — one goggle should stay in the water. Practice breathing drills with one arm extended to groove the side-rotation pattern",
      },
      {
        fault: "Hand crossing over the midline on entry",
        consequence:
          "Causes the body to snake through the water, wasting energy and reducing propulsion",
        fix: "Think about reaching for two separate tracks in front of you — each hand enters the water in line with its own shoulder, like train tracks",
      },
      {
        fault: "Kicking from the knees with big, splashy kicks",
        consequence:
          "Creates drag instead of propulsion and wastes a tremendous amount of energy",
        fix: "Kick from the hips with mostly straight legs and relaxed ankles. The kick should be small and fast — your feet should barely break the surface",
      },
    ],
    scaling: {
      easier: [
        { movement: "Kickboard laps (kick only)", when: "You want to build a proper flutter kick before adding the arm stroke" },
        { movement: "Side breathing drills with one arm extended", when: "Your breathing pattern is the limiting factor — isolate it before swimming full freestyle" },
        { movement: "Pool running or water walking", when: "You want a low-impact aquatic conditioning option without needing swim technique" },
      ],
      harder: [
        { movement: "Freestyle interval sets (50m fast / 50m easy)", when: "You want to build speed and anaerobic capacity in the pool" },
        { movement: "Pull buoy between legs (arms only, no kick)", when: "You want to isolate your upper body pull and build stroke power" },
        { movement: "Bilateral breathing (every 3 strokes, alternating sides)", when: "You want to develop balanced rotation and more advanced breath control" },
      ],
    },
  },

  // ---- Indoor Cycling / Spin ----
  {
    name: "Indoor Cycling / Spin",
    category: "conditioning",
    primaryMuscles: ["quads", "glutes", "hamstrings", "calves", "core"],
    setup:
      "Adjust the seat height so your knee has a slight bend (about 25-35 degrees) at the bottom of the pedal stroke. Set the handlebars at a height where you can maintain a flat back without straining your neck. Clip in or strap your feet into the pedals. Start with a moderate resistance where you can maintain 80-90 RPM comfortably.",
    breathingCue:
      "Breathe rhythmically — inhale for 2-3 pedal strokes, exhale for 2-3 pedal strokes. At high intensities, let your breathing rate increase naturally but keep it controlled and rhythmic.",
    cues: [
      "Push down and pull up in a smooth circular motion — think about scraping mud off the bottom of your shoe at the bottom of the stroke",
      "Keep your cadence between 80-100 RPM for steady-state work and 60-80 RPM for heavy resistance climbing",
      "Keep your upper body quiet — no rocking side to side. Grip the handlebars lightly, relax your shoulders",
      "Maintain a flat back with a slight forward lean from the hips — do not round your lower back",
    ],
    commonFaults: [
      {
        fault: "Seat too high or too low",
        consequence:
          "Too high causes hip rocking and hamstring strain; too low causes knee pain and limits power output",
        fix: "Stand next to the bike — the seat should be at hip bone height. When seated with your foot at the bottom of the stroke, your knee should have a 25-35 degree bend",
      },
      {
        fault: "Mashing the pedals with quads only instead of pedaling in circles",
        consequence:
          "Wastes energy, reduces power output, and over-stresses the quads while underusing the hamstrings and glutes",
        fix: "Think about the full pedal circle — push forward over the top, press down, scrape back at the bottom, and pull up. Practice single-leg drills to develop a smooth stroke",
      },
      {
        fault: "Bouncing in the saddle at high cadence with low resistance",
        consequence:
          "Means the resistance is too low for your cadence — you are not producing meaningful force and risk chafing or saddle sores",
        fix: "Add enough resistance that you feel connected to the pedals throughout the full revolution. You should never feel like the pedals are spinning away from you",
      },
    ],
    scaling: {
      easier: [
        { movement: "Easy spin at 70-80 RPM with low resistance", when: "You are new to cycling, recovering, or doing an active recovery session" },
        { movement: "Recumbent bike", when: "An upright position is uncomfortable for your back or you want more support" },
      ],
      harder: [
        { movement: "Interval sprints (30 sec max effort / 60 sec easy)", when: "You want to build anaerobic power and VO2max on the bike" },
        { movement: "Heavy resistance climbing at 60-70 RPM", when: "You want to build leg strength and muscular endurance with sustained high-force pedaling" },
        { movement: "Tabata-style cycling (20 sec all-out / 10 sec rest x 8)", when: "You want a brutally effective 4-minute conditioning finisher" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// CORE (10 entries — Plank is the definitive entry, moved from bodyweight)
// ---------------------------------------------------------------------------

const core: MovementCueData[] = [
  // ---- Plank ----
  {
    name: "Plank",
    category: "core",
    primaryMuscles: ["rectus abdominis", "transverse abdominis", "erector spinae", "obliques"],
    setup: "Place your elbows directly under your shoulders with forearms flat on the floor, parallel to each other. Extend your legs behind you and tuck your toes under. Lift your body off the ground so you form one straight line from the crown of your head to your heels.",
    breathingCue: "Breathe in steady, controlled cycles — short inhale through the nose, controlled exhale through the mouth. Do not hold your breath.",
    cues: [
      "Squeeze your glutes and quads hard — your entire body should be rigid, not just your abs",
      "Tuck your pelvis slightly to eliminate the arch in your lower back — think about pulling your belt buckle toward your chin",
      "Actively push the floor away through your forearms — don't sink between your shoulder blades",
      "Breathe normally — short, controlled breaths throughout the hold",
    ],
    commonFaults: [
      { fault: "Hips sagging toward the floor", consequence: "Dumps load into the lower back instead of the core — can cause back pain over time", fix: "Squeeze your glutes and tilt your pelvis under — if you still sag, switch to an easier variation and build up hold time there" },
      { fault: "Hips piking up too high (butt in the air)", consequence: "Makes the hold easier but removes the core training stimulus entirely", fix: "Have a training partner place a broomstick along your back — it should touch your head, upper back, and tailbone simultaneously" },
      { fault: "Holding your breath throughout the hold", consequence: "Spikes blood pressure and causes premature fatigue and dizziness", fix: "Count your breaths — aim for a steady rhythm of about 3 seconds in, 3 seconds out throughout the hold" },
    ],
    scaling: {
      easier: [
        { movement: "Incline plank (forearms on a bench)", when: "A floor plank causes your hips to sag within 10-15 seconds" },
        { movement: "Knee plank (knees on the floor, straight line from knees to shoulders)", when: "You can hold a bench plank for 30+ seconds but the floor version breaks down" },
        { movement: "Wall plank (forearms against a wall, body angled)", when: "You are returning from injury or just beginning core training" },
      ],
      harder: [
        { movement: "RKC plank (maximum full-body tension, shorter hold of 10-15 sec)", when: "You can hold a standard plank for 60+ seconds and want a more intense contraction" },
        { movement: "Weighted plank (plate placed on the upper back)", when: "You can hold a bodyweight plank with perfect form for 60+ seconds" },
        { movement: "Body-saw plank (slide forearms forward and back on sliders)", when: "You want to add dynamic movement and increase anti-extension challenge" },
      ],
    },
  },

  // ---- Dead Bug ----
  {
    name: "Dead Bug",
    category: "core",
    primaryMuscles: ["rectus abdominis", "transverse abdominis", "obliques", "hip flexors"],
    setup: "Lie on your back with your arms extended straight up toward the ceiling and your knees bent at 90 degrees over your hips. Press your lower back firmly into the floor — there should be zero space between your lumbar spine and the ground.",
    breathingCue: "Exhale as you extend your opposite arm and leg away from your body. Inhale as you return them to the start position. The exhale helps flatten your lower back into the floor.",
    cues: [
      "Press your low back into the floor — no arch, no daylight under your spine",
      "Extend opposite arm and leg slowly — exhale as you reach",
      "Move only as far as you can keep your back flat",
      "Think 'ribs down' — don't let your rib cage flare open",
    ],
    commonFaults: [
      { fault: "Lower back arching off the floor as the leg extends", consequence: "The core is no longer stabilizing the spine — the exercise becomes ineffective and can aggravate the lower back", fix: "Reduce the range of motion — only extend your leg as far as you can while keeping your lower back glued to the floor. Build range over time" },
      { fault: "Moving too fast and using momentum", consequence: "Removes the stability challenge that makes the dead bug effective — turns a control exercise into a flailing exercise", fix: "Take 3 seconds to extend and 3 seconds to return — if you cannot control it slowly, the exercise is still working" },
      { fault: "Holding the breath instead of actively exhaling on extension", consequence: "Loses the connection between breathing and core bracing — the exhale is what drives the core activation", fix: "Exhale through pursed lips as you extend — imagine you are blowing out through a straw. This forces your deep core to engage" },
    ],
    scaling: {
      easier: [
        { movement: "Legs-only dead bug (arms stay up, only extend legs)", when: "Coordinating opposite arm and leg is too complex initially" },
        { movement: "Reduced range of motion (don't extend leg all the way)", when: "Your lower back lifts off the floor before you reach full extension" },
        { movement: "Heel taps (bend the knee, tap the heel to the floor)", when: "You need an even simpler starting point that still teaches the back-flat position" },
      ],
      harder: [
        { movement: "Dead bug with band around hands (pulling overhead)", when: "You want to add an anti-extension pull that forces your core to work harder to keep your back flat" },
        { movement: "Dead bug holding a med ball between hand and opposite knee", when: "You want to add a coordination and bracing challenge by pressing the ball between opposing limbs" },
        { movement: "Weighted dead bug (hold a light dumbbell in the extending hand)", when: "You want to increase the demand on the core and shoulder stability simultaneously" },
      ],
    },
  },

  // ---- Pallof Press ----
  {
    name: "Pallof Press",
    category: "core",
    primaryMuscles: ["obliques", "transverse abdominis", "rectus abdominis", "hip stabilizers"],
    setup: "Stand perpendicular to a cable machine or anchored resistance band at chest height. Hold the handle or band with both hands at your sternum, elbows bent. Feet shoulder-width apart, knees slightly bent, core braced.",
    breathingCue: "Exhale as you press your hands away from your chest. Inhale as you return the handle to your sternum. Maintain steady breathing throughout the hold if doing isometric reps.",
    cues: [
      "Stand perpendicular to the cable — resist the rotation",
      "Press your hands straight out from your chest — slow and controlled",
      "Brace like someone is going to push you sideways",
      "Hold the extended position — don't let the cable pull you back",
    ],
    commonFaults: [
      { fault: "Rotating toward the cable or band anchor", consequence: "That is exactly what you are trying NOT to do — it means the resistance is too high or your core is not engaged", fix: "Reduce the weight, brace your core before you press, and keep your belly button pointed straight ahead the entire time" },
      { fault: "Stance too narrow — wobbling and losing balance", consequence: "An unstable base makes it impossible to resist the rotational pull effectively", fix: "Widen your feet to shoulder width or slightly beyond — you need a solid base to resist lateral forces" },
      { fault: "Rushing the reps and not holding the extended position", consequence: "Reduces the anti-rotation stimulus — this is a control exercise, not a speed exercise", fix: "Hold each press for 2-3 seconds at full extension before bringing the handle back to your chest" },
    ],
    scaling: {
      easier: [
        { movement: "Half-kneeling Pallof press (more stable base)", when: "You cannot resist the rotation while standing — the half-kneeling position lowers your center of gravity" },
        { movement: "Lighter band or cable weight", when: "You are getting pulled toward the anchor and cannot maintain neutral position" },
        { movement: "Pallof hold (just hold the extended position, no pressing)", when: "You want to build anti-rotation endurance before adding the press-and-return movement" },
      ],
      harder: [
        { movement: "Tall-kneeling Pallof press (both knees on the ground)", when: "You want to remove the base of support your legs provide and force your core to work harder" },
        { movement: "Pallof press with overhead reach", when: "You want to add an anti-extension challenge on top of the anti-rotation — the overhead reach lengthens the lever" },
        { movement: "Single-leg stance Pallof press", when: "You want the ultimate anti-rotation challenge by removing one foot from the ground" },
      ],
    },
  },

  // ---- Ab Wheel Rollout ----
  {
    name: "Ab Wheel Rollout",
    category: "core",
    primaryMuscles: ["rectus abdominis", "obliques", "lats", "shoulders"],
    setup: "Kneel on the floor with the ab wheel in front of you. Grip both handles and position the wheel directly beneath your shoulders. Tuck your pelvis into a posterior pelvic tilt before you begin — this protects your lower back.",
    breathingCue: "Inhale as you roll out and extend. Exhale as you contract your abs to pull yourself back to the start.",
    cues: [
      "Tuck your pelvis — posterior pelvic tilt before you roll out",
      "Roll out only as far as you can without your hips sagging",
      "Squeeze your abs to pull yourself back — don't yank with your hip flexors",
      "Keep your arms straight throughout the movement",
    ],
    commonFaults: [
      { fault: "Hips sagging at the bottom of the rollout", consequence: "The lower back takes over and is put into dangerous hyperextension under load", fix: "Only roll out as far as you can maintain a flat back and tucked pelvis — range of motion must be earned, not forced" },
      { fault: "Bending at the hips on the way back instead of using the abs", consequence: "The hip flexors do the work and the abs get almost no training stimulus", fix: "Think about pulling your belly button toward your spine and curling your hips under you as you return — the movement comes from your core, not your hips" },
      { fault: "Going too far too soon before building core strength", consequence: "Your core cannot handle the lever arm and your back takes over — this is how people hurt themselves with the ab wheel", fix: "Start with a wall in front of you to limit the range of motion — move the wheel 6 inches further from the wall as you get stronger" },
    ],
    scaling: {
      easier: [
        { movement: "Rollout to a wall (limits the range of motion)", when: "You cannot control the full range without your hips sagging" },
        { movement: "Stability ball rollout (larger surface, more control)", when: "The ab wheel is too unstable and you need more surface area to maintain balance" },
        { movement: "Barbell rollout (larger wheel = more stable)", when: "You do not have an ab wheel but have a barbell with round plates" },
      ],
      harder: [
        { movement: "Full standing rollout (from feet, not knees)", when: "Kneeling rollouts are easy for 3 sets of 12 — the standing version is an elite-level core exercise" },
        { movement: "Single-arm rollout", when: "You want to add an anti-rotation challenge on top of the anti-extension" },
        { movement: "Rollout with a weight vest", when: "You want to increase the load without changing the movement pattern" },
      ],
    },
  },

  // ---- Hanging Knee / Leg Raise ----
  {
    name: "Hanging Knee / Leg Raise",
    category: "core",
    primaryMuscles: ["rectus abdominis", "obliques", "hip flexors"],
    setup: "Hang from a pull-up bar with an overhand grip, arms fully extended, shoulders engaged (pulled down away from your ears). Feet off the ground, body still — start from a dead hang.",
    breathingCue: "Exhale as you curl your knees or legs up toward the bar. Inhale as you lower them back down with control.",
    cues: [
      "Dead hang — depress your shoulders, engage your lats",
      "Curl your pelvis up — don't just swing your legs",
      "Controlled on the way down — don't let momentum take over",
      "Exhale as you bring your knees or toes to the bar",
    ],
    commonFaults: [
      { fault: "Swinging excessively and using momentum instead of ab contraction", consequence: "The abs never actually contract against resistance — you are just using physics, not muscle", fix: "Pause for one second at the dead hang between reps to kill the swing — if you cannot raise your legs without swinging, use an easier variation" },
      { fault: "Only lifting the legs without curling the pelvis (hip flexor dominant)", consequence: "The hip flexors do all the work and the abs are barely involved — you feel it in your hip crease, not your abs", fix: "Focus on curling your pelvis toward your ribcage — the cue is 'show your belt buckle to the ceiling' at the top of the rep" },
      { fault: "Losing grip and dropping before the abs are fatigued", consequence: "Grip strength becomes the limiter and the core never gets enough work", fix: "Use straps or ab sling handles to take grip out of the equation — or work on grip strength separately with dead hangs" },
    ],
    scaling: {
      easier: [
        { movement: "Hanging knee raise (bent knees, shorter lever arm)", when: "Straight-leg raises are too difficult — bending the knees reduces the load on the core" },
        { movement: "Lying leg raise on the floor", when: "You cannot hang from a bar long enough or lack the grip strength" },
        { movement: "Captain's chair knee raise", when: "You want back support while building the strength to hang and raise your legs" },
      ],
      harder: [
        { movement: "Toes-to-bar (straight legs to the bar)", when: "Knee raises are easy for 15+ reps and you want to increase the range of motion and difficulty" },
        { movement: "Strict toes-to-bar (no kip)", when: "You can do kipping toes-to-bar and want pure core strength without momentum" },
        { movement: "Weighted hanging leg raise (dumbbell between feet)", when: "Bodyweight leg raises are easy for 12+ reps and you need more resistance" },
      ],
    },
  },

  // ---- Russian Twist ----
  {
    name: "Russian Twist",
    category: "core",
    primaryMuscles: ["obliques", "rectus abdominis", "hip flexors"],
    setup: "Sit on the floor with your knees bent and feet flat (or elevated for more challenge). Lean back to about a 45-degree angle, creating a V-shape with your torso and thighs. Hold a weight, medicine ball, or clasp your hands at your chest.",
    breathingCue: "Exhale as you rotate to each side. Inhale as you pass through center. Keep breathing steadily — do not hold your breath.",
    cues: [
      "Sit with a V-shape — lean back, feet off the floor (or down for stability)",
      "Rotate your entire torso — don't just move your arms",
      "Touch the weight to the ground on each side",
      "Keep your chest lifted — don't round forward",
    ],
    commonFaults: [
      { fault: "Only moving the arms side to side without actual trunk rotation", consequence: "The obliques are not trained because the torso is not rotating — the arms are just swinging", fix: "Turn your chest to face the wall on each side — your belly button should point to where the weight touches the ground" },
      { fault: "Rounding the back and collapsing the chest", consequence: "Puts strain on the lumbar spine and reduces oblique engagement", fix: "Lift your chest up and think about staying tall through the crown of your head — maintain the V-shape throughout" },
      { fault: "Going too fast and losing control", consequence: "Momentum takes over and the core does less work — also increases risk of lower back strain from jerky movement", fix: "Slow it down — take a full second to rotate to each side and pause briefly before rotating back" },
    ],
    scaling: {
      easier: [
        { movement: "Feet on the floor for stability", when: "Keeping your feet elevated causes you to fall backward or round your back" },
        { movement: "No weight — hands clasped together", when: "Adding a weight causes your form to break down or you cannot maintain the V-shape" },
        { movement: "Reduced range of rotation", when: "Full rotation to the floor causes lower back discomfort — rotate only as far as you can control" },
      ],
      harder: [
        { movement: "Feet elevated higher with weight", when: "The standard position is easy for 20+ reps per side" },
        { movement: "Heavier medicine ball or dumbbell", when: "You can maintain perfect form with the current weight for high reps" },
        { movement: "Decline Russian twist (on a decline bench)", when: "You want to increase the anti-flexion demand by adding gravity to the equation" },
      ],
    },
  },

  // ---- Copenhagen Plank ----
  {
    name: "Copenhagen Plank",
    category: "core",
    primaryMuscles: ["adductors", "obliques", "core", "glute medius"],
    setup:
      "Lie on your side and place your top foot or shin on a bench or sturdy elevated surface. Your bottom leg hangs free beneath the bench. Prop yourself up on your bottom forearm with your elbow directly under your shoulder. Stack your hips and lift them off the ground so your body forms a straight line from head to top foot.",
    breathingCue:
      "Breathe steadily throughout the hold — inhale through your nose, exhale through your mouth. Do not hold your breath. Keep your core braced on every exhale.",
    cues: [
      "Squeeze your top leg down into the bench to activate your adductors — they are doing most of the work",
      "Keep your hips stacked directly on top of each other — do not let your top hip roll forward or backward",
      "Maintain a straight line from your head through your hips to the bench — no sagging or piking",
    ],
    commonFaults: [
      {
        fault: "Hips sagging toward the ground",
        consequence:
          "Puts stress on the lower back and removes the adductor and core training stimulus",
        fix: "Squeeze your top leg harder into the bench and think about pushing your bottom hip toward the ceiling. If you cannot maintain the position, use the shorter lever variation with your knee on the bench instead of your foot",
      },
      {
        fault: "Top hip rolling forward, losing the stacked position",
        consequence:
          "Turns it into a partial plank and reduces the lateral core and adductor demand",
        fix: "Think about keeping your belly button pointed straight at the wall in front of you. Have someone check your hip alignment or use a mirror",
      },
      {
        fault: "Holding the breath and turning red",
        consequence:
          "Spikes blood pressure unnecessarily and limits how long you can hold the position",
        fix: "Breathe steadily and rhythmically — in through the nose, out through the mouth. Count your breaths to stay focused",
      },
    ],
    scaling: {
      easier: [
        { movement: "Copenhagen Plank with knee on bench (short lever)", when: "The full-length version is too demanding — placing the knee instead of the foot shortens the lever and reduces the load" },
        { movement: "Side Plank (feet on the floor)", when: "You are not ready for the adductor demand — a standard side plank builds the lateral core strength you need first" },
      ],
      harder: [
        { movement: "Copenhagen Plank with bottom leg lift (adduction hold + abduction)", when: "You want to add a dynamic challenge by lifting and lowering the bottom leg while holding the top leg isometric" },
        { movement: "Copenhagen Plank with hip dips", when: "You want a dynamic version that builds endurance and strength through a range of motion" },
        { movement: "Weighted Copenhagen Plank (plate on hip)", when: "Bodyweight is no longer challenging for 30+ second holds and you want to add external load" },
      ],
    },
  },

  // ---- Hollow Body Hold ----
  {
    name: "Hollow Body Hold",
    category: "core",
    primaryMuscles: ["rectus abdominis", "transverse abdominis", "hip flexors"],
    setup:
      "Lie flat on your back with your arms extended overhead and your legs straight. Press your lower back firmly into the floor — there should be zero space between your lower back and the ground. From here, lift your arms, head, shoulder blades, and legs a few inches off the floor while maintaining that lower back contact.",
    breathingCue:
      "Breathe in short, controlled breaths — small inhale through the nose, firm exhale through the mouth. Every exhale should make your core tighter. Do not hold your breath.",
    cues: [
      "Press your lower back into the floor and do not let it come up — this is the most important cue in the entire movement",
      "Squeeze your legs together, point your toes, and reach your arms past your ears — make yourself as long as possible",
      "Think about curling your ribcage toward your pelvis — you want a slight crunch shape, not a flat back with limbs floating",
    ],
    commonFaults: [
      {
        fault: "Lower back arches off the floor",
        consequence:
          "Shifts the load from your abs to your hip flexors and lower back — defeats the purpose and can cause back pain",
        fix: "Raise your legs higher until you can keep your lower back glued to the floor. As you get stronger, slowly lower your legs closer to the ground while maintaining contact",
      },
      {
        fault: "Holding the breath",
        consequence:
          "You will gas out quickly and cannot hold the position for a meaningful duration",
        fix: "Breathe in short, rhythmic patterns — small sips of air in, forceful exhales out. Every exhale should tighten your core, not release it",
      },
      {
        fault: "Neck craning forward with chin jutting out",
        consequence:
          "Strains the neck and indicates the abs are not doing their job to hold the upper body position",
        fix: "Tuck your chin slightly and think about looking at your toes. Your head position should follow your shoulder blades — if your shoulders lift, your head follows naturally",
      },
    ],
    scaling: {
      easier: [
        { movement: "Hollow hold with knees bent and arms at sides", when: "The full hollow is too demanding — bending the knees and lowering the arms shortens the lever and reduces the load on your abs" },
        { movement: "Hollow hold with arms at sides, legs straight", when: "You can keep your lower back down with straight legs but not with arms overhead — progress the arms last" },
        { movement: "Dead Bug (alternating limbs)", when: "You cannot maintain the hollow position at all — dead bugs build the same core control with a dynamic, more forgiving pattern" },
      ],
      harder: [
        { movement: "Hollow body rock", when: "You can hold the hollow for 30+ seconds and want to add a dynamic balance challenge" },
        { movement: "Weighted hollow hold (light plate or dumbbell in hands)", when: "Bodyweight is no longer challenging and you want to add external resistance" },
        { movement: "Hollow hold on rings (ring support with hollow body position)", when: "You want to combine the hollow position with upper body instability for a gymnastics-level core challenge" },
      ],
    },
  },

  // ---- Bird Dog ----
  {
    name: "Bird Dog",
    category: "core",
    primaryMuscles: ["spinal erectors", "glutes", "core", "posterior deltoids"],
    setup:
      "Start on all fours — hands directly under your shoulders, knees directly under your hips. Your back should be flat like a table top. Tuck your chin slightly so your neck is neutral, eyes looking at the floor about a foot in front of your hands.",
    breathingCue:
      "Inhale as you set your position on all fours. Exhale as you extend the opposite arm and leg. Inhale as you return to the start. Keep your core braced throughout.",
    cues: [
      "Extend your right arm straight forward and your left leg straight back at the same time — reach long in both directions",
      "Keep your hips completely level — do not let the side of the extending leg drop or rotate open",
      "Hold the extended position for 2-3 seconds, squeezing your glute on the extended leg side",
      "Return to all fours with control, then repeat on the other side",
    ],
    commonFaults: [
      {
        fault: "Hips rotate or drop to one side when the leg extends",
        consequence:
          "Means your core is not stabilizing the movement — the rotation removes the anti-rotation training benefit",
        fix: "Place a water bottle or light object on your lower back — if it falls off, you are rotating too much. Move slower and focus on keeping your hips square to the floor",
      },
      {
        fault: "Lower back arches excessively when extending the leg",
        consequence:
          "Compresses the lumbar spine and indicates the glutes are not doing their job to extend the hip",
        fix: "Think about pushing your heel straight back into the wall behind you, not up toward the ceiling. Your leg should not go higher than hip height",
      },
      {
        fault: "Rushing through the reps without holding the extended position",
        consequence:
          "Reduces the stability demand and turns a control exercise into a flailing movement",
        fix: "Hold each extended position for a full 2-3 seconds and focus on perfect stillness. Quality reps matter far more than quantity here",
      },
    ],
    scaling: {
      easier: [
        { movement: "Bird Dog with arm only (no leg extension)", when: "Adding the leg causes too much rotation — build anti-rotation strength with just the arm first" },
        { movement: "Bird Dog with leg only (no arm extension)", when: "You want to focus on hip extension and anti-rotation without the balance challenge of the opposite arm" },
      ],
      harder: [
        { movement: "Bird Dog with a resistance band around the extending foot", when: "You want to add resistance to the hip extension portion and make the glute work harder" },
        { movement: "Bird Dog from a push-up position (hands and toes)", when: "You want to dramatically increase the core stability demand by removing the knee support" },
        { movement: "Bird Dog with a slow 5-second extension and 5-second return", when: "You want to increase time under tension and expose any stability weaknesses" },
      ],
    },
  },

  // ---- Side Plank ----
  {
    name: "Side Plank",
    category: "core",
    primaryMuscles: ["obliques", "glute medius", "transverse abdominis", "quadratus lumborum"],
    setup:
      "Lie on your side with your bottom forearm on the floor, elbow directly under your shoulder. Stack your feet on top of each other (or stagger them for more stability). Lift your hips off the floor so your body forms a straight line from head to feet. Top arm can rest on your hip or extend toward the ceiling.",
    breathingCue:
      "Breathe steadily — inhale through your nose, exhale through your mouth. Brace your core tighter on each exhale. Do not hold your breath.",
    cues: [
      "Push your bottom forearm hard into the floor and lift your hips high — do not let them sag",
      "Keep your body in a perfectly straight line — no piking at the hips or sagging toward the floor",
      "Stack your shoulders directly on top of each other — do not let your top shoulder roll forward",
    ],
    commonFaults: [
      {
        fault: "Hips sagging toward the ground",
        consequence:
          "Removes the lateral core training stimulus and puts stress on the lower back and shoulder",
        fix: "Think about pushing your bottom hip toward the ceiling. If you cannot maintain the position, drop to your knees for a modified side plank",
      },
      {
        fault: "Piking at the hips — butt sticking backward",
        consequence:
          "Shortens the lever arm and reduces the demand on the obliques",
        fix: "Squeeze your glutes and think about making your body as straight as a board from head to heels. Have someone check you from the side or use a mirror",
      },
      {
        fault: "Top shoulder rolling forward, losing the stacked position",
        consequence:
          "Turns it into a partial plank and reduces the lateral stability challenge",
        fix: "Open your chest toward the wall in front of you and think about stacking your shoulders like plates. Extend your top arm toward the ceiling to help maintain the open position",
      },
    ],
    scaling: {
      easier: [
        { movement: "Side Plank from knees (bottom knee on the floor)", when: "The full side plank is too demanding — bending the bottom knee shortens the lever and reduces the load" },
        { movement: "Side Plank with feet staggered (top foot in front)", when: "Stacking the feet is too unstable — staggering them gives a wider base of support" },
      ],
      harder: [
        { movement: "Side Plank with hip dips", when: "You can hold the static position for 30+ seconds and want a dynamic challenge" },
        { movement: "Side Plank with top leg raised (star side plank)", when: "You want to add a hip abduction challenge and increase the balance demand" },
        { movement: "Side Plank with rotation (thread the needle)", when: "You want to combine anti-lateral-flexion with rotation for a comprehensive oblique challenge" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// OLYMPIC LIFTS (3 entries)
// ---------------------------------------------------------------------------

const olympicLifts: MovementCueData[] = [
  // ---- Clean ----
  {
    name: "Clean",
    category: "olympic_lift",
    primaryMuscles: ["glutes", "hamstrings", "quads", "traps", "upper back", "core"],
    setup: "Feet hip-width apart (jumping stance), bar over mid-foot. Grip the bar just outside the knees with a hook grip. Hinge at the hips with your chest up, shoulders slightly in front of the bar, arms straight. Your back is flat, lats engaged, and the slack is pulled out of the bar.",
    breathingCue: "Take a big breath and brace hard before the first pull. Hold the brace through the entire lift. Exhale once you are standing with the bar secured in the front rack.",
    cues: [
      "First pull: push the floor away, keep your chest over the bar",
      "Second pull: explode the hips, shrug, pull under",
      "Catch: fast elbows, receive the bar in a solid front rack",
      "Stand up: drive out of the squat with your chest high",
    ],
    commonFaults: [
      { fault: "Early arm bend — bending the elbows before the hips fully extend", consequence: "The arms are far weaker than the hips — pulling early kills bar speed and height", fix: "Think of your arms as ropes with hooks. They stay straight until after the hip explosion. The cue is 'long arms, fast hips'" },
      { fault: "Bar crashing in the catch — not meeting the bar, letting it fall on you", consequence: "The impact jams your wrists and elbows and can cause you to dump the bar or get injured", fix: "Pull yourself actively under the bar and meet it with fast elbows — you should receive the bar, not get hit by it" },
      { fault: "Jumping forward — the pull sends the bar out instead of up", consequence: "You have to chase the bar and catch in a compromised position, which limits the weight you can handle", fix: "Keep the bar close to your body throughout the pull — think 'bar goes up, I go down' rather than 'bar goes forward'" },
    ],
    scaling: {
      easier: [
        { movement: "Hang clean (start from the hip — shorter pull)", when: "You want to simplify by removing the first pull and focus on the explosion and catch" },
        { movement: "Power clean (no full squat, catch high)", when: "You are not comfortable catching in a full squat yet" },
        { movement: "Clean from blocks", when: "You want to isolate specific pull positions without starting from the floor" },
      ],
      harder: [
        { movement: "Squat clean (full depth catch)", when: "You want to move heavier weight by receiving the bar in a deep front squat" },
        { movement: "Clean complex (clean + front squat + jerk)", when: "You want to build work capacity and chain multiple high-skill movements together" },
        { movement: "No-feet clean (don't move your feet — forces vertical pull)", when: "You want to train a perfectly vertical pull and eliminate the habit of jumping forward" },
      ],
    },
  },

  // ---- Snatch ----
  {
    name: "Snatch",
    category: "olympic_lift",
    primaryMuscles: ["glutes", "hamstrings", "quads", "traps", "shoulders", "upper back"],
    setup: "Wide grip on the bar — when you stand, the bar should sit in your hip crease. Feet hip-width apart, bar over mid-foot. Hook grip. Hinge at the hips with your chest up, shoulders in front of the bar, arms straight and wide. Back flat, lats engaged.",
    breathingCue: "Take a big breath and brace hard before the pull. Hold the brace through the entire lift. Exhale once you are standing with the bar locked out overhead.",
    cues: [
      "Wide grip — bar sits in the hip crease when you stand tall",
      "First pull: slow off the floor, keep the bar close",
      "Second pull: violent hip extension, shrug, pull under fast",
      "Catch: punch up into the bar, lock out overhead with active shoulders",
    ],
    commonFaults: [
      { fault: "Bar swinging away from the body during the pull", consequence: "Creates a loop in the bar path that makes it much harder to receive and wastes energy", fix: "Engage your lats to keep the bar close — think about painting your body with the bar on the way up" },
      { fault: "Pressing out the catch (elbows bending then straightening overhead)", consequence: "A red light in competition and indicates insufficient speed getting under the bar", fix: "Practice drop snatches and snatch balances to train receiving the bar with locked-out arms — speed under the bar is the solution, not stronger arms" },
      { fault: "Not pulling under fast enough — riding the bar up instead of getting under it", consequence: "The bar does not get high enough for heavy weights and you are limited to light power snatches", fix: "After the hip explosion, aggressively pull your body under the bar — think 'elbows high and outside, then punch up and sit down'" },
    ],
    scaling: {
      easier: [
        { movement: "Hang power snatch (above the knee, no full squat)", when: "You want to simplify the pull and the catch — focus on the explosion and receiving overhead" },
        { movement: "Muscle snatch (no squat, pull all the way up)", when: "You want to learn the bar path overhead without the speed and depth demands of a full snatch" },
        { movement: "Overhead squat (build comfort in the receiving position)", when: "Your overhead squat position is the limiter — build that mobility and strength first" },
      ],
      harder: [
        { movement: "Full squat snatch", when: "You want to move maximum weight — catching deep allows you to pull the bar lower" },
        { movement: "Snatch from deficit (stand on a plate)", when: "You want to build more speed off the floor and strengthen your starting position" },
        { movement: "Snatch complex (snatch + overhead squat + snatch balance)", when: "You want to build positional strength and work capacity with multiple overhead movements" },
      ],
    },
  },

  // ---- Clean & Jerk ----
  {
    name: "Clean & Jerk",
    category: "olympic_lift",
    primaryMuscles: ["glutes", "hamstrings", "quads", "shoulders", "triceps", "core"],
    setup: "The clean portion uses the same setup as the clean above. For the jerk: after standing from the clean, reset your feet to hip-width, brace hard, and prepare for the dip-and-drive. The bar is in the front rack on your shoulders.",
    breathingCue: "Brace for the clean. After standing, take a new breath and brace before the jerk. Hold the brace through the dip, drive, and catch. Exhale once overhead with the bar locked out.",
    cues: [
      "Clean: same cues as above — fast elbows, solid front rack",
      "Dip: short, sharp dip straight down — knees out, torso vertical",
      "Drive: explode up with the legs, press yourself under the bar",
      "Catch the jerk: split or power position, bar locked out, head through",
    ],
    commonFaults: [
      { fault: "Dip-drive going forward — knees cave or torso leans, bar travels out front", consequence: "The bar ends up in front of you overhead, which is an extremely difficult position to save", fix: "Keep your torso perfectly vertical during the dip — think 'dip straight down like an elevator, not forward like an escalator'" },
      { fault: "Not splitting deep enough in the catch", consequence: "A short split means the bar is not locked out and you have to press it the rest of the way, which is both harder and illegal in competition", fix: "Practice split jerks from the rack with lighter weight — your front shin should be vertical and your back knee should be nearly touching the ground" },
      { fault: "Pressing the jerk instead of using the legs", consequence: "The shoulders are the limiting factor instead of the legs — you will always be able to jerk more than you can press", fix: "The bar should leave your shoulders from leg drive alone — your arms just lock it out. Practice push presses and jerk dips to feel the difference" },
    ],
    scaling: {
      easier: [
        { movement: "Clean + push press (no split, use legs to press)", when: "The split footwork is too complex — the push press lets you focus on the drive and lockout" },
        { movement: "Power clean + push jerk (no split, no full squat)", when: "You want a simpler version of both the clean and the jerk" },
        { movement: "Hang clean + jerk (simplified pull)", when: "You want to remove the first pull from the floor and focus on the hip explosion and jerk" },
      ],
      harder: [
        { movement: "Full squat clean + split jerk", when: "You want to move the heaviest weight possible — full depth on the clean, full split on the jerk" },
        { movement: "Complex: clean pull + clean + front squat + jerk", when: "You want to build strength, skill, and work capacity in one extended set" },
        { movement: "Jerk from the rack (isolate the jerk)", when: "The jerk is the weak link and you want to train it with heavier loads than you can clean" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// MACHINE / CABLE (12 entries)
// ---------------------------------------------------------------------------

const machineCable: MovementCueData[] = [
  // ---- Lat Pulldown ----
  {
    name: "Lat Pulldown",
    category: "machine_cable",
    primaryMuscles: ["latissimus dorsi", "biceps", "rear deltoids", "rhomboids"],
    setup: "Sit at the lat pulldown station with your thighs secured under the pads. Grip the bar with a wide overhand grip — about 1.5 times shoulder width. Start with your arms fully extended overhead, torso upright, chest tall.",
    breathingCue: "Exhale as you pull the bar down to your upper chest. Inhale as you control the bar back up to full arm extension.",
    cues: [
      "Pull the bar to your upper chest, not behind your neck — lean back just slightly",
      "Drive your elbows down and back, squeezing your shoulder blades together at the bottom",
      "Control the return — do not let the weight stack yank your arms up",
    ],
    commonFaults: [
      { fault: "Leaning way back and using momentum to pull the weight", consequence: "Turns it into a row rather than a vertical pull and reduces lat stimulus", fix: "Stay upright with only a slight lean — if you need to lean way back, the weight is too heavy" },
      { fault: "Pulling the bar behind the neck", consequence: "Puts the shoulder in a vulnerable externally rotated and abducted position under load — shoulder impingement risk", fix: "Pull to the front of your upper chest every time — behind-the-neck pulldowns are not worth the risk" },
      { fault: "Shrugging the shoulders up instead of pulling them down first", consequence: "The upper traps do the work instead of the lats", fix: "Before you bend your elbows, depress your shoulder blades — pull your shoulders into your back pockets, then row" },
    ],
    scaling: {
      easier: [
        { movement: "Assisted pull-up machine", when: "You want a vertical pulling motion with adjustable assistance" },
        { movement: "Single-arm cable pulldown (kneeling)", when: "You want to isolate each lat and work on the mind-muscle connection one side at a time" },
        { movement: "Lighter weight with a 2-second pause at the bottom", when: "You can pull the weight but cannot feel your lats working" },
      ],
      harder: [
        { movement: "Close-grip lat pulldown (hands shoulder width, palms facing you)", when: "You want to increase bicep involvement and change the angle of pull" },
        { movement: "Slow eccentric lat pulldown (4-5 second return on every rep)", when: "You want to build more strength and muscle with the same weight" },
        { movement: "Weighted pull-ups", when: "The lat pulldown is easy at the full stack and you are ready for free-weight vertical pulling" },
      ],
    },
  },

  // ---- Cable Row ----
  {
    name: "Cable Row",
    category: "machine_cable",
    primaryMuscles: ["lats", "rhomboids", "rear deltoids", "biceps", "erector spinae"],
    setup: "Sit at the cable row station with your feet on the footplate, knees slightly bent. Grab the handle with both hands, arms extended. Sit tall with your chest up, shoulders pulled back, and core braced.",
    breathingCue: "Exhale as you pull the handle to your torso. Inhale as you extend your arms back to the start.",
    cues: [
      "Pull the handle to your lower sternum — think about driving your elbows past your body",
      "Squeeze your shoulder blades together at the top and hold for a one-count",
      "Keep your torso still — do not rock forward and back with each rep",
    ],
    commonFaults: [
      { fault: "Rocking the torso forward and backward to generate momentum", consequence: "Uses body English instead of back muscles and stresses the lower back", fix: "Lock your torso angle and keep it there — only your arms should move. If you have to rock, the weight is too heavy" },
      { fault: "Pulling with the biceps and shrugging the shoulders", consequence: "The lats and mid-back get minimal stimulation", fix: "Initiate by pulling your shoulder blades together — think about leading with your elbows, not your hands" },
      { fault: "Letting the weight pull your shoulders forward at the start of each rep", consequence: "Rounds the upper back and loses the retracted shoulder position", fix: "Keep your chest tall and shoulders pulled back even at full arm extension — do not let the stack protract your shoulders" },
    ],
    scaling: {
      easier: [
        { movement: "Chest-supported machine row", when: "You cannot keep your torso still during the cable row — the chest pad eliminates the stability demand" },
        { movement: "Single-arm cable row", when: "You want to focus on one side at a time and improve the mind-muscle connection" },
        { movement: "Resistance band row (seated on the floor)", when: "You do not have access to a cable machine and need a similar pulling motion" },
      ],
      harder: [
        { movement: "Paused cable row (3-second hold at full contraction)", when: "You want to increase time under tension and eliminate momentum" },
        { movement: "Single-arm cable row with rotation", when: "You want to add a rotational core challenge to your horizontal pulling" },
        { movement: "Barbell row", when: "You have outgrown the cable stack and want to load the horizontal pull pattern with free weights" },
      ],
    },
  },

  // ---- Leg Press ----
  {
    name: "Leg Press",
    category: "machine_cable",
    primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
    setup: "Sit in the leg press with your back flat against the pad and your head supported. Place your feet on the platform about shoulder-width apart, midway up the platform. Unhook the safety handles and lower the platform by bending your knees.",
    breathingCue: "Inhale as you lower the platform toward your chest. Exhale as you press it back up to near-lockout (do not lock your knees completely).",
    cues: [
      "Lower until your thighs are at least parallel — get full range of motion",
      "Press through your whole foot — do not let your heels lift off the platform",
      "Do not lock your knees completely at the top — stop just short of full extension",
    ],
    commonFaults: [
      { fault: "Lower back rounding off the seat pad at the bottom (butt wink)", consequence: "Puts the lumbar spine in a flexed position under heavy load — disc injury risk", fix: "Only go as deep as you can keep your lower back flat against the pad — if your butt lifts off, you have gone too deep for your mobility" },
      { fault: "Locking the knees fully at the top of every rep", consequence: "Transfers the load from your muscles to your joint structures — the knee can hyperextend catastrophically under heavy load", fix: "Press to 95% extension and immediately start the next rep — keep constant tension on the muscles" },
      { fault: "Placing feet too low on the platform and letting the knees track far over the toes", consequence: "Increases shearing force on the knee joint", fix: "Place your feet in the middle of the platform so your shins stay close to vertical at the bottom — this balances the load between quads and glutes" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter weight with full range of motion", when: "You are learning the movement and need to build confidence with the machine" },
        { movement: "Single-leg press (one foot at a time)", when: "You want to address strength imbalances between legs" },
        { movement: "Goblet squat", when: "You do not have access to a leg press and need a similar quad-dominant movement" },
      ],
      harder: [
        { movement: "Pause at the bottom (3-second hold)", when: "You want to build strength in the hardest part of the range and eliminate the bounce" },
        { movement: "Slow eccentric leg press (5-second lower)", when: "You want to increase time under tension for muscle growth" },
        { movement: "High and wide foot placement for glute emphasis", when: "You want to shift the emphasis from quads to glutes and hamstrings" },
      ],
    },
  },

  // ---- Cable Fly ----
  {
    name: "Cable Fly",
    category: "machine_cable",
    primaryMuscles: ["chest", "front deltoids"],
    setup: "Set both cable pulleys to shoulder height (or high for upper chest, low for lower chest). Stand in the center with a D-handle in each hand, one foot slightly forward for balance. Arms extended to the sides with a slight bend in the elbows.",
    breathingCue: "Exhale as you bring the handles together in front of you. Inhale as you open your arms back to the start position.",
    cues: [
      "Keep a slight bend in your elbows throughout — do not straighten your arms",
      "Bring the handles together in front of your chest with a hugging motion",
      "Control the stretch on the way back — do not let the cables yank your arms open",
    ],
    commonFaults: [
      { fault: "Straightening the arms and turning it into a pressing movement", consequence: "Shifts the load to the triceps and shoulders instead of isolating the chest", fix: "Lock a slight bend in your elbows at the start and maintain that exact bend throughout — the movement happens at the shoulder joint only" },
      { fault: "Using too much weight and losing the stretch at the open position", consequence: "Reduces the range of motion and removes the primary benefit of the cable fly — the stretch under tension", fix: "Use a weight you can control through the full range — you should feel a deep stretch in your chest at the open position on every rep" },
      { fault: "Leaning too far forward and using body weight to complete reps", consequence: "Takes the tension off the chest and turns the exercise into a standing cable press", fix: "Stand upright with only a slight forward lean — if you are hunching over, the weight is too heavy" },
    ],
    scaling: {
      easier: [
        { movement: "Pec deck machine (seated fly)", when: "You struggle to stabilize in a standing position or cannot feel your chest working with cables" },
        { movement: "Single-arm cable fly", when: "You want to focus on one side at a time for better mind-muscle connection" },
        { movement: "Resistance band fly", when: "You do not have access to cables — bands provide a similar motion with increasing resistance" },
      ],
      harder: [
        { movement: "Low-to-high cable fly (lower cables for upper chest emphasis)", when: "You want to target the upper chest specifically" },
        { movement: "Paused cable fly (2-second hold at the squeezed position)", when: "You want to increase peak contraction and time under tension" },
        { movement: "Cable fly with slow eccentric (4-5 second opening phase)", when: "You want to maximize the stretch-under-tension stimulus for chest growth" },
      ],
    },
  },

  // ---- Face Pull ----
  {
    name: "Face Pull",
    category: "machine_cable",
    primaryMuscles: ["rear deltoids", "rhomboids", "external rotators", "middle traps"],
    setup: "Set a cable pulley at upper chest to face height with a rope attachment. Grip each end of the rope with an overhand grip. Step back until your arms are fully extended toward the machine, slight lean back, feet staggered.",
    breathingCue: "Exhale as you pull the rope toward your face. Inhale as you extend your arms back to the start.",
    cues: [
      "Pull the rope to your forehead, splitting it apart so your hands end up beside your ears",
      "Externally rotate at the top — finish with your fists pointing at the ceiling",
      "Squeeze your shoulder blades together hard at the end of each rep",
    ],
    commonFaults: [
      { fault: "Pulling to the chest instead of the face", consequence: "Turns the movement into a row — the rear delts and external rotators are not trained", fix: "Aim for your forehead — at the finish, the rope should be split with your hands at ear height" },
      { fault: "Using too much weight and leaning back to complete reps", consequence: "The traps and body momentum do the work instead of the rear delts and rotators", fix: "Use a lighter weight — this is a quality exercise, not a strength exercise. You should be able to hold the end position for a 2-second squeeze" },
      { fault: "Not externally rotating at the top", consequence: "Misses the key benefit of the face pull — strengthening the external rotators that protect the shoulder", fix: "At the end of each rep, rotate your fists toward the ceiling and flare the rope apart — your arms should look like a double bicep pose" },
    ],
    scaling: {
      easier: [
        { movement: "Banded face pull (band anchored at head height)", when: "You do not have a cable machine — bands work great for this movement" },
        { movement: "Prone Y-raise (lying face down on a bench, raise arms in a Y shape)", when: "You struggle with the cable setup and want a simpler way to hit the same muscles" },
        { movement: "Lighter weight with a 3-second hold at full contraction", when: "You can pull the weight but cannot feel the target muscles working" },
      ],
      harder: [
        { movement: "Single-arm cable face pull", when: "You want to isolate each side and address imbalances in your rear delts" },
        { movement: "Face pull with external rotation hold (5-second hold at the top)", when: "You want to build endurance in the external rotators for shoulder health" },
        { movement: "Face pull to overhead press (pull to face, then press overhead)", when: "You want to combine rear delt work with overhead stability in one movement" },
      ],
    },
  },

  // ---- Hamstring Curl (Lying or Seated) ----
  {
    name: "Hamstring Curl",
    category: "machine_cable",
    primaryMuscles: ["hamstrings", "calves (gastrocnemius)"],
    setup:
      "For lying: lie face down on the machine with the pad resting on the back of your ankles, just above your heels. Your knees should be just off the edge of the bench. Grip the handles and keep your hips pressed flat against the pad. For seated: sit with your back against the pad, the roller behind your ankles, and the thigh pad locked snugly above your knees.",
    breathingCue:
      "Exhale as you curl the weight toward your glutes. Inhale as you lower it back to the start under control.",
    cues: [
      "Curl the weight by squeezing your hamstrings — think about pulling your heels toward your glutes",
      "Do not let your hips rise off the bench (lying) or your back come off the pad (seated)",
      "Control the eccentric — take 2-3 seconds to lower the weight back to full extension on every rep",
    ],
    commonFaults: [
      {
        fault: "Hips lifting off the bench during the curl (lying version)",
        consequence:
          "Allows the glutes and lower back to help, reducing hamstring isolation. It also puts stress on the lower back",
        fix: "Press your hips firmly into the pad throughout the set. If your hips keep lifting, the weight is too heavy — drop it down and feel the hamstrings do the work",
      },
      {
        fault: "Using momentum to swing the weight up instead of curling with control",
        consequence:
          "Reduces time under tension on the hamstrings and increases joint stress at the knee",
        fix: "Initiate every rep from a dead stop and curl smoothly. Pause for a beat at the top of each rep before lowering",
      },
      {
        fault: "Cutting the range of motion short — not fully extending or fully curling",
        consequence:
          "Limits the hamstring stretch at the bottom and the peak contraction at the top",
        fix: "Start each rep from full extension (legs straight) and curl until the pad is as close to your glutes as your flexibility allows",
      },
    ],
    scaling: {
      easier: [
        { movement: "Lighter weight with a slow tempo (3 seconds up, 3 seconds down)", when: "You are learning to feel and control the hamstrings through the full range" },
        { movement: "Stability ball hamstring curl (lying on your back)", when: "No machine is available — the ball version trains a similar knee-flexion pattern with bodyweight" },
      ],
      harder: [
        { movement: "Single-leg hamstring curl", when: "You want to isolate each hamstring and address imbalances between legs" },
        { movement: "Hamstring curl with a 3-second isometric hold at peak contraction", when: "You want to build peak strength and mind-muscle connection at the top of the curl" },
        { movement: "Nordic hamstring curl", when: "You want the most challenging bodyweight hamstring exercise — an eccentric powerhouse for injury prevention" },
      ],
    },
  },

  // ---- Leg Extension ----
  {
    name: "Leg Extension",
    category: "machine_cable",
    primaryMuscles: ["quadriceps"],
    setup:
      "Sit on the leg extension machine with your back flat against the pad. Adjust the backrest so your knees are at the edge of the seat. Place the roller pad against your shins, just above the ankles. Adjust the range-of-motion stop if available so the starting position has your knees at roughly 90 degrees. Grip the handles at your sides.",
    breathingCue:
      "Exhale as you extend your legs to full lockout. Inhale as you lower the weight back to the starting position.",
    cues: [
      "Extend your legs fully until your knees are straight — squeeze your quads hard at the top for a one-second hold",
      "Lower the weight slowly for 2-3 seconds — do not let it drop",
      "Keep your back pressed against the pad and do not use momentum by rocking your torso",
    ],
    commonFaults: [
      {
        fault: "Not reaching full knee extension at the top",
        consequence:
          "The quad gets its strongest contraction in the last 10-15 degrees of extension — cutting it short misses the most valuable part of the exercise",
        fix: "Use a weight you can fully lock out. Pause at the top with straight legs and squeeze before lowering — if you cannot straighten your legs, the weight is too heavy",
      },
      {
        fault: "Letting the weight slam down or drop quickly on the eccentric",
        consequence:
          "Wastes the eccentric training stimulus and can jar the knee joint",
        fix: "Control the lowering phase for a full 2-3 seconds. Think about resisting the weight on the way down — the lowering phase should be slower than the lifting phase",
      },
      {
        fault: "Lifting the hips off the seat or rocking the torso to move more weight",
        consequence:
          "Recruits the hip flexors and lower back, reducing quad isolation and risking lower back strain",
        fix: "Keep your butt glued to the seat and your back against the pad. Use the handles to anchor yourself if needed",
      },
    ],
    scaling: {
      easier: [
        { movement: "Lighter weight with a slow tempo and full range of motion", when: "You are learning to control the movement and feel the quads working" },
        { movement: "Bodyweight leg extension from a chair (seated knee extension)", when: "No machine is available — sit on a chair and straighten your leg against gravity" },
      ],
      harder: [
        { movement: "Single-leg extension", when: "You want to isolate each quad and fix strength imbalances between legs" },
        { movement: "Leg extension with a 5-second eccentric", when: "You want to maximize quad growth stimulus through time under tension" },
        { movement: "1.5 rep leg extensions (full rep + half rep from the top = 1 rep)", when: "You want to keep constant tension in the peak contraction zone" },
      ],
    },
  },

  // ---- Cable Fly (Low-to-High / High-to-Low) ----
  {
    name: "Cable Fly (Low-to-High / High-to-Low)",
    category: "machine_cable",
    primaryMuscles: ["upper chest (low-to-high)", "lower chest (high-to-low)", "front deltoids"],
    setup:
      "For low-to-high: set both cable pulleys to the lowest position. For high-to-low: set them to the highest position. Stand in the center of the cable station with one foot slightly forward for balance. Grab a D-handle in each hand and step forward until you feel a stretch in your chest. Start with arms extended to the sides with a slight elbow bend.",
    breathingCue:
      "Exhale as you bring the handles together. Inhale as you open your arms back to the stretched position.",
    cues: [
      "Low-to-high: sweep the handles from low at your sides upward to meet in front of your upper chest or chin — follow the angle of the cable",
      "High-to-low: sweep the handles from above down to meet in front of your lower chest or belly button — follow the cable angle",
      "Keep a slight bend locked in your elbows throughout — the movement happens at the shoulder, not the elbow",
      "Squeeze hard when the handles meet and hold for one second before opening back up",
    ],
    commonFaults: [
      {
        fault: "Straightening the arms and turning the fly into a press",
        consequence:
          "Shifts the work to the triceps and removes the chest isolation that makes the fly valuable",
        fix: "Lock a slight bend in your elbows at the start and maintain it throughout. The only joint that moves is the shoulder",
      },
      {
        fault: "Using too much weight and shortening the range of motion",
        consequence:
          "The fly's biggest benefit is the deep stretch under tension — cutting the range of motion removes it",
        fix: "Use a weight that allows you to get a full stretch at the open position on every rep. You should feel your chest stretching at the bottom",
      },
      {
        fault: "Not matching the arm path to the cable angle",
        consequence:
          "If your arms do not follow the line of the cable, you lose the targeted emphasis on the upper or lower chest fibers",
        fix: "For low-to-high, your hands should travel upward — finish at chin height. For high-to-low, your hands should travel downward — finish at belly button height. Follow the cable",
      },
    ],
    scaling: {
      easier: [
        { movement: "Standard cable fly at shoulder height", when: "The angled variations are confusing — start with the shoulder-height version to learn the fly pattern" },
        { movement: "Pec deck machine", when: "You want a guided fly motion with no balance or positioning demand" },
      ],
      harder: [
        { movement: "Single-arm cable fly (any angle)", when: "You want to challenge core anti-rotation while isolating one side of the chest at a time" },
        { movement: "Cable fly with a 3-second pause at peak squeeze", when: "You want to build peak contraction strength and mind-muscle connection" },
        { movement: "Alternating cable fly (one arm holds while the other reps)", when: "You want an isometric hold challenge combined with dynamic reps" },
      ],
    },
  },

  // ---- Rear Delt Fly ----
  {
    name: "Rear Delt Fly",
    category: "machine_cable",
    primaryMuscles: ["rear deltoids", "rhomboids", "middle traps"],
    setup:
      "For machine: sit facing the pad on the reverse fly machine, adjust the handles to be at shoulder height, and grip them with a neutral or pronated grip. For dumbbell: hinge at the hips until your torso is nearly parallel to the floor, holding light dumbbells hanging beneath your chest with palms facing each other.",
    breathingCue:
      "Exhale as you open your arms out to the sides. Inhale as you bring the handles or dumbbells back to the starting position.",
    cues: [
      "Lead with your elbows, not your hands — think about pulling your elbows directly out to the sides and slightly back",
      "Squeeze your shoulder blades together at the end of each rep and hold for one second",
      "Keep a slight bend in your elbows — do not straighten your arms completely",
    ],
    commonFaults: [
      {
        fault: "Using too much weight and turning the movement into a row",
        consequence:
          "The biceps and lats take over, and the rear delts — the target muscles — get very little work",
        fix: "Use a weight that feels light. Rear delts are small muscles — if you are using the same weight as your rows, it is way too heavy. You should feel a burn in the back of your shoulders, not your arms",
      },
      {
        fault: "Shrugging the shoulders up toward the ears during the movement",
        consequence:
          "The upper traps take over, which is not the goal — you want to target the rear delts and mid-back",
        fix: "Actively pull your shoulders down and away from your ears before you start each rep. Think 'shoulders in your back pockets'",
      },
      {
        fault: "Rushing through the reps without controlling the eccentric",
        consequence:
          "Small muscles like the rear delts respond well to time under tension — rushing reduces the growth stimulus",
        fix: "Take 2-3 seconds to return the weight to the start position on every rep. The rear delt should stay under tension the entire time",
      },
    ],
    scaling: {
      easier: [
        { movement: "Machine reverse fly with light weight", when: "You want the guided path of a machine while learning to feel the rear delts working" },
        { movement: "Band pull-apart", when: "You want a simple rear delt exercise you can do anywhere with minimal equipment" },
      ],
      harder: [
        { movement: "Rear delt fly with a 3-second pause at full contraction", when: "You want to build peak contraction strength in the rear delts" },
        { movement: "Cable reverse fly (one arm at a time)", when: "You want constant tension from the cable and the ability to isolate each side" },
        { movement: "Prone incline dumbbell rear delt fly (chest on an incline bench)", when: "You want to remove any possibility of using body momentum — the bench locks you in place" },
      ],
    },
  },

  // ---- Cable Pullthrough ----
  {
    name: "Cable Pullthrough",
    category: "machine_cable",
    primaryMuscles: ["glutes", "hamstrings", "spinal erectors"],
    setup:
      "Attach a rope handle to the low pulley of a cable station. Face away from the machine and straddle the cable. Step forward until you feel tension, feet slightly wider than hip-width apart. Hinge at the hips and reach the rope handle back between your legs with a slight bend in your knees.",
    breathingCue:
      "Inhale as you hinge forward and let the cable pull the rope between your legs. Exhale as you drive your hips forward to stand tall.",
    cues: [
      "This is a hip hinge — push your hips back like you are closing a car door with your butt",
      "Keep your arms straight and relaxed — they are just hooks holding the rope. The power comes from your hips",
      "Drive your hips forward explosively to stand tall and squeeze your glutes hard at the top",
      "Keep your chest up and your back flat throughout — do not round your lower back",
    ],
    commonFaults: [
      {
        fault: "Squatting the movement instead of hinging — the knees bend excessively",
        consequence:
          "Turns a hip hinge exercise into a squat pattern and removes the hamstring and glute stretch at the bottom",
        fix: "Think about pushing your hips straight back while keeping your shins vertical. Your knees should have a slight, consistent bend — they should not change angle much during the movement",
      },
      {
        fault: "Pulling with the arms instead of driving with the hips",
        consequence:
          "Turns it into a cable row and you lose the posterior chain training effect",
        fix: "Your arms should stay straight and passive the entire time — they are just holding the rope. All the force comes from snapping your hips forward",
      },
      {
        fault: "Rounding the lower back at the bottom of the hinge",
        consequence:
          "Puts the lower back in a vulnerable flexed position under load",
        fix: "Keep your chest proud and your shoulder blades pulled back. Only hinge as far as your hamstring flexibility allows while maintaining a flat back",
      },
    ],
    scaling: {
      easier: [
        { movement: "Romanian Deadlift with a dumbbell", when: "You want to learn the hip hinge pattern with a simpler loading position" },
        { movement: "Good Morning with bodyweight or a light bar", when: "You want to groove the hip hinge pattern without cables" },
      ],
      harder: [
        { movement: "Barbell Hip Thrust", when: "You have mastered the hip hinge and want to load the glutes more heavily" },
        { movement: "Cable pullthrough with a 3-second pause at full hip extension", when: "You want to increase glute activation at lockout" },
        { movement: "Kettlebell Swing", when: "You want to add a ballistic, power-based hip hinge that requires more speed and explosiveness" },
      ],
    },
  },

  // ---- Hip Abduction Machine ----
  {
    name: "Hip Abduction Machine",
    category: "machine_cable",
    primaryMuscles: ["glute medius", "glute minimus", "tensor fasciae latae"],
    setup:
      "Sit in the machine with your back against the pad and your outer thighs pressed against the leg pads. Adjust the starting position so your legs are together or slightly apart. Select your weight and grip the handles at your sides. Feet flat on the footrests.",
    breathingCue:
      "Exhale as you push your legs apart. Inhale as you bring them back together under control.",
    cues: [
      "Press your knees apart by squeezing the sides of your glutes — not by swinging your legs",
      "Push out to the fullest range of motion you can control, then hold for a one-second squeeze at the widest point",
      "Bring your legs back together slowly — do not let the weight slam the stack on the return",
    ],
    commonFaults: [
      {
        fault: "Using momentum to throw the legs apart instead of controlled abduction",
        consequence:
          "Removes the muscle activation and can strain the inner thigh or hip joint",
        fix: "Move slowly and deliberately. Take 2 seconds to push out, hold for 1 second, and take 3 seconds to return. If you cannot control the weight, it is too heavy",
      },
      {
        fault: "Leaning forward excessively during the movement",
        consequence:
          "Changes the angle of force and reduces glute medius engagement while increasing hip flexor involvement",
        fix: "Keep your back against the pad. You can experiment with a slight forward lean for a different glute emphasis, but do not collapse forward",
      },
      {
        fault: "Cutting range of motion short — not opening fully or not returning fully",
        consequence:
          "Limits the stimulus on the glute medius and misses the muscle through important parts of its range",
        fix: "Push to full range on every rep and return until the pads gently touch. The full stretch and full squeeze are where the growth happens",
      },
    ],
    scaling: {
      easier: [
        { movement: "Banded seated abduction (band around knees on a bench)", when: "No machine is available or you want a lighter, more portable option" },
        { movement: "Side-lying leg raise", when: "You want to train hip abduction with bodyweight in any setting" },
      ],
      harder: [
        { movement: "Single-leg hip abduction on the machine", when: "You want to isolate each side and identify strength differences between hips" },
        { movement: "Hip abduction with a 5-second pause at full abduction", when: "You want to build isometric endurance in the glute medius at the end range" },
        { movement: "Banded monster walks or lateral band walks", when: "You want a functional, standing hip abduction exercise that challenges the glutes through walking" },
      ],
    },
  },

  // ---- Preacher Curl ----
  {
    name: "Preacher Curl",
    category: "machine_cable",
    primaryMuscles: ["biceps (short head emphasis)", "brachialis"],
    setup:
      "Sit at a preacher bench and adjust the height so the top of the pad sits snugly under your armpits when you lean forward. Place the back of your upper arms flat against the pad. Grab an EZ bar, dumbbells, or machine handles with an underhand (supinated) grip, shoulder-width apart. Start with arms nearly fully extended — a slight bend to protect the elbows.",
    breathingCue:
      "Exhale as you curl the weight up toward your shoulders. Inhale as you lower it back down under control.",
    cues: [
      "Keep the back of your upper arms pressed flat against the pad throughout — they should not lift off",
      "Curl the weight up until your forearms are nearly vertical, squeezing the biceps hard at the top",
      "Lower the weight slowly for 2-3 seconds — do not let your arms snap to full extension at the bottom",
    ],
    commonFaults: [
      {
        fault: "Lifting the upper arms off the pad at the top of the curl",
        consequence:
          "Recruits the front delts to help and reduces biceps isolation — the whole point of the preacher bench",
        fix: "Press your upper arms into the pad on every rep. If they lift, the weight is too heavy — the pad should feel like it is glued to your arms",
      },
      {
        fault: "Dropping the weight quickly at the bottom and letting the arms snap to full extension",
        consequence:
          "Puts dangerous stress on the biceps tendon and elbow joint, especially at the very bottom where the biceps is fully stretched",
        fix: "Control the descent for 2-3 seconds and stop just short of full extension — keep a slight bend at the bottom to maintain tension and protect the joint",
      },
      {
        fault: "Swinging or rocking the torso to move more weight",
        consequence:
          "Defeats the purpose of the preacher bench, which is to eliminate body momentum and isolate the biceps",
        fix: "Anchor your chest against the top of the pad and brace your core. If you need momentum, the weight is too heavy",
      },
    ],
    scaling: {
      easier: [
        { movement: "Machine preacher curl", when: "You want a guided bar path that eliminates the need to stabilize the weight" },
        { movement: "Single-arm dumbbell preacher curl", when: "You want to focus on one arm at a time with better control and mind-muscle connection" },
      ],
      harder: [
        { movement: "Preacher curl with a 5-second eccentric", when: "You want to maximize the growth stimulus through slow eccentrics in the stretched position" },
        { movement: "Preacher curl 21s (7 bottom half reps, 7 top half reps, 7 full reps)", when: "You want a brutal pump protocol that targets the biceps through every portion of the range of motion" },
        { movement: "Reverse grip preacher curl (overhand grip)", when: "You want to shift emphasis to the brachioradialis and brachialis for forearm development" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// CARRY (4 entries)
// ---------------------------------------------------------------------------

const carry: MovementCueData[] = [
  // ---- Farmer's Carry ----
  {
    name: "Farmer's Carry",
    category: "carry",
    primaryMuscles: ["traps", "forearms", "core", "glutes", "calves"],
    setup: "Stand between two heavy dumbbells, kettlebells, or farmer's carry handles. Hinge at the hips and grip one in each hand. Stand tall by driving through your legs — do not round your back to pick them up. Stand fully upright with the weights at your sides, shoulders pulled down and back, core braced.",
    breathingCue: "Breathe in a steady, controlled rhythm throughout the carry. Short nasal inhales, controlled mouth exhales. Do not hold your breath.",
    cues: [
      "Stand tall — shoulders packed down and back, chest up, core braced tight",
      "Walk with controlled, deliberate steps — do not rush or let the weights swing",
      "Keep the weights from touching your legs — actively engage your grip and shoulders",
      "Breathe — do not hold your breath for the entire carry",
    ],
    commonFaults: [
      { fault: "Shoulders shrugging up toward the ears", consequence: "The upper traps take over and the core, grip, and postural muscles are not trained effectively", fix: "Actively pull your shoulders down away from your ears before you start walking — think about putting your shoulder blades in your back pockets" },
      { fault: "Leaning to one side or letting the weights swing", consequence: "Creates asymmetrical loading on the spine and reduces the core stability benefit", fix: "Brace your core as if you are about to be pushed — keep your body perfectly vertical and the weights steady at your sides" },
      { fault: "Taking short, choppy steps and rushing through the carry", consequence: "Reduces the time under tension and makes the carry feel harder than it needs to be", fix: "Take smooth, controlled steps at a normal walking pace — the goal is time under load, not speed" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter weight for longer distance", when: "The weight is so heavy you cannot maintain posture for the prescribed distance" },
        { movement: "Suitcase carry (one weight in one hand only)", when: "You want to reduce total load while adding an anti-lateral-flexion core challenge" },
        { movement: "Rack carry (kettlebells in the front rack position)", when: "Grip strength is the limiting factor and you want to train the carry posture without grip fatigue" },
      ],
      harder: [
        { movement: "Heavier weight for the same distance", when: "You can complete the prescribed distance with perfect posture and want to increase the challenge" },
        { movement: "Overhead carry (one or both weights pressed overhead)", when: "You want to add a massive shoulder stability and core challenge to the carry" },
        { movement: "Mixed carry (one weight overhead, one at your side)", when: "You want the ultimate asymmetrical core challenge that tests anti-lateral-flexion and overhead stability simultaneously" },
      ],
    },
  },

  // ---- Suitcase Carry ----
  {
    name: "Suitcase Carry",
    category: "carry",
    primaryMuscles: ["obliques", "quadratus lumborum", "grip", "traps", "core"],
    setup:
      "Pick up a single heavy dumbbell or kettlebell in one hand and stand tall. The weight hangs at your side like a suitcase. Feet hip-width apart, shoulders level, free arm relaxed at your side or placed on your hip. Do not let the weight pull you into a lean — stand perfectly vertical before you start walking.",
    breathingCue:
      "Breathe steadily through your nose and out through your mouth. Brace your core on every exhale. Do not hold your breath — the carry may last 30-60 seconds.",
    cues: [
      "Stand tall and fight the lean — the weight wants to pull you to one side. Your job is to stay perfectly vertical",
      "Keep your shoulders level — the loaded shoulder should not drop lower than the unloaded side",
      "Walk with controlled, normal-length steps — do not rush or shuffle",
      "Squeeze the handle hard and keep your core locked in — think about bracing like someone is about to push you from the weighted side",
    ],
    commonFaults: [
      {
        fault: "Leaning away from the weight (compensating by shifting the torso to the opposite side)",
        consequence:
          "Defeats the purpose of the exercise, which is to resist lateral flexion. Leaning away means the core is not doing its job",
        fix: "Stand directly in front of a mirror and watch yourself — your shoulders should stay perfectly level and your spine straight. If you are leaning, the weight is too heavy",
      },
      {
        fault: "Shrugging the loaded shoulder up toward the ear",
        consequence:
          "Shifts the load to the upper trap instead of the core and grip, and creates neck tension",
        fix: "Actively pull the loaded shoulder down into your back pocket. Think 'long arm, depressed shoulder'",
      },
      {
        fault: "Walking too fast or taking uneven steps",
        consequence:
          "Reduces the time under tension and makes it harder to maintain proper posture",
        fix: "Walk at a deliberate, even pace. Each step should feel controlled — if you are rushing, the weight may be too heavy for your current core strength",
      },
    ],
    scaling: {
      easier: [
        { movement: "Farmer's Carry (weight in both hands)", when: "Single-sided loading is too challenging — bilateral carries are easier because the load is balanced" },
        { movement: "Suitcase carry with a lighter weight", when: "You lean significantly to one side — use a weight you can carry while maintaining a vertical torso" },
      ],
      harder: [
        { movement: "Heavier suitcase carry for shorter distances", when: "You can walk 40+ meters with perfect posture and want to increase the core and grip challenge" },
        { movement: "Waiter carry (weight held overhead on one side, nothing in the other hand)", when: "You want to combine anti-lateral-flexion with overhead stability for the ultimate single-sided challenge" },
        { movement: "Mixed carry (suitcase one side, overhead the other)", when: "You want the most complex carry variation — every stabilizer in your body works to keep you upright" },
      ],
    },
  },

  // ---- Overhead Carry ----
  {
    name: "Overhead Carry",
    category: "carry",
    primaryMuscles: ["shoulders", "traps", "core", "serratus anterior", "triceps"],
    setup:
      "Press one or two dumbbells or kettlebells to full lockout overhead. Biceps should be next to or slightly behind your ears. Wrists stacked over elbows, elbows stacked over shoulders. Ribs pulled down, core braced. Feet hip-width apart. Make sure your lockout is solid before you start walking.",
    breathingCue:
      "Breathe in controlled, shallow breaths through your nose and out through your mouth. Deep breaths can cause your ribcage to flare and your lower back to arch — keep it tight.",
    cues: [
      "Lock your arms out completely and actively push the weight toward the ceiling the entire time you walk",
      "Pull your ribs down and brace your core — do not let your lower back arch to compensate for the overhead position",
      "Walk with short, controlled steps — long strides will cause the weight to wobble",
      "Keep your head neutral — do not look up at the weight. Eyes straight ahead",
    ],
    commonFaults: [
      {
        fault: "Excessive lower back arch — the ribcage flares and the lower back hyperextends",
        consequence:
          "Compresses the lumbar spine under load and means the core is not stabilizing the weight — the lower back is acting as the shelf",
        fix: "Squeeze your glutes and pull your ribs down toward your belt. Think about making your torso a solid cylinder. If you cannot maintain this position, the weight is too heavy or your overhead mobility is insufficient",
      },
      {
        fault: "Elbows bending during the walk",
        consequence:
          "Means the weight is too heavy for your shoulders to stabilize — the triceps fatigue and the weight drops closer to your head",
        fix: "Actively push the weight up throughout the walk. If your elbows bend, stop, re-press to lockout, and continue — or use a lighter weight",
      },
      {
        fault: "Weight drifting forward in front of the body instead of staying stacked over the spine",
        consequence:
          "The shoulder has to work much harder and the lower back takes compensatory stress",
        fix: "Think about pressing the weight slightly behind your ears — the weight should be directly over or slightly behind the midline of your body. Work on thoracic and shoulder mobility if you cannot get the weight behind your head",
      },
    ],
    scaling: {
      easier: [
        { movement: "Single-arm overhead carry with a light kettlebell", when: "Two arms overhead is too demanding — one arm lets you focus on one shoulder at a time" },
        { movement: "Farmer's Carry", when: "You do not have the overhead mobility or shoulder stability for the overhead position yet" },
        { movement: "Waiter's walk with a light plate (palm flat under the plate overhead)", when: "You want to build overhead stability with a lighter, more manageable implement" },
      ],
      harder: [
        { movement: "Double kettlebell overhead carry with heavier weight", when: "Single-arm is solid and you want the full bilateral challenge" },
        { movement: "Overhead carry with bottoms-up kettlebell", when: "You want the ultimate shoulder stability challenge — the inverted bell demands total control" },
        { movement: "Mixed carry (one overhead, one at the side)", when: "You want to combine overhead stability with anti-lateral-flexion in one carry" },
      ],
    },
  },

  // ---- Front Rack Carry ----
  {
    name: "Front Rack Carry",
    category: "carry",
    primaryMuscles: ["core", "upper back", "shoulders", "biceps", "quads"],
    setup:
      "Clean two kettlebells into the front rack position — the bells rest on the outside of your forearms, wrists straight, elbows tight to your body and pointing down. Alternatively, unrack a barbell into a front squat rack position with elbows high. Stand tall with feet hip-width apart, ribs down, core braced before you take your first step.",
    breathingCue:
      "Breathe in controlled, short breaths — the weight on the front of your body compresses your torso, so do not try to take huge breaths. Exhale forcefully and brace tighter on each exhale.",
    cues: [
      "Keep your elbows tight to your body and do not let them drift away — the rack should feel like a shelf on your torso",
      "Stand as tall as possible — the weight will try to pull you forward. Fight for an upright posture every step",
      "Pull your ribs down and brace your core aggressively — this is a full-body exercise disguised as walking",
      "Take short, deliberate steps — do not rush",
    ],
    commonFaults: [
      {
        fault: "Leaning backward to counterbalance the front-loaded weight",
        consequence:
          "Hyperextends the lower back and puts the spine in a compromised position under load",
        fix: "Stand tall and vertical — brace your core as if you are about to get punched in the stomach. If you lean back, the weight is too heavy",
      },
      {
        fault: "Elbows dropping and the weight sliding off the rack position",
        consequence:
          "You lose the weight or have to grip it with your hands, turning it into a different exercise and straining the wrists and biceps",
        fix: "Keep your elbows glued to your ribcage and actively push the weight into the shelf of your shoulders. With kettlebells, make sure the bells are resting on the outside of your forearms, not hanging from your hands",
      },
      {
        fault: "Looking down at the ground while walking",
        consequence:
          "Rounds the upper back, drops the elbows, and degrades the front rack position",
        fix: "Keep your eyes on a fixed point straight ahead at eye level. Head neutral, chin tucked slightly",
      },
    ],
    scaling: {
      easier: [
        { movement: "Goblet carry (hold a single kettlebell or dumbbell at chest height)", when: "The double front rack is too challenging to maintain — a goblet hold is simpler and still trains the upright bracing pattern" },
        { movement: "Single kettlebell front rack carry", when: "Two kettlebells overwhelm your rack position — one side at a time lets you build the skill" },
      ],
      harder: [
        { movement: "Heavier front rack carry for shorter distances", when: "You can walk 40+ meters with solid posture and want to increase the load" },
        { movement: "Front rack carry with a pause and hold every 10 meters", when: "You want to add isometric challenge by standing perfectly still under load at intervals" },
        { movement: "Front rack carry to overhead press (press every 10 steps)", when: "You want to combine the carry with a pressing challenge for a brutal conditioning and strength combo" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// KETTLEBELL (6 entries)
// ---------------------------------------------------------------------------

const kettlebell: MovementCueData[] = [
  // ---- Kettlebell Swing ----
  {
    name: "Kettlebell Swing",
    category: "kettlebell",
    primaryMuscles: ["glutes", "hamstrings", "core", "shoulders", "lats"],
    setup: "Stand about one foot behind the kettlebell with feet slightly wider than shoulder-width apart, toes turned out slightly. Hinge at the hips, grip the kettlebell handle with both hands (overhand grip), and tilt it back toward you. Flatten your back, engage your lats, and hike the kettlebell between your legs to start the swing.",
    breathingCue: "Inhale sharply as the kettlebell passes between your legs (the hike). Exhale forcefully through pursed lips or with a 'tss' sound at the top as your hips snap and the kettlebell floats.",
    cues: [
      "This is a hip hinge, not a squat — your hips go back, your knees bend only slightly",
      "Snap your hips forward explosively — the arms do not lift the kettlebell, the hip drive does",
      "At the top, your body should be a vertical plank — glutes squeezed, abs braced, arms straight",
      "Let the kettlebell float at the top, then actively pull it back between your legs by hinging",
    ],
    commonFaults: [
      { fault: "Squatting the swing instead of hinging — knees bend too much and hips drop straight down", consequence: "Turns the swing into a front raise from a squat, which loads the shoulders and lower back instead of the glutes and hamstrings", fix: "Think about pushing your hips BACK, not DOWN — your torso should lean forward as your hips load behind you. Play 'butt to the wall' — imagine touching a wall behind you with your glutes" },
      { fault: "Using the arms to lift the kettlebell instead of the hip snap", consequence: "The shoulders fatigue quickly and you cannot use enough weight to challenge the posterior chain", fix: "Your arms are ropes — they do not generate force. The kettlebell should float to the top from hip drive alone. If it does not, the weight is too heavy or your hip snap is not aggressive enough" },
      { fault: "Hyperextending the lower back at the top instead of finishing with glute squeeze", consequence: "Compresses the lumbar spine and means the glutes are not fully engaging", fix: "At the top, squeeze your glutes as hard as possible and tuck your pelvis slightly — your body should be a straight line, not an arch" },
    ],
    scaling: {
      easier: [
        { movement: "Kettlebell deadlift (no swing, just the hinge pattern)", when: "You need to learn the hip hinge before adding the ballistic swing component" },
        { movement: "Kettlebell swing with a lighter weight", when: "You understand the pattern but cannot maintain form with the prescribed weight" },
        { movement: "Banded hip hinge (band around the hips, anchored behind you)", when: "You want to feel what the hip snap is supposed to feel like before swinging a kettlebell" },
      ],
      harder: [
        { movement: "Single-arm kettlebell swing", when: "You want to increase the grip, core, and anti-rotation challenge" },
        { movement: "American kettlebell swing (overhead instead of eye level)", when: "You want a greater range of motion and more shoulder involvement — ensure you have the overhead mobility first" },
        { movement: "Double kettlebell swing (one in each hand)", when: "You want to increase the total load and posterior chain demand significantly" },
      ],
    },
  },

  // ---- Turkish Get-Up ----
  {
    name: "Turkish Get-Up",
    category: "kettlebell",
    primaryMuscles: ["shoulders", "core", "glutes", "hip stabilizers", "traps"],
    setup: "Lie on your back with a kettlebell pressed to full lockout in your right hand, right arm straight and vertical. Your right knee is bent with the foot flat on the floor. Left arm is extended at about 45 degrees from your body, palm down. Left leg is straight on the floor. Eyes stay on the kettlebell.",
    breathingCue: "Breathe at each position — do not hold your breath through the entire get-up. Inhale to brace before each transition, exhale as you complete it and settle into the next position.",
    cues: [
      "Keep the kettlebell arm locked out and vertical at all times — your eyes stay on it",
      "Roll to your free elbow first, then press up to your hand — do not sit straight up",
      "Bridge your hips high, sweep your free leg under you to a kneeling position",
      "Stand up from the lunge position, then reverse every step back to the floor",
    ],
    commonFaults: [
      { fault: "Losing the lockout — the elbow bends as you transition through positions", consequence: "The kettlebell can collapse on you — this is the most dangerous fault in the get-up", fix: "Actively push the kettlebell toward the ceiling at every single position — think 'punch the ceiling' throughout the entire movement" },
      { fault: "Rushing through the transitions instead of holding each position", consequence: "You miss the stability training at each position and are more likely to lose control of the kettlebell", fix: "Hold each position for 2-3 seconds — there should be 7 distinct positions on the way up and 7 on the way down. Treat each one as its own exercise" },
      { fault: "Sitting straight up instead of rolling to the elbow first", consequence: "Puts enormous strain on the hip flexors and lower back — you also lose the kettlebell position", fix: "Roll to your elbow on the same side as the bent knee — use the angle, not a crunch, to get up to your elbow" },
    ],
    scaling: {
      easier: [
        { movement: "Bodyweight get-up (no weight, just the movement pattern)", when: "You are learning the sequence of positions and do not need load yet" },
        { movement: "Shoe get-up (balance a shoe on your fist instead of a kettlebell)", when: "You want a feedback tool that teaches you to keep your arm vertical without the risk of a heavy weight" },
        { movement: "Half get-up (only go up to the tall-sit or bridge position, then reverse)", when: "You are building strength in the first few positions before doing the full movement" },
      ],
      harder: [
        { movement: "Heavier kettlebell get-up", when: "You can perform the full get-up with smooth, controlled transitions and want more load" },
        { movement: "Get-up with a pause at every position (3-5 seconds each)", when: "You want to build stability endurance and expose any weak points in the chain" },
        { movement: "Barbell get-up", when: "You have mastered the kettlebell version and want the ultimate shoulder stability challenge — the barbell demands more control due to its length" },
      ],
    },
  },

  // ---- Kettlebell Goblet Squat ----
  {
    name: "Kettlebell Goblet Squat",
    category: "kettlebell",
    primaryMuscles: ["quads", "glutes", "core", "upper back"],
    setup:
      "Hold a kettlebell by the horns (the sides of the handle) at chest height, keeping it close to your body. Elbows point down and slightly forward. Feet shoulder-width apart or slightly wider, toes turned out 15-30 degrees. Stand tall with your chest up.",
    breathingCue:
      "Take a big breath and brace your core at the top. Hold the brace as you squat down. Exhale as you stand up past the sticking point.",
    cues: [
      "Sit down between your hips — let your elbows track inside your knees at the bottom",
      "Push your knees out over your toes as you descend — use your elbows to gently push your knees apart at the bottom if needed",
      "Keep the kettlebell pulled tight against your chest — do not let it drift forward",
      "Drive through your whole foot to stand up and squeeze your glutes at the top",
    ],
    commonFaults: [
      {
        fault: "The kettlebell drifts away from the chest and the torso folds forward",
        consequence:
          "Shifts the load onto the lower back and turns the squat into a good morning",
        fix: "Pull the kettlebell into your chest like you are hugging it. Think 'elbows down, chest up' throughout the entire squat",
      },
      {
        fault: "Heels lifting off the ground at the bottom",
        consequence:
          "Indicates ankle mobility limitations and creates an unstable base — you cannot generate maximum force",
        fix: "Widen your stance slightly and turn your toes out more. If the issue persists, elevate your heels on small plates or work on ankle mobility",
      },
      {
        fault: "Not squatting to full depth",
        consequence:
          "Reduces the stimulus on the glutes and limits hip mobility development",
        fix: "The goblet squat is one of the best movements for building depth — use your elbows to push your knees apart at the bottom and sit as low as you can with a flat back. If depth is limited, pause at the bottom for 3 seconds to build comfort",
      },
    ],
    scaling: {
      easier: [
        { movement: "Bodyweight Air Squat", when: "You need to own the squat pattern before adding any load" },
        { movement: "Goblet Squat to a box or bench (sit and stand)", when: "You want a depth target and the confidence of having something to sit on" },
      ],
      harder: [
        { movement: "Double Kettlebell Front Squat", when: "A single kettlebell is no longer challenging and you want to increase the load significantly" },
        { movement: "Goblet Squat with a 3-second pause at the bottom", when: "You want to build strength and mobility in the deep squat position" },
        { movement: "Barbell Front Squat", when: "You have mastered the goblet squat pattern and are ready for barbell loading" },
      ],
    },
  },

  // ---- Kettlebell Clean ----
  {
    name: "Kettlebell Clean",
    category: "kettlebell",
    primaryMuscles: ["glutes", "hamstrings", "core", "biceps", "forearms"],
    setup:
      "Stand with feet shoulder-width apart, kettlebell on the floor about a foot in front of you. Hinge at the hips and grip the handle with one hand. Tilt the kettlebell toward you so the handle is angled back. Flat back, shoulders higher than hips, hips higher than knees.",
    breathingCue:
      "Inhale as you hike the kettlebell back between your legs. Exhale sharply as you snap your hips and clean the bell to the rack position.",
    cues: [
      "Hike the kettlebell back between your legs like a football snap — keep your arm tight to your body",
      "Snap your hips forward explosively and let that power float the kettlebell up — do not curl it with your arm",
      "As the bell rises, pull your elbow in tight to your body and insert your hand around the bell so it lands softly on the outside of your forearm",
      "Finish standing tall with the kettlebell resting on your forearm, elbow tight to your ribs, wrist straight",
    ],
    commonFaults: [
      {
        fault: "The kettlebell flips over and bangs the back of the wrist",
        consequence:
          "Bruises the wrist and forearm — this is the most common complaint from beginners",
        fix: "The fix is in the timing — do not let the bell loop over. As it rises, keep your hand close to your body and guide the bell around your hand by pulling your elbow in. Think about zipping up a jacket — your hand stays close to your body and the bell wraps around, not over",
      },
      {
        fault: "Using the arm to curl the kettlebell up instead of using hip drive",
        consequence:
          "Fatigues the biceps, limits the weight you can use, and misses the posterior chain benefit",
        fix: "The arm should be relaxed and act like a rope. All the power comes from the hip snap. Practice by doing kettlebell swings first — if you can swing it, you can clean it. The arm just redirects the bell",
      },
      {
        fault: "Bell landing too far from the body in the rack position",
        consequence:
          "The weight is leveraged away from your center of mass, straining your shoulder and wrist",
        fix: "Keep your elbow pinned to your ribcage as the bell reaches the top. The bell should rest on the outside of your forearm with your arm tight to your body — not floating out in front of you",
      },
    ],
    scaling: {
      easier: [
        { movement: "Kettlebell Swing (two-hand)", when: "You need to build the hip hinge and hip snap before adding the catch component of the clean" },
        { movement: "Kettlebell deadlift to rack position (dead stop clean)", when: "You want to practice the rack position catch from a slower, more controlled starting point" },
      ],
      harder: [
        { movement: "Double Kettlebell Clean", when: "Single-arm cleans are smooth and you want to double the load and coordination demand" },
        { movement: "Kettlebell Clean and Press (clean, then press overhead)", when: "You want to combine the clean with an overhead press for a full-body power and strength movement" },
        { movement: "Kettlebell Clean with heavier bell", when: "Your technique is solid and you want to increase the load for power development" },
      ],
    },
  },

  // ---- Kettlebell Snatch ----
  {
    name: "Kettlebell Snatch",
    category: "kettlebell",
    primaryMuscles: ["glutes", "hamstrings", "shoulders", "core", "traps"],
    setup:
      "Stand with feet shoulder-width apart, kettlebell on the floor about a foot in front of you. Hinge at the hips and grip the handle with one hand. Tilt the kettlebell toward you. This is the same starting position as the kettlebell clean and swing.",
    breathingCue:
      "Inhale as you hike the kettlebell back between your legs. Exhale sharply as you snap your hips and punch the bell overhead. Breathe at the top in the lockout position before bringing it back down.",
    cues: [
      "Hike the bell back between your legs, then snap your hips hard — the bell should float up from hip power, not arm pull",
      "As the bell passes chest height, punch your hand straight up toward the ceiling — the bell wraps over and lands softly on the back of your forearm at lockout",
      "Finish with your arm fully locked out overhead, bicep by your ear, wrist straight, bell resting gently on your forearm",
      "To bring it down, let the bell flip over your hand and guide it back between your legs in one fluid motion",
    ],
    commonFaults: [
      {
        fault: "The bell crashes onto the back of the forearm or wrist at the top",
        consequence:
          "Bruises and batters the forearm — this makes people avoid the exercise entirely",
        fix: "Punch your hand up and through the handle at the top — the bell should roll over your hand softly, not flip over and slam. Practice with a lighter bell and think about inserting your hand into the handle at the top, not letting the bell crash over",
      },
      {
        fault: "Pulling the bell up with the arm instead of driving with the hips",
        consequence:
          "Limits the weight you can use, fatigues the shoulder quickly, and misses the power development benefit",
        fix: "The arm is a guide rope — the hip snap does the heavy lifting. If you cannot float the bell to chest height with hips alone, practice more kettlebell swings before attempting snatches",
      },
      {
        fault: "Not locking out fully overhead — soft elbow and weight in front of the body",
        consequence:
          "Puts the shoulder in a compromised position and you are essentially holding the weight with muscle instead of bone stacking",
        fix: "Lock your elbow completely, push the bell slightly behind your head, and stack wrist over elbow over shoulder. Think about putting your arm in your back pocket — active shoulder, locked elbow",
      },
    ],
    scaling: {
      easier: [
        { movement: "Kettlebell Swing (one-hand)", when: "You need to master the one-hand hip snap before adding the overhead catch" },
        { movement: "Kettlebell Clean", when: "You want to practice the pull and catch at a lower position before going all the way overhead" },
        { movement: "Kettlebell High Pull", when: "You want to train the pulling pattern without the overhead catch to build power and timing" },
      ],
      harder: [
        { movement: "Double Kettlebell Snatch", when: "Single-arm snatches are crisp and you want the ultimate test of power and coordination" },
        { movement: "Kettlebell Snatch test (100 snatches in 5 minutes)", when: "You want a conditioning benchmark that tests power endurance and mental toughness" },
        { movement: "Heavier kettlebell snatch", when: "Your technique is locked in and you want to increase the power and strength demand" },
      ],
    },
  },

  // ---- Kettlebell Front Rack Carry ----
  {
    name: "Kettlebell Front Rack Carry",
    category: "kettlebell",
    primaryMuscles: ["core", "upper back", "shoulders", "biceps"],
    setup:
      "Clean one or two kettlebells into the front rack position — bells resting on the outside of your forearms, elbows tight to your ribs, wrists straight. Stand tall with ribs pulled down and core braced. Feet hip-width apart. Make sure your rack is solid and your breathing is controlled before you start walking.",
    breathingCue:
      "Breathe in short, controlled breaths — the bells compress your torso, so big breaths are difficult. Focus on forceful exhales that tighten your core.",
    cues: [
      "Keep your elbows glued to your ribcage — do not let them flare out",
      "Stand as tall as possible and pull your ribs down — fight the urge to lean back",
      "Walk with short, deliberate steps at a controlled pace",
      "Squeeze the handles and keep your wrists straight — do not let them bend backward",
    ],
    commonFaults: [
      {
        fault: "Leaning backward to counterbalance the weight in front",
        consequence:
          "Hyperextends the lower back and puts the spine in a compromised position",
        fix: "Brace your core like you are about to get punched, squeeze your glutes, and keep your ribs pulled down. If you lean back, the weight is too heavy",
      },
      {
        fault: "Elbows drifting away from the body, losing the rack position",
        consequence:
          "The kettlebells become leveraged away from your center of mass, dramatically increasing shoulder and bicep fatigue",
        fix: "Think about pinning your elbows to your ribs. The tighter the rack, the easier the carry feels. If you cannot maintain the rack, the weight is too heavy or your rack position needs work",
      },
      {
        fault: "Holding the breath for the entire carry",
        consequence:
          "You will gas out quickly and may get dizzy — carries are supposed to build work capacity, not test breath-holding",
        fix: "Breathe in short, controlled cycles — small inhale, forceful exhale. Each exhale should tighten your core, not release it",
      },
    ],
    scaling: {
      easier: [
        { movement: "Single kettlebell front rack carry", when: "Two kettlebells overwhelm your rack position or breathing — one side at a time is more manageable" },
        { movement: "Goblet carry (hold one kettlebell or dumbbell at chest height)", when: "The rack position is not yet comfortable — a goblet hold is simpler and still trains the upright brace" },
      ],
      harder: [
        { movement: "Heavier double kettlebell front rack carry", when: "Your current weight allows 40+ meters with perfect posture and you want to increase the challenge" },
        { movement: "Front rack carry with a press every 10 steps", when: "You want to combine the carry with an overhead pressing challenge for a strength and conditioning combo" },
        { movement: "Front rack carry to overhead carry (press overhead halfway through)", when: "You want to transition between two demanding carry positions in a single set" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// GYMNASTICS (6 entries)
// ---------------------------------------------------------------------------

const gymnastics: MovementCueData[] = [
  // ---- Handstand Hold (Wall-Supported) ----
  {
    name: "Handstand Hold (Wall-Supported)",
    category: "gymnastics",
    primaryMuscles: ["shoulders", "triceps", "core", "traps", "serratus anterior"],
    setup:
      "Face a wall and place your hands on the floor about 6-8 inches from the wall, shoulder-width apart. Fingers spread wide, middle fingers pointing straight ahead. Kick up one leg at a time until your heels touch the wall. Arms fully locked out, body in a straight line from wrists to ankles.",
    breathingCue:
      "Breathe in controlled, shallow breaths — inhale through your nose, exhale through your mouth. Deep breaths will cause your core to relax and your back to arch. Stay tight on every exhale.",
    cues: [
      "Push the floor away from you — actively press through your hands to create space between your shoulders and ears",
      "Squeeze your glutes and point your toes — your entire body should be rigid, not a wet noodle",
      "Pull your ribs down and think about making your body as straight as a board — no banana-back arch",
      "Spread your fingers wide and grip the floor — your fingertips are your balance point",
    ],
    commonFaults: [
      {
        fault: "Banana-back position — ribs flare out, lower back arches, feet are behind the hands",
        consequence:
          "Puts excessive stress on the lower back and shoulders, prevents you from developing a straight-line handstand, and limits how long you can hold it",
        fix: "Squeeze your glutes, tuck your ribs down, and think about making your body one straight line. Practice hollow body holds on the floor first — the handstand is just a hollow body hold turned upside down",
      },
      {
        fault: "Shoulders closed — not pushing fully through the hands",
        consequence:
          "The shoulder joint is not fully stacked, which means your muscles work much harder to hold the position and fatigue sets in fast",
        fix: "Actively push the floor away and try to make yourself as tall as possible. Think 'shrug your shoulders to your ears while keeping your arms locked'",
      },
      {
        fault: "Hands too far from or too close to the wall",
        consequence:
          "Too far means you lean heavily on the wall and cannot develop balance; too close means your face is jammed against the wall and you cannot breathe",
        fix: "Start with hands 6-8 inches from the wall. As you get stronger, move them closer to 3-4 inches. You want your heels gently touching the wall, not your whole body pressed against it",
      },
    ],
    scaling: {
      easier: [
        { movement: "Pike push-up with feet on a box", when: "You are not comfortable going fully inverted yet — the pike position builds overhead pressing strength at a less intimidating angle" },
        { movement: "Wall walk (walk hands up the wall from a push-up position)", when: "Kicking up is too scary — wall walks let you gradually invert with control" },
        { movement: "Chest-to-wall handstand hold (facing the wall)", when: "You want the most controlled wall-supported handstand with the best alignment — facing the wall forces a straighter position" },
      ],
      harder: [
        { movement: "Handstand hold with one heel off the wall", when: "You want to start developing freestanding balance while still having the wall for safety" },
        { movement: "Freestanding handstand hold", when: "Your wall holds are 30+ seconds with perfect form and you are ready to balance without support" },
        { movement: "Handstand push-up (wall-supported)", when: "You can hold for 30+ seconds and want to add a pressing movement from the inverted position" },
      ],
    },
  },

  // ---- L-Sit ----
  {
    name: "L-Sit",
    category: "gymnastics",
    primaryMuscles: ["hip flexors", "quads", "core", "triceps", "shoulders"],
    setup:
      "Place your hands on parallettes, dip bars, or flat on the floor with fingers forward. Press down through your hands and lock your arms straight to lift your body off the ground. Extend your legs straight out in front of you so your body forms an L-shape — torso vertical, legs horizontal.",
    breathingCue:
      "Breathe in short, tight breaths — small inhale through the nose, firm exhale through the mouth. The compressed position makes deep breathing difficult. Stay braced on every exhale.",
    cues: [
      "Press down hard through your hands and lock your elbows — your arms are pillars holding you up",
      "Lift your legs until they are parallel to the ground — squeeze your quads hard to keep your knees straight",
      "Push your shoulders down and away from your ears — do not let yourself sink between your shoulders",
      "Point your toes and squeeze everything — glutes, quads, core. Nothing should be relaxed",
    ],
    commonFaults: [
      {
        fault: "Shoulders shrugging up to the ears",
        consequence:
          "Compresses the neck, destabilizes the shoulder girdle, and limits how long you can hold the position",
        fix: "Actively depress your shoulders — think about pushing yourself up and away from the floor. You should feel your lats and serratus engage",
      },
      {
        fault: "Legs dropping below horizontal or knees bending",
        consequence:
          "Reduces the hip flexor and core demand — the exercise only works if the legs are held at or above horizontal",
        fix: "If straight legs are too hard, start with the tucked L-sit (knees bent, feet off the floor) and progressively straighten your legs over weeks. Hamstring flexibility also matters — stretch your hamstrings regularly",
      },
      {
        fault: "Rounding the lower back to lift the legs",
        consequence:
          "Puts the spine in flexion under load and indicates insufficient hip flexor strength",
        fix: "Focus on lifting with your hip flexors, not pulling your legs up by rounding your back. Keep your chest tall and think about lifting your knees with the crease of your hips",
      },
    ],
    scaling: {
      easier: [
        { movement: "Tuck L-sit (knees bent, feet off the floor)", when: "You cannot hold straight legs horizontal — the tucked version shortens the lever and makes it achievable" },
        { movement: "One leg extended L-sit (one leg straight, one tucked)", when: "The full tuck is easy but both legs straight is too hard — this is the bridge between the two" },
        { movement: "Seated L-sit on the floor (hands on floor beside hips, push up and lift)", when: "Parallettes are not available — the floor version is harder on the wrists but still trains the pattern" },
      ],
      harder: [
        { movement: "L-sit with legs raised above horizontal (V-sit)", when: "The standard L-sit is solid for 15+ seconds and you want to increase the hip flexor and core demand" },
        { movement: "Ring L-sit", when: "You want to add an instability challenge — the rings make every muscle work harder to stabilize" },
        { movement: "L-sit to handstand press (on parallettes)", when: "You want the ultimate skill and strength challenge — pressing from an L-sit to a handstand" },
      ],
    },
  },

  // ---- Ring Support Hold ----
  {
    name: "Ring Support Hold",
    category: "gymnastics",
    primaryMuscles: ["chest", "triceps", "shoulders", "core", "biceps"],
    setup:
      "Set the rings to a height where you can jump up and support yourself with straight arms without your feet touching the ground. Jump up, catch the rings, and press to a full lockout with straight arms. Turn the rings out so your palms face forward (external rotation). Arms at your sides, body vertical, legs together and toes pointed.",
    breathingCue:
      "Breathe steadily — controlled inhale through the nose, exhale through the mouth. Each exhale should tighten your grip and brace. Do not hold your breath.",
    cues: [
      "Lock your elbows completely and push down through the rings — think about pressing yourself as tall as possible",
      "Turn the rings out (palms forward) and keep them turned out — this is the most important cue for building ring strength",
      "Squeeze your legs together, point your toes, and tighten your glutes and core — nothing should wobble",
      "Keep the rings as still as possible — any wobbling means you need to engage harder",
    ],
    commonFaults: [
      {
        fault: "Rings turned in (palms facing each other) instead of turned out",
        consequence:
          "You miss the external rotation demand that makes ring support holds so effective for shoulder health and strength. Rings-turned-in is also an unstable position",
        fix: "Actively rotate the rings outward until your palms face forward. If you cannot maintain this, start with rings parallel (neutral) and gradually work toward full turnout as your shoulders strengthen",
      },
      {
        fault: "Elbows bending — soft lockout",
        consequence:
          "Your muscles work overtime instead of your skeletal structure supporting the load. Fatigue hits fast and the hold loses its purpose",
        fix: "Lock your elbows completely — think about straightening them as hard as you can. If you cannot maintain a lockout, spend time on straight-arm dips or bar support holds first",
      },
      {
        fault: "Body swinging or rings wobbling excessively",
        consequence:
          "Indicates a lack of core engagement and shoulder stability — the rings amplify every wobble",
        fix: "Squeeze everything — glutes, legs, core. Think about being a rigid statue. If the wobbling does not stop, practice on dip bars or a stable surface first to build the base strength",
      },
    ],
    scaling: {
      easier: [
        { movement: "Ring support hold with feet on the ground (partial bodyweight)", when: "Full bodyweight on the rings is too unstable — keeping feet on the ground lets you practice the position with reduced load" },
        { movement: "Bar support hold on dip bars or parallettes", when: "Rings are too unstable — bars provide the same straight-arm pressing pattern without the balance challenge" },
      ],
      harder: [
        { movement: "Ring support hold with rings turned out and a 30+ second hold", when: "You can hold with turnout for 15 seconds and want to build duration" },
        { movement: "Ring L-sit support hold", when: "The standard support is solid and you want to add a core and hip flexor demand" },
        { movement: "Ring Dip (dynamic from the support hold)", when: "You are stable in the hold and ready to add a dipping movement" },
      ],
    },
  },

  // ---- Ring Dip ----
  {
    name: "Ring Dip",
    category: "gymnastics",
    primaryMuscles: ["chest", "triceps", "shoulders", "core"],
    setup:
      "Start in a ring support hold — straight arms, rings turned out, body vertical. Legs together, toes pointed or crossed behind you. Core braced, shoulders depressed (away from ears). Make sure you can hold a solid support for at least 10 seconds before attempting ring dips.",
    breathingCue:
      "Inhale as you lower yourself down between the rings. Exhale as you press back up to the lockout support position.",
    cues: [
      "Lower yourself slowly — keep the rings as close to your body as possible. Do not let them flare out",
      "Go down until your shoulders are below your elbows (full depth) if your mobility allows — otherwise go as low as you can control",
      "Press back up to full lockout and turn the rings out at the top of every rep",
      "Keep your torso as upright as possible — a slight forward lean is okay, but do not collapse forward",
    ],
    commonFaults: [
      {
        fault: "Rings flaring out wide at the bottom of the dip",
        consequence:
          "Puts extreme stress on the shoulder joint and pecs in a stretched, unstable position — this is where ring dip shoulder injuries happen",
        fix: "Keep the rings tight to your body throughout the movement. If they flare at the bottom, you are not strong enough for full ring dips yet — do band-assisted ring dips or bar dips until your stability improves",
      },
      {
        fault: "Not reaching full lockout with rings turned out at the top",
        consequence:
          "Each rep starts from a weak position and you miss the turnout strength that is the primary benefit of ring work",
        fix: "Every rep must finish in a full support hold with rings turned out. No rep counts if you do not lock out at the top. If you cannot turn out after pressing up, the weight of your body is too much — use band assistance",
      },
      {
        fault: "Kipping or swinging to get out of the bottom",
        consequence:
          "Puts uncontrolled forces on the shoulder in its most vulnerable position and does not build the strict pressing strength you need",
        fix: "Every rep should be strict and controlled. If you cannot press out of the bottom without swinging, reduce the range of motion or add band assistance",
      },
    ],
    scaling: {
      easier: [
        { movement: "Band-assisted ring dip (band looped under foot)", when: "You have a solid ring support hold but cannot yet press through a full dip without help" },
        { movement: "Bar dip on parallel bars or dip station", when: "Ring instability is the limiting factor — bar dips let you build pressing strength on a stable surface" },
        { movement: "Ring dip negatives (lower slowly for 5 seconds, then step down)", when: "You cannot press up yet but want to build eccentric strength on the rings" },
      ],
      harder: [
        { movement: "Strict ring dip with a 3-second pause at the bottom", when: "You want to build strength in the most vulnerable position and eliminate any momentum" },
        { movement: "Weighted ring dip (weight belt or vest)", when: "Bodyweight ring dips are solid for 10+ reps and you want to add external load" },
        { movement: "Ring muscle-up (combines a pull and a dip transition)", when: "You have mastered ring dips and ring pull-ups and want the ultimate ring skill" },
      ],
    },
  },

  // ---- Skin the Cat ----
  {
    name: "Skin the Cat",
    category: "gymnastics",
    primaryMuscles: ["lats", "shoulders", "biceps", "core", "chest (stretch)"],
    setup:
      "Hang from gymnastics rings with a full grip (thumbs around the rings). Arms fully extended, shoulders engaged (active hang, not dead hang — pull your shoulders slightly down and back). Legs together, core braced.",
    breathingCue:
      "Inhale at the hang position. Hold your breath or breathe lightly as you rotate through. Exhale when you reach the extended hang position behind you. Breathe again before reversing the movement.",
    cues: [
      "Lift your toes toward the rings by piking your body — think about doing a hanging leg raise first",
      "Once your feet pass through your arms, continue rotating backward until you feel a stretch in your shoulders and chest — this is the extended (German hang) position",
      "Hold the bottom stretch position for 2-3 seconds — this is where the shoulder opening happens",
      "Reverse the movement by pulling your legs back through your arms and returning to the starting hang with control",
    ],
    commonFaults: [
      {
        fault: "Dropping into the bottom position too fast instead of controlling the descent",
        consequence:
          "Puts a sudden, extreme stretch on the shoulder joint and chest — this can cause a shoulder injury, especially if your mobility is limited",
        fix: "Lower into the extended position extremely slowly — take 5 seconds to get there. If you feel a sharp pain or cannot control the descent, you are not ready for full skin the cats yet. Start with hanging leg raises and German hang stretches from a bar",
      },
      {
        fault: "Bending the arms and pulling through instead of rotating with straight arms",
        consequence:
          "Reduces the lat and shoulder stretch and turns the skill into a pull-up variation",
        fix: "Keep your arms as straight as possible throughout the rotation. If you need to bend your arms significantly, the movement is too advanced — build strength with straight-arm hangs and inverted hangs first",
      },
      {
        fault: "Not reversing the movement — just dropping out of the bottom position",
        consequence:
          "You miss the concentric pulling portion, which is the strength-building half of the exercise",
        fix: "Always reverse the movement back to the starting hang. The return is harder than the descent — if you cannot pull back through, start with the tuck version where your knees are bent",
      },
    ],
    scaling: {
      easier: [
        { movement: "Tuck skin the cat (knees bent throughout)", when: "Straight legs make the lever too long — bending the knees shortens the lever and makes the rotation easier to control" },
        { movement: "German hang hold from a bar (just the bottom stretch position)", when: "You want to build the shoulder flexibility needed for skin the cat without the full rotation" },
        { movement: "Hanging leg raise to inverted hang (only going halfway)", when: "The full rotation is too much — practicing the first half builds the pulling strength you need" },
      ],
      harder: [
        { movement: "Skin the cat with a slow 5-second descent and 5-second return", when: "You want to build maximum strength and control throughout the entire range of motion" },
        { movement: "Skin the cat with a long hold at the bottom (10-15 seconds)", when: "You want to push your shoulder mobility and build endurance in the extended position" },
        { movement: "Straight-body skin the cat with pointed toes", when: "The basic version is easy and you want the most demanding body position with the longest lever" },
      ],
    },
  },

  // ---- Pistol Squat ----
  {
    name: "Pistol Squat",
    category: "gymnastics",
    primaryMuscles: ["quads", "glutes", "hip flexors", "core", "ankle stabilizers"],
    setup:
      "Stand on one leg with the other leg extended straight out in front of you. Arms can be extended forward for counterbalance. Standing foot flat on the floor, toes pointed slightly out. Brace your core and fix your gaze on a point at eye level for balance.",
    breathingCue:
      "Inhale as you lower yourself down on one leg. Exhale as you drive through your foot to stand back up.",
    cues: [
      "Sit back and down slowly — like you are sitting into a tiny invisible chair. Keep your weight over mid-foot",
      "Drive your extended leg forward and up as you descend — it acts as a counterbalance",
      "Go as deep as you can while keeping your heel on the floor — ideally your hamstring touches your calf at the bottom",
      "Drive through your whole foot to stand up — do not shift to your toes. Squeeze your glute at the top",
    ],
    commonFaults: [
      {
        fault: "Falling backward at the bottom of the squat",
        consequence:
          "Indicates insufficient ankle mobility or lack of counterbalance — you cannot maintain your center of gravity over your foot",
        fix: "Hold a light plate or dumbbell in front of you as a counterbalance. Also work on ankle mobility — if your heel comes up, you need more ankle dorsiflexion. Squat shoes or a heel elevation can help",
      },
      {
        fault: "Knee caving inward during the descent or ascent",
        consequence:
          "Puts dangerous shearing force on the knee ligaments and indicates weak hip stabilizers",
        fix: "Actively push your knee out over your pinky toe throughout the entire rep. Strengthen your glute medius with single-leg glute bridges and banded walks",
      },
      {
        fault: "Extended leg dropping to the ground because the hip flexors fatigue",
        consequence:
          "You lose the counterbalance and your foot drags on the ground, which disrupts the movement",
        fix: "Build hip flexor strength and endurance with seated leg raises and L-sit progressions. Your hip flexors need to hold your leg up for the entire rep",
      },
    ],
    scaling: {
      easier: [
        { movement: "Pistol to a box or chair (sit down, stand up on one leg)", when: "You cannot control the descent — the box gives you a target and a safety net" },
        { movement: "Band-assisted pistol squat (hold a band anchored above you)", when: "You have the mobility but not enough strength to stand up from the bottom — the band takes off some load at the hardest point" },
        { movement: "Shrimp squat (back leg bends behind you instead of extending forward)", when: "The hip flexor demand of keeping the front leg extended is the limiting factor — the shrimp removes that requirement" },
      ],
      harder: [
        { movement: "Weighted pistol squat (hold a kettlebell goblet-style)", when: "Bodyweight pistols are solid for 5+ reps per side and you want to add external resistance" },
        { movement: "Pistol squat with a slow eccentric (5-second lower)", when: "You want to build control and strength through the full range of motion" },
        { movement: "Pistol squat from a deficit (standing on a raised surface)", when: "You want a deeper range of motion at the bottom — this requires extreme mobility and strength" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// RUNNING DRILLS (8 entries)
// ---------------------------------------------------------------------------

const runningDrills: MovementCueData[] = [
  // ---- A-Skip ----
  {
    name: "A-Skip",
    category: "running_drill",
    primaryMuscles: ["hip flexors", "calves", "glutes", "core"],
    setup:
      "Stand tall with feet hip-width apart. Arms bent at 90 degrees, relaxed hands. Pick a straight line of 20-40 meters to move through.",
    breathingCue:
      "Breathe rhythmically — exhale on each skip as the knee drives up. Keep breathing steady; do not hold your breath.",
    cues: [
      "Drive one knee up to hip height with a quick, snappy motion while skipping off the opposite foot",
      "Land on the ball of your foot directly beneath your hips — not out in front",
      "Opposite arm drives forward as the knee comes up — arm and leg work in sync",
      "Stay tall through the torso — do not lean back or hunch forward",
    ],
    commonFaults: [
      { fault: "Knee does not reach hip height", consequence: "Fails to train the high-knee drive pattern needed for running power", fix: "Slow down and focus on range of motion — exaggerate the knee lift until the thigh is parallel to the ground" },
      { fault: "Landing flat-footed or on the heels", consequence: "Reduces the elastic rebound from the ankle and teaches a slow ground contact", fix: "Stay on the balls of your feet throughout — think about being springy and bouncing off the ground" },
      { fault: "Arms crossing the midline of the body", consequence: "Creates rotational forces that waste energy and do not translate to efficient running", fix: "Drive your arms straight forward and back — imagine your hands are on rails that run parallel to your direction of travel" },
    ],
    scaling: {
      easier: [
        { movement: "Marching A-drill (no skip, just walk with high knees)", when: "The coordination of skipping and driving the knee is too challenging at first" },
        { movement: "A-skip in place", when: "You need to master the movement pattern before adding forward travel" },
      ],
      harder: [
        { movement: "A-skip for height (exaggerate the vertical skip)", when: "You want to build more explosive hip flexor power" },
        { movement: "A-skip into sprint (transition from drill to 20m sprint)", when: "You want to transfer the drill pattern directly into your running mechanics" },
      ],
    },
  },

  // ---- B-Skip ----
  {
    name: "B-Skip",
    category: "running_drill",
    primaryMuscles: ["hip flexors", "hamstrings", "glutes", "calves"],
    setup:
      "Stand tall with feet hip-width apart. Same starting position as the A-skip. You will need 20-40 meters of straight space.",
    breathingCue:
      "Breathe rhythmically with each skip cycle. Exhale as the leg extends and paws back down.",
    cues: [
      "Drive the knee up to hip height just like an A-skip, then extend the leg out in front of you",
      "Actively paw the foot back down to the ground beneath your hips — do not let it land passively",
      "The ground contact should be quick and aggressive — pull the foot back with your hamstring",
      "Maintain tall posture and opposite arm-to-leg coordination throughout",
    ],
    commonFaults: [
      { fault: "Leg extends but does not actively paw back down", consequence: "Misses the entire purpose of the drill, which is to train the hamstring pull-through for running", fix: "Think about scraping the ground with the ball of your foot — aggressively pull it back beneath you" },
      { fault: "Upper body leaning backward as the leg extends", consequence: "Shifts your center of gravity behind you and makes the drill slow and choppy", fix: "Stay tall and think about keeping your hips over your feet — the leg extension happens in front of a stable torso" },
      { fault: "Too much forward lean with no knee height", consequence: "Turns the drill into a shuffle instead of training high-knee mechanics", fix: "Slow down and prioritize getting the knee to hip height before extending — speed will come with practice" },
    ],
    scaling: {
      easier: [
        { movement: "B-march (walking version with no skip)", when: "The skip coordination combined with the leg extension is too complex" },
        { movement: "A-skip (remove the extension portion)", when: "You need to master the basic skip pattern before adding the pawing motion" },
      ],
      harder: [
        { movement: "B-skip for distance per rep (exaggerate each cycle)", when: "You want to develop more power and range of motion in the drill" },
        { movement: "B-skip into sprint transition", when: "You want to connect the hamstring pull-through pattern directly into your sprinting" },
      ],
    },
  },

  // ---- High Knees ----
  {
    name: "High Knees",
    category: "running_drill",
    primaryMuscles: ["hip flexors", "calves", "core", "quadriceps"],
    setup:
      "Stand tall with feet hip-width apart. Arms bent at 90 degrees. You can do these in place or moving forward over 20-30 meters.",
    breathingCue:
      "Breathe in a quick, steady rhythm. Short inhales through the nose, exhales through the mouth. Do not hold your breath.",
    cues: [
      "Drive each knee up to hip height as fast as you can — the goal is speed, not distance",
      "Stay on the balls of your feet — quick, light ground contacts",
      "Pump your arms in sync with your legs — opposite arm to opposite knee",
      "Stay tall and keep your core engaged — do not lean back as the pace increases",
    ],
    commonFaults: [
      { fault: "Knees not reaching hip height", consequence: "Reduces the effectiveness of the drill for hip flexor activation and running mechanics", fix: "Slow the tempo down until you can get your thigh to parallel on every rep, then gradually speed up" },
      { fault: "Leaning back to get the knees higher", consequence: "Compensates with the lower back instead of the hip flexors and teaches poor running posture", fix: "Stay tall — your torso should be vertical or with a very slight forward lean. If you lean back, lower the height and focus on posture" },
      { fault: "Arms are passive or flailing", consequence: "Disconnects upper and lower body coordination, which is critical for efficient running", fix: "Pump your arms deliberately — think about driving your elbows back on each rep" },
    ],
    scaling: {
      easier: [
        { movement: "Marching high knees (slow, controlled pace)", when: "The fast tempo causes form breakdown" },
        { movement: "High knees with wall support (hands on a wall for balance)", when: "Balance is a limiting factor" },
      ],
      harder: [
        { movement: "High knees with a band around the feet for resistance", when: "Bodyweight high knees are easy and you want to increase hip flexor demand" },
        { movement: "High knees sprint (maximal speed for 10-15 seconds)", when: "You want to build top-end foot speed and neural drive" },
      ],
    },
  },

  // ---- Butt Kicks ----
  {
    name: "Butt Kicks",
    category: "running_drill",
    primaryMuscles: ["hamstrings", "calves", "hip flexors"],
    setup:
      "Stand tall with feet hip-width apart. Arms bent at 90 degrees or relaxed at your sides. Perform in place or moving forward over 20-30 meters.",
    breathingCue:
      "Breathe steadily in a natural rhythm. Do not hold your breath — keep it light and consistent.",
    cues: [
      "Flick your heel up toward your glute as quickly as possible on each stride",
      "Keep your thigh roughly vertical — the motion is a fast heel kick, not a knee lift",
      "Stay tall and lean very slightly forward from the ankles",
      "Quick, light ground contacts on the balls of your feet — think 'fast feet'",
    ],
    commonFaults: [
      { fault: "Heel does not reach the glutes", consequence: "The hamstring is not cycling through its full range of motion, reducing the drill's benefit", fix: "Slow down and focus on getting the heel all the way up before increasing speed" },
      { fault: "Leaning forward excessively at the waist", consequence: "Shifts posture away from proper running form and puts strain on the lower back", fix: "Lean from the ankles, not the waist — keep your chest up and core engaged" },
      { fault: "Moving forward too fast and losing the heel flick", consequence: "Turns the drill into jogging instead of training the hamstring recovery phase", fix: "Minimize forward travel and maximize heel speed — the drill is about the heel flick, not covering ground" },
    ],
    scaling: {
      easier: [
        { movement: "Walking butt kicks (slow, deliberate pace)", when: "The coordination or hamstring flexibility is limiting" },
        { movement: "Standing butt kicks in place (one leg at a time)", when: "You want to isolate the movement pattern" },
      ],
      harder: [
        { movement: "Butt kicks with a forward sprint transition", when: "You want to transfer the fast hamstring recovery into your sprint mechanics" },
        { movement: "Band-resisted butt kicks", when: "Bodyweight is too easy and you want to build hamstring speed-strength" },
      ],
    },
  },

  // ---- Carioca / Grapevine ----
  {
    name: "Carioca / Grapevine",
    category: "running_drill",
    primaryMuscles: ["hip flexors", "hip adductors", "hip abductors", "obliques", "calves"],
    setup:
      "Stand sideways to your direction of travel. Feet hip-width apart, arms out to the sides for balance. You need 20-40 meters of space to move laterally.",
    breathingCue:
      "Breathe naturally and rhythmically. The movement is fast but should not leave you gasping — stay controlled.",
    cues: [
      "Cross your trailing foot in front, then behind, alternating as you move laterally",
      "Stay on the balls of your feet — quick, light contacts",
      "Rotate your hips but keep your shoulders facing forward as much as possible",
      "Use your arms for balance and rhythm — do not let them flail",
    ],
    commonFaults: [
      { fault: "Feet tangling or tripping over each other", consequence: "Loss of balance and potential ankle injury from stepping on your own feet", fix: "Slow the drill way down until the crossover pattern is smooth, then gradually increase speed" },
      { fault: "Upper body rotating with the hips", consequence: "Loses the hip-shoulder separation that makes this drill valuable for running and agility", fix: "Keep your chest and shoulders facing the direction you are moving — only your hips and legs rotate" },
      { fault: "Flat-footed contacts", consequence: "Slows the drill down and removes the agility and reactivity benefit", fix: "Stay light on the balls of your feet — imagine the ground is hot and you want minimal contact time" },
    ],
    scaling: {
      easier: [
        { movement: "Slow carioca (walk-through pace)", when: "The crossover pattern is unfamiliar and you need to learn the footwork" },
        { movement: "Lateral shuffle (no crossover, just side-step)", when: "The crossover is too complex — the shuffle trains lateral movement without the coordination demand" },
      ],
      harder: [
        { movement: "Fast carioca with high-knee crossover", when: "You want to add hip flexor power and increase the rotational demand" },
        { movement: "Carioca with direction change on whistle", when: "You want to build reactive agility and deceleration skills" },
      ],
    },
  },

  // ---- Strides / Accelerations ----
  {
    name: "Strides / Accelerations",
    category: "running_drill",
    primaryMuscles: ["quadriceps", "hamstrings", "glutes", "calves", "hip flexors"],
    setup:
      "Find a flat, straight surface of 60-100 meters. Start from a standing position or easy jog. Strides are controlled accelerations to near-max speed, held briefly, then decelerated smoothly.",
    breathingCue:
      "Breathe naturally during the buildup. As you approach top speed, breathing will be faster — exhale forcefully and inhale quickly. Do not hold your breath.",
    cues: [
      "Gradually build speed over the first 30-40 meters — do not explode off the line",
      "Hold near-max speed (90-95% effort) for 20-30 meters, focusing on smooth, relaxed form",
      "Decelerate gradually over the final 20-30 meters — do not slam on the brakes",
      "Stay relaxed at top speed — fast and loose beats fast and tight",
    ],
    commonFaults: [
      { fault: "Going to 100% max effort and sprinting all-out", consequence: "Strides are meant to be controlled — all-out sprinting increases injury risk and misses the purpose of the drill", fix: "Think 90-95% effort — fast but controlled. You should feel smooth, not strained" },
      { fault: "Starting too fast and decelerating through the middle", consequence: "You never practice the acceleration phase, which is the most important part of the drill", fix: "Build gradually — think of a plane on a runway, not a drag racer off the line" },
      { fault: "Tensing up at higher speeds (clenched fists, shrugged shoulders)", consequence: "Tension slows you down and wastes energy — speed comes from relaxation", fix: "Consciously relax your hands, drop your shoulders, and let your jaw go slack at top speed" },
    ],
    scaling: {
      easier: [
        { movement: "Shorter strides (40-50 meters total)", when: "100-meter strides are too long or too fatiguing" },
        { movement: "Build to 80% effort instead of 90-95%", when: "Near-max speed causes form breakdown" },
      ],
      harder: [
        { movement: "Hill strides (gradual uphill)", when: "You want to increase the power demand of each stride" },
        { movement: "Flying sprints (rolling start to max speed)", when: "You want to train absolute top-end speed with a momentum advantage" },
      ],
    },
  },

  // ---- Hill Sprints ----
  {
    name: "Hill Sprints",
    category: "running_drill",
    primaryMuscles: ["glutes", "quadriceps", "hamstrings", "calves", "core"],
    setup:
      "Find a hill with a moderate incline (4-8% grade). Start at the bottom. Sprint duration should be 8-15 seconds (roughly 40-80 meters depending on the grade). Walk back down for full recovery between reps.",
    breathingCue:
      "Breathe explosively — short, powerful exhales with each stride. Recovery breathing between reps should be deep and controlled until your heart rate comes down.",
    cues: [
      "Drive your knees up and forward — the hill forces you into good sprinting mechanics",
      "Lean into the hill from the ankles — your body angle should match the slope",
      "Pump your arms hard — they drive the legs. Think elbows back, hands forward",
      "Push through the balls of your feet with maximum force on every step",
    ],
    commonFaults: [
      { fault: "Running the hill at a moderate pace instead of sprinting", consequence: "Misses the neuromuscular and power benefits — hill sprints should be maximal effort for short bursts", fix: "Keep sprints short (8-15 seconds) and go all-out. Walk back down and fully recover before the next rep" },
      { fault: "Leaning too far forward and reaching with the feet", consequence: "Overstriding on a hill increases hamstring strain risk and reduces power output", fix: "Keep your feet landing beneath your hips and drive up the hill — think about pushing the ground away behind you" },
      { fault: "Not recovering between reps", consequence: "Fatigue accumulates and sprint quality drops — you end up doing conditioning instead of power work", fix: "Walk back down slowly and wait until your breathing is controlled before the next rep. Full recovery is the point" },
    ],
    scaling: {
      easier: [
        { movement: "Hill strides at 80-85% effort", when: "Max-effort sprints are too intense or you are new to hill work" },
        { movement: "Shorter hill (5-8 seconds of sprinting)", when: "Longer sprints cause form breakdown before you reach the top" },
        { movement: "Gentler incline (2-4% grade)", when: "The hill is too steep to maintain a sprint" },
      ],
      harder: [
        { movement: "Steeper hill (8-12% grade)", when: "The current hill feels too easy at max effort" },
        { movement: "Longer hill sprints (15-20 seconds)", when: "You want to build speed endurance on top of the power benefit" },
        { movement: "Weighted hill sprints (light vest)", when: "Bodyweight hill sprints are not challenging enough and you want to overload the pattern" },
      ],
    },
  },

  // ---- Tempo Run ----
  {
    name: "Tempo Run",
    category: "running_drill",
    primaryMuscles: ["quadriceps", "hamstrings", "glutes", "calves", "core"],
    setup:
      "Warm up with 10-15 minutes of easy running. A tempo run is sustained at 'comfortably hard' pace — roughly your lactate threshold, or the pace you could hold for about 60 minutes in a race. Typical tempo run duration is 20-40 minutes.",
    breathingCue:
      "Breathing should be controlled but noticeably harder than easy running. You should be able to speak in short phrases but not hold a full conversation.",
    cues: [
      "Find your rhythm early — the pace should feel challenging but sustainable from the start",
      "Run relaxed — drop your shoulders, unclench your hands, keep your jaw loose",
      "Maintain consistent effort, not necessarily consistent pace — adjust for terrain and wind",
      "Focus on steady turnover and efficient mechanics — do not overstride trying to go faster",
    ],
    commonFaults: [
      { fault: "Starting too fast and fading in the second half", consequence: "Turns the tempo into an interval workout and misses the lactate threshold training stimulus", fix: "Start conservatively — your first mile should feel almost too easy. The effort builds naturally as fatigue sets in" },
      { fault: "Running too slow (just a regular run)", consequence: "Does not stress the lactate threshold and provides the same benefit as an easy run", fix: "Check your pace — tempo pace is roughly 25-30 seconds per mile slower than your 5K race pace. It should feel 'comfortably hard'" },
      { fault: "Tensing up as the effort gets harder in the final third", consequence: "Wastes energy and slows you down — tension is the enemy of speed", fix: "When it gets hard, do a body scan: relax your face, drop your shoulders, open your hands. Fast and loose" },
    ],
    scaling: {
      easier: [
        { movement: "Tempo intervals (e.g., 3 x 10 min at tempo with 2 min easy jog between)", when: "Sustaining 20-40 minutes at tempo pace is too demanding" },
        { movement: "Shorter tempo run (15-20 minutes)", when: "You are building up to longer tempo efforts" },
      ],
      harder: [
        { movement: "Longer tempo run (35-45 minutes)", when: "You have a strong aerobic base and want to extend the threshold stimulus" },
        { movement: "Progression tempo (start at easy pace, finish last 10 min at tempo or faster)", when: "You want to practice finishing strong when fatigued" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// PLYOMETRICS (8 entries)
// ---------------------------------------------------------------------------

const plyometrics: MovementCueData[] = [
  // ---- Broad Jump ----
  {
    name: "Broad Jump",
    category: "plyometric",
    primaryMuscles: ["glutes", "quadriceps", "hamstrings", "calves", "core"],
    setup:
      "Stand with feet shoulder-width apart, toes pointed forward. Arms at your sides. You need a flat, clear area to jump forward and land safely.",
    breathingCue:
      "Inhale as you load the hips back and down. Exhale explosively as you jump. Breathe naturally on the landing.",
    cues: [
      "Swing your arms back as you hinge your hips and bend your knees to load the jump",
      "Explode forward and upward — drive your arms forward and extend your hips, knees, and ankles fully",
      "Reach your feet forward for the landing — land softly with bent knees, absorbing the impact",
      "Stick the landing — do not fall forward or take extra steps",
    ],
    commonFaults: [
      { fault: "Jumping up instead of out", consequence: "Reduces horizontal distance and does not train the horizontal power you need for sports", fix: "Think about pushing the ground away behind you at a 45-degree angle — reach forward with your whole body" },
      { fault: "Landing stiff-legged", consequence: "Sends impact force straight into your knees and spine instead of being absorbed by the muscles", fix: "Land softly with bent knees and hips — think about being quiet on the landing" },
      { fault: "Arms not involved in the jump", consequence: "Loses 10-20% of jumping power — the arm swing is a massive contributor to distance", fix: "Aggressively swing your arms from behind your hips to in front of your face — they should feel like they are pulling you forward" },
    ],
    scaling: {
      easier: [
        { movement: "Squat jump in place (vertical, no forward travel)", when: "The landing mechanics of a forward jump are too challenging" },
        { movement: "Broad jump to a target (shortened distance)", when: "Full-effort broad jumps cause poor landing mechanics" },
      ],
      harder: [
        { movement: "Consecutive broad jumps (2-3 in a row with minimal ground time)", when: "Single broad jumps are easy and you want to train reactive power" },
        { movement: "Weighted broad jump (light dumbbell or med ball)", when: "You want to overload the horizontal power pattern" },
      ],
    },
  },

  // ---- Depth Jump ----
  {
    name: "Depth Jump",
    category: "plyometric",
    primaryMuscles: ["quadriceps", "glutes", "calves", "hamstrings"],
    setup:
      "Stand on a box or platform 12-30 inches high. Toes at the edge. Arms at your sides. Ensure a clear, flat landing area in front of the box.",
    breathingCue:
      "Breathe in while on the box. As you step off and contact the ground, exhale explosively as you jump upward.",
    cues: [
      "Step off the box — do not jump off. Just let yourself drop",
      "The instant your feet hit the ground, explode upward as fast as possible — minimize ground contact time",
      "Land on the balls of your feet with stiff ankles — think about being a spring, not a sponge",
      "Reach as high as you can on the rebound jump — full extension of hips, knees, and ankles",
    ],
    commonFaults: [
      { fault: "Jumping off the box instead of stepping off", consequence: "Adds extra downward velocity, which increases impact force beyond what is necessary and changes the stimulus", fix: "Literally step one foot off the edge and let gravity pull you down — the box height provides all the force you need" },
      { fault: "Spending too long on the ground before jumping (collapsing into a squat)", consequence: "Kills the reactive/elastic component — the whole point is to use the stretch reflex for a faster jump", fix: "Think 'hot ground' — the instant your feet touch, explode up. Ground contact should be under 0.25 seconds" },
      { fault: "Using a box that is too high", consequence: "The impact force overwhelms your ability to react quickly, and you end up absorbing instead of rebounding", fix: "Start with a 12-inch box. If your ground contact time is slow and squishy, the box is too high" },
    ],
    scaling: {
      easier: [
        { movement: "Drop landing (step off the box and stick the landing — no jump)", when: "You need to build landing mechanics and eccentric strength before adding the reactive jump" },
        { movement: "Lower box (12-16 inches)", when: "The impact from a higher box is too much to rebound quickly" },
      ],
      harder: [
        { movement: "Higher box (24-30 inches)", when: "You can consistently rebound with minimal ground contact from a lower box" },
        { movement: "Depth jump to broad jump (horizontal rebound)", when: "You want to train horizontal reactive power" },
      ],
    },
  },

  // ---- Lateral Bound ----
  {
    name: "Lateral Bound",
    category: "plyometric",
    primaryMuscles: ["glutes", "hip abductors", "quadriceps", "calves", "core"],
    setup:
      "Stand on one leg with a slight bend in the knee and hip. Arms ready at your sides. You need a clear area to bound sideways 3-5 feet per rep.",
    breathingCue:
      "Exhale as you push off and bound laterally. Inhale as you stabilize on the landing leg.",
    cues: [
      "Push off explosively from the inside of your foot — drive laterally, not upward",
      "Land softly on the opposite foot with a bent knee — absorb the impact through your hip and leg",
      "Stick each landing for 1-2 seconds before bounding back — own the position",
      "Keep your chest up and your core braced — do not collapse on the landing",
    ],
    commonFaults: [
      { fault: "Knee collapsing inward on the landing", consequence: "Puts dangerous stress on the knee ligaments, especially the ACL", fix: "Land with your knee tracking over your second toe — strengthen your glute medius if this is a consistent issue" },
      { fault: "Landing too stiffly without bending the knee and hip", consequence: "Impact is absorbed by the joints instead of the muscles — increases injury risk", fix: "Think about landing like a cat — soft, quiet, with deep flexion in the hip and knee" },
      { fault: "Not getting enough lateral distance", consequence: "Reduces the power demand and lateral force production of the drill", fix: "Load the hip and push hard off the inside of your foot — really drive sideways" },
    ],
    scaling: {
      easier: [
        { movement: "Lateral step-down (slow, controlled lateral step from a small box)", when: "Single-leg landing mechanics need work before adding explosive bounds" },
        { movement: "Shorter lateral bounds with a pause between each", when: "The distance or speed is too demanding" },
      ],
      harder: [
        { movement: "Continuous lateral bounds (no pause between reps)", when: "You want to train reactive lateral power" },
        { movement: "Lateral bound with vertical jump on landing", when: "You want to combine lateral and vertical power demands" },
      ],
    },
  },

  // ---- Med Ball Slam ----
  {
    name: "Med Ball Slam",
    category: "plyometric",
    primaryMuscles: ["lats", "core", "shoulders", "hip flexors", "triceps"],
    setup:
      "Stand with feet shoulder-width apart, holding a slam ball (not a bouncy medicine ball) at chest height. Ensure you have space to slam the ball directly in front of your feet.",
    breathingCue:
      "Inhale as you reach the ball overhead. Exhale forcefully as you slam it into the ground — the exhale should match the aggression of the slam.",
    cues: [
      "Reach the ball overhead with straight arms — get tall and extended",
      "Slam the ball into the ground as hard as you can — use your entire body, not just your arms",
      "Hinge at the hips and crunch through your core as you slam — think about folding your body over the ball",
      "Pick it up quickly and go again — do not stand around between reps",
    ],
    commonFaults: [
      { fault: "Using only the arms to slam instead of the whole body", consequence: "The slam is weak and you miss the core and hip involvement that makes this exercise effective", fix: "Think about throwing the ball through the floor — hinge hard at the hips and crunch your abs violently as you slam" },
      { fault: "Not reaching full extension overhead", consequence: "Shortens the range of motion and reduces the stretch on the lats and core that creates a more powerful slam", fix: "Get the ball as high as you can overhead with straight arms before each slam — reach for the ceiling" },
      { fault: "Rounding the lower back on the pickup", consequence: "Repeated flexion under load stresses the lumbar spine", fix: "Squat down or hinge to pick up the ball — do not just round over and yank it off the floor" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter slam ball", when: "The ball is too heavy to maintain speed and technique" },
        { movement: "Med ball slams from the knees", when: "You want to isolate the upper body and core without the lower body involvement" },
      ],
      harder: [
        { movement: "Heavier slam ball", when: "You can slam with maximal aggression and full range of motion and want more resistance" },
        { movement: "Rotational slam (slam to the side, alternating)", when: "You want to add a rotational power component" },
      ],
    },
  },

  // ---- Med Ball Chest Pass ----
  {
    name: "Med Ball Chest Pass",
    category: "plyometric",
    primaryMuscles: ["chest", "triceps", "anterior deltoids", "core"],
    setup:
      "Stand 6-10 feet from a solid wall (or with a partner). Hold a medicine ball at chest height with both hands, elbows out. Feet shoulder-width apart, slight stagger if preferred.",
    breathingCue:
      "Inhale as you load the ball at your chest. Exhale explosively as you pass/throw the ball.",
    cues: [
      "Load the ball at your chest with elbows out — like a basketball chest pass",
      "Drive through your legs and extend your arms explosively to launch the ball",
      "Follow through with your hands — fingers should point toward the target at full extension",
      "Catch the rebound (or return pass) softly and immediately reload for the next rep",
    ],
    commonFaults: [
      { fault: "Throwing with arms only and no leg drive", consequence: "Massively reduces power output — the legs and core are the engine for an explosive chest pass", fix: "Start with a slight knee bend and push through your feet as you throw — feel the power coming from the ground up" },
      { fault: "Ball trajectory going upward instead of straight", consequence: "Wasted force — the goal is horizontal power for athletic transfer", fix: "Aim the ball at chest height on the wall. Keep the throw trajectory flat and direct" },
      { fault: "Absorbing the catch too slowly and losing rhythm", consequence: "Reduces the reactive component of the drill if using wall rebounds", fix: "Catch the ball and immediately redirect it back — think 'catch and throw' as one motion" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter medicine ball", when: "The ball is too heavy to throw with speed and good mechanics" },
        { movement: "Chest pass from a seated position", when: "You want to isolate the upper body and remove lower body involvement" },
      ],
      harder: [
        { movement: "Heavier medicine ball", when: "You can throw with maximal speed and want to increase the resistance" },
        { movement: "Drop step chest pass (step back, load, then step forward and throw)", when: "You want to add a momentum and timing component for sport transfer" },
      ],
    },
  },

  // ---- Single-Leg Hop ----
  {
    name: "Single-Leg Hop",
    category: "plyometric",
    primaryMuscles: ["quadriceps", "glutes", "calves", "hip stabilizers", "core"],
    setup:
      "Stand on one leg with a slight knee bend. Arms at your sides for balance. You need a flat, clear area to hop forward, laterally, or in place.",
    breathingCue:
      "Exhale on each hop as you push off the ground. Inhale as you stabilize between hops.",
    cues: [
      "Push off the ball of your foot explosively — drive through the ankle, knee, and hip",
      "Land softly on the same foot with a bent knee — absorb the impact quietly",
      "Keep your knee tracking over your toes on every landing — do not let it collapse inward",
      "Use your arms for balance and momentum — they are your stabilizers on one leg",
    ],
    commonFaults: [
      { fault: "Knee collapsing inward on landing", consequence: "High-risk position for ACL and meniscus injury, especially under impact", fix: "Focus on landing with your knee over your second toe. If it keeps collapsing, do single-leg balance work and glute strengthening before progressing to hops" },
      { fault: "Landing too stiffly on a straight leg", consequence: "All the impact goes into the knee and ankle joints instead of being absorbed by the muscles", fix: "Always land with a soft, bent knee — think about being quiet and controlled on each landing" },
      { fault: "Losing balance and putting the other foot down", consequence: "Indicates the single-leg stability is not sufficient for the plyometric demand", fix: "Regress to single-leg balance holds and small hops in place until you can stick each landing for 2 seconds" },
    ],
    scaling: {
      easier: [
        { movement: "Single-leg balance holds (no hopping)", when: "You cannot stabilize on one leg for 15+ seconds" },
        { movement: "Small single-leg hops in place", when: "Forward or lateral hops are too challenging — start with minimal ground clearance" },
      ],
      harder: [
        { movement: "Consecutive single-leg hops for distance", when: "Single hops are stable and you want to add a reactive power demand" },
        { movement: "Single-leg hop with 180-degree rotation", when: "You want to add a rotational balance and control challenge" },
      ],
    },
  },

  // ---- Tuck Jump ----
  {
    name: "Tuck Jump",
    category: "plyometric",
    primaryMuscles: ["quadriceps", "glutes", "hip flexors", "calves", "core"],
    setup:
      "Stand with feet shoulder-width apart, arms at your sides or slightly in front. You need overhead clearance and a flat landing surface.",
    breathingCue:
      "Inhale as you load. Exhale forcefully as you jump and tuck your knees. Breathe on the landing before the next rep.",
    cues: [
      "Jump as high as you can and pull both knees up toward your chest at the peak",
      "Land softly on the balls of your feet with knees bent — absorb the impact",
      "Reset quickly and go again — minimal time on the ground between reps",
      "Use your arms — swing them up to help generate height on the jump",
    ],
    commonFaults: [
      { fault: "Not pulling knees high enough", consequence: "Reduces the hip flexor power and core engagement that make the tuck jump effective", fix: "Think about bringing your knees to your hands, not your hands to your knees — drive the knees up aggressively" },
      { fault: "Landing on flat feet or with straight legs", consequence: "Sends all impact into the joints and increases the risk of knee and ankle injury", fix: "Land on the balls of your feet with soft, bent knees every single rep — if you cannot do this, you are too fatigued" },
      { fault: "Losing position on the landing (stumbling forward or backward)", consequence: "Indicates fatigue or poor body control — continuing increases injury risk", fix: "Stick each landing in a balanced position. If you are stumbling, reduce reps or rest longer between sets" },
    ],
    scaling: {
      easier: [
        { movement: "Squat jump (no tuck — just jump and land)", when: "The tuck component causes loss of control on the landing" },
        { movement: "Tuck jump with a pause between reps (reset fully before each jump)", when: "Consecutive tuck jumps are too fatiguing" },
      ],
      harder: [
        { movement: "Consecutive tuck jumps with minimal ground contact", when: "You can tuck jump with good mechanics and want to add a reactive component" },
        { movement: "Weighted tuck jump (light vest)", when: "Bodyweight tuck jumps are easy and you want to increase the power demand" },
      ],
    },
  },

  // ---- Skater Jump ----
  {
    name: "Skater Jump",
    category: "plyometric",
    primaryMuscles: ["glutes", "quadriceps", "hip abductors", "calves", "core"],
    setup:
      "Stand on one leg with a slight knee bend. The other leg is behind you. Arms ready for a counterbalance swing. You need lateral space to bound side to side.",
    breathingCue:
      "Exhale as you push off and bound laterally. Inhale as you stabilize on the landing leg.",
    cues: [
      "Push off the outside foot and bound laterally — like a speed skater on ice",
      "Land on the opposite foot with a deep knee bend — sink into the hip",
      "Swing the free leg behind the landing leg for counterbalance",
      "Use your arms to drive the lateral movement and help with balance on the landing",
    ],
    commonFaults: [
      { fault: "Not getting enough lateral distance on each bound", consequence: "Reduces the power demand and makes the drill more of a balance exercise than a plyometric", fix: "Really load the outside hip and push hard — aim to cover 4-5 feet on each bound" },
      { fault: "Landing with the knee caving inward", consequence: "Puts the knee in a vulnerable position, especially the ACL", fix: "Land with your knee tracking over your toes — strengthen your glute medius if this is a persistent issue" },
      { fault: "Upper body flopping side to side", consequence: "Wastes energy and makes it harder to stick each landing", fix: "Keep your core tight and your chest up — your lower body does the lateral work while your upper body stays stable" },
    ],
    scaling: {
      easier: [
        { movement: "Lateral step with a pause (no jump — just a controlled lateral weight shift)", when: "Single-leg landing from a bound is too challenging" },
        { movement: "Shorter skater jumps with a full pause between each", when: "The distance or tempo is too demanding" },
      ],
      harder: [
        { movement: "Continuous skater jumps with no pause (reactive)", when: "You want to train lateral reactive power with minimal ground contact time" },
        { movement: "Skater jumps with a forward sprint transition (3 bounds then sprint)", when: "You want to combine lateral agility with linear acceleration" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// SPORT / FUNCTIONAL (10 entries)
// ---------------------------------------------------------------------------

const sportFunctional: MovementCueData[] = [
  // ---- Wall Ball ----
  {
    name: "Wall Ball",
    category: "sport_functional",
    primaryMuscles: ["quadriceps", "glutes", "shoulders", "triceps", "core"],
    setup:
      "Stand about arm's length from a wall with a target at 9-10 feet (standard). Hold a medicine ball (14-20 lbs) at chest height in a goblet position. Feet shoulder-width apart, toes slightly out.",
    breathingCue:
      "Inhale as you squat down. Exhale as you drive up and throw the ball to the target.",
    cues: [
      "Squat to full depth with the ball at your chest — hips below parallel",
      "Drive up explosively and use the momentum to throw the ball to the target",
      "Catch the ball softly and immediately descend into the next squat — the catch becomes the load for the next rep",
      "Keep your chest up and elbows in front of the ball through the squat",
    ],
    commonFaults: [
      { fault: "Not squatting to full depth", consequence: "Reduces the leg involvement and turns it into a shoulder press with a shallow knee bend", fix: "Squat until your hip crease is below your knee — the depth is what makes this a full-body exercise" },
      { fault: "Throwing the ball with the arms instead of the legs", consequence: "Arms fatigue quickly and you cannot sustain the movement for high reps", fix: "The throw should come from the upward drive of your legs — think of it as a squat that launches the ball, not a press" },
      { fault: "Standing too far from the wall", consequence: "Forces you to throw at an angle and makes catching the ball harder", fix: "Stand close enough that you can throw the ball straight up to the target — about arm's length from the wall" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter medicine ball", when: "The ball is too heavy to maintain depth and throw height for the prescribed reps" },
        { movement: "Wall ball to a lower target (8 feet)", when: "You cannot consistently hit the standard target height" },
      ],
      harder: [
        { movement: "Heavier medicine ball", when: "You can hit the target with full squat depth for 20+ reps comfortably" },
        { movement: "Wall ball with a single-arm catch and throw", when: "You want to add a unilateral challenge and increase coordination demand" },
      ],
    },
  },

  // ---- Thruster ----
  {
    name: "Thruster",
    category: "sport_functional",
    primaryMuscles: ["quadriceps", "glutes", "shoulders", "triceps", "core"],
    setup:
      "Hold a barbell in the front rack position (bar resting on your front deltoids, elbows high). Feet shoulder-width apart, toes slightly out. Stand tall. You can also use dumbbells or kettlebells held at the shoulders.",
    breathingCue:
      "Inhale and brace at the top. Hold through the squat and drive. Exhale once the bar is locked out overhead.",
    cues: [
      "Squat to full depth with elbows high — keep the bar in the front rack",
      "Drive up explosively out of the squat and use the momentum to press the bar overhead in one fluid motion",
      "Lock out fully overhead with arms straight, biceps by your ears",
      "Lower the bar back to the front rack as you begin descending into the next squat — make it one continuous movement",
    ],
    commonFaults: [
      { fault: "Pressing the bar before the legs finish driving", consequence: "Disconnects the leg power from the press, making the movement less efficient and harder on the shoulders", fix: "Think about one continuous acceleration — legs drive first and the arms finish what the legs started. The bar should feel weightless as it leaves the front rack" },
      { fault: "Elbows dropping in the front squat portion", consequence: "The bar rolls forward, pulls you off balance, and you lose the front rack", fix: "Keep your elbows high throughout the squat — think 'elbows up' as your cue on every rep" },
      { fault: "Not reaching full lockout overhead", consequence: "Incomplete range of motion and unstable overhead position — no rep in competition, and less effective in training", fix: "Press until your arms are fully straight and your biceps are next to your ears — lock it out on every rep" },
    ],
    scaling: {
      easier: [
        { movement: "Front squat + push press as two separate movements", when: "Combining the squat and press into one fluid motion is too challenging" },
        { movement: "Dumbbell thrusters", when: "The front rack position with a barbell is uncomfortable or you need a lighter load" },
      ],
      harder: [
        { movement: "Heavier barbell thrusters", when: "You can complete the prescribed reps with smooth, unbroken technique" },
        { movement: "Single-arm dumbbell thruster", when: "You want to add a unilateral stability challenge" },
      ],
    },
  },

  // ---- Rope Climb ----
  {
    name: "Rope Climb",
    category: "sport_functional",
    primaryMuscles: ["lats", "biceps", "forearms", "grip", "core"],
    setup:
      "Stand at the base of a climbing rope. Reach up and grip the rope with both hands, one above the other. The standard rope climb is 15 feet.",
    breathingCue:
      "Breathe steadily throughout the climb. Exhale as you pull yourself up. Inhale as you reach for the next grip. Do not hold your breath.",
    cues: [
      "Wrap the rope around one foot and clamp it with the other foot on top — this is your footlock and it carries most of the weight",
      "Stand up on the footlock, then reach higher with your hands — it is a stand-reach-lock pattern",
      "Keep the rope close to your body — do not let it drift away from you",
      "Descend with control — hand under hand with your feet clamping the brake. Do not slide down and burn your hands",
    ],
    commonFaults: [
      { fault: "Trying to pull up the rope using arms only with no footlock", consequence: "Exhausts the arms in seconds and makes the climb impossible for most people", fix: "Master the footlock first — practice wrapping and clamping the rope from the ground until it feels natural. The legs do 80% of the work" },
      { fault: "Losing the footlock halfway up", consequence: "You are now dangling by your arms and likely cannot continue or descend safely", fix: "Practice the footlock at the bottom until it is automatic. When climbing, set the lock deliberately before standing up each time" },
      { fault: "Sliding down the rope on the descent instead of controlled lowering", consequence: "Severe rope burns on the hands, thighs, and shins", fix: "Descend hand under hand with the rope clamped between your feet. Go slowly — the descent should take as long as the ascent" },
    ],
    scaling: {
      easier: [
        { movement: "Rope climb from seated (start sitting on the ground)", when: "You cannot do a full rope climb — the seated start is shorter and lets you practice pulling and footlocking" },
        { movement: "Rope pull-ups (hang on the rope and do pull-ups without climbing)", when: "You need to build rope grip strength before climbing" },
      ],
      harder: [
        { movement: "Legless rope climb (no footlock, arms only)", when: "You have exceptional upper body strength and want to remove the leg assistance" },
        { movement: "Weighted rope climb (vest)", when: "Standard rope climbs are easy and you want to increase the load" },
      ],
    },
  },

  // ---- Battle Ropes ----
  {
    name: "Battle Ropes",
    category: "sport_functional",
    primaryMuscles: ["shoulders", "arms", "core", "grip", "legs"],
    setup:
      "Anchor the rope at a fixed point. Stand far enough back that there is some slack in the ropes. Grab one end in each hand. Feet shoulder-width apart, knees slightly bent, hips hinged slightly, core braced.",
    breathingCue:
      "Breathe rhythmically with the wave pattern. Short, forceful exhales with each slam or wave. Do not hold your breath.",
    cues: [
      "Generate waves by alternating arms up and down — fast, powerful motions from the shoulders",
      "Keep your core braced and your hips stable — the power comes from the arms and shoulders, not from rocking your body",
      "Grip the rope firmly but do not death-grip — your forearms will burn out quickly if you squeeze too hard",
      "Stay in an athletic stance — knees bent, weight on the balls of your feet",
    ],
    commonFaults: [
      { fault: "Waves dying out before reaching the anchor point", consequence: "Indicates you are not generating enough force or amplitude in each wave", fix: "Make bigger, more aggressive arm movements. Stand closer to the anchor to shorten the rope if needed while building strength" },
      { fault: "Standing upright with straight legs", consequence: "Reduces core engagement and transfers impact to the lower back", fix: "Stay in an athletic stance — soft knees, slight hip hinge, core braced throughout" },
      { fault: "Using only small arm movements from the elbows", consequence: "Does not engage the shoulders and core effectively — turns it into a forearm exercise", fix: "Drive the waves from your shoulders — big, full-range arm movements. Think about throwing each hand at the ceiling and then at the floor" },
    ],
    scaling: {
      easier: [
        { movement: "Shorter rope or lighter rope", when: "You cannot sustain waves for the prescribed time with good form" },
        { movement: "Two-handed waves (both arms move together)", when: "Alternating waves are too uncoordinated" },
      ],
      harder: [
        { movement: "Battle rope slams (both hands slam down together with max force)", when: "You want to add a power component" },
        { movement: "Battle ropes with lateral shuffles or lunges", when: "You want to combine upper body conditioning with lower body movement" },
      ],
    },
  },

  // ---- Sled Drag ----
  {
    name: "Sled Drag",
    category: "sport_functional",
    primaryMuscles: ["glutes", "hamstrings", "quadriceps", "calves", "core", "grip"],
    setup:
      "Attach a strap or handles to a weighted sled. Face away from the sled for a forward drag (strap over shoulders or in hands at hips). Face toward the sled for a backward drag (holding the strap in both hands). Start with a moderate weight.",
    breathingCue:
      "Breathe steadily throughout — controlled nasal inhales and mouth exhales. The pace is usually slow enough to maintain rhythmic breathing.",
    cues: [
      "Stay low — bend your knees and drive through your legs with each step",
      "Take short, powerful steps — do not overstride",
      "Keep your core braced and torso stable — do not let the sled pull you off balance",
      "For backward drags: sit low and push through the balls of your feet, keeping tension on the strap",
    ],
    commonFaults: [
      { fault: "Standing too upright and trying to walk normally", consequence: "Your legs cannot generate enough horizontal force to move a heavy sled efficiently", fix: "Get low — lean your torso forward (forward drag) or sit your hips back (backward drag). The lower you are, the more force you can drive into the ground" },
      { fault: "Taking long, reaching steps", consequence: "Reduces force per step and makes the movement choppy and inefficient", fix: "Short, quick, powerful steps — think about driving your feet into the ground, not reaching forward" },
      { fault: "Rounding the back under heavy load", consequence: "Puts the lower back at risk, especially on heavy forward drags", fix: "Brace your core hard and keep your chest up. If you cannot maintain posture, the sled is too heavy" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter sled", when: "You cannot maintain good posture and steady movement with the prescribed weight" },
        { movement: "Shorter distance", when: "Form breaks down before completing the full distance" },
      ],
      harder: [
        { movement: "Heavier sled", when: "You can drag the current weight with perfect posture and want to increase the strength demand" },
        { movement: "Sled sprint (light sled, max speed)", when: "You want to build explosive acceleration power" },
      ],
    },
  },

  // ---- Sandbag Clean ----
  {
    name: "Sandbag Clean",
    category: "sport_functional",
    primaryMuscles: ["glutes", "hamstrings", "traps", "biceps", "core", "grip"],
    setup:
      "Stand with the sandbag on the ground between your feet. Feet slightly wider than shoulder-width. Hinge at the hips and grip the sandbag by scooping your hands underneath it or grabbing the handles.",
    breathingCue:
      "Inhale and brace before the pull. Exhale as you drive the bag up and catch it at your chest.",
    cues: [
      "Hinge at the hips and grip the bag — flat back, core tight",
      "Drive through your legs and extend your hips explosively to pull the bag up",
      "As the bag reaches chest height, scoop it into a bear hug or front rack position",
      "Stand tall with the bag at your chest — that is one rep. Drop or lower it back to the ground and reset",
    ],
    commonFaults: [
      { fault: "Pulling with the back instead of driving with the hips", consequence: "The lower back takes all the load instead of the powerful hip extensors", fix: "Think about snapping your hips forward like a kettlebell swing — the arms just hold on while the hips do the work" },
      { fault: "Not getting the bag high enough before catching", consequence: "You end up muscling the bag up with your arms, which is slow and fatiguing", fix: "Be more aggressive with the hip extension — the bag should float up to chest height before you catch it" },
      { fault: "Catching the bag away from the body", consequence: "The bag's weight pulls you forward and strains the lower back", fix: "Pull the bag in tight to your body as you catch it — it should land against your chest, not out in front of you" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter sandbag", when: "The bag is too heavy to clean with good hip drive and posture" },
        { movement: "Sandbag deadlift (hinge to standing without the clean)", when: "You need to build the pulling strength and pattern before adding the explosive clean" },
      ],
      harder: [
        { movement: "Heavier sandbag", when: "You can clean the current bag explosively with good form" },
        { movement: "Sandbag clean to overhead press", when: "You want to add an overhead pressing component" },
      ],
    },
  },

  // ---- Man Maker ----
  {
    name: "Man Maker",
    category: "sport_functional",
    primaryMuscles: ["chest", "shoulders", "triceps", "lats", "core", "quadriceps", "glutes"],
    setup:
      "Hold two dumbbells on the ground in a push-up position — hands on the dumbbell handles, body in a straight plank. Feet shoulder-width apart for stability.",
    breathingCue:
      "Breathe between each component: inhale at the top of the push-up, exhale during the row, breathe as you jump forward, and exhale on the thruster press.",
    cues: [
      "Perform a push-up on the dumbbells — full range of motion, chest to the floor",
      "At the top of the push-up, row one dumbbell to your hip, then the other — keep your hips square",
      "Jump your feet forward to the dumbbells and clean them to your shoulders as you stand",
      "Perform a thruster — squat and press the dumbbells overhead in one fluid motion. That is one rep",
    ],
    commonFaults: [
      { fault: "Hips rotating during the renegade row portion", consequence: "Reduces the anti-rotation core benefit and can strain the lower back", fix: "Widen your feet for stability and brace your core hard. Only the arm should move — your body stays perfectly still" },
      { fault: "Skipping or shortcutting the push-up", consequence: "Misses a major component of the exercise — the man maker is effective because it includes everything", fix: "Full push-up every rep — chest to the floor and arms fully locked out at the top" },
      { fault: "Not standing fully between the clean and the thruster", consequence: "The clean and thruster become one sloppy movement instead of two deliberate ones", fix: "Stand all the way up with the dumbbells at your shoulders before you squat and press — own each position" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter dumbbells", when: "The weight makes any component of the movement sloppy" },
        { movement: "Man maker without the push-up (row, clean, thruster only)", when: "The push-up portion causes excessive fatigue or form breakdown" },
      ],
      harder: [
        { movement: "Heavier dumbbells", when: "You can complete the full man maker with crisp technique at every stage" },
        { movement: "Add a burpee between reps", when: "You want to increase the conditioning demand" },
      ],
    },
  },

  // ---- D-Ball / Atlas Stone ----
  {
    name: "D-Ball / Atlas Stone",
    category: "sport_functional",
    primaryMuscles: ["glutes", "hamstrings", "quadriceps", "biceps", "core", "upper back"],
    setup:
      "Stand over the ball/stone with feet slightly wider than shoulder-width, the ball centered between your feet. Hinge at the hips and squat down to wrap your arms around the ball. This is a bear-hug grip — there are no handles.",
    breathingCue:
      "Take a big breath and brace hard before you pull. Hold that brace through the lift. Exhale once the stone is at the platform or your chest.",
    cues: [
      "Wrap your arms as far around the stone as you can — squeeze it tight into your body",
      "Lap the stone first — pull it onto your thighs by sitting back and rolling it up your legs",
      "From your lap, re-grip, brace hard, and extend your hips to drive the stone up to the platform or chest height",
      "Keep the stone as close to your body as possible throughout the entire lift — any gap makes it exponentially harder",
    ],
    commonFaults: [
      { fault: "Trying to deadlift the stone straight up without lapping it", consequence: "Nearly impossible with a round object and puts extreme stress on the lower back and biceps", fix: "Always lap the stone first — pull it to your thighs, then re-grip and stand up. Two phases, not one" },
      { fault: "Arms too far apart and losing grip on the stone", consequence: "The stone slips out of your grip and you lose the rep (or worse, it lands on your feet)", fix: "Squeeze your arms together as tightly as possible — pretend you are trying to crush the stone with your biceps" },
      { fault: "Rounding the back excessively on the initial pull", consequence: "High risk of lower back injury — stone lifts involve some back rounding but it should be controlled", fix: "Brace your core as hard as you can and keep the stone tight to your body. Your back will round somewhat — that is normal — but it should be rigid, not floppy" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter D-ball or stone", when: "The weight is too heavy to lap and load with controlled technique" },
        { movement: "D-ball bear hug carry (pick it up and carry it instead of loading to a platform)", when: "You want to build comfort with the grip and carry pattern before adding the loading component" },
      ],
      harder: [
        { movement: "Heavier stone", when: "You can load the current stone with consistent technique" },
        { movement: "Stone over bar (load the stone over a high bar instead of onto a platform)", when: "You want to increase the height and explosiveness required" },
      ],
    },
  },

  // ---- Tire Flip ----
  {
    name: "Tire Flip",
    category: "sport_functional",
    primaryMuscles: ["glutes", "hamstrings", "quadriceps", "chest", "shoulders", "core"],
    setup:
      "Stand facing the tire with your feet close to the bottom edge. Squat down and drive your hands under the tire as far as you can. Your chest should be against the tire. This is a full-body push movement, not a deadlift.",
    breathingCue:
      "Big breath and brace before you drive into the tire. Exhale explosively as you flip it. Reset your breathing between each flip.",
    cues: [
      "Drive into the tire with your chest and hips — think about pushing it, not pulling it",
      "Extend your hips and knees explosively to get the tire past the tipping point",
      "Once the tire starts to go over, transition your hands from a push under to a push forward — drive it over with your palms",
      "Step forward with the tire so you are in position for the next flip",
    ],
    commonFaults: [
      { fault: "Trying to bicep curl the tire up", consequence: "Extremely high risk of bicep tear — the tire is far too heavy for the arms to lift alone", fix: "Never use an underhand grip. Your arms hold on while your legs and hips do the work. If your biceps are the limiting factor, use a lighter tire" },
      { fault: "Starting with hips too high (stiff-legged)", consequence: "Puts all the load on the lower back instead of the legs", fix: "Get low — bend your knees deeply and drive your chest into the tire. Think about leg pressing the tire away from the ground" },
      { fault: "Not transitioning the hands for the push-over", consequence: "The tire gets to the tipping point but falls back because you are still trying to push from underneath", fix: "As the tire passes 45 degrees, quickly switch to pushing it forward with open palms — finish the flip with a chest pass motion" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter tire", when: "You cannot move the tire with proper leg drive and technique" },
        { movement: "Partial tire flip (drive it up, let it back down without flipping)", when: "You want to build the initial drive strength without the full flip" },
      ],
      harder: [
        { movement: "Heavier tire", when: "The current tire flips easily with good technique" },
        { movement: "Tire flip for speed (light tire, max reps in a time window)", when: "You want a conditioning stimulus rather than a strength stimulus" },
      ],
    },
  },

  // ---- Prowler Push ----
  {
    name: "Prowler Push",
    category: "sport_functional",
    primaryMuscles: ["quadriceps", "glutes", "calves", "shoulders", "core"],
    setup:
      "Load the prowler/sled with the desired weight. Grip the high handles or low handles. For the low position, extend your arms and lean your torso forward at roughly 45 degrees. Feet staggered, ready to drive.",
    breathingCue:
      "Breathe in a controlled rhythm — exhale with each driving step. For short sprints, you may hold your breath for the initial burst and exhale once moving.",
    cues: [
      "Lean into the prowler and drive with your legs — each step should be a powerful push through the ball of your foot",
      "Keep your arms extended and locked — they are just the connection between your body and the sled. Your legs do the work",
      "Take short, choppy steps — do not overstride. Quick feet, powerful drive",
      "Stay low — the lower your body angle, the more horizontal force you can produce",
    ],
    commonFaults: [
      { fault: "Standing too upright while pushing", consequence: "Your force is directed downward into the ground instead of forward into the sled — the sled barely moves", fix: "Get low — your body should be at a 45-degree angle or lower. Lean into it and push the ground away behind you" },
      { fault: "Taking long, reaching steps", consequence: "Reduces force per step and makes the push choppy and inefficient", fix: "Short, powerful, quick steps — drive through the balls of your feet like you are trying to push the ground backward" },
      { fault: "Arms bending and absorbing force instead of transferring it", consequence: "Energy from your legs is lost in the arms instead of moving the sled", fix: "Lock your arms straight and brace your core — your body should be a rigid plank transferring force from your legs to the handles" },
    ],
    scaling: {
      easier: [
        { movement: "Lighter prowler", when: "You cannot maintain posture and steady movement with the current weight" },
        { movement: "High handle position", when: "The low handle position is too demanding on the shoulders or core" },
      ],
      harder: [
        { movement: "Heavier prowler", when: "You push the current weight with good form and want to increase the strength demand" },
        { movement: "Prowler sprint (light weight, max speed)", when: "You want to build explosive acceleration and conditioning" },
        { movement: "Low handle position", when: "You want to increase the forward lean and core/shoulder demand" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Combined Library
// ---------------------------------------------------------------------------
// MOBILITY (15 movements)
// ---------------------------------------------------------------------------

const mobility: MovementCueData[] = [
  {
    name: "Hip 90/90 Stretch",
    category: "mobility",
    primaryMuscles: ["hip rotators", "glutes", "adductors"],
    setup: "Sit on the floor with one leg in front of you bent at 90 degrees (shin parallel to your chest) and the other leg to the side, also bent at 90 degrees. Both knees should be at roughly right angles. Sit tall — if you can't, sit on a yoga block or pillow to elevate your hips.",
    breathingCue: "Inhale tall through your nose to lengthen your spine. Exhale slowly and sink deeper into the stretch. Each exhale should let you settle a little further.",
    cues: [
      "Keep both sit bones on the floor as much as possible — don't let one hip lift",
      "Sit tall first, then hinge forward over the front shin with a flat back to intensify the stretch",
      "Feel the stretch in the outer hip of the front leg and the inner thigh of the back leg",
    ],
    commonFaults: [
      { fault: "Rounding the back and collapsing the chest forward", consequence: "You stretch your lower back instead of your hips — the target muscles don't get the stimulus", fix: "Lead the forward lean with your chest, not your head. Think about bringing your belly button to your shin" },
      { fault: "Back knee lifting off the floor", consequence: "Indicates tight internal rotators on that side — you're avoiding the stretch where you need it most", fix: "Only go as far forward as you can while keeping both knees down. Use a pad under the lifted knee if needed, and work the range over time" },
      { fault: "Holding breath and tensing up", consequence: "Tension fights the stretch. Muscles release better when you breathe into them", fix: "Exhale long and slow — 4-5 seconds out. With each exhale, consciously relax your hip muscles" },
    ],
    scaling: {
      easier: [{ movement: "Seated figure-4 on a chair — cross ankle over opposite knee while sitting", when: "You can't get into the floor position due to hip tightness" }, { movement: "90/90 with hands behind you for support", when: "You can get into position but can't sit tall without assistance" }],
      harder: [{ movement: "90/90 with forward fold — chest to shin", when: "You can sit tall with both knees down and want a deeper stretch" }, { movement: "90/90 transitions — flow from one side to the other by rotating both legs", when: "Static holds are comfortable and you want dynamic hip rotation work" }],
    },
  },
  {
    name: "Couch Stretch",
    category: "mobility",
    primaryMuscles: ["hip flexors", "quadriceps", "psoas"],
    setup: "Kneel facing away from a wall or couch. Place one foot up on the wall behind you with the knee on the floor against the base of the wall. Step the other foot forward into a lunge position. Your back shin should be vertical against the wall, toes pointing up.",
    breathingCue: "Deep belly breaths. Inhale to create space, exhale to sink the hips forward and down. Each breath cycle should take 5-6 seconds.",
    cues: [
      "Squeeze the glute on the stretching (back) side — this deepens the hip flexor stretch through reciprocal inhibition",
      "Keep your torso upright and your core braced — don't arch your lower back to feel the stretch",
      "The stretch should be felt in the front of the hip and thigh of the back leg, NOT in the lower back",
    ],
    commonFaults: [
      { fault: "Arching the lower back excessively to compensate for tight hip flexors", consequence: "Stretches the lumbar spine instead of the hip flexors — can cause back pain and misses the target", fix: "Tuck your pelvis under (posterior pelvic tilt) and squeeze the glute. The stretch should come from the hip opening, not the back arching" },
      { fault: "Knee too far from the wall, reducing the quad stretch component", consequence: "You only stretch the hip flexor, missing the rectus femoris (the quad that crosses the hip)", fix: "Scoot your knee right up to the base of the wall so your shin is flush against it" },
      { fault: "Holding the position for only 10-15 seconds", consequence: "Hip flexors are stubborn — short holds don't produce lasting change in tissue length", fix: "Hold each side for 60-120 seconds minimum. Breathe through it. This is a patience exercise" },
    ],
    scaling: {
      easier: [{ movement: "Half-kneeling hip flexor stretch — back knee on the floor, no wall", when: "The wall version is too intense or you can't get into position" }, { movement: "Standing quad stretch — pull foot to glute while standing", when: "You need a gentler quad/hip flexor stretch that's easy to do anywhere" }],
      harder: [{ movement: "Couch stretch with arms overhead", when: "The basic position feels manageable and you want to add a lat and thoracic extension component" }, { movement: "Couch stretch with torso rotation toward the front leg", when: "You want to add a rotational stretch through the hip flexor and obliques" }],
    },
  },
  {
    name: "Pigeon Stretch",
    category: "mobility",
    primaryMuscles: ["piriformis", "glutes", "hip external rotators"],
    setup: "From a push-up or all-fours position, bring one knee forward and place it behind your wrist. Angle your front shin across your body — the closer to parallel with your hips, the more intense. Extend the back leg straight behind you with the top of the foot on the floor. Square your hips to the front.",
    breathingCue: "Slow, deep breaths. Inhale for 4 counts, exhale for 6. On each exhale, let gravity pull you deeper. Don't force it.",
    cues: [
      "Keep your hips square — don't let the stretching side collapse or rotate open",
      "Walk your hands forward and lower your chest toward the floor for a deeper stretch",
      "You should feel this deep in the outer hip and glute of the front leg",
    ],
    commonFaults: [
      { fault: "Hips rotated open — the stretching hip drops to the floor while the other lifts", consequence: "You twist your lower back instead of stretching the hip. The target muscles escape the stretch", fix: "Place a yoga block or folded towel under the stretching hip to keep both sides level. Square your hips even if it means less depth" },
      { fault: "Pain in the front knee", consequence: "The knee is taking rotational stress it shouldn't. This is a hip stretch, not a knee stretch", fix: "Flex your front foot (pull toes toward shin) to protect the knee. If it still hurts, switch to a supine figure-4 stretch instead" },
      { fault: "Holding breath and muscling through discomfort", consequence: "Creates tension that fights the stretch. You'll actually get less range of motion", fix: "Breathe deeply and relax into the position. If you can't breathe calmly, you've gone too deep — back off" },
    ],
    scaling: {
      easier: [{ movement: "Supine figure-4 stretch (lying on your back)", when: "The floor pigeon is too intense or causes knee discomfort" }, { movement: "Pigeon on a bench — front shin on a bench surface", when: "Getting on and off the floor is difficult" }],
      harder: [{ movement: "King pigeon — reach back and grab the back foot, pulling heel toward glute", when: "Basic pigeon is easy and you want to add a quad/hip flexor stretch to the back leg" }, { movement: "Pigeon with forward fold — chest flat on the floor", when: "You have excellent hip mobility and want the maximum stretch" }],
    },
  },
  {
    name: "Thoracic Spine Rotation (Open Book)",
    category: "mobility",
    primaryMuscles: ["thoracic spine", "obliques", "intercostals"],
    setup: "Lie on your side with knees bent and stacked at hip height (fetal position). Extend both arms straight out in front of you at shoulder height, palms together. The bottom arm stays on the floor throughout.",
    breathingCue: "Inhale to prepare. As you exhale, open the top arm across your body. Inhale at the end range. Exhale to return. The breath drives the movement.",
    cues: [
      "Open the top arm like a book — rotate through your mid-back, not your lower back",
      "Keep your knees stacked and glued together — if the top knee lifts, your lower back is rotating instead of your thoracic spine",
      "Follow your moving hand with your eyes to encourage full rotation",
    ],
    commonFaults: [
      { fault: "Top knee lifting off the bottom knee during rotation", consequence: "The rotation is coming from the lumbar spine and hips instead of the thoracic spine", fix: "Press the knees together firmly or place a pillow between them. The knees don't move at all — only the upper body rotates" },
      { fault: "Forcing the hand to the floor instead of letting it get there naturally", consequence: "Overstressing the shoulder or lower back. Thoracic mobility improves gradually, not by force", fix: "Go only as far as you can while keeping knees stacked. The range will increase over sessions" },
      { fault: "Rushing through reps without pausing at end range", consequence: "You never spend time in the stretched position where adaptation happens", fix: "Hold the open position for 3-5 breaths before returning. Let each exhale take you a little further" },
    ],
    scaling: {
      easier: [{ movement: "Seated thoracic rotation — sit in a chair, cross arms over chest, rotate to each side", when: "Getting on the floor is difficult or the side-lying position is uncomfortable" }, { movement: "Open book with top knee supported on a pillow", when: "Hip tightness prevents keeping knees stacked comfortably" }],
      harder: [{ movement: "Open book with arm extended overhead at end range", when: "You can easily touch the floor and want more lat and shoulder stretch" }, { movement: "Quadruped thoracic rotation — hand behind head, rotate elbow to ceiling", when: "You want a more active, loaded version of thoracic rotation" }],
    },
  },
  {
    name: "Cat-Cow",
    category: "mobility",
    primaryMuscles: ["spinal erectors", "abdominals", "hip flexors"],
    setup: "Start on all fours — hands directly under shoulders, knees directly under hips. Fingers spread, weight distributed evenly. Spine starts in a neutral position.",
    breathingCue: "Inhale as you arch into cow (belly drops, chest lifts). Exhale as you round into cat (back pushes to ceiling, chin tucks). The breath leads the movement — don't rush.",
    cues: [
      "Cow: drop your belly toward the floor, lift your chest and tailbone, look slightly upward",
      "Cat: round your entire spine toward the ceiling, tuck your chin to your chest, push the floor away",
      "Move segment by segment — start the motion from the tailbone and let it ripple up through the spine",
    ],
    commonFaults: [
      { fault: "Only moving the neck and lower back, skipping the mid-back", consequence: "The thoracic spine (where most people are stiff) doesn't get mobilized", fix: "Think about moving every single vertebra. Exaggerate the mid-back rounding in cat — push that section toward the ceiling specifically" },
      { fault: "Rushing through the movement without syncing to breath", consequence: "Loses the calming, mobilizing effect. Becomes a mechanical exercise instead of a movement practice", fix: "One full breath per position. Inhale fully into cow, exhale completely into cat. 5-second breath cycle minimum" },
      { fault: "Hands creeping forward of shoulders", consequence: "Shifts load onto the wrists and reduces the spinal mobilization effect", fix: "Check your hand position — wrists directly under shoulders, fingers spread wide" },
    ],
    scaling: {
      easier: [{ movement: "Seated cat-cow — perform in a chair, hands on knees", when: "Wrists can't tolerate the all-fours position or getting to the floor is difficult" }, { movement: "Standing cat-cow — hands on knees in a partial squat", when: "Floor work isn't an option" }],
      harder: [{ movement: "Bird dog cat-cow — add opposite arm/leg extension in the cow position", when: "You want to add stability challenge and core engagement" }, { movement: "Cat-cow with thoracic emphasis — pause in cat and actively push each thoracic segment upward", when: "You want to target the stiff mid-back specifically" }],
    },
  },
  {
    name: "World's Greatest Stretch",
    category: "mobility",
    primaryMuscles: ["hip flexors", "adductors", "thoracic spine", "hamstrings"],
    setup: "Start in a push-up position. Step one foot to the outside of the same-side hand into a deep lunge. Back leg stays straight with the knee off the floor.",
    breathingCue: "Exhale as you rotate and reach. Inhale as you return to the lunge. Each rep should take 4-6 seconds with controlled breathing.",
    cues: [
      "In the lunge, sink your hips down and forward to stretch the back-leg hip flexor",
      "Place the same-side elbow toward the inside of the front foot for an adductor stretch",
      "Then rotate the same-side arm to the ceiling, opening the chest — follow the hand with your eyes",
    ],
    commonFaults: [
      { fault: "Back knee dropping to the floor", consequence: "Releases the hip flexor stretch on the back leg — you lose half the benefit", fix: "Keep the back leg straight and strong. Squeeze the back-leg glute to maintain the stretch" },
      { fault: "Rushing through the rotation without reaching full range", consequence: "The thoracic rotation — the 'greatest' part — gets shortchanged", fix: "Pause at the top of the rotation for 2 breaths. Reach the hand to the ceiling and look up at it" },
      { fault: "Front knee caving inward", consequence: "Misses the adductor stretch and puts the knee in a vulnerable position", fix: "Actively push the front knee out with your elbow during the down phase" },
    ],
    scaling: {
      easier: [{ movement: "World's Greatest with back knee on the floor", when: "You can't maintain balance or the hip flexor stretch is too intense" }, { movement: "Half version — just the lunge and elbow touch, skip the rotation", when: "The rotation component is too many things at once" }],
      harder: [{ movement: "Add a hamstring stretch — straighten the front leg from the lunge and fold forward", when: "You want to add a hamstring component to the flow" }, { movement: "Flowing reps — alternate sides continuously for 5-10 reps per side", when: "You want to use this as a dynamic warm-up rather than a static stretch" }],
    },
  },
  {
    name: "Banded Hip Distraction",
    category: "mobility",
    primaryMuscles: ["hip capsule", "hip flexors", "adductors"],
    setup: "Anchor a heavy resistance band low (around a rack post or heavy KB). Step into the band so it sits in the crease of your hip — as deep into the joint as possible. Step away from the anchor to create tension. Get into a half-kneeling or deep lunge position.",
    breathingCue: "Slow belly breaths. Inhale for 4 counts, exhale for 6. Let the band do the work — your job is to relax into it.",
    cues: [
      "Let the band pull your femur (thigh bone) away from the hip socket — this creates space in the joint",
      "Rock gently forward and back, or side to side, to explore different angles of the joint capsule",
      "Stay for 60-90 seconds per side — joint capsule stretches need time",
    ],
    commonFaults: [
      { fault: "Band sitting on the thigh instead of deep in the hip crease", consequence: "No joint distraction effect — you're just pulling on your leg muscles", fix: "Push the band as deep into the hip crease as possible before stepping away from the anchor" },
      { fault: "Tensing up against the band pull", consequence: "Your muscles fight the distraction instead of allowing the joint to open", fix: "Consciously relax the hip muscles. Breathe deeply and let the band create the stretch passively" },
      { fault: "Spending only 15-20 seconds per side", consequence: "Joint capsule tissue responds to sustained loading — short holds don't create lasting change", fix: "Set a timer. 60 seconds minimum, 90 preferred. Breathe through it" },
    ],
    scaling: {
      easier: [{ movement: "Supine hip flexor stretch — lie on back, pull knee to chest, let other leg hang", when: "You don't have a band or the band position is uncomfortable" }, { movement: "Lighter band tension — stand closer to the anchor", when: "The pull is too aggressive for your current mobility" }],
      harder: [{ movement: "Banded hip distraction with internal/external rotation — rotate the thigh while the band pulls", when: "You want to target specific rotational restrictions in the hip" }, { movement: "Banded distraction in a deep squat hold — band in hip crease while sitting in the bottom of a squat", when: "You want to combine joint distraction with squat mobility" }],
    },
  },
  {
    name: "Ankle Mobility (Knee-Over-Toe Wall Stretch)",
    category: "mobility",
    primaryMuscles: ["soleus", "Achilles tendon", "ankle joint capsule"],
    setup: "Face a wall. Place one foot about 4-5 inches from the wall with toes pointing straight ahead. The other foot is a step behind for balance. Hands lightly on the wall.",
    breathingCue: "Steady, relaxed breathing. Exhale as you push the knee forward. This is not an intense stretch — keep breathing normally.",
    cues: [
      "Drive your knee forward over your toes toward the wall — the goal is to touch the wall with your kneecap while keeping your heel flat",
      "Keep your heel glued to the floor. The moment it lifts, you've gone too far",
      "If you can touch the wall easily, move your foot further back and try again",
    ],
    commonFaults: [
      { fault: "Heel lifting off the floor", consequence: "You're compensating with calf flexibility instead of ankle dorsiflexion — the actual joint isn't getting mobilized", fix: "Only push the knee as far forward as your heel can stay flat. If it lifts at 3 inches, that's your starting point" },
      { fault: "Knee collapsing inward instead of driving straight over the toes", consequence: "You're getting fake range of motion from the arch collapsing, not real ankle mobility", fix: "Drive the knee directly over the second or third toe. Keep the arch of the foot active" },
      { fault: "Bouncing at end range instead of holding", consequence: "Ballistic stretching of the Achilles tendon increases strain risk without improving joint mobility", fix: "Push to your end range and hold for 5-10 seconds. Repeat for 10 reps. Gentle, sustained pressure" },
    ],
    scaling: {
      easier: [{ movement: "Seated ankle circles — rotate the ankle through full range", when: "The wall stretch is too intense or you're rehabbing an ankle" }, { movement: "Incline board calf stretch — stand on a wedge", when: "You want a gentler stretch that doesn't require the knee-forward position" }],
      harder: [{ movement: "Weighted knee-over-toe — hold a kettlebell at your chest while performing the stretch", when: "Bodyweight is easy and you want more load to push the range further" }, { movement: "Banded ankle distraction — band around the front of the ankle pulling backward while you drive the knee forward", when: "The joint capsule is the restrictor, not the muscle — the band creates joint space" }],
    },
  },
  {
    name: "Foam Roll Quads / IT Band",
    category: "mobility",
    primaryMuscles: ["quadriceps", "IT band", "hip flexors"],
    setup: "Lie face down with a foam roller under your thighs, just above the knee. Support yourself on your forearms in a plank-like position. One leg on the roller, the other can be stacked on top or placed to the side for support.",
    breathingCue: "Breathe steadily throughout. When you find a tender spot, stop and take 3-4 deep breaths into it — exhale and let the tissue soften.",
    cues: [
      "Roll slowly from just above the knee to the top of the thigh — about 1 inch per second",
      "When you find a tender spot, pause and breathe into it for 20-30 seconds until the pain decreases",
      "Rotate your leg in and out to hit the inner quad, outer quad, and IT band",
    ],
    commonFaults: [
      { fault: "Rolling too fast — racing up and down the leg", consequence: "The nervous system doesn't have time to relax the tissue. You're just irritating it without creating release", fix: "Slow way down. Think of it like ironing a shirt — slow, steady pressure across the tissue" },
      { fault: "Rolling directly over the kneecap or hip bone", consequence: "Bone on roller = pain with no benefit. You can bruise the periosteum", fix: "Stay on the soft tissue between the joints. Stop 2 inches above the knee and 2 inches below the hip bone" },
      { fault: "Holding breath and tensing up on tender spots", consequence: "Tension prevents release. The muscle can't relax if you're bracing against the pain", fix: "When you hit a tender spot, consciously exhale and try to melt into the roller. It will hurt less within 20 seconds" },
    ],
    scaling: {
      easier: [{ movement: "Softer roller or roller on a carpet", when: "The pressure is too intense — a softer surface reduces the load" }, { movement: "Roll with both legs on the roller simultaneously", when: "Single-leg is too much pressure — both legs splits the load in half" }],
      harder: [{ movement: "Lacrosse ball on specific trigger points", when: "The foam roller isn't precise enough and you need to dig into specific knots" }, { movement: "Cross-friction rolling — roll perpendicular to the muscle fiber on a tender spot", when: "You have adhesions that don't respond to longitudinal rolling" }],
    },
  },
  {
    name: "Foam Roll Lats / Upper Back",
    category: "mobility",
    primaryMuscles: ["latissimus dorsi", "thoracic erectors", "rhomboids"],
    setup: "Lie on your back with a foam roller positioned across your upper back, just below your shoulder blades. Knees bent, feet flat on the floor. Cross your arms over your chest or extend them overhead for a deeper stretch.",
    breathingCue: "Inhale as you extend over the roller. Exhale as you curl forward. When parked on a tight spot, breathe deeply and let the tissue release.",
    cues: [
      "For thoracic extension: park the roller on a stiff segment and gently arch backward over it — arms overhead amplifies this",
      "For lat rolling: turn onto one side, arm extended overhead, and roll from the armpit to the bottom of the ribcage",
      "Spend extra time on any spots that feel restricted or tender — 20-30 seconds per spot",
    ],
    commonFaults: [
      { fault: "Rolling the lower back over the foam roller", consequence: "The lumbar spine doesn't have the ribcage for support — rolling here can hyperextend and irritate it", fix: "Keep the roller on the upper and mid-back only. Below the bottom of the ribcage, switch to a lacrosse ball for targeted work" },
      { fault: "Cranking the neck to look at the ceiling during thoracic extension", consequence: "You extend the neck instead of the thoracic spine — potential neck strain", fix: "Support your head with your hands. The extension should come from the mid-back arching over the roller, not the neck" },
      { fault: "Only rolling up and down without pausing", consequence: "Misses the thoracic extension benefit. The real value is in the sustained position on each segment", fix: "Park on one segment, extend over it for 3-5 breaths, then move the roller one segment up and repeat" },
    ],
    scaling: {
      easier: [{ movement: "Peanut roller (two taped tennis balls) for targeted thoracic extension", when: "The foam roller is too broad and you want to target specific segments" }, { movement: "Roller placed lengthwise along the spine — lie on it and let arms fall to the sides", when: "You want a gentle chest-opening stretch without pressure on the vertebrae" }],
      harder: [{ movement: "Foam roll with arms extended and a light weight in hands", when: "You want more thoracic extension load" }, { movement: "Barbell thoracic extension — sit on the floor, upper back on a bench, barbell across hips, extend over the bench edge", when: "You need loaded thoracic extension for overhead sport positions" }],
    },
  },
  {
    name: "Lat Stretch (Hanging or Doorway)",
    category: "mobility",
    primaryMuscles: ["latissimus dorsi", "teres major", "thoracic spine"],
    setup: "Grab a pull-up bar with both hands at shoulder width and hang with feet on the floor (partial bodyweight). Alternatively, hold a doorframe or rack at arm height and lean away from it. Arms fully extended.",
    breathingCue: "Deep inhale to expand the ribcage (this stretches the lats from the inside). Long exhale to relax deeper into the stretch.",
    cues: [
      "Let your bodyweight pull you into the stretch — relax your lats and let them lengthen",
      "Push your hips away from your hands to increase the stretch through the side body",
      "For the doorway version: rotate your chest slightly away from the gripping hand for a deeper stretch on one side",
    ],
    commonFaults: [
      { fault: "Shrugging shoulders up to the ears instead of relaxing into the hang", consequence: "The upper traps take over and the lats never actually stretch", fix: "Actively depress your shoulders — think about pulling your shoulder blades into your back pockets while you hang" },
      { fault: "Bending the elbows to reduce the stretch", consequence: "Shortens the lever arm and reduces the lat stretch significantly", fix: "Keep arms straight. If a full hang is too intense, keep more weight on your feet" },
      { fault: "Holding for only a few seconds", consequence: "Lats are big, dense muscles — they need sustained stretching to create change", fix: "Hold for 30-60 seconds per set. Breathe deeply and relax into it progressively" },
    ],
    scaling: {
      easier: [{ movement: "Kneeling lat stretch on a bench — kneel, place hands on bench, sink chest toward floor", when: "You can't hang or don't have a bar available" }, { movement: "Child's pose with arms extended", when: "A gentler lat stretch that doesn't require grip strength" }],
      harder: [{ movement: "Full dead hang — feet completely off the floor", when: "Partial hang is easy and you want maximum lat stretch plus shoulder decompression" }, { movement: "Single-arm hang — one arm at a time for a deeper unilateral stretch", when: "Bilateral stretching is comfortable and you want to address side-to-side differences" }],
    },
  },
  {
    name: "Pec Stretch (Doorway)",
    category: "mobility",
    primaryMuscles: ["pectoralis major", "pectoralis minor", "anterior deltoid"],
    setup: "Stand in a doorway. Place one forearm on the doorframe with your elbow at shoulder height, upper arm parallel to the floor. Step the same-side foot through the doorway and lean forward until you feel a stretch across the chest.",
    breathingCue: "Inhale to expand your chest. Exhale and lean slightly further into the stretch. Each breath should open the chest a little more.",
    cues: [
      "Keep your elbow at or slightly above shoulder height — this targets the pec major fibers that get tightest from bench pressing and desk work",
      "Lean through the doorway with your chest, not by twisting your spine",
      "You should feel the stretch across the front of your chest and the front of the shoulder — NOT in the shoulder joint itself",
    ],
    commonFaults: [
      { fault: "Elbow positioned too low (below shoulder height)", consequence: "Misses the upper pec and anterior delt fibers that are typically the tightest", fix: "Raise your elbow to shoulder height or slightly above. You can also try a high position (elbow above shoulder) to target the lower pec" },
      { fault: "Rotating the torso to feel a deeper stretch", consequence: "You're twisting your spine instead of opening the chest. The pec escapes the stretch", fix: "Keep your chest and hips square to the doorway. Only the arm-side shoulder moves forward" },
      { fault: "Sharp pain in the front of the shoulder joint", consequence: "This isn't a pec stretch anymore — you're stressing the shoulder capsule or bicep tendon", fix: "Back off the depth. Bring your elbow slightly lower or reduce how far you lean. If it persists, skip this stretch" },
    ],
    scaling: {
      easier: [{ movement: "Wall pec stretch — arm on a wall at shoulder height, gently rotate away", when: "The doorway version is too aggressive or you don't have a doorway available" }, { movement: "Both arms on the doorframe simultaneously — bilateral stretch", when: "You want a gentler, symmetrical stretch" }],
      harder: [{ movement: "Pec stretch with varying arm heights — do 30 sec low, 30 sec mid, 30 sec high", when: "You want to stretch all fiber angles of the pec" }, { movement: "Loaded pec stretch — lie on a bench, hold a light dumbbell with arm out to the side and let it pull you into a stretch", when: "Doorway stretches are easy and you want a deeper, gravity-assisted stretch" }],
    },
  },
  {
    name: "Figure-4 Stretch",
    category: "mobility",
    primaryMuscles: ["piriformis", "glutes", "hip external rotators"],
    setup: "Lie on your back. Cross one ankle over the opposite knee, creating a figure-4 shape. Reach through the gap and pull the uncrossed leg toward your chest by gripping behind the thigh or on top of the shin.",
    breathingCue: "Slow, deep breaths. Inhale for 4 counts, exhale for 6. On each exhale, gently pull the leg a little closer to your chest.",
    cues: [
      "Keep the crossed foot flexed — pull your toes toward your shin to protect the knee",
      "Use your elbow to gently push the crossed knee away from your chest to deepen the stretch",
      "Keep your head and shoulders on the floor — don't crane up to reach your leg",
    ],
    commonFaults: [
      { fault: "Head and shoulders lifting off the floor to reach the leg", consequence: "Creates neck tension and shifts the focus away from the hip stretch", fix: "Use a strap or towel around the thigh if you can't reach comfortably while lying flat" },
      { fault: "Crossed foot dangling (not flexed)", consequence: "The knee is less protected from rotational stress without the foot flexed", fix: "Actively pull the toes of the crossed foot toward your shin throughout the stretch" },
      { fault: "Pulling too aggressively and forcing the range", consequence: "The piriformis and deep rotators guard against forced stretching — you'll tighten up more", fix: "Gentle, sustained pull. Breathe and wait for the muscle to release. It takes 30-60 seconds" },
    ],
    scaling: {
      easier: [{ movement: "Seated figure-4 — sit in a chair, cross ankle over knee, lean forward gently", when: "Getting on and off the floor is difficult" }, { movement: "Figure-4 with foot on wall — place the uncrossed foot flat on a wall instead of pulling it toward you", when: "You can't reach the thigh or holding the pull is tiring" }],
      harder: [{ movement: "Pigeon stretch on the floor — front leg in pigeon position", when: "Figure-4 is comfortable and you want a deeper external rotation stretch" }, { movement: "Figure-4 with hip circles — slowly rotate the hip in small circles while in position", when: "You want to mobilize the joint through its rotational range, not just stretch statically" }],
    },
  },
  {
    name: "Seated Hamstring Stretch",
    category: "mobility",
    primaryMuscles: ["hamstrings", "calves", "lumbar erectors"],
    setup: "Sit on the floor with one leg extended straight in front of you, toes pointing up. The other leg can be bent with the sole of the foot against the inner thigh of the straight leg. Sit tall on your sit bones.",
    breathingCue: "Inhale to lengthen your spine tall. Exhale to hinge forward from the hips — not by rounding the back. Each exhale takes you a little further.",
    cues: [
      "Hinge at the hips and reach your chest toward your knee — lead with the sternum, not the forehead",
      "Keep the extended leg straight with the kneecap pointing at the ceiling",
      "Reach toward your toes but don't round your back to get there — a flat back at less depth is better than a rounded back at more depth",
    ],
    commonFaults: [
      { fault: "Rounding the back to reach further toward the toes", consequence: "Stretches the lower back instead of the hamstrings. You feel it in your spine, not the back of your leg", fix: "Keep your chest up and spine neutral as you fold forward. Reach the chest toward the shin — if that means you only go a few inches, that's fine" },
      { fault: "Bending the knee of the extended leg", consequence: "Slackens the hamstring and removes the stretch", fix: "Actively press the back of the knee toward the floor and pull the toes toward you (dorsiflex the ankle)" },
      { fault: "Bouncing at end range", consequence: "Triggers the stretch reflex which causes the muscle to contract — counterproductive and risks strain", fix: "Hold a steady position and breathe. No bouncing. The stretch deepens with time and relaxation, not force" },
    ],
    scaling: {
      easier: [{ movement: "Strap-assisted hamstring stretch — loop a towel around the foot and gently pull", when: "You can't reach your foot or the stretch is too intense at the available range" }, { movement: "Standing hamstring stretch — foot on a low box, hinge forward", when: "Sitting on the floor is uncomfortable" }],
      harder: [{ movement: "Both legs extended (pike stretch) — seated forward fold with both legs straight", when: "Single-leg stretch is easy and you want to increase the demand" }, { movement: "Elevated hamstring stretch — foot on a higher surface (bench, rack), fold forward", when: "Floor-level stretching doesn't provide enough range to feel a stretch" }],
    },
  },
  {
    name: "Wrist Circles and Extensions",
    category: "mobility",
    primaryMuscles: ["wrist flexors", "wrist extensors", "forearms"],
    setup: "Hold your hands in front of you at chest height. Interlace your fingers or keep them free. For the extension stretch: place the back of one hand on the floor with fingers pointing toward your knees while in a kneeling position.",
    breathingCue: "Breathe normally and stay relaxed. These are small joints — gentle, steady movements with calm breathing.",
    cues: [
      "Circles: rotate your wrists slowly in full circles — 10 in each direction. Make them as big as possible",
      "Extension stretch: with palms on the floor, fingers pointing back toward your knees, gently lean back until you feel a stretch in the forearms",
      "Flexion stretch: press the back of the hand into the floor with fingers pointing toward you, gently lean forward",
    ],
    commonFaults: [
      { fault: "Skipping wrist warm-up before front rack cleans, push-ups, or handstands", consequence: "Cold wrists under heavy load or extreme extension are a recipe for strain and pain", fix: "2 minutes of wrist circles and stretches before any session involving wrist-loaded movements" },
      { fault: "Forcing extension range aggressively", consequence: "Wrist ligaments are small and vulnerable — forcing them can cause sprains", fix: "Gentle, progressive pressure. If it hurts, back off. Wrist mobility improves slowly over weeks, not in one session" },
      { fault: "Doing circles too fast and too small", consequence: "You're not actually mobilizing the joint through its available range", fix: "Slow, deliberate circles through the maximum comfortable range. Quality over speed" },
    ],
    scaling: {
      easier: [{ movement: "Wrist circles in warm water", when: "Wrists are very stiff or recovering from strain — warm water reduces pain and increases range" }, { movement: "Prayer stretch — palms together at chest, press down gently", when: "Floor-based wrist extension is too intense" }],
      harder: [{ movement: "Weighted wrist circles with a light club or hammer", when: "Bodyweight circles are easy and you want to build wrist strength through range" }, { movement: "Wrist push-ups — do push-ups on the backs of your hands (on a soft surface)", when: "You have excellent wrist mobility and want to build strength in extension" }],
    },
  },
];

// ---------------------------------------------------------------------------
// PREHAB / SHOULDER HEALTH (8 movements)
// ---------------------------------------------------------------------------

const prehab: MovementCueData[] = [
  {
    name: "Band Pull-Apart",
    category: "prehab",
    primaryMuscles: ["rear deltoids", "rhomboids", "mid traps"],
    setup: "Hold a light resistance band at arm's length in front of you with both hands, shoulder-width apart, palms facing down. Arms straight, band has slight tension. Stand tall with core braced.",
    breathingCue: "Exhale as you pull the band apart. Inhale as you return to the start. Keep it rhythmic and controlled.",
    cues: [
      "Pull the band apart by squeezing your shoulder blades together — the band should touch your chest at the end",
      "Keep your arms straight throughout — the movement comes from the shoulder blades, not the elbows",
      "Control the return — don't let the band snap your hands back together",
    ],
    commonFaults: [
      { fault: "Bending the elbows to cheat the range", consequence: "Turns it into a row instead of a rear delt/scapular exercise — different muscles, different benefit", fix: "Lock your elbows straight. If you can't pull the band to your chest with straight arms, use a lighter band" },
      { fault: "Shrugging the shoulders up during the pull", consequence: "Upper traps take over and the rear delts/rhomboids don't get trained", fix: "Depress your shoulders before you start. Keep them down and back throughout" },
      { fault: "Using a band that's too heavy", consequence: "Form breaks down, you compensate, and the small stabilizer muscles that need this work don't get trained", fix: "This is a prehab exercise. Use a light band you can do for 15-20 reps with perfect form. It should burn at the end, not fight you on rep 3" },
    ],
    scaling: {
      easier: [{ movement: "Narrower grip on the band — more slack, less tension", when: "The lightest band is still too difficult with a full grip width" }, { movement: "Band pull-apart with slight elbow bend", when: "Straight arms are too demanding on the shoulders initially" }],
      harder: [{ movement: "Band pull-apart with 2-second hold at full stretch", when: "You want to build endurance in the retracted position" }, { movement: "Overhead band pull-apart — arms angled 45 degrees above horizontal", when: "Standard pull-aparts are easy and you want to target the lower traps more" }],
    },
  },
  {
    name: "Banded External Rotation (90/90)",
    category: "prehab",
    primaryMuscles: ["infraspinatus", "teres minor", "posterior rotator cuff"],
    setup: "Anchor a light band at elbow height. Stand sideways to the anchor with your working arm furthest from it. Elbow bent 90 degrees, upper arm parallel to the floor at shoulder height (90 degrees of shoulder abduction). Grip the band with the working hand.",
    breathingCue: "Exhale as you rotate outward. Inhale as you return. Slow and controlled — 2 seconds each direction.",
    cues: [
      "Rotate your forearm upward and back, keeping your elbow at 90 degrees — the rotation happens at the shoulder, the elbow is a fixed hinge",
      "Think about showing your palm to the wall behind you at end range",
      "Keep your elbow at shoulder height throughout — don't let it drop",
    ],
    commonFaults: [
      { fault: "Elbow dropping below shoulder height during the rotation", consequence: "Changes the angle of the exercise and reduces rotator cuff activation", fix: "Rest your elbow on a rolled towel on top of a rack or shelf to maintain height" },
      { fault: "Using too much band tension and compensating with the entire arm", consequence: "The rotator cuff is small — heavy loads recruit bigger muscles that overpower it", fix: "Use a very light band. You should be able to do 15-20 reps with a slow tempo. If you can't, go lighter" },
      { fault: "Rotating the torso instead of just the shoulder", consequence: "Your body is cheating to get the range — the rotator cuff barely works", fix: "Brace your core and keep your chest facing straight ahead. Only the forearm should move" },
    ],
    scaling: {
      easier: [{ movement: "Side-lying external rotation with a light dumbbell — lie on your side, elbow pinned to your hip", when: "The 90/90 position is uncomfortable for your shoulder" }, { movement: "Banded ER with elbow at your side (not at 90 degrees abduction)", when: "Shoulder height arm position causes pain" }],
      harder: [{ movement: "Slow eccentric ER — 5-second return to start", when: "You want to build eccentric strength in the rotator cuff for deceleration" }, { movement: "ER with isometric hold — 10-second hold at full external rotation", when: "You want to build endurance at end range for overhead athletes" }],
    },
  },
  {
    name: "YTWL Raises (Prone)",
    category: "prehab",
    primaryMuscles: ["lower traps", "mid traps", "rear deltoids", "rotator cuff"],
    setup: "Lie face down on a bench with your chest at the edge, or lie flat on the floor. Arms hang straight down (or lie extended on the floor). Hold very light dumbbells (2-5 lbs) or no weight at all.",
    breathingCue: "Exhale as you raise your arms into each position. Inhale as you lower. Slow and controlled — this is about activation, not power.",
    cues: [
      "Y: raise arms overhead at 45 degrees to form a Y, thumbs pointing up. Squeeze lower traps at the top",
      "T: raise arms straight out to the sides, thumbs up, squeeze shoulder blades together. This is a rear delt fly",
      "W: bend elbows 90 degrees, raise upper arms to shoulder height and rotate forearms up — like a goalpost. Squeeze between the shoulder blades",
      "L: elbows at sides bent 90 degrees, rotate forearms out (external rotation). Same as a side-lying ER but prone",
    ],
    commonFaults: [
      { fault: "Using weights that are too heavy", consequence: "The big muscles take over (traps, lats) and the small stabilizers you're targeting barely fire", fix: "Start with no weight. Add 2 lbs when you can do 12 perfect reps of each letter. These muscles are tiny — ego has no place here" },
      { fault: "Lifting the chest off the bench to generate momentum", consequence: "You're using your spinal erectors instead of the target shoulder muscles", fix: "Keep your forehead on the bench or floor. Only the arms move. The torso stays completely still" },
      { fault: "Rushing through the letters without holding the top position", consequence: "Misses the isometric contraction at the end range where activation is highest", fix: "Hold each letter position for 2-3 seconds at the top. Squeeze the shoulder blades on every rep" },
    ],
    scaling: {
      easier: [{ movement: "Standing YTWL with a band — stand facing an anchor, do the same shapes against band resistance", when: "Lying prone is uncomfortable or you can't maintain the positions" }, { movement: "Single-letter focus — just do Y's until they're strong, then add T's, etc.", when: "All four letters in one set is too fatiguing" }],
      harder: [{ movement: "YTWL with a 3-second hold at the top of each position", when: "You want more time under tension at end range" }, { movement: "YTWL on an incline bench (30-45 degrees) with light dumbbells", when: "The flat position is easy and you want more range of motion through gravity" }],
    },
  },
  {
    name: "Scapular Push-up",
    category: "prehab",
    primaryMuscles: ["serratus anterior", "lower traps"],
    setup: "Get into a standard push-up position — hands under shoulders, body in a straight plank. Arms stay locked straight the entire time. This is NOT a push-up — the elbows never bend.",
    breathingCue: "Exhale as you push the floor away (protraction). Inhale as you let your chest sink between your shoulder blades (retraction).",
    cues: [
      "Let your chest sink between your shoulder blades — your blades come together in the back",
      "Then push the floor away as hard as you can — your upper back rounds slightly as the shoulder blades spread apart. This is protraction",
      "Arms stay locked straight — the only movement is your shoulder blades sliding on your ribcage",
    ],
    commonFaults: [
      { fault: "Bending the elbows — turning it into a regular push-up", consequence: "Completely different exercise. The serratus anterior barely works in a standard push-up", fix: "Lock your elbows and keep them locked. The movement is small — only 2-3 inches of motion. That's normal" },
      { fault: "Only doing the protraction (push) without the retraction (sink)", consequence: "You miss the eccentric serratus work and the scapular rhythm training", fix: "Both phases matter. Sink and squeeze the blades, then push and spread them. Full range in both directions" },
      { fault: "Hips sagging or piking during the movement", consequence: "Indicates weak core engagement — the plank position should be maintained throughout", fix: "Squeeze your glutes and brace your core. If you can't maintain the plank, do these from your knees" },
    ],
    scaling: {
      easier: [{ movement: "Scapular push-up from knees", when: "You can't maintain a plank position while focusing on the scapular movement" }, { movement: "Wall scapular push-up — hands on wall, lean in and push away", when: "The floor version is too demanding or you want a lighter warmup option" }],
      harder: [{ movement: "Scapular push-up with a plus — add a 3-second hold at full protraction", when: "You want to build serratus endurance at end range" }, { movement: "Scapular push-up on rings — the instability massively increases serratus demand", when: "Floor scapular push-ups are easy for 20+ reps" }],
    },
  },
  {
    name: "Banded Face Pull (Light / Prehab)",
    category: "prehab",
    primaryMuscles: ["rear deltoids", "external rotators", "mid traps"],
    setup: "Anchor a light band at face height. Grip each end with palms facing down. Step back to create light tension. Stance shoulder-width, knees soft. This is the prehab version — lighter and slower than the cable strength version.",
    breathingCue: "Exhale as you pull toward your face. Inhale on the return. 2-second pull, 2-second return.",
    cues: [
      "Pull the band apart and toward your forehead — finish with hands at ear height, elbows high and wide",
      "At the end, rotate your fists toward the ceiling — this external rotation is the key to the shoulder health benefit",
      "Squeeze your shoulder blades and hold the end position for 1-2 seconds on every rep",
    ],
    commonFaults: [
      { fault: "Using a heavy band and muscling through reps", consequence: "Defeats the prehab purpose. Heavy loads recruit bigger muscles and skip the rotator cuff", fix: "Use a band light enough for 20 smooth reps. This is warm-up and maintenance work, not a strength exercise" },
      { fault: "Pulling to the chest instead of the face", consequence: "Turns it into a row — you lose the external rotation benefit", fix: "Aim for your forehead. Elbows should finish at or above shoulder height" },
      { fault: "Skipping the external rotation at the end", consequence: "Without the rotation, you train the rear delts but miss the rotator cuff — the main reason this exercise exists", fix: "At end range, rotate fists to ceiling. Think 'double biceps pose.' Hold it" },
    ],
    scaling: {
      easier: [{ movement: "Band pull-apart at chest height — skip the face-level pull", when: "The overhead component bothers your shoulders" }, { movement: "Prone YTWL raises — target the same muscles from a lying position", when: "Bands aren't available" }],
      harder: [{ movement: "Face pull with 3-second isometric hold at full external rotation", when: "You want endurance work for the rotator cuff" }, { movement: "Cable face pull with heavier load", when: "You're transitioning from prehab to strength training for the posterior shoulder" }],
    },
  },
  {
    name: "Sleeper Stretch",
    category: "prehab",
    primaryMuscles: ["posterior shoulder capsule", "infraspinatus"],
    setup: "Lie on your side with the bottom arm straight out in front of you at shoulder height, elbow bent 90 degrees so the forearm points toward the ceiling. Your body weight rests on the bottom shoulder.",
    breathingCue: "Long, slow exhales. Inhale for 3 seconds, exhale for 5. On each exhale, let the hand drop a little closer to the floor. Never push.",
    cues: [
      "Use your top hand to gently push the bottom forearm toward the floor — this is internal rotation of the shoulder",
      "Apply only gentle pressure — this is a stretch for a delicate joint capsule, not a muscle you can force",
      "Stop at the first sign of a stretch. Hold there and breathe. The range comes with time, not force",
    ],
    commonFaults: [
      { fault: "Pressing the arm down aggressively to force range of motion", consequence: "The posterior capsule and rotator cuff tendons are fragile. Forcing them can cause impingement or strain", fix: "Gentle. If you wouldn't do it to someone else's shoulder, don't do it to yours. Let gravity and breathing do the work" },
      { fault: "Rolling the body forward — the shoulder lifts off the ground", consequence: "You get fake range by rolling instead of actually stretching the capsule", fix: "Keep your shoulder blade pinned to the floor. The rotation happens at the shoulder joint, not by rolling your body" },
      { fault: "Experiencing sharp pain in the front of the shoulder", consequence: "This means you've gone too far or this stretch isn't appropriate for your shoulder right now", fix: "Back off immediately. If it hurts in the front, try a cross-body stretch instead. See a physio if it persists" },
    ],
    scaling: {
      easier: [{ movement: "Cross-body shoulder stretch — pull arm across chest with the opposite hand", when: "The sleeper stretch is too intense or causes discomfort" }, { movement: "Sleeper stretch with a towel roll under the wrist — reduces the range", when: "Full range is too much and you need a smaller dose" }],
      harder: [{ movement: "Sleeper stretch with 5-second holds at end range", when: "You can comfortably reach 60+ degrees of internal rotation and want to improve further" }, { movement: "Prone internal rotation stretch — lie face down, arm off the edge of a bench, let a light weight pull the arm into internal rotation", when: "You need more load than bodyweight provides for capsule adaptation" }],
    },
  },
  {
    name: "Dead Hang",
    category: "prehab",
    primaryMuscles: ["lats", "grip", "shoulder capsule", "thoracic spine"],
    setup: "Grip a pull-up bar with both hands at shoulder width, overhand grip. Lift your feet off the ground and hang with fully extended arms. Let your body weight decompress your spine and open your shoulders.",
    breathingCue: "Slow, deep belly breaths. Inhale and feel your ribcage expand. Exhale and relax your shoulders further. Each breath should feel like you're getting longer.",
    cues: [
      "Relax everything except your grip — let your shoulders stretch, let your spine decompress",
      "Actively think about lengthening — imagine someone gently pulling your feet toward the floor",
      "Shoulders should be by your ears in a passive hang — don't engage your lats or try to do an active hang unless that's the intent",
    ],
    commonFaults: [
      { fault: "Swinging or fidgeting", consequence: "Creates momentum that reduces the decompression benefit and can strain the shoulder capsule", fix: "Hang still. If you're swinging, wait for it to stop, then relax. Stillness is the goal" },
      { fault: "Only hanging for 5-10 seconds and dropping", consequence: "The decompression effect takes time. Short hangs barely begin the process", fix: "Work up to 30-60 second hangs. If grip fails early, use straps or do multiple shorter hangs with rest" },
      { fault: "Engaging the lats and trying to do a scapular pull-up", consequence: "That's a different exercise. For decompression, you want full passive lengthening", fix: "Let your shoulders rise to your ears. Relax your back completely. Think about being as long as possible" },
    ],
    scaling: {
      easier: [{ movement: "Partial-weight dead hang — keep one or both feet on a box", when: "Full bodyweight is too much for your grip or shoulders" }, { movement: "Hang from a bar at waist height with feet on the floor — lean back to add weight", when: "You can't reach an overhead bar or can't support your full weight yet" }],
      harder: [{ movement: "Single-arm dead hang", when: "Double-arm hangs are easy for 60+ seconds and you want more grip and shoulder challenge" }, { movement: "Dead hang with slow leg raises — add gentle movement while hanging", when: "You want to combine decompression with gentle core work" }],
    },
  },
  {
    name: "Banded Shoulder Dislocate (Pass-Through)",
    category: "prehab",
    primaryMuscles: ["deltoids", "rotator cuff", "pecs", "lats"],
    setup: "Hold a light band, PVC pipe, or broomstick with a very wide grip — wider than shoulder width, as wide as needed to complete the movement. Arms extended in front of you at hip height.",
    breathingCue: "Inhale as you lift overhead. Exhale as you pass behind your back. Slow and smooth — 3-4 seconds each direction.",
    cues: [
      "With straight arms, slowly raise the band overhead and continue the arc all the way behind you until it reaches your lower back",
      "Then reverse the motion — return the band from behind you, over your head, back to the front",
      "Keep your arms straight the entire time. The movement is a slow, controlled arc — not a jerk",
    ],
    commonFaults: [
      { fault: "Grip too narrow — forcing the shoulders through a painful range", consequence: "Impingement and rotator cuff strain from pushing the joint past its current safe range", fix: "Start with a VERY wide grip. So wide it feels easy. Narrow the grip by half an inch each week as mobility improves" },
      { fault: "Bending the elbows to cheat through the tight spot overhead", consequence: "You avoid the exact range of motion you need to improve. The tight spot IS the point", fix: "Keep arms straight. If you can't get through with straight arms, widen the grip until you can" },
      { fault: "Jerking or swinging through the movement quickly", consequence: "Momentum bypasses the muscles and can strain the shoulder capsule at speed", fix: "3-4 seconds over the top, 3-4 seconds back. Smooth and deliberate. If you have to speed up to get through, the grip is too narrow" },
    ],
    scaling: {
      easier: [{ movement: "Very wide grip with a band that has stretch — the elastic gives you extra room", when: "Even a wide grip on a rigid pipe is too difficult" }, { movement: "Half pass-through — lift overhead only, don't go behind the back. Return to the front", when: "Full range behind the back isn't available yet" }],
      harder: [{ movement: "Narrower grip — hands closer together increases the ROM demand", when: "Wide grip pass-throughs are smooth and effortless" }, { movement: "Pause at the most difficult position for 5 seconds (usually directly overhead)", when: "You want to build strength and control at the sticking point" }],
    },
  },
];

// ---------------------------------------------------------------------------
// YOGA / RECOVERY (8 movements)
// ---------------------------------------------------------------------------

const yogaRecovery: MovementCueData[] = [
  {
    name: "Downward Dog",
    category: "yoga_recovery",
    primaryMuscles: ["hamstrings", "calves", "shoulders", "lats"],
    setup: "Start on all fours. Tuck your toes and lift your hips up and back to form an inverted V-shape. Hands shoulder-width apart, fingers spread wide, feet hip-width apart. Press your chest toward your thighs.",
    breathingCue: "Deep, steady breaths through the nose. Inhale for 4 counts, exhale for 4 counts. With each exhale, press your heels a little closer to the floor and lengthen your spine.",
    cues: [
      "Push the floor away with your hands — straighten your arms and externally rotate your shoulders (rotate the elbow creases forward)",
      "Lift your hips as high as possible while pressing your heels toward the floor — they don't have to touch",
      "Your spine should be long and straight — if your back rounds, bend your knees slightly to allow the spine to lengthen",
    ],
    commonFaults: [
      { fault: "Rounding the upper back and collapsing between the shoulders", consequence: "Loads the shoulders in a weak position and misses the lat/shoulder stretch", fix: "Push the floor away actively. Think about making your armpits face the floor. If flexibility limits you, bend the knees to let the spine straighten" },
      { fault: "Locking the knees and forcing the heels to the floor", consequence: "Puts excessive strain on the hamstrings and Achilles. Heels touching the floor is a result of mobility, not a requirement", fix: "Slightly bent knees are fine. Prioritize a long, straight spine over straight legs" },
      { fault: "Holding breath or breathing shallowly", consequence: "Defeats the recovery and relaxation purpose of the pose. Creates tension", fix: "Focus on the exhale. Long, audible exhales through the nose. Let the breath be the priority, not the position" },
    ],
    scaling: {
      easier: [{ movement: "Puppy pose — knees stay on the floor, arms walk forward, chest sinks toward the ground", when: "Full downward dog is too demanding on the shoulders or hamstrings" }, { movement: "Downward dog with hands on a bench or wall — elevated hands reduce the hamstring and shoulder demand", when: "The full floor version is too intense" }],
      harder: [{ movement: "Three-legged downward dog — lift one leg to the ceiling", when: "The base position is comfortable and you want to add a hip opener and balance challenge" }, { movement: "Downward dog to plank flow — alternate between positions on each breath", when: "You want to add dynamic movement and core engagement" }],
    },
  },
  {
    name: "Child's Pose",
    category: "yoga_recovery",
    primaryMuscles: ["lats", "lower back", "hips", "shoulders"],
    setup: "Kneel on the floor with your big toes touching and knees either together or spread wide (wide knees = deeper hip opening). Sit your hips back toward your heels and walk your hands forward on the floor, lowering your chest and forehead toward the ground.",
    breathingCue: "Slow, deep belly breaths into your lower back. You should feel your back expand with each inhale. Exhale completely and let your body melt into the floor.",
    cues: [
      "Reach your arms as far forward as possible while sitting your hips back toward your heels",
      "Let your forehead rest on the floor — relax your neck completely",
      "Spread your knees wider for a deeper hip stretch, keep them together for more lower back focus",
    ],
    commonFaults: [
      { fault: "Hips lifting away from the heels", consequence: "You lose the restorative quality and the lower back stretch", fix: "Place a pillow or folded blanket between your thighs and calves to support the hips sitting back" },
      { fault: "Holding tension in the shoulders and neck", consequence: "This is a rest position. Tension defeats its entire purpose", fix: "Consciously drop your shoulders away from your ears. Let the weight of your arms pull gently on the shoulders. Relax your jaw" },
      { fault: "Rushing through it as a transition instead of holding", consequence: "Child's pose is a reset and recovery tool. Skipping through it misses the nervous system benefit", fix: "Stay for 60 seconds minimum. 5-10 deep breaths. Let your heart rate and breathing slow down" },
    ],
    scaling: {
      easier: [{ movement: "Child's pose with a pillow under your chest", when: "Folding fully forward is uncomfortable for the knees or hips" }, { movement: "Seated forward fold in a chair — hands reach for the floor between your legs", when: "Getting to the floor is difficult" }],
      harder: [{ movement: "Extended child's pose with side stretch — walk both hands to one side", when: "You want to add a lateral stretch through the lats and obliques" }, { movement: "Puppy pose — knees stay put but walk hands further forward and drop chest lower", when: "You want a deeper shoulder and thoracic stretch" }],
    },
  },
  {
    name: "Warrior I",
    category: "yoga_recovery",
    primaryMuscles: ["hip flexors", "shoulders", "quadriceps", "core"],
    setup: "From standing, step one foot back about 3-4 feet. Front knee bends to roughly 90 degrees, back leg is straight with the heel grounded at a 45-degree angle. Hips face forward. Reach both arms overhead with palms facing each other.",
    breathingCue: "Inhale as you reach overhead and lengthen your spine. Exhale and sink deeper into the front knee. Each breath cycle should be 5-6 seconds.",
    cues: [
      "Sink your front knee to 90 degrees — knee stacked over the ankle, not past the toes",
      "Square your hips to the front wall — the back hip tends to rotate open, actively pull it forward",
      "Reach up through the fingertips and lift your ribcage away from your pelvis — create length in the spine",
    ],
    commonFaults: [
      { fault: "Back hip rotating open instead of staying square to the front", consequence: "Turns the pose into a different position and reduces the hip flexor stretch on the back leg", fix: "Actively draw the back hip forward. Think about pointing both hip bones at the wall in front of you" },
      { fault: "Front knee collapsing inward", consequence: "Stresses the knee ligaments and indicates weak hip stabilizers", fix: "Press the front knee outward so it tracks over the pinky toe. Engage the glute on the front side" },
      { fault: "Arching the lower back to get the arms overhead", consequence: "Compresses the lumbar spine and means the thoracic spine and shoulders lack the mobility for the position", fix: "Tuck your pelvis slightly, brace your core. It's OK if your arms aren't perfectly vertical — reach as high as you can while maintaining a neutral spine" },
    ],
    scaling: {
      easier: [{ movement: "Warrior I with hands on hips — remove the overhead reach", when: "Shoulder mobility or balance makes the overhead position too difficult" }, { movement: "Shorter stance — bring the feet closer together", when: "The deep lunge is too demanding for your hip flexors or balance" }],
      harder: [{ movement: "Warrior I with backbend — gently arch back while reaching overhead", when: "You have solid balance and thoracic mobility and want to add an extension element" }, { movement: "Hold for 60+ seconds per side", when: "30-second holds are comfortable and you want to build endurance and depth" }],
    },
  },
  {
    name: "Warrior II",
    category: "yoga_recovery",
    primaryMuscles: ["adductors", "quadriceps", "hip abductors", "shoulders"],
    setup: "From standing, step your feet wide apart — about 4 feet. Turn the front foot to point forward, back foot at 90 degrees (parallel to the back of your mat). Bend the front knee to 90 degrees. Arms extend out to the sides at shoulder height, palms down. Gaze over the front fingertips.",
    breathingCue: "Breathe deeply and steadily. Inhale to find length in the spine. Exhale to sink deeper into the front knee. Let the breath keep you calm in the intensity.",
    cues: [
      "Front knee bends to 90 degrees directly over the ankle — don't let it collapse inward",
      "Keep your torso vertical — don't lean toward the front leg. Stack your shoulders over your hips",
      "Arms are active — reach through the fingertips in both directions like someone is pulling your hands apart",
    ],
    commonFaults: [
      { fault: "Leaning the torso over the front leg", consequence: "Shifts the load off the legs and onto the lower back. Misses the hip-opening effect", fix: "Stack your shoulders directly over your hips. Think about a wall behind you — your whole back should be able to touch it" },
      { fault: "Front knee drifting inward past the big toe", consequence: "Stresses the medial knee structures. The hip isn't opening properly", fix: "Actively press the front knee toward the pinky toe. Engage the outer hip muscles" },
      { fault: "Arms drooping and shoulders tensing", consequence: "Loses the upper body engagement and builds shoulder tension instead of strength", fix: "Extend through the fingertips. Drop the shoulders away from the ears. Arms at exactly shoulder height — not higher, not lower" },
    ],
    scaling: {
      easier: [{ movement: "Warrior II with a shorter stance and shallower knee bend", when: "The full position is too intense for the hips or legs" }, { movement: "Chair-supported Warrior II — back hand rests on a chair for balance", when: "Balance is the main challenge" }],
      harder: [{ movement: "Extended Warrior II — hold for 90+ seconds per side", when: "Standard holds are comfortable and you want to build leg endurance" }, { movement: "Warrior II to Side Angle flow — drop the front elbow to the front knee and reach the back arm overhead", when: "You want to add a lateral stretch through the torso" }],
    },
  },
  {
    name: "Low Lunge (Anjaneyasana)",
    category: "yoga_recovery",
    primaryMuscles: ["hip flexors", "psoas", "quadriceps"],
    setup: "From standing, step one foot forward into a long lunge. Lower the back knee to the floor (place a pad under it for comfort). Front knee stacked over the ankle at 90 degrees. Hands can rest on the front thigh or reach overhead.",
    breathingCue: "Inhale to lengthen your spine upward. Exhale to sink your hips forward and down. Each exhale should deepen the stretch in the back-leg hip flexor.",
    cues: [
      "Sink your hips forward and down — the stretch should be felt in the front of the back hip and thigh",
      "Keep your torso upright — tall spine, shoulders over hips. Don't lean forward",
      "Squeeze the glute on the back leg — this deepens the hip flexor stretch through reciprocal inhibition",
    ],
    commonFaults: [
      { fault: "Front knee pushing way past the toes", consequence: "Overloads the knee joint and shifts focus away from the hip flexor stretch", fix: "Keep the front shin vertical — knee directly over the ankle. If you need more stretch, slide the back knee further back" },
      { fault: "Arching the lower back to feel more of a stretch", consequence: "Stretches the lumbar spine instead of the hip flexor — can cause back pain", fix: "Tuck the pelvis slightly and brace your core. The stretch should come from the hip sinking forward, not the back arching" },
      { fault: "Holding for only a few seconds", consequence: "Hip flexors are dense and stubborn — they need sustained stretching for lasting improvement", fix: "Hold 45-60 seconds per side minimum. Breathe deeply and settle into it progressively" },
    ],
    scaling: {
      easier: [{ movement: "Half-kneeling with hands on the front thigh for support", when: "Balance or flexibility limits the full position" }, { movement: "Kneeling on a thick pad or pillow", when: "Knee pressure on the floor is uncomfortable" }],
      harder: [{ movement: "Low lunge with arms overhead and gentle backbend", when: "Basic position is comfortable and you want to add thoracic extension and shoulder opening" }, { movement: "Low lunge with a quad stretch — reach back and grab the back foot, pulling heel toward glute", when: "You want to combine hip flexor and quad stretching in one position" }],
    },
  },
  {
    name: "Supine Spinal Twist",
    category: "yoga_recovery",
    primaryMuscles: ["obliques", "spinal rotators", "glutes", "lower back"],
    setup: "Lie on your back with arms extended to the sides at shoulder height, palms down. Bend both knees and place feet flat on the floor. Then let both knees fall to one side toward the floor while keeping both shoulder blades on the ground.",
    breathingCue: "Inhale to find length in the spine. Exhale and let the knees fall heavier toward the floor. Each exhale should deepen the rotation. 5-6 second breath cycles.",
    cues: [
      "Keep both shoulder blades pinned to the floor — the twist comes from the lumbar and thoracic spine, not from rolling the upper body",
      "Let gravity do the work — don't force the knees to the floor. They'll get closer with each breath",
      "Turn your head to look toward the opposite hand for a gentle neck rotation",
    ],
    commonFaults: [
      { fault: "Opposite shoulder blade lifting off the floor", consequence: "The twist is happening in the shoulder instead of the spine — you lose the spinal rotation benefit", fix: "Only twist as far as you can while keeping both shoulders grounded. Place a pillow under the knees if they don't reach the floor" },
      { fault: "Forcing the knees to the floor aggressively", consequence: "Can strain the lower back, especially if the lumbar spine isn't ready for deep rotation", fix: "Let gravity and breathing do the work. Place a pillow under the knees for support if they're far from the floor" },
      { fault: "Holding breath or tensing the core", consequence: "This is a relaxation and mobility pose. Tension prevents the release you're seeking", fix: "Breathe deeply and consciously relax your entire torso. Your core should be OFF in this pose" },
    ],
    scaling: {
      easier: [{ movement: "Knees higher — don't let them drop as far to the side", when: "Full rotation causes pulling in the lower back" }, { movement: "Place a pillow between the knees and another under the knees when they're to the side", when: "You need support to relax into the position" }],
      harder: [{ movement: "Extend the top leg straight while the bottom knee stays bent", when: "The basic version is easy and you want to add a hamstring stretch component" }, { movement: "Hold each side for 2-3 minutes", when: "You want a deep, restorative hold that allows significant fascial release" }],
    },
  },
  {
    name: "Happy Baby",
    category: "yoga_recovery",
    primaryMuscles: ["adductors", "hip flexors", "pelvic floor", "lower back"],
    setup: "Lie on your back. Bend both knees and draw them toward your armpits. Grab the outside edges of your feet (or your shins or the backs of your thighs if you can't reach your feet). Your shins should be roughly perpendicular to the floor.",
    breathingCue: "Deep belly breaths. Inhale to expand the hips. Long exhale to pull the knees gently closer to the floor beside your torso. Completely relaxed breathing — this is a rest pose.",
    cues: [
      "Pull your knees gently down toward the floor beside your ribcage — not toward your chest",
      "Keep your lower back and tailbone on the floor — if they lift, you're pulling too hard",
      "Rock gently side to side to massage the lower back into the floor",
    ],
    commonFaults: [
      { fault: "Tailbone lifting off the floor", consequence: "You're pulling too hard and curling up instead of opening the hips. The lower back gets stressed instead of released", fix: "Release the pull until your tailbone rests on the floor. Hold the thighs or shins instead of the feet if flexibility limits you" },
      { fault: "Shoulders and head tensing up off the floor", consequence: "Creates upper body tension that defeats the relaxation purpose of the pose", fix: "Relax your head on the floor, drop your shoulders. If you can't reach your feet without tensing up, grab your shins instead" },
      { fault: "Straightening the legs and pulling them wide like a straddle", consequence: "Different pose, different stretch. Happy baby targets the hips with bent knees", fix: "Keep the knees bent at 90 degrees with shins vertical. Pull the knees apart and down, not the feet out wide" },
    ],
    scaling: {
      easier: [{ movement: "Happy baby holding the backs of the thighs instead of the feet", when: "You can't reach your feet without your tailbone lifting" }, { movement: "Single-leg happy baby — one leg at a time while the other foot stays on the floor", when: "Both legs at once is too intense for the hips or groin" }],
      harder: [{ movement: "Happy baby with leg extensions — slowly straighten one leg, then the other, while maintaining the pull", when: "The basic position is comfortable and you want to add hamstring work" }, { movement: "Hold for 2-3 minutes with gentle rocking", when: "You want a deep, restorative hip-opening hold" }],
    },
  },
  {
    name: "Savasana (Guided Relaxation)",
    category: "yoga_recovery",
    primaryMuscles: ["none — full body relaxation"],
    setup: "Lie flat on your back. Legs extended, feet falling naturally to the sides. Arms at your sides, palms facing up. Close your eyes. A small pillow under the knees can relieve lower back pressure. Cover yourself with a blanket if you're cool.",
    breathingCue: "Inhale deeply through the nose for 4 counts. Exhale slowly through the nose for 6-8 counts. With each exhale, let a different part of your body release: jaw, shoulders, hands, hips, legs, feet. The exhale is longer than the inhale — this activates the parasympathetic nervous system.",
    cues: [
      "Systematically relax every muscle group — start from your toes and work up to the crown of your head",
      "Release your jaw. Unclench your teeth. Let your tongue fall away from the roof of your mouth",
      "Let the floor support your full bodyweight — stop holding yourself up. Melt into the ground",
    ],
    commonFaults: [
      { fault: "Fidgeting and readjusting constantly", consequence: "The body can't shift into recovery mode if it's still active. Stillness is the entire practice", fix: "Get comfortable BEFORE you start. Adjust your pillow, blanket, arm position. Then commit to stillness. If you feel the urge to move, just breathe instead" },
      { fault: "Mind racing and unable to relax", consequence: "Normal, especially if you're new to this. Racing thoughts don't mean it's not working", fix: "Don't fight the thoughts. Acknowledge them and return focus to the breath. Count your exhales from 10 down to 1, then start again. Give the mind a simple job" },
      { fault: "Cutting it short — only staying 1-2 minutes", consequence: "The nervous system needs 5-10 minutes to fully shift from sympathetic (fight/flight) to parasympathetic (rest/recover)", fix: "Set a timer for 5-10 minutes. You don't have to feel perfectly relaxed — just stay still and breathe. The benefit accumulates whether you feel it or not" },
    ],
    scaling: {
      easier: [{ movement: "Legs-up-the-wall (Viparita Karani) — lie with legs elevated on a wall", when: "Lying flat causes lower back discomfort or you want added venous return benefit for recovery" }, { movement: "Guided audio meditation — use an app to lead the relaxation", when: "You can't quiet your mind on your own and need external guidance" }],
      harder: [{ movement: "Extended savasana — 15-20 minutes", when: "You want a deep nervous system reset, especially after intense training" }, { movement: "Yoga nidra — structured guided relaxation through body scanning and visualization", when: "Basic savasana is comfortable and you want a more advanced relaxation practice" }],
    },
  },
];

// ---------------------------------------------------------------------------
// Combined Library
// ---------------------------------------------------------------------------

export const coachingCueLibrary: MovementCueData[] = [
  ...barbellCompounds,
  ...bodyweight,
  ...dumbbell,
  ...conditioning,
  ...core,
  ...olympicLifts,
  ...machineCable,
  ...carry,
  ...kettlebell,
  ...gymnastics,
  ...runningDrills,
  ...plyometrics,
  ...sportFunctional,
  ...mobility,
  ...prehab,
  ...yogaRecovery,
];

/**
 * Retrieve cue data for a single movement by name (case-insensitive).
 */
export function getCuesForMovement(
  name: string
): MovementCueData | undefined {
  return coachingCueLibrary.find(
    (m) => m.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Retrieve all movements in a given category.
 */
export function getMovementsByCategory(
  category: MovementCueData["category"]
): MovementCueData[] {
  return coachingCueLibrary.filter((m) => m.category === category);
}
