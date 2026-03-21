import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'active' | 'success' | 'gold';
  style?: ViewStyle;
}

export function Card({ children, variant = 'default', style }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        variant === 'active' && styles.active,
        variant === 'success' && styles.success,
        variant === 'gold' && styles.gold,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginBottom: spacing.md,
  },
  active: {
    borderColor: colors.accent,
  },
  success: {
    borderColor: colors.success,
  },
  gold: {
    borderColor: colors.gold,
  },
});
