import { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable,
  TextInput, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius } from '../../src/theme';
import {
  MagnifyingGlass, Barbell, Person, ArrowsDownUp,
  Wind, Warning, CaretDown, CaretUp, X, Fire,
} from 'phosphor-react-native';
import {
  coachingCueLibrary,
  getMovementsByCategory,
  MovementCueData,
} from '../../src/services/coachingCueLibrary';

const CATEGORY_DISPLAY: Record<string, { label: string; icon: string }> = {
  barbell_compound: { label: 'Barbell', icon: 'barbell' },
  bodyweight: { label: 'Bodyweight', icon: 'person' },
  dumbbell: { label: 'Dumbbell', icon: 'dumbbell' },
  conditioning: { label: 'Conditioning', icon: 'heartbeat' },
  core: { label: 'Core', icon: 'target' },
  olympic_lift: { label: 'Olympic', icon: 'lightning' },
  machine_cable: { label: 'Machine / Cable', icon: 'gear' },
  carry: { label: 'Carry', icon: 'package' },
  kettlebell: { label: 'Kettlebell', icon: 'bell' },
  mobility: { label: 'Mobility', icon: 'flow' },
  gymnastics: { label: 'Gymnastics', icon: 'person' },
  prehab: { label: 'Prehab', icon: 'shield' },
  yoga_recovery: { label: 'Yoga / Recovery', icon: 'flower' },
  running_drill: { label: 'Running Drills', icon: 'sneaker' },
  plyometric: { label: 'Plyometrics', icon: 'arrow-up' },
  sport_functional: { label: 'Sport / Functional', icon: 'trophy' },
};

const ALL_CATEGORIES = Object.keys(CATEGORY_DISPLAY);

export default function LibraryScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedMovement, setExpandedMovement] = useState<string | null>(null);

  const filteredMovements = useMemo(() => {
    let movements = selectedCategory
      ? getMovementsByCategory(selectedCategory as any)
      : coachingCueLibrary;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      movements = movements.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.primaryMuscles.some((muscle) => muscle.toLowerCase().includes(q)) ||
          m.category.toLowerCase().replace(/_/g, ' ').includes(q)
      );
    }

    return movements;
  }, [search, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of ALL_CATEGORIES) {
      counts[cat] = getMovementsByCategory(cat as any).length;
    }
    return counts;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Fire size={14} color={colors.accent} weight="fill" />
          <Text style={styles.label}>FORGE</Text>
        </View>
        <Text style={styles.title}>EXERCISE LIBRARY</Text>
        <Text style={styles.count}>{coachingCueLibrary.length} movements</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <MagnifyingGlass size={18} color={colors.textMuted} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, muscle, or category..."
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={(text) => {
              setSearch(text);
              setSelectedCategory(null);
            }}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <Pressable onPress={() => setSearch('')} style={styles.clearButton}>
              <X size={16} color={colors.textMuted} />
            </Pressable>
          )}
        </View>
      </View>

      {/* Category chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipScroll}
        contentContainerStyle={styles.chipRow}
      >
        <Pressable
          style={[styles.chip, !selectedCategory && styles.chipActive]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={[styles.chipText, !selectedCategory && styles.chipTextActive]}>
            All ({coachingCueLibrary.length})
          </Text>
        </Pressable>
        {ALL_CATEGORIES.map((cat) => (
          <Pressable
            key={cat}
            style={[styles.chip, selectedCategory === cat && styles.chipActive]}
            onPress={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
          >
            <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>
              {CATEGORY_DISPLAY[cat]?.label || cat} ({categoryCounts[cat]})
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Movement list */}
      <FlatList
        data={filteredMovements}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MovementCard
            movement={item}
            isExpanded={expandedMovement === item.name}
            onToggle={() =>
              setExpandedMovement(expandedMovement === item.name ? null : item.name)
            }
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No movements found</Text>
            <Text style={styles.emptySubtext}>Try a different search or category</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

