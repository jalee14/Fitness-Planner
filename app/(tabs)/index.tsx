import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import { colors, typography, spacing, radius } from '../../src/theme';
import { getCategoryColor } from '../../src/theme';
import { useStorage } from '../../src/services/storage/provider';
import { Card } from '../../src/components/ui/Card';
import { ProgressBar } from '../../src/components/ui/ProgressBar';
import { TrainingPlan, PlanDay, Phase } from '../../src/types/plan';
import { SessionLog } from '../../src/types/log';
import { Fire, CheckCircle, ArrowRight, Moon, Trash } from 'phosphor-react-native';

function getCurrentWeekNum(plan: TrainingPlan): number {
  const created = new Date(plan.createdAt);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  return Math.min(Math.max(diffWeeks + 1, 1), plan.durationWeeks);
}

function getTodayDayIndex(): number {
  const day = new Date().getDay();
  // Convert Sunday=0 to Mon=0..Sun=6
  return day === 0 ? 6 : day - 1;
}

function getCurrentPhase(plan: TrainingPlan, weekNum: number): Phase | undefined {
  return plan.phases.find((p) => weekNum >= p.startWeek && weekNum <= p.endWeek);
}

export default function PlanScreen() {
  const storage = useStorage();
  const router = useRouter();
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [completedSessionIds, setCompletedSessionIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const loadPlan = useCallback(async () => {
    const p = await storage.getPlan();
    setPlan(p);
    if (p) {
      const weekNum = getCurrentWeekNum(p);
      const logs = await storage.getSessionLogsForWeek(p.id, weekNum);
      setCompletedSessionIds(new Set(logs.map((l) => l.sessionId)));
    }
    setLoading(false);
  }, [storage]);

  useFocusEffect(
    useCallback(() => {
      loadPlan();
    }, [loadPlan])
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.loadingText}>Loading plan...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!plan) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.labelRow}>
            <Fire size={14} color={colors.accent} weight="fill" />
            <Text style={styles.label}>FORGE</Text>
          </View>
          <Text style={styles.title}>YOUR PLAN</Text>
          <Text style={styles.subtitle}>
            Complete onboarding to generate your personalized training plan.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const weekNum = getCurrentWeekNum(plan);
  const currentWeek = plan.weeks.find((w) => w.weekNum === weekNum);
  const todayIndex = getTodayDayIndex();
  const todaySession = currentWeek?.days.find((d) => d.dayIndex === todayIndex);
  const phase = getCurrentPhase(plan, weekNum);
  const completedWeeks = weekNum - 1;
  const progress = completedWeeks / plan.durationWeeks;

  // Find next training day if today is a rest day
  const nextTrainingDay = !todaySession
    ? currentWeek?.days.find((d) => d.dayIndex > todayIndex)
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.labelRow}>
            <Fire size={14} color={colors.accent} weight="fill" />
            <Text style={styles.label}>FORGE</Text>
          </View>
          <Text style={styles.title}>{plan.title.toUpperCase()}</Text>
        </View>

        {/* Plan Progress */}
        <View style={styles.section}>
          <View style={styles.progressMeta}>
            <Text style={styles.phaseLabel}>
              {phase ? phase.name : `Week ${weekNum}`}
            </Text>
            <Text style={styles.progressText}>
              Week {weekNum} of {plan.durationWeeks}
            </Text>
          </View>
          <ProgressBar progress={progress} color={colors.accent} height={4} />
        </View>

        {/* Today's Session */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {todaySession ? "TODAY'S SESSION" : 'UP NEXT'}
          </Text>

          {todaySession ? (
            <TodayCard
              day={todaySession}
              isCompleted={todaySession.sessions.some((s) => completedSessionIds.has(s.id))}
              onPress={() => {
                const session = todaySession.sessions[0];
                if (session) {
                  router.push(`/session/${session.id}` as any);
                }
              }}
            />
          ) : nextTrainingDay ? (
            <Card>
              <View style={styles.restDayHeader}>
                <Moon size={20} color={colors.textMuted} />
                <Text style={styles.restDayLabel}>Rest Day Today</Text>
              </View>
              <Text style={styles.restDayText}>
                Next session: {nextTrainingDay.dayLabel} — {nextTrainingDay.type}
              </Text>
            </Card>
          ) : (
            <Card>
              <View style={styles.restDayHeader}>
                <Moon size={20} color={colors.textMuted} />
                <Text style={styles.restDayLabel}>Rest Day</Text>
              </View>
              <Text style={styles.restDayText}>
                Recovery is part of the program. Enjoy it.
              </Text>
            </Card>
          )}
        </View>

        {/* Week Overview */}
        {currentWeek && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>THIS WEEK</Text>
            <View style={styles.weekRow}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((label, i) => {
                const day = currentWeek.days.find((d) => d.dayIndex === i);
                const isToday = i === todayIndex;
                const isDone = day?.sessions.some((s) => completedSessionIds.has(s.id)) ?? false;
                const isRest = !day;
                return (
                  <Pressable
                    key={label}
                    style={[
                      styles.weekDot,
                      day && styles.weekDotActive,
                      isRest && styles.weekDotRest,
                      isToday && styles.weekDotToday,
                      isDone && styles.weekDotDone,
                    ]}
                    onPress={() => {
                      if (day?.sessions[0]) {
                        router.push(`/session/${day.sessions[0].id}` as any);
                      }
                    }}
                  >
                    {isDone ? (
                      <CheckCircle size={16} weight="fill" color={colors.success} />
                    ) : isRest ? (
                      <Moon size={14} color={colors.textMuted} />
                    ) : (
                      <Text style={[
                        styles.weekDotLabel,
                        isToday && styles.weekDotLabelToday,
                      ]}>
                        {label.charAt(0)}
                      </Text>
                    )}
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}

        {/* Phase Info */}
        {phase && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CURRENT PHASE</Text>
            <Card>
              <Text style={styles.phaseName}>{phase.name}</Text>
              <Text style={styles.phaseFocus}>{phase.focus}</Text>
              <View style={styles.phaseGoals}>
                {phase.goals.map((goal, i) => (
                  <View key={i} style={styles.goalRow}>
                    <View style={styles.goalDot} />
                    <Text style={styles.goalText}>{goal}</Text>
                  </View>
                ))}
              </View>
            </Card>
          </View>
        )}

        {/* Plan Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PLAN OVERVIEW</Text>
          {plan.phases.map((p) => (
            <Pressable
              key={p.id}
              style={[
                styles.phaseRow,
                phase?.id === p.id && styles.phaseRowActive,
              ]}
            >
              <View style={styles.phaseWeeks}>
                <Text style={styles.phaseWeekText}>
                  W{p.startWeek}-{p.endWeek}
                </Text>
              </View>
              <View style={styles.phaseInfo}>
                <Text style={styles.phaseRowName}>{p.name}</Text>
                <Text style={styles.phaseRowFocus} numberOfLines={1}>{p.focus}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Dev-only reset button */}
        {__DEV__ && (
          <View style={styles.devSection}>
            <Pressable
              style={styles.devResetButton}
              onPress={async () => {
                const confirmed = Platform.OS === 'web'
                  ? window.confirm('Reset all data? This clears your profile, plan, and all logs.')
                  : await new Promise<boolean>((resolve) => {
                      Alert.alert(
                        'Reset All Data',
                        'This clears your profile, plan, and all logs. You will restart from onboarding.',
                        [
                          { text: 'Cancel', onPress: () => resolve(false) },
                          { text: 'Reset', style: 'destructive', onPress: () => resolve(true) },
                        ]
                      );
                    });
                if (confirmed) {
                  await storage.clearAll();
                  router.replace('/onboarding' as any);
                }
              }}
            >
              <View style={styles.devResetContent}>
                <Trash size={16} color={colors.error} />
                <Text style={styles.devResetText}>DEV: RESET ALL DATA</Text>
              </View>
            </Pressable>
          </View>
        )}

        <View style={{ height: spacing['3xl'] }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function TodayCard({ day, isCompleted, onPress }: { day: PlanDay; isCompleted: boolean; onPress: () => void }) {
  const session = day.sessions[0];
  if (!session) return null;

  return (
    <Pressable onPress={onPress}>
      <Card variant={isCompleted ? 'success' : 'active'}>
        <View style={styles.todayHeader}>
          <Text style={styles.todayDayLabel}>{day.dayLabel}</Text>
          {isCompleted ? (
            <View style={styles.completedBadgeRow}>
              <CheckCircle size={14} weight="fill" color={colors.success} />
              <Text style={styles.completedBadge}>COMPLETED</Text>
            </View>
          ) : (
            <Text style={styles.todayType}>{day.type}</Text>
          )}
        </View>

        <View style={styles.todayTasks}>
          {session.tasks.map((task) => (
            <View key={task.id} style={styles.taskRow}>
              <View style={[styles.categoryDot, { backgroundColor: isCompleted ? colors.success : getCategoryColor(task.category) }]} />
              <View style={styles.taskInfo}>
                <Text style={[styles.taskMovement, isCompleted && styles.taskMovementDone]}>{task.movement}</Text>
                <Text style={styles.taskPrescription}>{task.prescription}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.tapHint}>
          <View style={styles.tapHintRow}>
            <Text style={styles.tapHintText}>
              {isCompleted ? 'TAP TO VIEW SESSION' : 'TAP TO START SESSION'}
            </Text>
            <ArrowRight size={16} color={colors.accent} />
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { fontFamily: 'Inter', color: colors.textSecondary, fontSize: typography.sizes.base },
  scroll: { paddingBottom: spacing['3xl'] },
  header: { padding: spacing['2xl'], paddingTop: spacing['3xl'] },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, marginBottom: spacing.sm },
  label: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.accent, letterSpacing: 2, textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'BebasNeue', fontSize: typography.sizes['3xl'],
    color: colors.text, letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Inter', fontSize: typography.sizes.base,
    color: colors.textSecondary, marginTop: spacing.md, lineHeight: 22,
  },
  section: { paddingHorizontal: spacing['2xl'], marginBottom: spacing.xl },
  sectionTitle: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.textSecondary, letterSpacing: 2, textTransform: 'uppercase',
    marginBottom: spacing.md,
  },
  // Progress
  progressMeta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  phaseLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.sm, color: colors.accent },
  progressText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textSecondary },
  // Today card
  todayHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  todayDayLabel: { fontFamily: 'InterBold', fontSize: typography.sizes.lg, color: colors.text },
  todayType: { fontFamily: 'InterMedium', fontSize: typography.sizes.sm, color: colors.accent },
  completedBadgeRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  completedBadge: { fontFamily: 'InterBold', fontSize: typography.sizes.xs, color: colors.success, letterSpacing: 1 },
  taskMovementDone: { color: colors.textSecondary },
  todayTasks: { gap: spacing.md },
  taskRow: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md },
  categoryDot: { width: 8, height: 8, borderRadius: 4, marginTop: 6 },
  taskInfo: { flex: 1 },
  taskMovement: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.base, color: colors.text },
  taskPrescription: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textSecondary, marginTop: 2 },
  tapHint: { marginTop: spacing.lg, alignItems: 'center' },
  tapHintRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  tapHintText: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.accent, letterSpacing: 2 },
  // Rest day
  restDayHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs },
  restDayLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.lg, color: colors.text },
  restDayText: { fontFamily: 'Inter', fontSize: typography.sizes.base, color: colors.textSecondary, lineHeight: 22 },
  // Week dots
  weekRow: { flexDirection: 'row', justifyContent: 'space-between' },
  weekDot: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: colors.surface,
    justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colors.border,
  },
  weekDotActive: { backgroundColor: colors.surfaceElevated, borderColor: colors.borderLight },
  weekDotToday: { borderColor: colors.accent, borderWidth: 2 },
  weekDotRest: { backgroundColor: 'transparent', borderStyle: 'dashed' as any },
  weekDotDone: { backgroundColor: colors.successMuted, borderColor: colors.success },
  weekDotLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textSecondary },
  weekDotLabelToday: { color: colors.accent },
  // Phase info
  phaseName: { fontFamily: 'InterBold', fontSize: typography.sizes.lg, color: colors.text, marginBottom: spacing.xs },
  phaseFocus: { fontFamily: 'Inter', fontSize: typography.sizes.base, color: colors.textSecondary, lineHeight: 22, marginBottom: spacing.md },
  phaseGoals: { gap: spacing.sm },
  goalRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  goalDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.accent },
  goalText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text, flex: 1 },
  // Plan overview
  phaseRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.lg,
    paddingVertical: spacing.md, paddingHorizontal: spacing.lg,
    borderRadius: radius.md, marginBottom: spacing.sm,
    backgroundColor: colors.surface,
  },
  phaseRowActive: { borderWidth: 1, borderColor: colors.accentBorder, backgroundColor: colors.accentMuted },
  phaseWeeks: {
    width: 48, height: 32, borderRadius: radius.sm,
    backgroundColor: colors.surfaceElevated, justifyContent: 'center', alignItems: 'center',
  },
  phaseWeekText: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textSecondary },
  phaseInfo: { flex: 1 },
  phaseRowName: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.base, color: colors.text },
  phaseRowFocus: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textSecondary, marginTop: 2 },
  // Dev reset
  devSection: { paddingHorizontal: spacing['2xl'], marginTop: spacing['3xl'] },
  devResetButton: {
    paddingVertical: spacing.md, borderRadius: radius.md,
    borderWidth: 1, borderColor: colors.error, alignItems: 'center',
    backgroundColor: colors.errorMuted,
  },
  devResetContent: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  devResetText: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.error, letterSpacing: 2 },
});
