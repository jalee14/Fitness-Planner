// ---------------------------------------------------------------------------
// Per-exercise logging
// ---------------------------------------------------------------------------

export interface SetLog {
  /** Reps completed for this set (pre-filled from prescription, user adjusts) */
  reps: number;
  /** Weight used in lbs (null for bodyweight or conditioning movements) */
  weight: number | null;
}

export interface TaskLog {
  /** ID of the SessionTask this log corresponds to */
  taskId: string;
  /** Completion status */
  status: 'completed' | 'skipped' | 'swapped';
  /** Set-by-set logging for strength movements */
  sets: SetLog[];
  /** For conditioning: time in seconds (run time, MetCon time, etc.) */
  timeSeconds: number | null;
  /** For conditioning: distance in meters */
  distanceMeters: number | null;
  /** For MetCons: rounds completed (AMRAP) */
  rounds: number | null;
  /** For MetCons: extra reps beyond last full round */
  extraReps: number | null;
  /** Movement name if swapped (null if completed or skipped) */
  swappedMovement: string | null;
  /** Optional note on this specific exercise */
  note: string;
}

// ---------------------------------------------------------------------------
// Per-session logging
// ---------------------------------------------------------------------------

export interface SessionLog {
  id: string;
  planId: string;
  weekNum: number;
  dayIndex: number;
  sessionId: string;

  /** Per-exercise logged data */
  taskLogs: TaskLog[];

  /** Legacy: IDs of completed tasks (derived from taskLogs for backward compat) */
  completedTasks: string[];

  /** Session-level RPE (1-10), logged at end */
  rpe: number | null;
  /** Energy level before starting (1-5) */
  energyLevel: number | null;
  /** Session-level free text notes */
  notes: string;

  /** Auto-captured timestamps */
  startedAt: string;
  completedAt: string | null;
}

// ---------------------------------------------------------------------------
// External session logging (non-Forge training)
// ---------------------------------------------------------------------------

export interface ExternalSessionLog {
  id: string;
  /** Date of the session (ISO date string, e.g., "2026-03-20") */
  date: string;
  /** Day index (0=Mon, 6=Sun) */
  dayIndex: number;
  /** What they did — e.g., "CrossFit", "Running", "BJJ", "Yoga" */
  activityType: string;
  /** Optional description — e.g., "Heavy back squat day + MetCon" */
  description: string;
  /** Duration in minutes */
  durationMinutes: number | null;
  /** Session RPE (1-10) */
  rpe: number | null;
  /** Energy level before (1-5) */
  energyLevel: number | null;
  /** Free text notes */
  notes: string;
  /** Timestamp */
  loggedAt: string;
}

// ---------------------------------------------------------------------------
// Derived / computed types (used by progress display)
// ---------------------------------------------------------------------------

export interface PersonalRecord {
  id: string;
  movement: string;
  type: 'e1rm' | 'weight_x_reps' | 'time' | 'rounds_reps';
  value: number;
  /** Human-readable description: "285 × 5 (e1RM: 320)" */
  display: string;
  date: string;
  sessionLogId: string;
}

export interface MovementHistory {
  movement: string;
  entries: {
    date: string;
    sets: SetLog[];
    e1rm: number | null;
    volumeLoad: number;
  }[];
  bestE1rm: number | null;
  bestE1rmDate: string | null;
}

// ---------------------------------------------------------------------------
// Metrics (manual + wearable)
// ---------------------------------------------------------------------------

export interface MetricsEntry {
  id: string;
  date: string;
  type: 'weight' | 'body_fat' | 'resting_hr' | 'hrv' | 'sleep_hours' | 'custom';
  name: string;
  value: number;
  unit: string;
  source: 'manual' | 'wearable' | 'calculated';
}
