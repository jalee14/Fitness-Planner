import { useState, useRef } from 'react';
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
import { Button } from '../../src/components/ui';
import { useOnboarding } from '../../src/hooks/useOnboarding';

const PLACEHOLDER =
  'Tell me about your training — where you are right now, what you\'ve tried, and what you\'re trying to accomplish. The more specific, the better the plan.\n\nFor example: "I\'ve been doing CrossFit 5 days a week for 3 years. My lifts are decent (350 bench, 375 squat, 405 deadlift) but my engine is lacking. I want to do Murph with a 20 lb vest on Memorial Day in under 60 minutes..."';

const MIN_LENGTH = 50;

export default function IntakeScreen() {
  const [text, setText] = useState('');
  const router = useRouter();
  const { submitIntake, loading, error } = useOnboarding();
  const inputRef = useRef<TextInput>(null);

  const canSubmit = text.trim().length >= MIN_LENGTH && !loading;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    await submitIntake(text.trim());
    router.push('/onboarding/followups');
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
            <Text style={styles.label}>STEP 1 OF 3</Text>
            <Text style={styles.title}>TELL US{'\n'}ABOUT YOU</Text>
            <Text style={styles.subtitle}>
              The more detail you share, the better your plan will be. Don't hold
              back — training history, goals, schedule, equipment, past programs,
              what worked and what didn't.
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              ref={inputRef}
              style={styles.textInput}
              value={text}
              onChangeText={setText}
              placeholder={PLACEHOLDER}
              placeholderTextColor={colors.textMuted}
              multiline
              textAlignVertical="top"
              autoFocus
              returnKeyType="default"
            />
          </View>

          {error && (
            <Text style={styles.error}>{error}</Text>
          )}

          <View style={styles.footer}>
            <Text style={styles.charCount}>
              {text.trim().length < MIN_LENGTH
                ? `${MIN_LENGTH - text.trim().length} more characters needed`
                : 'Ready to go'}
            </Text>
            <Button
              title={loading ? 'ANALYZING...' : 'CONTINUE'}
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
  inputContainer: {
    flex: 1,
    minHeight: 200,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.text,
    lineHeight: 22,
  },
  error: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.error,
    marginBottom: spacing.md,
  },
  footer: {
    paddingTop: spacing.sm,
  },
  charCount: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
});
