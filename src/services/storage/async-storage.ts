import AsyncStorage from '@react-native-async-storage/async-storage';
import { IStorageService } from './index';
import { UserProfile } from '../../types/profile';
import { TrainingPlan } from '../../types/plan';
import { SessionLog, ExternalSessionLog, MetricsEntry } from '../../types/log';
import { OnboardingState } from '../../types/ai';

const PREFIX = '@forge:v1';

const KEYS = {
  profile: `${PREFIX}:profile`,
  plan: `${PREFIX}:plan`,
  onboarding: `${PREFIX}:onboarding`,
  sessionLog: (id: string) => `${PREFIX}:log:${id}`,
  sessionLogIndex: (planId: string, weekNum: number) =>
    `${PREFIX}:logindex:${planId}:${weekNum}`,
  metrics: `${PREFIX}:metrics`,
  externalLog: (id: string) => `${PREFIX}:extlog:${id}`,
  externalLogIndex: (date: string) => `${PREFIX}:extlogindex:${date}`,
} as const;

async function safeGet<T>(key: string): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

async function safeSet(key: string, value: unknown): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export class AsyncStorageService implements IStorageService {
  async getProfile(): Promise<UserProfile | null> {
    return safeGet<UserProfile>(KEYS.profile);
  }

  async saveProfile(profile: UserProfile): Promise<void> {
    await safeSet(KEYS.profile, profile);
  }

  async getPlan(): Promise<TrainingPlan | null> {
    return safeGet<TrainingPlan>(KEYS.plan);
  }

  async savePlan(plan: TrainingPlan): Promise<void> {
    await safeSet(KEYS.plan, plan);
  }

  async getSessionLog(sessionId: string): Promise<SessionLog | null> {
    return safeGet<SessionLog>(KEYS.sessionLog(sessionId));
  }

  async saveSessionLog(log: SessionLog): Promise<void> {
    await safeSet(KEYS.sessionLog(log.id), log);

    // Update the week index
    const indexKey = KEYS.sessionLogIndex(log.planId, log.weekNum);
    const index = (await safeGet<string[]>(indexKey)) || [];
    if (!index.includes(log.id)) {
      index.push(log.id);
      await safeSet(indexKey, index);
    }
  }

  async getSessionLogsForWeek(
    planId: string,
    weekNum: number
  ): Promise<SessionLog[]> {
    const indexKey = KEYS.sessionLogIndex(planId, weekNum);
    const index = (await safeGet<string[]>(indexKey)) || [];
    const logs: SessionLog[] = [];
    for (const id of index) {
      const log = await safeGet<SessionLog>(KEYS.sessionLog(id));
      if (log) logs.push(log);
    }
    return logs;
  }

  async getExternalLogsForDate(date: string): Promise<ExternalSessionLog[]> {
    const indexKey = KEYS.externalLogIndex(date);
    const index = (await safeGet<string[]>(indexKey)) || [];
    const logs: ExternalSessionLog[] = [];
    for (const id of index) {
      const log = await safeGet<ExternalSessionLog>(KEYS.externalLog(id));
      if (log) logs.push(log);
    }
    return logs;
  }

  async getExternalLogsForWeek(weekStartDate: string): Promise<ExternalSessionLog[]> {
    const start = new Date(weekStartDate);
    const logs: ExternalSessionLog[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      const dayLogs = await this.getExternalLogsForDate(dateStr);
      logs.push(...dayLogs);
    }
    return logs;
  }

  async saveExternalLog(log: ExternalSessionLog): Promise<void> {
    await safeSet(KEYS.externalLog(log.id), log);

    // Update the date index
    const indexKey = KEYS.externalLogIndex(log.date);
    const index = (await safeGet<string[]>(indexKey)) || [];
    if (!index.includes(log.id)) {
      index.push(log.id);
      await safeSet(indexKey, index);
    }
  }

  async getMetrics(type?: string): Promise<MetricsEntry[]> {
    const all = (await safeGet<MetricsEntry[]>(KEYS.metrics)) || [];
    if (type) return all.filter((m) => m.type === type);
    return all;
  }

  async saveMetric(entry: MetricsEntry): Promise<void> {
    const all = (await safeGet<MetricsEntry[]>(KEYS.metrics)) || [];
    const idx = all.findIndex((m) => m.id === entry.id);
    if (idx >= 0) {
      all[idx] = entry;
    } else {
      all.push(entry);
    }
    await safeSet(KEYS.metrics, all);
  }

  async getOnboardingState(): Promise<OnboardingState | null> {
    return safeGet<OnboardingState>(KEYS.onboarding);
  }

  async saveOnboardingState(state: OnboardingState): Promise<void> {
    await safeSet(KEYS.onboarding, state);
  }

  async clearAll(): Promise<void> {
    const keys = await AsyncStorage.getAllKeys();
    const appKeys = keys.filter((k) => k.startsWith(PREFIX));
    await AsyncStorage.multiRemove(appKeys);
  }
}
