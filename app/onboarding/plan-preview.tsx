import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, typography, spacing, radius } from '../../src/theme';
import { Button, Card } from '../../src/components/ui';
import { ProgressBar } from '../../src/components/ui';
import { useOnboarding } from '../../src/hooks/useOnboarding';

export default function PlanPreviewScreen() {
  const router = useRouter();
  const { state, pushBackOnPreview, generatePlan, loading, error } = useOnboarding();
  const preview = state.planPreview;
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  if (!preview) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.loadingText}>Building your plan preview...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handlePushBack = async () => {
    if (!feedback.trim()) return;
    await pushBackOnPreview(feedback.trim());
    setFeedback('');
    setShowFeedback(false);
  };

  const handleApprove = () => {
    // Navigate to generating screen immediately — it triggers the plan build
    router.replace('/onboarding/generating');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[styles.flex, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.scrollContent}
        overScrollMode="never"
        bounces={false}
      >
        <View style={styles.header}>
          <Text style={styles.label}>PLAN PREVIEW</Text>
          <Text style={styles.title}>{preview.title.toUpperCase()}</Text>
        </View>

        {/* Summary */}
        <Card>
          <Text style={styles.cardBody}>{preview.summary}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>{preview.durationWeeks}</Text>
              <Text style={styles.metaLabel}>weeks</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>{preview.daysPerWeek}</Text>
              <Text style={styles.metaLabel}>days/week</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaValue}>{preview.planRelationship}</Text>
              <Text style={styles.metaLabel}>plan type</Text>
            </View>
          </View>
        </Card>

        {/* Why This Plan */}
        <Text style={styles.sectionTitle}>WHY THIS PLAN</Text>
        <Card>
          <Text style={styles.cardBody}>{preview.whyThisPlan}</Text>
        </Card>

        {/* Rationale */}
        {preview.rationale.map((r, i) => (
          <Card key={i}>
            <Text style={styles.rationaleTitle}>{r.topic}</Text>
            <Text style={styles.cardBody}>{r.explanation}</Text>
          </Card>
        ))}

        {/* Phases */}
        <Text style={styles.sectionTitle}>PHASE BREAKDOWN</Text>
        {preview.phases.map((phase, i) => (
          <Card key={i} variant={i === 0 ? 'active' : 'default'}>
            <View style={styles.phaseHeader}>
              <Text style={styles.phaseName}>{phase.name}</Text>
              <Text style={styles.phaseWeeks}>Weeks {phase.weeks}</Text>
            </View>
            <Text style={styles.phaseFocus}>{phase.focus}</Text>
            <Text style={styles.phaseRationale}>{phase.rationale}</Text>
          </Card>
        ))}

        {/* Pushback */}
        {showFeedback ? (
          <View style={styles.feedbackContainer}>
            <Text style={styles.sectionTitle}>WHAT WOULD YOU CHANGE?</Text>
            <TextInput
              style={styles.feedbackInput}
              value={feedback}
              onChangeText={setFeedback}
              placeholder='e.g., "Can we do 4 days instead of 5?" or "I want more running volume"'
              placeholderTextColor={colors.textMuted}
              multiline
              textAlignVertical="top"
              autoFocus
            />
            <View style={styles.feedbackActions}>
              <Button
                title="CANCEL"
                variant="ghost"
                onPress={() => {
                  setShowFeedback(false);
                  setFeedback('');
                }}
              />
              <Button
                title={loading ? 'ADJUSTING...' : 'ADJUST PLAN'}
                variant="secondary"
                onPress={handlePushBack}
                disabled={!feedback.trim() || loading}
                loading={loading}
              />
            </View>
          </View>
        ) : null}

        {error && <Text style={styles.error}>{error}</Text>}

        <View style={styles.footer}>
          {!showFeedback && (
            <Button
              title="I'D CHANGE SOMETHING"
              variant="secondary"
              onPress={() => setShowFeedback(true)}
              style={styles.pushbackButton}
            />
          )}
          <Button
            title={loading ? 'GENERATING...' : 'START THIS PLAN'}
            onPress={handleApprove}
            disabled={loading || showFeedback}
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing['3xl'],
  },
  loadingText: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.textSecondary,
  },
  scrollContent: {
    padding: spacing['2xl'],
    paddingBottom: spacing['5xl'],
  },
  header: {
    marginBottom: spacing.xl,
  },
  label: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.xs,
    color: colors.accent,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: 'BebasNeue',
    fontSize: typography.sizes['2xl'],
    color: colors.text,
    letterSpacing: 2,
    lineHeight: 30,
  },
  sectionTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  cardBody: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.text,
    lineHeight: 22,
  },
  metaRow: {
    flexDirection: 'row',
    marginTop: spacing.lg,
    gap: spacing.xl,
  },
  metaItem: {
    alignItems: 'center',
  },
  metaValue: {
    fontFamily: 'BebasNeue',
    fontSize: typography.sizes.xl,
    color: colors.accent,
  },
  metaLabel: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.xs,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  rationaleTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.base,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  phaseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  phaseName: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.base,
    color: colors.text,
  },
  phaseWeeks: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.accent,
  },
  phaseFocus: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  phaseRationale: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  feedbackContainer: {
    marginTop: spacing.xl,
  },
  feedbackInput: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.text,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    minHeight: 80,
    lineHeight: 22,
  },
  feedbackActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.md,
    marginTop: spacing.md,
  },
  error: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.error,
    marginTop: spacing.md,
  },
  footer: {
    paddingTop: spacing['2xl'],
  },
  pushbackButton: {
    marginBottom: spacing.md,
  },
});
