import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import { Moon, CaretLeft, CaretRight, CaretDown, CaretUp, Barbell, Plus, Timer } from 'phosphor-react-native';
import { colors, typography, spacing, radius, getCategoryColor, getCategoryLabel } from '../../src/theme';
import { useStorage } from '../../src/services/storage/provider';
import { Card } from '../../src/components/ui/Card';
import { TrainingPlan, PlanWeek, PlanDay, Phase } from '../../src/types/plan';
import { SessionLog, ExternalSessionLog } from '../../src/types/log';
import { UserProfile, ExistingTraining } from '../../src/types/profile';

function getCurrentWeekNum(plan: TrainingPlan): number {
  const created = new Date(plan.createdAt);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  return Math.min(Math.max(diffWeeks + 1, 1), plan.durationWeeks);
}

function getTodayDayIndex(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

/** Calculate the Monday (week start) for a given plan week number. */
function getWeekStartDate(plan: TrainingPlan, weekNum: number): string {
  const created = new Date(plan.createdAt);
  // Find the Monday of the creation week
  const createdDay = created.getDay();
  const mondayOffset = createdDay === 0 ? -6 : 1 - createdDay;
  const firstMonday = new Date(created);
  firstMonday.setDate(created.getDate() + mondayOffset);
  // Advance by (weekNum - 1) weeks
  const targetMonday = new Date(firstMonday);
  targetMonday.setDate(firstMonday.getDate() + (weekNum - 1) * 7);
  return targetMonday.toISOString().slice(0, 10);
}

/** Get the ISO date string for a specific day in the week. */
function getDateForDay(weekStartDate: string, dayIndex: number): string {
  const d = new Date(weekStartDate + 'T00:00:00');
  d.setDate(d.getDate() + dayIndex);
  return d.toISOString().slice(0, 10);
}

const DAY_LABELS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/** Map day name strings to dayIndex (0=Mon). */
const DAY_NAME_TO_INDEX: Record<string, number> = {
  monday: 0, mon: 0,
  tuesday: 1, tue: 1, tues: 1,
  wednesday: 2, wed: 2,
  thursday: 3, thu: 3, thur: 3, thurs: 3,
  friday: 4, fri: 4,
  saturday: 5, sat: 5,
  sunday: 6, sun: 6,
};

/**
 * Determine which day indices should show external activities.
 * If the user's schedule has preferred days, use those.
 * Otherwise, default to Mon-Fri for the given frequency.
 */
function getExternalDayIndices(
  activity: { activity: string; frequencyPerWeek: number },
  preferredDays: string[],
  forgeDayIndices: Set<number>,
): number[] {
  let candidates: number[] = [];

  if (preferredDays.length > 0) {
    candidates = preferredDays
      .map((d) => DAY_NAME_TO_INDEX[d.toLowerCase()])
      .filter((idx) => idx !== undefined);
  }

  // If we don't have enough preferred days, fill with weekdays
  if (candidates.length < activity.frequencyPerWeek) {
    candidates = [0, 1, 2, 3, 4, 5, 6].slice(0, activity.frequencyPerWeek);
  }

  return candidates.slice(0, activity.frequencyPerWeek);
}

/** Build a summary string like "CrossFit 5x/week" */
function formatActivitySummary(activities: { activity: string; frequencyPerWeek: number }[]): string {
  return activities.map((a) => `${a.activity} ${a.frequencyPerWeek}x/week`).join(', ');
}

export default function WeekScreen() {
  const storage = useStorage();
  const router = useRouter();
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [weekNum, setWeekNum] = useState(1);
  const [completedSessionIds, setCompletedSessionIds] = useState<Set<string>>(new Set());
  const [externalLogs, setExternalLogs] = useState<ExternalSessionLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set());

  const toggleDay = useCallback((dayIndex: number) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayIndex)) {
        next.delete(dayIndex);
      } else {
        next.add(dayIndex);
      }
      return next;
    });
  }, []);

  const loadLogs = useCallback(async (p: TrainingPlan, wk: number) => {
    const logs = await storage.getSessionLogsForWeek(p.id, wk);
    setCompletedSessionIds(new Set(logs.map((l) => l.sessionId)));

    // Load external logs for this week
    const weekStart = getWeekStartDate(p, wk);
    const extLogs = await storage.getExternalLogsForWeek(weekStart);
    setExternalLogs(extLogs);
  }, [storage]);

  const loadPlan = useCallback(async () => {
    const p = await storage.getPlan();
    const prof = await storage.getProfile();
    setPlan(p);
    setProfile(prof);
    if (p) {
      const wk = getCurrentWeekNum(p);
      setWeekNum(wk);
      await loadLogs(p, wk);
      // Expand today's card by default
      const todayIdx = getTodayDayIndex();
      setExpandedDays(new Set([todayIdx]));
    }
    setLoading(false);
  }, [storage, loadLogs]);

  useFocusEffect(
    useCallback(() => {
      loadPlan();
    }, [loadPlan])
  );

  // Compute external activity schedule
  const activitiesPerWeek = profile?.existingTraining?.activitiesPerWeek ?? [];
  const preferredDays = profile?.schedule?.preferredDays ?? [];
  const currentWeek = plan ? plan.weeks.find((w) => w.weekNum === weekNum) : undefined;
  const forgeDayIndices = new Set(currentWeek?.days.map((d) => d.dayIndex) ?? []);

  // Build a map: dayIndex -> list of scheduled external activities
  const externalSchedule = new Map<number, string[]>();
  for (const act of activitiesPerWeek) {
    const days = getExternalDayIndices(act, preferredDays, forgeDayIndices);
    for (const dayIdx of days) {
      const existing = externalSchedule.get(dayIdx) ?? [];
      existing.push(act.activity);
      externalSchedule.set(dayIdx, existing);
    }
  }

  // Build map: dayIndex -> ExternalSessionLog[]
  const externalLogsByDay = new Map<number, ExternalSessionLog[]>();
  for (const log of externalLogs) {
    const existing = externalLogsByDay.get(log.dayIndex) ?? [];
    existing.push(log);
    externalLogsByDay.set(log.dayIndex, existing);
  }

  const handleSaveExternalLog = useCallback(async (log: ExternalSessionLog) => {
    await storage.saveExternalLog(log);
    if (plan) {
      const weekStart = getWeekStartDate(plan, weekNum);
      const extLogs = await storage.getExternalLogsForWeek(weekStart);
      setExternalLogs(extLogs);
    }
  }, [storage, plan, weekNum]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!plan) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>THIS WEEK</Text>
          <Text style={styles.subtitle}>Complete onboarding to see your weekly plan.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const phase = plan.phases.find((p) => weekNum >= p.startWeek && weekNum <= p.endWeek);
  const todayIndex = getTodayDayIndex();
  const weekStartDate = getWeekStartDate(plan, weekNum);

  // Build supplemental banner text
  const forgeDaysCount = currentWeek?.days.length ?? 0;
  const activitySummary = activitiesPerWeek.length > 0 ? formatActivitySummary(activitiesPerWeek) : null;
  const supplementalBannerText = plan.planRelationship !== 'standalone' && activitySummary
    ? `This plan adds ${forgeDaysCount} session${forgeDaysCount !== 1 ? 's' : ''} to your ${activitySummary}. Tap any day to log your training.`
    : plan.planRelationship === 'supplemental'
      ? 'These sessions supplement your existing training. Your regular programming continues alongside.'
      : plan.planRelationship === 'modification'
        ? 'These sessions modify your existing training schedule.'
        : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header with week navigation */}
        <View style={styles.header}>
          <Text style={styles.label}>
            {phase ? phase.name.toUpperCase() : 'TRAINING'}
          </Text>
          <View style={styles.weekNav}>
            <Pressable
              onPress={() => {
                const next = Math.max(1, weekNum - 1);
                setWeekNum(next);
                if (plan) loadLogs(plan, next);
              }}
              style={styles.navButton}
              disabled={weekNum <= 1}
            >
              <CaretLeft
                size={28}
                color={weekNum <= 1 ? colors.textMuted : colors.text}
                weight="bold"
              />
            </Pressable>
            <Text style={styles.title}>WEEK {weekNum}</Text>
            <Pressable
              onPress={() => {
                const next = Math.min(plan.durationWeeks, weekNum + 1);
                setWeekNum(next);
                loadLogs(plan, next);
              }}
              style={styles.navButton}
              disabled={weekNum >= plan.durationWeeks}
            >
              <CaretRight
                size={28}
                color={weekNum >= plan.durationWeeks ? colors.textMuted : colors.text}
                weight="bold"
              />
            </Pressable>
          </View>
          {currentWeek && (
            <Text style={styles.weekFocus}>{currentWeek.focus}</Text>
          )}
        </View>

        {/* Supplemental context banner */}
        {supplementalBannerText && (
          <View style={styles.supplementalBanner}>
            <Text style={styles.supplementalText}>{supplementalBannerText}</Text>
          </View>
        )}

        {/* Day Cards */}
        {currentWeek ? (
          <View style={styles.dayList}>
            {[0, 1, 2, 3, 4, 5, 6].map((dayIdx) => {
              const day = currentWeek.days.find((d) => d.dayIndex === dayIdx);
              const isToday = dayIdx === todayIndex && weekNum === getCurrentWeekNum(plan);
              const isExpanded = expandedDays.has(dayIdx);
              const scheduledExternal = externalSchedule.get(dayIdx) ?? [];
              const dayExternalLogs = externalLogsByDay.get(dayIdx) ?? [];
              const dateStr = getDateForDay(weekStartDate, dayIdx);
              return (
                <DayCard
                  key={dayIdx}
                  dayIndex={dayIdx}
                  day={day}
                  isToday={isToday}
                  isExpanded={isExpanded}
                  isCompleted={day?.sessions.some((s) => completedSessionIds.has(s.id)) ?? false}
                  scheduledExternalActivities={scheduledExternal}
                  externalLogs={dayExternalLogs}
                  dateStr={dateStr}
                  onToggle={() => toggleDay(dayIdx)}
                  onPressSession={(sessionId) => {
                    router.push(`/session/${sessionId}` as any);
                  }}
                  onSaveExternalLog={handleSaveExternalLog}
                />
              );
            })}
          </View>
        ) : (
          <View style={styles.section}>
            <Card>
              <Text style={styles.emptyText}>No data for this week.</Text>
            </Card>
          </View>
        )}

        <View style={{ height: spacing['3xl'] }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function getExerciseCount(day: PlanDay): number {
  return day.sessions.reduce((sum, s) => sum + s.tasks.length, 0);
}

function getDaySummary(day: PlanDay): string {
  const count = getExerciseCount(day);
  const exerciseWord = count === 1 ? 'exercise' : 'exercises';
  if (day.type) {
    return `${day.type} — ${count} ${exerciseWord}`;
  }
  return `${count} ${exerciseWord}`;
}

function DayCard({
  dayIndex,
  day,
  isToday,
  isExpanded,
  isCompleted,
  scheduledExternalActivities,
  externalLogs,
  dateStr,
  onToggle,
  onPressSession,
  onSaveExternalLog,
}: {
  dayIndex: number;
  day: PlanDay | undefined;
  isToday: boolean;
  isExpanded: boolean;
  isCompleted: boolean;
  scheduledExternalActivities: string[];
  externalLogs: ExternalSessionLog[];
  dateStr: string;
  onToggle: () => void;
  onPressSession: (id: string) => void;
  onSaveExternalLog: (log: ExternalSessionLog) => void;
}) {
  const hasForge = !!day;
  const hasExternalScheduled = scheduledExternalActivities.length > 0;
  const isRest = !hasForge && !hasExternalScheduled;

  // Track which activities have been logged
  const loggedActivities = new Set(externalLogs.map((l) => l.activityType));
  const unloggedActivities = scheduledExternalActivities.filter((a) => !loggedActivities.has(a));

  // Quick log form state
  const [quickLogActivity, setQuickLogActivity] = useState<string | null>(null);
  const [quickLogDuration, setQuickLogDuration] = useState('');
  const [quickLogRpe, setQuickLogRpe] = useState<number | null>(null);
  const [quickLogNotes, setQuickLogNotes] = useState('');

  const resetQuickLog = () => {
    setQuickLogActivity(null);
    setQuickLogDuration('');
    setQuickLogRpe(null);
    setQuickLogNotes('');
  };

  const handleQuickLogSave = () => {
    if (!quickLogActivity) return;
    const log: ExternalSessionLog = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      date: dateStr,
      dayIndex,
      activityType: quickLogActivity,
      description: '',
      durationMinutes: quickLogDuration ? parseInt(quickLogDuration, 10) : null,
      rpe: quickLogRpe,
      energyLevel: null,
      notes: quickLogNotes,
      loggedAt: new Date().toISOString(),
    };
    onSaveExternalLog(log);
    resetQuickLog();
  };

  return (
    <View style={[
      styles.dayCard,
      isCompleted && styles.dayCardDone,
      !hasForge && hasExternalScheduled && styles.dayCardExternal,
    ]}>
      {/* Day header — tappable to expand/collapse */}
      <Pressable onPress={onToggle}>
        <View style={[styles.dayHeader, isToday && styles.dayHeaderToday, isCompleted && styles.dayHeaderDone]}>
          <Text style={[styles.dayLabel, isToday && styles.dayLabelToday, isCompleted && styles.dayLabelDone]}>
            {DAY_LABELS[dayIndex]}
          </Text>
          {isCompleted && <Text style={styles.doneBadge}>DONE</Text>}
          {isToday && !isCompleted && <Text style={styles.todayBadge}>TODAY</Text>}
          {day && <Text style={styles.dayType}>{day.type}</Text>}
          {!isRest ? (
            isExpanded ? (
              <CaretUp size={16} color={colors.textMuted} weight="bold" />
            ) : (
              <CaretDown size={16} color={colors.textMuted} weight="bold" />
            )
          ) : null}
        </View>
        {/* Summary line when collapsed (non-rest days only) */}
        {!isRest && !isExpanded && (
          <View style={styles.summaryRow}>
            {hasForge && day && (
              <Text style={styles.summaryText}>{getDaySummary(day)}</Text>
            )}
            {hasExternalScheduled && (
              <Text style={styles.summaryTextExternal}>
                {scheduledExternalActivities.join(', ')}
                {externalLogs.length > 0 ? ' (logged)' : ''}
              </Text>
            )}
          </View>
        )}
      </Pressable>

      {/* Expanded content */}
      {isRest ? (
        <View style={styles.restRow}>
          <Moon size={20} color={colors.textMuted} weight="fill" />
          <View>
            <Text style={styles.restLabel}>Rest Day</Text>
            <Text style={styles.restSubtext}>Recovery is part of the program</Text>
          </View>
        </View>
      ) : isExpanded ? (
        <View>
          {/* Forge sessions */}
          {hasForge && day!.sessions.map((session) => (
            <Pressable
              key={session.id}
              style={styles.sessionContent}
              onPress={() => onPressSession(session.id)}
            >
              {session.tasks.map((task) => (
                <View key={task.id} style={styles.taskRow}>
                  <View
                    style={[
                      styles.categoryBar,
                      { backgroundColor: getCategoryColor(task.category) },
                    ]}
                  />
                  <View style={styles.taskInfo}>
                    <Text style={styles.taskMovement}>{task.movement}</Text>
                    <Text style={styles.taskPrescription}>{task.prescription}</Text>
                  </View>
                  <Text style={styles.categoryTag}>
                    {task.category.toUpperCase()}
                  </Text>
                </View>
              ))}
              {session.notes && (
                <Text style={styles.sessionNotes}>{session.notes}</Text>
              )}
            </Pressable>
          ))}

          {/* External sessions — logged */}
          {externalLogs.map((log) => (
            <View key={log.id} style={styles.externalLoggedCard}>
              <View style={styles.externalLoggedHeader}>
                <Barbell size={18} color={colors.gold} weight="fill" />
                <Text style={styles.externalActivityName}>{log.activityType}</Text>
                <Text style={styles.externalLoggedBadge}>LOGGED</Text>
              </View>
              <View style={styles.externalLoggedDetails}>
                {log.durationMinutes != null && (
                  <View style={styles.externalDetailChip}>
                    <Timer size={12} color={colors.gold} />
                    <Text style={styles.externalDetailText}>{log.durationMinutes} min</Text>
                  </View>
                )}
                {log.rpe != null && (
                  <View style={styles.externalDetailChip}>
                    <Text style={styles.externalDetailText}>RPE {log.rpe}</Text>
                  </View>
                )}
              </View>
              {log.notes ? (
                <Text style={styles.externalLogNotes}>{log.notes}</Text>
              ) : null}
            </View>
          ))}

          {/* External sessions — not logged */}
          {unloggedActivities.map((activity) => (
            <View key={activity} style={styles.externalUnloggedCard}>
              {quickLogActivity === activity ? (
                /* Quick log inline form */
                <View style={styles.quickLogForm}>
                  <View style={styles.quickLogHeader}>
                    <Barbell size={18} color={colors.gold} weight="fill" />
                    <Text style={styles.externalActivityName}>{activity}</Text>
                  </View>

                  {/* Duration */}
                  <View style={styles.quickLogField}>
                    <Text style={styles.quickLogLabel}>Duration (min)</Text>
                    <TextInput
                      style={styles.quickLogInput}
                      value={quickLogDuration}
                      onChangeText={setQuickLogDuration}
                      keyboardType="number-pad"
                      placeholder="60"
                      placeholderTextColor={colors.textMuted}
                    />
                  </View>

                  {/* RPE */}
                  <View style={styles.quickLogField}>
                    <Text style={styles.quickLogLabel}>RPE</Text>
                    <View style={styles.rpeRow}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                        <Pressable
                          key={val}
                          style={[
                            styles.rpeButton,
                            quickLogRpe === val && styles.rpeButtonActive,
                          ]}
                          onPress={() => setQuickLogRpe(val)}
                        >
                          <Text style={[
                            styles.rpeButtonText,
                            quickLogRpe === val && styles.rpeButtonTextActive,
                          ]}>
                            {val}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  </View>

                  {/* Notes */}
                  <View style={styles.quickLogField}>
                    <Text style={styles.quickLogLabel}>Notes (optional)</Text>
                    <TextInput
                      style={[styles.quickLogInput, styles.quickLogNotesInput]}
                      value={quickLogNotes}
                      onChangeText={setQuickLogNotes}
                      placeholder="How'd it go?"
                      placeholderTextColor={colors.textMuted}
                      multiline
                    />
                  </View>

                  {/* Actions */}
                  <View style={styles.quickLogActions}>
                    <Pressable style={styles.quickLogCancel} onPress={resetQuickLog}>
                      <Text style={styles.quickLogCancelText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.quickLogSave} onPress={handleQuickLogSave}>
                      <Text style={styles.quickLogSaveText}>Save</Text>
                    </Pressable>
                  </View>
                </View>
              ) : (
                /* Unlogged state */
                <View style={styles.externalUnloggedContent}>
                  <View style={styles.externalUnloggedLeft}>
                    <Barbell size={18} color={colors.textMuted} weight="regular" />
                    <Text style={styles.externalUnloggedText}>
                      {activity} (not logged)
                    </Text>
                  </View>
                  <Pressable
                    style={styles.quickLogButton}
                    onPress={() => setQuickLogActivity(activity)}
                  >
                    <Plus size={14} color={colors.gold} weight="bold" />
                    <Text style={styles.quickLogButtonText}>Quick Log</Text>
                  </Pressable>
                </View>
              )}
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { fontFamily: 'Inter', color: colors.textSecondary, fontSize: typography.sizes.base },
  scroll: { paddingBottom: spacing['3xl'] },
  header: { padding: spacing['2xl'], paddingTop: spacing['3xl'] },
  label: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.accent, letterSpacing: 2, marginBottom: spacing.sm,
  },
  weekNav: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  navButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  navText: { fontFamily: 'BebasNeue', fontSize: typography.sizes['2xl'], color: colors.text },
  navDisabled: { color: colors.textMuted },
  title: {
    fontFamily: 'BebasNeue', fontSize: typography.sizes['2xl'],
    color: colors.text, letterSpacing: 2,
  },
  weekFocus: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm,
    color: colors.textSecondary, marginTop: spacing.sm, lineHeight: 20,
  },
  subtitle: {
    fontFamily: 'Inter', fontSize: typography.sizes.base,
    color: colors.textSecondary, marginTop: spacing.sm, lineHeight: 22,
  },
  section: { paddingHorizontal: spacing['2xl'] },
  supplementalBanner: {
    marginHorizontal: spacing['2xl'], marginBottom: spacing.lg,
    backgroundColor: colors.accentMuted, borderRadius: radius.md,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.accentBorder,
  },
  supplementalText: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm,
    color: colors.accent, lineHeight: 20,
  },
  dayList: { paddingHorizontal: spacing['2xl'], gap: spacing.sm },
  // Day card
  dayCard: {
    backgroundColor: colors.surface, borderRadius: radius.lg,
    borderWidth: 1, borderColor: colors.border, overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  dayCardDone: { borderColor: colors.success },
  dayCardExternal: { borderColor: 'rgba(201, 168, 76, 0.35)' },
  dayHeader: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    paddingHorizontal: spacing.lg, paddingVertical: spacing.md,
    borderBottomWidth: 1, borderBottomColor: colors.border,
  },
  dayHeaderToday: { backgroundColor: colors.accentMuted },
  dayHeaderDone: { backgroundColor: colors.successMuted },
  dayLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.base, color: colors.text },
  dayLabelToday: { color: colors.accent },
  dayLabelDone: { color: colors.success },
  doneBadge: {
    fontFamily: 'InterBold', fontSize: typography.sizes.xs, color: colors.success,
    backgroundColor: colors.successMuted, paddingHorizontal: spacing.sm, paddingVertical: 2,
    borderRadius: radius.sm, overflow: 'hidden',
  },
  todayBadge: {
    fontFamily: 'InterBold', fontSize: typography.sizes.xs, color: colors.accent,
    backgroundColor: colors.accentMuted, paddingHorizontal: spacing.sm, paddingVertical: 2,
    borderRadius: radius.sm, overflow: 'hidden',
  },
  dayType: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textSecondary, marginLeft: 'auto' },
  // Summary row (collapsed state)
  summaryRow: {
    paddingHorizontal: spacing.lg, paddingVertical: spacing.sm,
  },
  summaryText: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textSecondary,
  },
  summaryTextExternal: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.gold,
    marginTop: 2,
  },
  // Rest
  restRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    paddingHorizontal: spacing.lg, paddingVertical: spacing.lg,
  },
  restLabel: { fontFamily: 'InterMedium', fontSize: typography.sizes.sm, color: colors.textMuted },
  restSubtext: { fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textMuted, fontStyle: 'italic', marginTop: 2 },
  // Session content
  sessionContent: { paddingVertical: spacing.sm },
  taskRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: spacing.lg, paddingVertical: spacing.sm, gap: spacing.md,
  },
  categoryBar: { width: 3, height: 32, borderRadius: 2 },
  taskInfo: { flex: 1 },
  taskMovement: { fontFamily: 'InterMedium', fontSize: typography.sizes.sm, color: colors.text },
  taskPrescription: { fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textSecondary, marginTop: 1 },
  categoryTag: {
    fontFamily: 'InterSemiBold', fontSize: 9, color: colors.textMuted,
    letterSpacing: 1,
  },
  sessionNotes: {
    fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textSecondary,
    fontStyle: 'italic', paddingHorizontal: spacing.lg, paddingBottom: spacing.sm,
  },
  emptyText: { fontFamily: 'Inter', fontSize: typography.sizes.base, color: colors.textSecondary },

  // External sessions — logged
  externalLoggedCard: {
    marginHorizontal: spacing.lg, marginVertical: spacing.sm,
    padding: spacing.md, borderRadius: radius.md,
    backgroundColor: colors.goldMuted, borderWidth: 1,
    borderColor: 'rgba(201, 168, 76, 0.35)',
  },
  externalLoggedHeader: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
  },
  externalActivityName: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.sm, color: colors.gold,
    flex: 1,
  },
  externalLoggedBadge: {
    fontFamily: 'InterBold', fontSize: 9, color: colors.gold,
    backgroundColor: 'rgba(201, 168, 76, 0.2)', paddingHorizontal: spacing.sm,
    paddingVertical: 2, borderRadius: radius.sm, letterSpacing: 1,
    overflow: 'hidden',
  },
  externalLoggedDetails: {
    flexDirection: 'row', gap: spacing.md, marginTop: spacing.sm,
  },
  externalDetailChip: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
  },
  externalDetailText: {
    fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textSecondary,
  },
  externalLogNotes: {
    fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textSecondary,
    fontStyle: 'italic', marginTop: spacing.sm,
  },

  // External sessions — not logged
  externalUnloggedCard: {
    marginHorizontal: spacing.lg, marginVertical: spacing.sm,
    borderRadius: radius.md, borderWidth: 1, borderStyle: 'dashed',
    borderColor: 'rgba(201, 168, 76, 0.35)', overflow: 'hidden',
  },
  externalUnloggedContent: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: spacing.md,
  },
  externalUnloggedLeft: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
  },
  externalUnloggedText: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textMuted,
  },
  quickLogButton: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: colors.goldMuted, paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm, borderRadius: radius.sm,
  },
  quickLogButtonText: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.gold,
  },

  // Quick log form
  quickLogForm: {
    padding: spacing.lg, gap: spacing.md,
  },
  quickLogHeader: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  quickLogField: {
    gap: spacing.xs,
  },
  quickLogLabel: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textSecondary,
    letterSpacing: 1,
  },
  quickLogInput: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text,
    backgroundColor: colors.background, borderRadius: radius.sm,
    paddingHorizontal: spacing.md, paddingVertical: spacing.sm,
    borderWidth: 1, borderColor: colors.border,
  },
  quickLogNotesInput: {
    minHeight: 60, textAlignVertical: 'top',
  },
  rpeRow: {
    flexDirection: 'row', gap: 4, flexWrap: 'wrap',
  },
  rpeButton: {
    width: 28, height: 28, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border,
  },
  rpeButtonActive: {
    backgroundColor: colors.gold, borderColor: colors.gold,
  },
  rpeButtonText: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textMuted,
  },
  rpeButtonTextActive: {
    color: colors.textDark,
  },
  quickLogActions: {
    flexDirection: 'row', justifyContent: 'flex-end', gap: spacing.md,
    marginTop: spacing.sm,
  },
  quickLogCancel: {
    paddingHorizontal: spacing.lg, paddingVertical: spacing.sm,
  },
  quickLogCancelText: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.sm, color: colors.textMuted,
  },
  quickLogSave: {
    backgroundColor: colors.gold, paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm, borderRadius: radius.sm,
  },
  quickLogSaveText: {
    fontFamily: 'InterBold', fontSize: typography.sizes.sm, color: colors.textDark,
  },
});
