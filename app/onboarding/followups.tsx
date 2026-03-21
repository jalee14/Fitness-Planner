import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, typography, spacing, radius } from '../../src/theme';
import { Button, Card } from '../../src/components/ui';
import { useOnboarding } from '../../src/hooks/useOnboarding';

export default function FollowUpsScreen() {
  const router = useRouter();
  const { state, submitFollowUps, loading, error } = useOnboarding();
  const questions = state.followUpQuestions || [];
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const allAnswered = questions.every(
    (_, i) => (answers[i] || '').trim().length > 0
  );
  const canSubmit = allAnswered && !loading;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    const formatted = questions.map((question, i) => ({
      question,
      answer: answers[i].trim(),
    }));
    await submitFollowUps(formatted);
    router.push('/onboarding/profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.label}>STEP 2 OF 3</Text>
            <Text style={styles.title}>A FEW MORE{'\n'}DETAILS</Text>
            <Text style={styles.subtitle}>
              These questions are based on what you shared. The more specific you
              are, the better your plan will be.
            </Text>
          </View>

          {questions.map((question, index) => (
            <Card key={index} style={styles.questionCard}>
              <Text style={styles.questionNumber}>
                {index + 1} of {questions.length}
              </Text>
              <Text style={styles.questionText}>{question}</Text>
              <TextInput
                style={styles.answerInput}
                value={answers[index] || ''}
                onChangeText={(text) =>
                  setAnswers((prev) => ({ ...prev, [index]: text }))
                }
                placeholder="Your answer..."
                placeholderTextColor={colors.textMuted}
                multiline
                textAlignVertical="top"
              />
            </Card>
          ))}

          {questions.length === 0 && !loading && (
            <Card style={styles.questionCard}>
              <Text style={styles.questionText}>
                Loading follow-up questions...
              </Text>
            </Card>
          )}

          {error && <Text style={styles.error}>{error}</Text>}

          <View style={styles.footer}>
            <Button
              title={loading ? 'BUILDING PROFILE...' : 'CONTINUE'}
              onPress={handleSubmit}
              disabled={!canSubmit}
              loading={loading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  scrollContent: {
    flexGrow: 1,
    padding: spacing['2xl'],
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
    fontSize: typography.sizes['3xl'],
    color: colors.text,
    letterSpacing: 2,
    lineHeight: 38,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.textSecondary,
    marginTop: spacing.md,
    lineHeight: 22,
  },
  questionCard: {
    marginBottom: spacing.lg,
  },
  questionNumber: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.xs,
    color: colors.accent,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  questionText: {
    fontFamily: 'InterMedium',
    fontSize: typography.sizes.base,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  answerInput: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.text,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.lg,
    minHeight: 80,
    lineHeight: 22,
  },
  error: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.error,
    marginBottom: spacing.md,
  },
  footer: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
