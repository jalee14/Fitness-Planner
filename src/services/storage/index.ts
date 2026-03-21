import { UserProfile } from '../../types/profile';
import { TrainingPlan } from '../../types/plan';
import { SessionLog, ExternalSessionLog, MetricsEntry } from '../../types/log';
import { OnboardingState } from '../../types/ai';

export interface IStorageService {
  // Profile
  getProfile(): Promise<UserProfile | null>;
  saveProfile(profile: UserProfile): Promise<void>;

  // Plan
  getPlan(): Promise<TrainingPlan | null>;
  savePlan(plan: TrainingPlan): Promise<void>;

  // Session logs (Forge-programmed sessions)
  getSessionLog(sessionId: string): Promise<SessionLog | null>;
  saveSessionLog(log: SessionLog): Promise<void>;
  getSessionLogsForWeek(planId: string, weekNum: number): Promise<SessionLog[]>;

  // External session logs (non-Forge training)
  getExternalLogsForDate(date: string): Promise<ExternalSessionLog[]>;
  getExternalLogsForWeek(weekStartDate: string): Promise<ExternalSessionLog[]>;
  saveExternalLog(log: ExternalSessionLog): Promise<void>;

  // Metrics
  getMetrics(type?: string): Promise<MetricsEntry[]>;
  saveMetric(entry: MetricsEntry): Promise<void>;

  // Onboarding state
  getOnboardingState(): Promise<OnboardingState | null>;
  saveOnboardingState(state: OnboardingState): Promise<void>;

  // Utility
  clearAll(): Promise<void>;
}
