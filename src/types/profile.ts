export interface UserProfile {
  id: string;
  createdAt: string;
  updatedAt: string;
  demographics: {
    age: number | null;
    weight: number | null;
    height: number | null;
    biologicalSex: 'male' | 'female' | null;
  };
  experience: {
    yearsTraining: number | null;
    frequency: number | null;
    background: string;
  };
  existingTraining: ExistingTraining;
  goals: Goal[];
  baselines: Baseline[];
  movementLimitations: MovementLimitation[];
  schedule: Schedule;
  preferences: Preferences;
  rawIntake: string;
  rawFollowUps: { question: string; answer: string }[];
}

export interface ExistingTraining {
  description: string;
  activitiesPerWeek: { activity: string; frequencyPerWeek: number }[];
  planRelationship: 'standalone' | 'supplemental' | 'modification' | null;
}

export interface Goal {
  id: string;
  type: 'strength' | 'skill' | 'endurance' | 'body_composition' | 'event' | 'other';
  description: string;
  target: string;
  deadline: string | null;
  status: 'active' | 'achieved' | 'abandoned';
}

export interface Baseline {
  id: string;
  name: string;
  value: string;
  unit: string;
  recordedAt: string;
}

export interface MovementLimitation {
  id: string;
  area: string;
  limitation: string;
  notes: string;
}

export interface Schedule {
  daysPerWeek: number | null;
  preferredDays: string[];
  sessionLengthMinutes: number | null;
  equipment: string[];
}

export interface Preferences {
  likedPrograms: string[];
  dislikedPrograms: string[];
  preferredStyle: string;
  notes: string;
}
