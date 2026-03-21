import { useEffect, useState, useCallback, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable,
  TextInput, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';

function showAlert(title: string, message: string, onConfirm: () => void) {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
    onConfirm();
  } else {
    Alert.alert(title, message, [{ text: 'Done', onPress: onConfirm }]);
  }
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors, typography, spacing, radius, getCategoryColor, getCategoryLabel } from '../../src/theme';
import { useStorage } from '../../src/services/storage/provider';
import { Card } from '../../src/components/ui/Card';
import { Button } from '../../src/components/ui/Button';
import { TrainingPlan, PlannedSession, SessionTask, PlanDay } from '../../src/types/plan';
import { SessionLog, TaskLog, SetLog } from '../../src/types/log';
import { getCuesForMovement, MovementCueData } from '../../src/services/coachingCueLibrary';
import {
  ArrowLeft, CaretDown, CaretUp, CheckCircle, XCircle,
  Barbell, Wind, Info, Warning, ArrowsDownUp,
} from 'phosphor-react-native';

function parseSetsFromPrescription(rx: string): number {
  const match = rx.match(/(\d+)\s*[x×]/i);
  return match ? parseInt(match[1], 10) : 3;
}

function parseRepsFromPrescription(rx: string): number {
  const match = rx.match(/[x×]\s*(\d+)/i);
  return match ? parseInt(match[1], 10) : 10;
}

function isLoadedMovement(task: SessionTask): boolean {
  return ['strength', 'skill'].includes(task.category);
}

