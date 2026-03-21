import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, ActivityIndicator } from 'react-native';
import { StorageProvider, useStorage } from '../src/services/storage/provider';
import { AIProvider } from '../src/services/ai/provider';
import { colors } from '../src/theme';

SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const storage = useStorage();
  const router = useRouter();
  const segments = useSegments();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function checkBootRoute() {
      const plan = await storage.getPlan();
      const profile = await storage.getProfile();
      const inOnboarding = segments[0] === 'onboarding';

      if (plan) {
        // Has a completed plan — go to main tabs
        if (inOnboarding) {
          router.replace('/(tabs)');
        }
      } else if (!profile) {
        // No profile yet — start onboarding
        if (!inOnboarding) {
          router.replace('/onboarding');
        }
      }
      setChecked(true);
    }

    checkBootRoute();
  }, []);

  if (!checked) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={colors.accent} size="large" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="session" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    BebasNeue: BebasNeue_400Regular,
    Inter: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={colors.accent} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StorageProvider>
        <AIProvider>
          <RootNavigator />
        </AIProvider>
      </StorageProvider>
    </SafeAreaProvider>
  );
}
