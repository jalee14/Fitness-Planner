import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, typography, spacing, radius } from '../../src/theme';
import { Button, Card } from '../../src/components/ui';
import { useOnboarding } from '../../src/hooks/useOnboarding';
import { UserProfile } from '../../src/types/profile';

interface ValidationRule {
  min: number;
  max: number;
  label: string;
}

const VALIDATION_RULES: Record<string, ValidationRule> = {
  age: { min: 13, max: 100, label: 'Age' },
  weight: { min: 50, max: 500, label: 'Weight' },
  height: { min: 36, max: 96, label: 'Height (inches)' },
  daysPerWeek: { min: 1, max: 7, label: 'Days per week' },
  sessionLength: { min: 10, max: 240, label: 'Session length' },
};

function validateField(key: string, value: string): string | null {
  const rule = VALIDATION_RULES[key];
  if (!rule) return null;
  const num = parseInt(value);
  if (isNaN(num)) return `Enter a number for ${rule.label.toLowerCase()}`;
  if (num < rule.min) return `${rule.label} seems too low (min ${rule.min})`;
  if (num > rule.max) return `${rule.label} seems too high (max ${rule.max})`;
  return null;
}

function ProfileField({
  label,
  value,
  onChangeText,
  editing,
  onPress,
  warning,
  numeric,
}: {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  editing: boolean;
  onPress: () => void;
  warning?: string | null;
  numeric?: boolean;
}) {
  return (
    <Pressable onPress={onPress} style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {editing && onChangeText ? (
        <TextInput
          style={[styles.fieldInput, warning ? styles.fieldInputWarning : null]}
          value={value}
          onChangeText={onChangeText}
          autoFocus
          placeholderTextColor={colors.textMuted}
          keyboardType={numeric ? 'numeric' : 'default'}
          inputMode={numeric ? 'numeric' : 'text'}
        />
      ) : (
        <Text style={styles.fieldValue}>{value || '—'}</Text>
      )}
      {warning && <Text style={styles.fieldWarning}>{warning}</Text>}
    </Pressable>
  );
}

function formatHeight(inches: number | null): string {
  if (!inches) return '—';
  const ft = Math.floor(inches / 12);
  const rem = inches % 12;
  return `${ft}'${rem}"`;
}

