import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { colors, typography, spacing } from '../../src/theme';
import {
  ListBullets,
  CalendarBlank,
  TrendUp,
  BookOpen,
} from 'phosphor-react-native';

const TAB_ICONS: Record<string, React.ComponentType<any>> = {
  Plan: ListBullets,
  Week: CalendarBlank,
  Progress: TrendUp,
  Coaching: BookOpen,
};

function TabIcon({ name, focused }: { name: string; focused: boolean }) {
  const Icon = TAB_ICONS[name] || ListBullets;
  return (
    <Icon
      size={22}
      color={focused ? colors.accent : colors.textMuted}
      weight={focused ? 'fill' : 'regular'}
    />
  );
}

function TabLabel({ label, focused }: { label: string; focused: boolean }) {
  return (
    <Text
      style={{
        fontFamily: 'InterSemiBold',
        fontSize: typography.sizes.xs,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        color: focused ? colors.accent : colors.textMuted,
      }}
    >
      {label}
    </Text>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 72,
          paddingBottom: spacing.md,
          paddingTop: spacing.sm,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Plan',
          tabBarIcon: ({ focused }) => <TabIcon name="Plan" focused={focused} />,
          tabBarLabel: ({ focused }) => <TabLabel label="Plan" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="week"
        options={{
          title: 'Week',
          tabBarIcon: ({ focused }) => <TabIcon name="Week" focused={focused} />,
          tabBarLabel: ({ focused }) => <TabLabel label="Week" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ focused }) => <TabIcon name="Progress" focused={focused} />,
          tabBarLabel: ({ focused }) => <TabLabel label="Progress" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: 'Coaching',
          tabBarIcon: ({ focused }) => <TabIcon name="Coaching" focused={focused} />,
          tabBarLabel: ({ focused }) => <TabLabel label="Coaching" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
