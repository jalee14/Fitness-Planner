export interface TrainingPlan {
  id: string;
  profileId: string;
  title: string;
  summary: string;
  whyThisPlan: string;
  rationale: PlanRationale[];
  planRelationship: 'standalone' | 'supplemental' | 'modification';
  createdAt: string;
  durationWeeks: number;
  status: 'preview' | 'active' | 'completed' | 'archived';
  phases: Phase[];
  weeks: PlanWeek[];
}

export interface PlanRationale {
  topic: string;
  explanation: string;
}

export interface Phase {
  id: string;
  name: string;
  startWeek: number;
  endWeek: number;
  focus: string;
  goals: string[];
  rationale: string;
}

export interface PlanWeek {
  weekNum: number;
  phaseId: string;
  focus: string;
  days: PlanDay[];
}

export interface PlanDay {
  dayIndex: number;
  dayLabel: string;
  type: string;
  sessions: PlannedSession[];
}

export interface PlannedSession {
  id: string;
  type: string;
  tasks: SessionTask[];
  targetMetrics?: Record<string, string>;
  notes?: string;
  rationale?: string;
}

export interface SessionTask {
  id: string;
  movement: string;
  prescription: string;
  category: 'warmup' | 'skill' | 'strength' | 'conditioning' | 'cooldown' | 'general';
  why?: string;
  coachingCues?: string[];
  commonFaults?: string[];
  scaling?: string;
}

export interface PlanPreview {
  title: string;
  summary: string;
  whyThisPlan: string;
  rationale: PlanRationale[];
  planRelationship: 'standalone' | 'supplemental' | 'modification';
  durationWeeks: number;
  daysPerWeek: number;
  phases: {
    name: string;
    weeks: string;
    focus: string;
    rationale: string;
  }[];
}