function MovementCard({
  movement,
  isExpanded,
  onToggle,
}: {
  movement: MovementCueData;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const catLabel = CATEGORY_DISPLAY[movement.category]?.label || movement.category;

  return (
    <Pressable onPress={onToggle} style={styles.movementCard}>
      {/* Header */}
      <View style={styles.movementHeader}>
        <View style={styles.movementInfo}>
          <Text style={styles.movementName}>{movement.name}</Text>
          <View style={styles.movementMeta}>
            <Text style={styles.categoryBadge}>{catLabel}</Text>
            <Text style={styles.muscleText}>
              {movement.primaryMuscles.slice(0, 3).join(', ')}
            </Text>
          </View>
        </View>
        {isExpanded ? (
          <CaretUp size={18} color={colors.textSecondary} />
        ) : (
          <CaretDown size={18} color={colors.textSecondary} />
        )}
      </View>

      {/* Expanded detail */}
      {isExpanded && (
        <View style={styles.movementDetail}>
          {/* Setup */}
          <View style={styles.detailSection}>
            <View style={styles.detailLabelRow}>
              <Barbell size={14} color={colors.accent} />
              <Text style={styles.detailLabel}>SETUP</Text>
            </View>
            <Text style={styles.detailText}>{movement.setup}</Text>
          </View>

          {/* Breathing */}
          <View style={styles.detailSection}>
            <View style={styles.detailLabelRow}>
              <Wind size={14} color={colors.accent} />
              <Text style={styles.detailLabel}>BREATHING</Text>
            </View>
            <Text style={styles.detailText}>{movement.breathingCue}</Text>
          </View>

          {/* Coaching Cues */}
          <View style={styles.detailSection}>
            <Text style={styles.detailLabel}>COACHING CUES</Text>
            {movement.cues.map((cue, i) => (
              <View key={i} style={styles.cueRow}>
                <Text style={styles.cueNumber}>{i + 1}</Text>
                <Text style={styles.cueText}>{cue}</Text>
              </View>
            ))}
          </View>

          {/* Common Faults */}
          <View style={styles.detailSection}>
            <Text style={styles.detailLabel}>WATCH OUT FOR</Text>
            {movement.commonFaults.map((fault, i) => (
              <View key={i} style={styles.faultCard}>
                <View style={styles.faultHeader}>
                  <Warning size={14} color={colors.gold} weight="fill" />
                  <Text style={styles.faultName}>{fault.fault}</Text>
                </View>
                <Text style={styles.faultConsequence}>{fault.consequence}</Text>
                <Text style={styles.faultFix}>Fix: {fault.fix}</Text>
              </View>
            ))}
          </View>

          {/* Scaling */}
          <View style={styles.detailSection}>
            <View style={styles.detailLabelRow}>
              <ArrowsDownUp size={14} color={colors.accent} />
              <Text style={styles.detailLabel}>SCALING</Text>
            </View>
            <Text style={styles.scalingHeader}>Easier:</Text>
            {movement.scaling.easier.map((s, i) => (
              <View key={i} style={styles.scalingRow}>
                <Text style={styles.scalingMovement}>{s.movement}</Text>
                <Text style={styles.scalingWhen}>{s.when}</Text>
              </View>
            ))}
            <Text style={[styles.scalingHeader, { marginTop: spacing.md }]}>Harder:</Text>
            {movement.scaling.harder.map((s, i) => (
              <View key={i} style={styles.scalingRow}>
                <Text style={styles.scalingMovement}>{s.movement}</Text>
                <Text style={styles.scalingWhen}>{s.when}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: spacing['2xl'], paddingTop: spacing['3xl'], paddingBottom: spacing.md },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, marginBottom: spacing.sm },
  label: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.accent, letterSpacing: 2, textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'BebasNeue', fontSize: typography.sizes['2xl'],
    color: colors.text, letterSpacing: 2,
  },
  count: {
    fontFamily: 'Inter', fontSize: typography.sizes.sm,
    color: colors.textSecondary, marginTop: spacing.xs,
  },
  // Search
  searchSection: { paddingHorizontal: spacing['2xl'], marginBottom: spacing.md },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
    borderRadius: radius.md, paddingHorizontal: spacing.lg, height: 48,
  },
  searchInput: {
    flex: 1, fontFamily: 'Inter', fontSize: typography.sizes.base,
    color: colors.text, paddingVertical: 0,
  },
  clearButton: { padding: spacing.xs },
  // Category chips
  chipScroll: { maxHeight: 44, marginBottom: spacing.md },
  chipRow: { paddingHorizontal: spacing['2xl'], gap: spacing.sm },
  chip: {
    paddingHorizontal: spacing.lg, paddingVertical: spacing.sm,
    borderRadius: radius.lg, backgroundColor: colors.surface,
    borderWidth: 1, borderColor: colors.border, height: 36,
    justifyContent: 'center',
  },
  chipActive: { backgroundColor: colors.accentMuted, borderColor: colors.accent },
  chipText: { fontFamily: 'InterMedium', fontSize: typography.sizes.sm, color: colors.textSecondary },
  chipTextActive: { color: colors.accent },
  // List
  listContent: { paddingHorizontal: spacing['2xl'], paddingBottom: spacing['5xl'] },
  emptyState: { alignItems: 'center', paddingTop: spacing['3xl'] },
  emptyText: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.base, color: colors.textSecondary },
  emptySubtext: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.textMuted, marginTop: spacing.xs },
  // Movement card
  movementCard: {
    backgroundColor: colors.surfaceElevated, borderWidth: 1, borderColor: colors.border,
    borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm,
  },
  movementHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  movementInfo: { flex: 1, marginRight: spacing.md },
  movementName: { fontFamily: 'InterBold', fontSize: typography.sizes.base, color: colors.text },
  movementMeta: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.xs },
  categoryBadge: {
    fontFamily: 'InterSemiBold', fontSize: 9, color: colors.accent,
    backgroundColor: colors.accentMuted, paddingHorizontal: spacing.sm, paddingVertical: 2,
    borderRadius: radius.sm, overflow: 'hidden', letterSpacing: 0.5,
  },
  muscleText: {
    fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textMuted,
    flex: 1,
  },
  // Detail
  movementDetail: {
    marginTop: spacing.lg, paddingTop: spacing.lg,
    borderTopWidth: 1, borderTopColor: colors.border,
  },
  detailSection: { marginBottom: spacing.lg },
  detailLabelRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.sm },
  detailLabel: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.textSecondary, letterSpacing: 2, marginBottom: spacing.sm,
  },
  detailText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text, lineHeight: 20 },
  // Cues
  cueRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  cueNumber: {
    fontFamily: 'InterBold', fontSize: typography.sizes.sm, color: colors.accent,
    width: 20, textAlign: 'center',
  },
  cueText: { fontFamily: 'Inter', fontSize: typography.sizes.sm, color: colors.text, flex: 1, lineHeight: 20 },
  // Faults
  faultCard: {
    backgroundColor: colors.surface, borderRadius: radius.md,
    padding: spacing.md, marginBottom: spacing.sm,
    borderLeftWidth: 3, borderLeftColor: colors.gold,
  },
  faultHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs },
  faultName: { fontFamily: 'InterSemiBold', fontSize: typography.sizes.sm, color: colors.text, flex: 1 },
  faultConsequence: {
    fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textSecondary,
    lineHeight: 18, marginBottom: spacing.xs,
  },
  faultFix: {
    fontFamily: 'InterMedium', fontSize: typography.sizes.xs, color: colors.success,
    lineHeight: 18,
  },
  // Scaling
  scalingHeader: {
    fontFamily: 'InterSemiBold', fontSize: typography.sizes.xs,
    color: colors.textSecondary, marginBottom: spacing.sm,
  },
  scalingRow: { marginBottom: spacing.sm, paddingLeft: spacing.md },
  scalingMovement: { fontFamily: 'InterMedium', fontSize: typography.sizes.sm, color: colors.text },
  scalingWhen: {
    fontFamily: 'Inter', fontSize: typography.sizes.xs, color: colors.textMuted,
    lineHeight: 18, marginTop: 2,
  },
});