export default function ProfileScreen() {
  const router = useRouter();
  const { state, confirmProfile, loading, error } = useOnboarding();
  const profile = state.confirmedProfile;
  const [editingField, setEditingField] = useState<string | null>(null);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<Record<string, string | null>>({});

  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>LOADING...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const getVal = (key: string, fallback: string) => {
    if (key in edits) return edits[key];
    return fallback;
  };

  const setVal = (key: string) => (text: string) => {
    setEdits((prev) => ({ ...prev, [key]: text }));
    const warning = validateField(key, text);
    setWarnings((prev) => ({ ...prev, [key]: warning }));
  };

  const hasWarnings = Object.values(warnings).some((w) => w !== null && w !== undefined);

  const handleConfirm = async () => {
    // Validate all edited fields before proceeding
    const newWarnings: Record<string, string | null> = {};
    for (const [key, value] of Object.entries(edits)) {
      newWarnings[key] = validateField(key, value);
    }
    setWarnings(newWarnings);
    if (Object.values(newWarnings).some((w) => w !== null)) return;

    // Apply edits to profile
    const updated: UserProfile = {
      ...profile,
      demographics: {
        ...profile.demographics,
        age: edits.age ? parseInt(edits.age) || profile.demographics.age : profile.demographics.age,
        weight: edits.weight ? parseInt(edits.weight) || profile.demographics.weight : profile.demographics.weight,
        height: edits.height ? parseInt(edits.height) || profile.demographics.height : profile.demographics.height,
      },
      schedule: {
        ...profile.schedule,
        daysPerWeek: edits.daysPerWeek
          ? parseInt(edits.daysPerWeek) || profile.schedule.daysPerWeek
          : profile.schedule.daysPerWeek,
        sessionLengthMinutes: edits.sessionLength
          ? parseInt(edits.sessionLength) || profile.schedule.sessionLengthMinutes
          : profile.schedule.sessionLengthMinutes,
      },
      updatedAt: new Date().toISOString(),
    };
    await confirmProfile(updated);
    router.push('/onboarding/plan-preview');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.label}>STEP 3 OF 3</Text>
          <Text style={styles.title}>YOUR{'\n'}PROFILE</Text>
          <Text style={styles.subtitle}>
            Here's what we heard. Tap any field to correct it before we build
            your plan.
          </Text>
        </View>

        {/* Demographics */}
        <Text style={styles.sectionTitle}>ABOUT YOU</Text>
        <Card>
          <ProfileField
            label="Age"
            value={getVal('age', profile.demographics.age?.toString() || '')}
            onChangeText={setVal('age')}
            editing={editingField === 'age'}
            onPress={() => setEditingField(editingField === 'age' ? null : 'age')}
            warning={warnings.age}
            numeric
          />
          <ProfileField
            label="Weight (lbs)"
            value={getVal('weight', profile.demographics.weight?.toString() || '')}
            onChangeText={setVal('weight')}
            editing={editingField === 'weight'}
            onPress={() => setEditingField(editingField === 'weight' ? null : 'weight')}
            warning={warnings.weight}
            numeric
          />
          <ProfileField
            label="Height (inches)"
            value={getVal('height', profile.demographics.height?.toString() || '')}
            onChangeText={setVal('height')}
            editing={editingField === 'height'}
            onPress={() => setEditingField(editingField === 'height' ? null : 'height')}
            warning={warnings.height}
            numeric
          />
          <ProfileField
            label="Experience"
            value={`${profile.experience.yearsTraining || '?'} years, ${profile.experience.frequency || '?'}x/week`}
            editing={false}
            onPress={() => {}}
          />
        </Card>

        {/* Existing Training */}
        {profile.existingTraining.description ? (
          <>
            <Text style={styles.sectionTitle}>CURRENT TRAINING</Text>
            <Card>
              <Text style={styles.cardBody}>{profile.existingTraining.description}</Text>
              {profile.existingTraining.activitiesPerWeek.map((a, i) => (
                <Text key={i} style={styles.listItem}>
                  {a.activity} — {a.frequencyPerWeek}x/week
                </Text>
              ))}
              {profile.existingTraining.planRelationship && (
                <Text style={styles.badge}>
                  Plan type: {profile.existingTraining.planRelationship}
                </Text>
              )}
            </Card>
          </>
        ) : null}

        {/* Goals */}
        <Text style={styles.sectionTitle}>GOALS</Text>
        {profile.goals.map((goal, i) => (
          <Card key={goal.id} variant={i === 0 ? 'active' : 'default'}>
            <Text style={styles.goalType}>{goal.type.toUpperCase()}</Text>
            <Text style={styles.goalDescription}>{goal.description}</Text>
            {goal.target && (
              <Text style={styles.goalTarget}>Target: {goal.target}</Text>
            )}
            {goal.deadline && (
              <Text style={styles.goalDeadline}>Deadline: {goal.deadline}</Text>
            )}
          </Card>
        ))}

        {/* Baselines */}
        {profile.baselines.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>CURRENT NUMBERS</Text>
            <Card>
              {profile.baselines.map((b) => (
                <View key={b.id} style={styles.baselineRow}>
                  <Text style={styles.baselineName}>{b.name}</Text>
                  <Text style={styles.baselineValue}>
                    {b.value} {b.unit}
                  </Text>
                </View>
              ))}
            </Card>
          </>
        )}

        {/* Schedule */}
        <Text style={styles.sectionTitle}>SCHEDULE</Text>
        <Card>
          <ProfileField
            label="Days per week"
            value={getVal('daysPerWeek', profile.schedule.daysPerWeek?.toString() || '')}
            onChangeText={setVal('daysPerWeek')}
            editing={editingField === 'daysPerWeek'}
            onPress={() => setEditingField(editingField === 'daysPerWeek' ? null : 'daysPerWeek')}
            warning={warnings.daysPerWeek}
            numeric
          />
          <ProfileField
            label="Session length (minutes)"
            value={getVal('sessionLength', profile.schedule.sessionLengthMinutes?.toString() || '')}
            onChangeText={setVal('sessionLength')}
            editing={editingField === 'sessionLength'}
            onPress={() => setEditingField(editingField === 'sessionLength' ? null : 'sessionLength')}
            warning={warnings.sessionLength}
            numeric
          />
          {profile.schedule.preferredDays.length > 0 && (
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Preferred days</Text>
              <Text style={styles.fieldValue}>
                {profile.schedule.preferredDays.join(', ')}
              </Text>
            </View>
          )}
          {profile.schedule.equipment.length > 0 && (
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Equipment</Text>
              <Text style={styles.fieldValue}>
                {profile.schedule.equipment.join(', ')}
              </Text>
            </View>
          )}
        </Card>

        {/* Movement Limitations */}
        {profile.movementLimitations.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>MOVEMENT LIMITATIONS</Text>
            {profile.movementLimitations.map((ml) => (
              <Card key={ml.id}>
                <Text style={styles.goalType}>{ml.area.toUpperCase()}</Text>
                <Text style={styles.cardBody}>{ml.limitation}</Text>
                {ml.notes && (
                  <Text style={styles.goalTarget}>{ml.notes}</Text>
                )}
              </Card>
            ))}
          </>
        )}

        {/* Preferences */}
        {(profile.preferences.preferredStyle || profile.preferences.likedPrograms.length > 0) && (
          <>
            <Text style={styles.sectionTitle}>PREFERENCES</Text>
            <Card>
              {profile.preferences.preferredStyle && (
                <View style={styles.field}>
                  <Text style={styles.fieldLabel}>Style</Text>
                  <Text style={styles.fieldValue}>
                    {profile.preferences.preferredStyle}
                  </Text>
                </View>
              )}
              {profile.preferences.likedPrograms.length > 0 && (
                <View style={styles.field}>
                  <Text style={styles.fieldLabel}>Liked</Text>
                  <Text style={styles.fieldValue}>
                    {profile.preferences.likedPrograms.join(', ')}
                  </Text>
                </View>
              )}
              {profile.preferences.dislikedPrograms.length > 0 && (
                <View style={styles.field}>
                  <Text style={styles.fieldLabel}>Disliked</Text>
                  <Text style={styles.fieldValue}>
                    {profile.preferences.dislikedPrograms.join(', ')}
                  </Text>
                </View>
              )}
            </Card>
          </>
        )}

        {error && <Text style={styles.error}>{error}</Text>}

        <View style={styles.footer}>
          {hasWarnings && (
            <Text style={styles.error}>Fix the highlighted fields before continuing</Text>
          )}
          <Button
            title={loading ? 'BUILDING PREVIEW...' : 'LOOKS GOOD — BUILD MY PLAN'}
            onPress={handleConfirm}
            loading={loading}
            disabled={loading || hasWarnings}
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
  sectionTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  field: {
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  fieldLabel: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.textMuted,
    marginBottom: 2,
  },
  fieldValue: {
    fontFamily: 'InterMedium',
    fontSize: typography.sizes.base,
    color: colors.text,
  },
  fieldInput: {
    fontFamily: 'InterMedium',
    fontSize: typography.sizes.base,
    color: colors.accent,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
    paddingVertical: 2,
  },
  fieldInputWarning: {
    color: colors.error,
    borderBottomColor: colors.error,
  },
  fieldWarning: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.xs,
    color: colors.error,
    marginTop: 4,
  },
  cardBody: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.text,
    lineHeight: 22,
  },
  listItem: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  badge: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.xs,
    color: colors.accent,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: spacing.md,
  },
  goalType: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.xs,
    color: colors.accent,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.xs,
  },
  goalDescription: {
    fontFamily: 'InterMedium',
    fontSize: typography.sizes.base,
    color: colors.text,
    lineHeight: 22,
  },
  goalTarget: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  goalDeadline: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.sm,
    color: colors.gold,
    marginTop: spacing.xs,
  },
  baselineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  baselineName: {
    fontFamily: 'Inter',
    fontSize: typography.sizes.base,
    color: colors.textSecondary,
  },
  baselineValue: {
    fontFamily: 'InterSemiBold',
    fontSize: typography.sizes.base,
    color: colors.text,
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
});
