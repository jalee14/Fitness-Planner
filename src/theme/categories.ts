/**
 * Category colors and labels — used across Plan, Week, and Session screens.
 * Single source of truth for exercise category visual treatment.
 */

import { colors } from './tokens';

export const categoryColors: Record<string, string> = {
  warmup: colors.gold,
  cooldown: '#8a7e72',
  strength: colors.accent,
  skill: colors.success,
  conditioning: '#e06b33',
  general: colors.text,
};

export const categoryLabels: Record<string, string> = {
  warmup: 'WARM-UP',
  cooldown: 'COOL-DOWN',
  strength: 'STRENGTH',
  skill: 'SKILL',
  conditioning: 'CONDITIONING',
  general: 'GENERAL',
};

export function getCategoryColor(category: string): string {
  return categoryColors[category] || colors.text;
}

export function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category.toUpperCase();
}
