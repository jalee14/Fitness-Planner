import { Stack } from 'expo-router';
import { colors } from '../../src/theme';
import { OnboardingProvider } from '../../src/hooks/useOnboarding';

export default function OnboardingLayout() {
  return (
    <OnboardingProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'slide_from_right',
        }}
      />
    </OnboardingProvider>
  );
}
