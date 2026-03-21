import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, typography, spacing } from '../../src/theme';
import { useOnboarding } from '../../src/hooks/useOnboarding';
import { ProgressBar } from '../../src/components/ui/ProgressBar';
import { CheckCircle, CircleDashed, Fire } from 'phosphor-react-native';

const STEPS = [
  { label: 'Analyzing your profile', duration: 8 },
  { label: 'Designing plan structure', duration: 15 },
  { label: 'Programming Week 1', duration: 20 },
  { label: 'Building weekly progressions', duration: 45 },
  { label: 'Adding coaching detail', duration: 15 },
  { label: 'Validating the plan', duration: 5 },
];

const TOTAL_ESTIMATED = STEPS.reduce((s, step) => s + step.duration, 0);

const TIPS = [
  'Every exercise in your plan includes coaching cues and form guidance.',
  'Your plan is built around YOUR goals — not a template.',
  'Progressive overload is built into every week.',
  'Rest and recovery are programmed features, not afterthoughts.',
  'The AI analyzed your profile to select the right periodization model.',
];

export default function GeneratingScreen() {
  const router = useRouter();
  const { state, generatePlan } = useOnboarding();
  const started = useRef(false);
  const [elapsed, setElapsed] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  // Trigger plan generation on mount
  useEffect(() => {
    if (!started.current && state.phase !== 'complete') {
      started.current = true;
      generatePlan();
    }
  }, []);

  // Timer for progress display
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Rotate tips every 12 seconds
  useEffect(() => {
    const tipTimer = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % TIPS.length);
    }, 12000);
    return () => clearInterval(tipTimer);
  }, []);

  // Navigate to tabs when complete
  useEffect(() => {
    if (state.phase === 'complete') {
      router.replace('/(tabs)');
    }
  }, [state.phase, router]);

  // Calculate which step we're on based on elapsed time
  let currentStepIndex = 0;
  let accumulated = 0;
  for (let i = 0; i < STEPS.length; i++) {
    accumulated += STEPS[i].duration;
    if (elapsed < accumulated) {
      currentStepIndex = i;
      break;
    }
    if (i === STEPS.length - 1) currentStepIndex = STEPS.length - 1;
  }

  const progress = Math.min(elapsed / TOTAL_ESTIMATED, 0.95);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator color={colors.accent} size="large" />

        <Text style={styles.title}>BUILDING{'\n'}YOUR PLAN</Text>

        <Text style={styles.subtitle}>
          Designing your personalized training program.{'\n'}
          This takes 2-4 minutes — we're being thorough.
        </Text>

        {/* Progress bar */}
        <View style={styles.progressSection}>
          <ProgressBar progress={progress} color={colors.accent} height={4} />
          <Text style={styles.timer}>
            {minutes}:{seconds.toString().padStart(2, '0')}
          </Text>
        </View>

        {/* Step indicators */}
        <View style={styles.steps}>
          {STEPS.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              {i < currentStepIndex ? (
                <CheckCircle size={18} color={colors.success} weight="fill" />
              ) : i === currentStepIndex ? (
                <Fire size={18} color={colors.accent} weight="fill" />
              ) : (
                <CircleDashed size={18} color={colors.textMuted} />
              )}
              <Text
                style={[
                  styles.stepLabel,
                  i < currentStepIndex && styles.stepDone,
                  i === currentStepIndex && styles.stepActive,
                  i > currentStepIndex && styles.stepPending,
                ]}
              >
                {step.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Rotating tips */}
        <View style={styles.tipSection}>
          <Text style={styles.tipText}>{TIPS[tipIndex]}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    padding: spacing['3xl'],
  },
  title: {
    fontFamily: 'BebasNeue', fontSize: typography.sizes['3xl'],
    color: colors.text, letterSpacing: 2, textAlign: 'center',
    marginTop: spacing['2xl'], lineHeight: 38,
  },
  subtitle: {
    fontFamily: 'Inter', fontSize: typography.sizes.base,
    color: colors.textSecondary, textAlign: 'center',
    marginTop: spacing.lg, lineHeight: 22,
  },
  // Progress
  progressSection: {
    width: '100%', marginTop: spacing['2xl'],
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
  },
  timer: {
    fontFamily: 'InterMedium', fontSize: typography.sizes.sm,
    color: colors.textSecondary, width: 40,
  },
  // Steps
  steps: {
    marginTop: spacing['2xl'], alignSelf: 'flex-start',
    width: '100%', gap: spacing.sm,
  },
  stepRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  stepLabel: { fontFamily: 'Inter', fontSize: typography.sizes.sm },
  stepDone: { color: colors.success },
  stepActive: { color: colors.accent, fontFamily: 'InterSemiBold' },
  stepPending: { color: colors.textMuted },
  // Tips
  tipSection: {
    marginTop: spacing['3xl'], paddingHorizontal: spacing.lg,
    minHeight: 44,
  },
  tipText: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm,
    color: colors.textMuted, textAlign: 'center',
    fontStyle: 'italic', lineHeight: 20,
  },
});
