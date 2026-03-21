export const colors = {
  // Backgrounds — dark foundation with warm undertones
  background: '#0e0e0e',
  surface: '#161615',
  surfaceElevated: '#1c1b1a',
  border: '#2a2824',
  borderLight: '#3a3631',

  // Accent — burnt orange / ember (warm, energetic, not aggressive)
  accent: '#d4602c',
  accentMuted: 'rgba(212, 96, 44, 0.12)',
  accentBorder: 'rgba(212, 96, 44, 0.35)',
  accentHover: '#e06b33',

  // Semantic
  success: '#4caf7d',
  successMuted: 'rgba(76, 175, 125, 0.12)',
  gold: '#c9a84c',
  goldMuted: 'rgba(201, 168, 76, 0.12)',
  error: '#ef4444',
  errorMuted: 'rgba(239, 68, 68, 0.12)',

  // Text — warm cream hierarchy
  text: '#e8e0d4',
  textSecondary: '#9a9189',
  textMuted: '#5c5650',
  textDark: '#0e0e0e',
  white: '#ffffff',
} as const;

export const typography = {
  heading: {
    fontFamily: 'BebasNeue',
    letterSpacing: 0.04,
  },
  body: {
    fontFamily: 'Inter',
  },
  mono: {
    fontFamily: 'InterMono',
  },
  sizes: {
    xs: 10,
    sm: 12,
    md: 13,
    base: 15,
    lg: 17,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 52,
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
} as const;

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
} as const;
