import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '../../src/theme';

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PROGRESS</Text>
        <Text style={styles.subtitle}>
          Tracking toward your goals. Coming in Stage 2.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing['2xl'],
    paddingTop: spacing['3xl'],
  },
  title: {
    fontFamily: 'BebasNeue',
    fontSize: typography.sizes['2xl'],
    color: colors.text,
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 22,
  },
});
