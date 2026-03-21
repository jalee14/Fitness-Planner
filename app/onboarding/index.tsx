import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, typography, spacing, radius } from '../../src/theme';
import { Button } from '../../src/components/ui';
import { Fire } from 'phosphor-react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.brandRow}>
          <Fire size={16} color={colors.accent} weight="fill" />
          <Text style={styles.label}>FORGE</Text>
        </View>
        <Text style={styles.title}>YOUR TRAINING.{'\n'}YOUR PLAN.</Text>
        <Text style={styles.subtitle}>
          Tell us what you're trying to accomplish and we'll build the exact
          program to get you there.
        </Text>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimer}>
            Forge builds training programs based on your goals and fitness
            background. This is not medical advice. Consult your physician
            before beginning any exercise program.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          title="GET STARTED"
          onPress={() => router.push('/onboarding/intake')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1, justifyContent: 'center', padding: spacing['3xl'],
  },
  brandRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  label: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.accent, letterSpacing: 2, textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'BebasNeue', fontSize: typography.sizes['4xl'],
    color: colors.text, letterSpacing: 2, lineHeight: 56,
  },
  subtitle: {
    fontFamily: 'Inter', fontSize: typography.sizes.lg,
    color: colors.textSecondary, marginTop: spacing.xl, lineHeight: 26,
  },
  disclaimerBox: {
    marginTop: spacing['3xl'], backgroundColor: colors.surface,
    borderRadius: radius.md, padding: spacing.lg,
    borderWidth: 1, borderColor: colors.border,
  },
  disclaimer: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm,
    color: colors.textMuted, lineHeight: 20,
  },
  footer: { padding: spacing['3xl'] },
});
