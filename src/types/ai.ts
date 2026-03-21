import { UserProfile } from './profile';
import { TrainingPlan, PlanPreview } from './plan';

export interface IAIService {
  extractProfile(intake: string): Promise<Partial<UserProfile>>;
  generateFollowUps(partialProfile: Partial<UserProfile>): Promise<string[]>;
  refineProfile(
    profile: Partial<UserProfile>,
    followUpAnswers: { question: string; answer: string }[]
  ): Promise<UserProfile>;
  generatePlanPreview(profile: UserProfile): Promise<PlanPreview>;
  refinePlanPreview(preview: PlanPreview, feedback: string, profile: UserProfile): Promise<PlanPreview>;
  generateFullPlan(profile: UserProfile, preview: PlanPreview): Promise<TrainingPlan>;
}

export interface OnboardingState {
  phase: 'welcome' | 'intake' | 'followups' | 'profile' | 'plan_preview' | 'generating' | 'complete';
  partialProfile: Partial<UserProfile> | null;
  followUpQuestions: string[] | null;
  followUpAnswers: { question: string; answer: string }[] | null;
  confirmedProfile: UserProfile | null;
  planPreview: PlanPreview | null;
}