function isConditioningMovement(task: SessionTask): boolean {
  return task.category === 'conditioning';
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function SessionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const storage = useStorage();
  const [plan, setPlan] = useState<TrainingPlan | null>(null);
  const [session, setSession] = useState<PlannedSession | null>(null);
  const [dayInfo, setDayInfo] = useState<PlanDay | null>(null);
  const [weekNum, setWeekNum] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Logging state
  const [taskLogs, setTaskLogs] = useState<Map<string, TaskLog>>(new Map());
  const [energyLevel, setEnergyLevel] = useState<number | null>(null);
  const [rpe, setRpe] = useState<number | null>(null);
  const [sessionNotes, setSessionNotes] = useState('');
  const [isLogging, setIsLogging] = useState(false);
  const [saving, setSaving] = useState(false);
  const startTime = useRef<string | null>(null);

  const loadSession = useCallback(async () => {
    const p = await storage.getPlan();
    if (!p || !id) { setLoading(false); return; }
    setPlan(p);

    for (const week of p.weeks) {
      for (const day of week.days) {
        for (const sess of day.sessions) {
          if (sess.id === id) {
            setSession(sess);
            setDayInfo(day);
            setWeekNum(week.weekNum);

            // Initialize task logs for each task
            const logs = new Map<string, TaskLog>();
            for (const task of sess.tasks) {
              const numSets = parseSetsFromPrescription(task.prescription);
              const numReps = parseRepsFromPrescription(task.prescription);
              logs.set(task.id, {
                taskId: task.id,
                status: 'completed',
                sets: Array.from({ length: numSets }, () => ({
                  reps: numReps,
                  weight: null,
                })),
                timeSeconds: null,
                distanceMeters: null,
                rounds: null,
                extraReps: null,
                swappedMovement: null,
                note: '',
              });
            }
            setTaskLogs(logs);
            setLoading(false);
            return;
          }
        }
      }
    }
    setLoading(false);
  }, [storage, id]);

  useEffect(() => { loadSession(); }, [loadSession]);

  const startLogging = () => {
    setIsLogging(true);
    startTime.current = new Date().toISOString();
  };

  const toggleTaskStatus = (taskId: string) => {
    setTaskLogs((prev) => {
      const next = new Map(prev);
      const log = next.get(taskId);
      if (log) {
        const statuses: TaskLog['status'][] = ['completed', 'skipped'];
        const idx = statuses.indexOf(log.status);
        next.set(taskId, { ...log, status: statuses[(idx + 1) % statuses.length] });
      }
      return next;
    });
  };

  const updateSetWeight = (taskId: string, setIdx: number, weight: string) => {
    setTaskLogs((prev) => {
      const next = new Map(prev);
      const log = next.get(taskId);
      if (log) {
        const sets = [...log.sets];
        sets[setIdx] = { ...sets[setIdx], weight: weight ? parseFloat(weight) : null };
        next.set(taskId, { ...log, sets });
      }
      return next;
    });
  };

  const updateSetReps = (taskId: string, setIdx: number, reps: string) => {
    setTaskLogs((prev) => {
      const next = new Map(prev);
      const log = next.get(taskId);
      if (log) {
        const sets = [...log.sets];
        sets[setIdx] = { ...sets[setIdx], reps: reps ? parseInt(reps, 10) : 0 };
        next.set(taskId, { ...log, sets });
      }
      return next;
    });
  };

  const saveSession = async () => {
    if (!plan || !session || !id) return;
    setSaving(true);

    const completedTasks = Array.from(taskLogs.values())
      .filter((t) => t.status === 'completed')
      .map((t) => t.taskId);

    const log: SessionLog = {
      id: generateId(),
      planId: plan.id,
      weekNum,
      dayIndex: dayInfo?.dayIndex ?? 0,
      sessionId: id,
      taskLogs: Array.from(taskLogs.values()),
      completedTasks,
      rpe,
      energyLevel,
      notes: sessionNotes,
      startedAt: startTime.current || new Date().toISOString(),
      completedAt: new Date().toISOString(),
    };

    await storage.saveSessionLog(log);
    setSaving(false);
    showAlert('Session Logged', 'Nice work. Your session has been saved.', () => {
      router.back();
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.loadingText}>Loading session...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!session) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft size={24} color={colors.accent} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <Text style={styles.title}>SESSION NOT FOUND</Text>
        </View>
      </SafeAreaView>
    );
  }

  const taskGroups: { category: string; tasks: SessionTask[] }[] = [];
  const categoryOrder = ['warmup', 'skill', 'strength', 'conditioning', 'cooldown', 'general'];
  for (const cat of categoryOrder) {
    const tasks = session.tasks.filter((t) => t.category === cat);
    if (tasks.length > 0) taskGroups.push({ category: cat, tasks });
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <ArrowLeft size={24} color={colors.accent} />
              <Text style={styles.backText}>Back</Text>
            </Pressable>
            <View style={styles.sessionMeta}>
              {dayInfo && <Text style={styles.dayLabel}>{dayInfo.dayLabel} — Week {weekNum}</Text>}
              {dayInfo && <Text style={styles.sessionType}>{dayInfo.type}</Text>}
            </View>
            <Text style={styles.title}>{session.type.toUpperCase()}</Text>
          </View>

          {/* Energy level (shown when logging) */}
          {isLogging && energyLevel === null && (
            <View style={styles.section}>
              <Card>
                <Text style={styles.promptLabel}>HOW ARE YOU FEELING?</Text>
                <Text style={styles.promptSubtext}>Rate your energy before starting</Text>
                <View style={styles.ratingRow}>
                  {[1, 2, 3, 4, 5].map((level) => (
                    <Pressable
                      key={level}
                      style={styles.ratingButton}
                      onPress={() => setEnergyLevel(level)}
                    >
                      <Text style={styles.ratingNumber}>{level}</Text>
                      <Text style={styles.ratingLabel}>
                        {['Dead', 'Low', 'OK', 'Good', 'Great'][level - 1]}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </Card>
            </View>
          )}

          {/* Task Groups */}
          {taskGroups.map((group) => (
            <View key={group.category} style={styles.section}>
              <View style={styles.categoryHeader}>
                <View style={[styles.categoryLine, { backgroundColor: getCategoryColor(group.category) }]} />
                <Text style={[styles.categoryLabel, { color: getCategoryColor(group.category) }]}>
                  {getCategoryLabel(group.category)}
                </Text>
                <View style={[styles.categoryLine, { backgroundColor: getCategoryColor(group.category) }]} />
              </View>

              {group.tasks.map((task) => (
                <ExerciseCard
                  key={task.id}
                  task={task}
                  taskLog={taskLogs.get(task.id)}
                  isLogging={isLogging}
                  onToggleStatus={() => toggleTaskStatus(task.id)}
                  onUpdateWeight={(si, w) => updateSetWeight(task.id, si, w)}
                  onUpdateReps={(si, r) => updateSetReps(task.id, si, r)}
                />
              ))}
            </View>
          ))}

          {/* RPE + Notes (shown when logging, after exercises) */}
          {isLogging && (
            <View style={styles.section}>
              <Card>
                <Text style={styles.promptLabel}>SESSION RPE</Text>
                <Text style={styles.promptSubtext}>How hard was this session overall?</Text>
                <View style={styles.rpeRow}>
                  {[5, 6, 7, 8, 9, 10].map((val) => (
                    <Pressable
                      key={val}
                      style={[styles.rpeButton, rpe === val && styles.rpeButtonActive]}
                      onPress={() => setRpe(val)}
                    >
                      <Text style={[styles.rpeNumber, rpe === val && styles.rpeNumberActive]}>{val}</Text>
                    </Pressable>
                  ))}
                </View>
                <View style={styles.rpeLabels}>
                  <Text style={styles.rpeLabelText}>Light</Text>
                  <Text style={styles.rpeLabelText}>Max</Text>
                </View>
              </Card>

              <Card style={{ marginTop: spacing.md }}>
                <Text style={styles.promptLabel}>NOTES</Text>
                <TextInput
                  style={styles.notesInput}
                  placeholder="Anything worth remembering..."
                  placeholderTextColor={colors.textMuted}
                  value={sessionNotes}
                  onChangeText={setSessionNotes}
                  multiline
                  numberOfLines={3}
                />
              </Card>
            </View>
          )}

          {/* Action button */}
          <View style={styles.actionSection}>
            {!isLogging ? (
              <Button title="START LOGGING" onPress={startLogging} variant="primary" />
            ) : (
              <Button
                title="SAVE SESSION"
                onPress={saveSession}
                variant="primary"
                loading={saving}
              />
            )}
          </View>

          <View style={{ height: spacing['5xl'] }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Exercise Card with logging
// ---------------------------------------------------------------------------

function ExerciseCard({
  task, taskLog, isLogging, onToggleStatus, onUpdateWeight, onUpdateReps,
}: {
  task: SessionTask;
  taskLog: TaskLog | undefined;
  isLogging: boolean;
  onToggleStatus: () => void;
  onUpdateWeight: (setIdx: number, weight: string) => void;
  onUpdateReps: (setIdx: number, reps: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isSkipped = taskLog?.status === 'skipped';
  const isLoaded = isLoadedMovement(task);

  // Look up curated cues from library, fall back to AI-provided cues on the task
  const libEntry = getCuesForMovement(task.movement);

  const cues = task.coachingCues && task.coachingCues.length > 0
    ? task.coachingCues
    : libEntry?.cues || [];

  const faults = task.commonFaults && task.commonFaults.length > 0
    ? task.commonFaults.map((f) => typeof f === 'string' ? f : f)
    : libEntry?.commonFaults.map((f) => `${f.fault} — ${f.fix}`) || [];

  const scaling = task.scaling
    || (libEntry ? `Easier: ${libEntry.scaling.easier.map((s) => s.movement).join(', ')}. Harder: ${libEntry.scaling.harder.map((s) => s.movement).join(', ')}.` : null);

  const setup = libEntry?.setup || null;
  const breathingCue = libEntry?.breathingCue || null;

  const hasCues = cues.length > 0 || faults.length > 0 || scaling || task.why || setup;

  return (
    <Card style={isSkipped ? { ...styles.exerciseCard, ...styles.exerciseSkipped } : styles.exerciseCard}>
      {/* Header row with checkbox */}
      <View style={styles.exerciseHeader}>
        {isLogging && (
          <Pressable onPress={onToggleStatus} style={styles.checkbox}>
            {!isSkipped ? (
              <CheckCircle size={24} weight="fill" color={colors.accent} />
            ) : (
              <View style={styles.checkboxHollow} />
            )}
          </Pressable>
        )}
        <Pressable onPress={() => hasCues && setExpanded(!expanded)} style={{ flex: 1 }}>
          <Text style={[styles.movementName, isSkipped && styles.textSkipped]}>
            {task.movement}
          </Text>
          <Text style={[styles.prescription, isSkipped && styles.textSkipped]}>
            {task.prescription}
          </Text>
        </Pressable>
        {hasCues && (
          <Pressable onPress={() => setExpanded(!expanded)} style={styles.expandButton}>
            {expanded ? (
              <CaretUp size={18} color={colors.textSecondary} />
            ) : (
              <CaretDown size={18} color={colors.textSecondary} />
            )}
          </Pressable>
        )}
      </View>

      {/* Set-by-set logging (for loaded movements when logging) */}
      {isLogging && !isSkipped && isLoaded && taskLog && (
        <View style={styles.setsSection}>
          <View style={styles.setsHeader}>
            <Text style={styles.setHeaderLabel}>SET</Text>
            <Text style={styles.setHeaderLabel}>WEIGHT</Text>
            <Text style={styles.setHeaderLabel}>REPS</Text>
          </View>
          {taskLog.sets.map((set, idx) => (
            <View key={idx} style={styles.setRow}>
              <Text style={styles.setNumber}>{idx + 1}</Text>
              <TextInput
                style={styles.setInput}
                placeholder="lbs"
                placeholderTextColor={colors.textMuted}
                keyboardType="numeric"
                value={set.weight ? String(set.weight) : ''}
                onChangeText={(v) => onUpdateWeight(idx, v)}
              />
              <TextInput
                style={styles.setInput}
                placeholder={String(set.reps)}
                placeholderTextColor={colors.textMuted}
                keyboardType="numeric"
                value={String(set.reps)}
                onChangeText={(v) => onUpdateReps(idx, v)}
              />
            </View>
          ))}
        </View>
      )}

      {/* Coaching detail (expanded) */}
      {expanded && (
        <View style={styles.coachingDetail}>
          {/* Why this exercise */}
          {task.why && (
            <View style={styles.detailSection}>
              <View style={styles.detailLabelRow}>
                <Info size={16} color={colors.textSecondary} />
                <Text style={styles.detailLabel}>WHY THIS EXERCISE</Text>
              </View>
              <Text style={styles.detailText}>{task.why}</Text>
            </View>
          )}

          {/* Setup (from library) */}
          {setup && (
            <View style={styles.detailSection}>
              <View style={styles.detailLabelRow}>
                <Barbell size={16} color={colors.textSecondary} />
                <Text style={styles.detailLabel}>SETUP</Text>
              </View>
              <Text style={styles.detailText}>{setup}</Text>
            </View>
          )}

          {/* Breathing (from library) */}
          {breathingCue && (
            <View style={styles.detailSection}>
              <View style={styles.detailLabelRow}>
                <Wind size={16} color={colors.textSecondary} />
                <Text style={styles.detailLabel}>BREATHING</Text>
              </View>
              <Text style={styles.detailText}>{breathingCue}</Text>
            </View>
          )}

          {/* Coaching Cues */}
          {cues.length > 0 && (
            <View style={styles.detailSection}>
              <Text style={styles.detailLabelStandalone}>COACHING CUES</Text>
              {cues.map((cue, i) => (
                <View key={i} style={styles.cueRow}>
                  <Text style={styles.cueNumber}>{i + 1}</Text>
                  <Text style={styles.cueText}>{cue}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Common Faults */}
          {faults.length > 0 && (
            <View style={styles.detailSection}>
              <Text style={styles.detailLabelStandalone}>WATCH OUT FOR</Text>
              {faults.map((fault, i) => (
                <View key={i} style={styles.faultRow}>
                  <Warning size={16} color={colors.gold} weight="fill" />
                  <Text style={styles.faultText}>{typeof fault === 'string' ? fault : fault}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Scaling */}
          {scaling && (
            <View style={styles.detailSection}>
              <View style={styles.detailLabelRow}>
                <ArrowsDownUp size={16} color={colors.textSecondary} />
                <Text style={styles.detailLabel}>SCALING</Text>
              </View>
              <Text style={styles.detailText}>{scaling}</Text>
            </View>
          )}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { fontFamily: 'Inter', color: colors.textSecondary, fontSize: typography.sizes.base },
  scroll: { paddingBottom: spacing['3xl'] },
  header: { padding: spacing['2xl'], paddingTop: spacing.lg },
  backButton: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    minHeight: 48, marginBottom: spacing.md,
  },
  backText: { fontFamily: 'InterMedium', fontSize: typography.sizes.base, color: colors.accent },
  sessionMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  dayLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.sm, color: colors.textSecondary },
  sessionType: { fontFamily: 'InterMedium', fontSize: typography.sizes.sm, color: colors.accent },
  title: { fontFamily: 'BebasNeue', fontSize: typography.sizes['2xl'], color: colors.text, letterSpacing: 2 },
  section: { paddingHorizontal: spacing['2xl'], marginBottom: spacing.lg },
  actionSection: { paddingHorizontal: spacing['2xl'], marginTop: spacing.md },
  // Category header
  categoryHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md, marginTop: spacing.sm },
  categoryLine: { flex: 1, height: 1 },
  categoryLabel: { fontFamily: 'InterBold', fontSize: typography.sizes.xs, letterSpacing: 2 },
  // Exercise card
  exerciseCard: { marginBottom: spacing.sm },
  exerciseSkipped: { opacity: 0.4 },
  exerciseHeader: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md },
  movementName: { fontFamily: 'InterBold', fontSize: typography.sizes.lg, color: colors.text },
  textSkipped: { textDecorationLine: 'line-through', color: colors.textMuted },
  prescription: { fontFamily: 'InterMedium', fontSize: typography.sizes.base, color: colors.accent, marginTop: spacing.xs },
  expandButton: { minHeight: 48, minWidth: 48, justifyContent: 'center', alignItems: 'center' },
  // Checkbox
  checkbox: { minHeight: 48, minWidth: 48, justifyContent: 'center', alignItems: 'center', paddingTop: 2 },
  checkboxHollow: {
    width: 24, height: 24, borderRadius: radius.sm, borderWidth: 2,
    borderColor: colors.border,
  },
  // Sets logging
  setsSection: { marginTop: spacing.md, paddingTop: spacing.md, borderTopWidth: 1, borderTopColor: colors.border },
  setsHeader: { flexDirection: 'row', marginBottom: spacing.sm, paddingHorizontal: spacing.xs },
  setHeaderLabel: { fontFamily: 'InterSemiBold', fontSize: 9, color: colors.textMuted, letterSpacing: 1, flex: 1, textAlign: 'center' },
  setRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.sm },
  setNumber: { fontFamily: 'InterBold', fontSize: typography.sizes.sm, color: colors.textSecondary, width: 24, textAlign: 'center' },
  setInput: {
    flex: 1, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
    borderRadius: radius.sm, padding: spacing.sm, paddingVertical: spacing.sm,
    fontFamily: 'InterMedium', fontSize: typography.sizes.base, color: colors.text, textAlign: 'center',
  },
  // Energy level
  promptLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textSecondary, letterSpacing: 2, marginBottom: spacing.xs },
  promptSubtext: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textMuted, marginBottom: spacing.lg },
  ratingRow: { flexDirection: 'row', justifyContent: 'space-between' },
  ratingButton: {
    alignItems: 'center', paddingVertical: spacing.md, paddingHorizontal: spacing.md,
    borderRadius: radius.md, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
    minHeight: 48,
  },
  ratingNumber: { fontFamily: 'InterBold', fontSize: typography.sizes.lg, color: colors.text },
  ratingLabel: { fontFamily: 'Inter', fontSize: 9, color: colors.textSecondary, marginTop: 2 },
  // RPE
  rpeRow: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm },
  rpeButton: {
    flex: 1, alignItems: 'center', paddingVertical: spacing.md,
    borderRadius: radius.md, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
    minHeight: 48, justifyContent: 'center',
  },
  rpeButtonActive: { backgroundColor: colors.accentMuted, borderColor: colors.accent },
  rpeNumber: { fontFamily: 'InterBold', fontSize: typography.sizes.lg, color: colors.textSecondary },
  rpeNumberActive: { color: colors.accent },
  rpeLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.xs },
  rpeLabelText: { fontFamily: 'Inter', fontSize: 9, color: colors.textMuted },
  // Notes
  notesInput: {
    fontFamily: 'Inter', fontSize: typography.sizes.base, color: colors.text,
    minHeight: 60, textAlignVertical: 'top', lineHeight: 22,
  },
  // Coaching detail
  coachingDetail: { marginTop: spacing.lg, borderTopWidth: 1, borderTopColor: colors.border, paddingTop: spacing.lg },
  detailSection: { marginBottom: spacing.lg },
  detailLabelRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.sm },
  detailLabel: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textSecondary, letterSpacing: 2 },
  detailLabelStandalone: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs, color: colors.textSecondary, letterSpacing: 2, marginBottom: spacing.sm },
  detailText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text, lineHeight: 20 },
  cueRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.sm },
  cueNumber: { fontFamily: 'InterBold', fontSize: typography.sizes.sm, color: colors.accent, width: 20, textAlign: 'center' },
  cueText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text, flex: 1, lineHeight: 20 },
  faultRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm, alignItems: 'flex-start' },
  faultText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text, flex: 1, lineHeight: 20 },
});
