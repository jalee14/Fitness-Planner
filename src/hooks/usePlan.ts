import { useState, useEffect, useCallback } from 'react';
import { useStorage } from '../services/storage/provider';
import { TrainingPlan, PlanWeek } from '../types/plan';
import { SessionLog } from '../types/log';

interface UsePlanReturn {
  plan: TrainingPlan | null;
  loading: boolean;
  currentWeekNum: number;
  setCurrentWeekNum: (week: number) => void;
  currentWeek: PlanWeek | null;
  currentPhase: TrainingPlan['phases'][0] | null;
  weekLogs: SessionLog[];
  completedDays: number;
  totalDays: number;
  reload: () => Promise<void>;
}

export function usePlan(): UsePlanReturn {
  const storage = useStorage();
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentWeekNum, setCurrentWeekNum] = useState(1);
  const [weekLogs, setWeekLogs] = useState<SessionLog[]>([]);

  const loadPlan = useCallback(async () => {
    setLoading(true);
    try {
      const saved = await storage.getPlan();
      setPlan(saved);
    } finally {
      setLoading(false);
    }
  }, [storage]);

  // Load plan on mount
  useEffect(() => {
    loadPlan();
  }, [loadPlan]);

  // Load logs for current week
  useEffect(() => {
    if (!plan) return;
    storage.getSessionLogsForWeek(plan.id, currentWeekNum).then(setWeekLogs);
  }, [plan, currentWeekNum, storage]);

  const currentWeek = plan?.weeks.find((w) => w.weekNum === currentWeekNum) ?? null;
  const currentPhase = plan?.phases.find(
    (p) => currentWeekNum >= p.startWeek && currentWeekNum <= p.endWeek
  ) ?? null;

  // Count completed days (days that have at least one logged session)
  const completedSessionIds = new Set(weekLogs.map((l) => l.sessionId));
  const completedDays = currentWeek?.days.filter((d) =>
    d.sessions.some((s) => completedSessionIds.has(s.id))
  ).length ?? 0;
  const totalDays = currentWeek?.days.length ?? 0;

  return {
    plan,
    loading,
    currentWeekNum,
    setCurrentWeekNum,
    currentWeek,
    currentPhase,
    weekLogs,
    completedDays,
    totalDays,
    reload: loadPlan,
  };
}
