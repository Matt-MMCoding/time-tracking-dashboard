import type {
  IPalette,
  IPaletteCommon,
  IPaletteNeutral,
  IPalettePrimary,
} from './types';

const common: IPaletteCommon = {
  white: '#FFFFFF',
} as const;

const primary: IPalettePrimary = {
  userProfileBackground: 'hsl(226, 43%, 10%)',
  workBackground: 'hsl(15, 100%, 70%)',
  playBackground: 'hsl(195, 74%, 62%)',
  studyBackground: 'hsl(348, 100%, 68%)',
  exerciseBackground: 'hsl(145, 58%, 55%)',
  socialBackground: 'hsl(264, 64%, 52%)',
  selfCareBackground: 'hsl(43, 84%, 65%)',
} as const;

const neutral: IPaletteNeutral = {
  bodyBackground: 'hsl(226, 43%, 10%)',
  cardBackground: 'hsl(235, 46%, 20%)',
  cardBackgroundHover: 'hsl(235, 45%, 61%)',
  cardBtnBackground: 'hsl(236, 100%, 87%)',
} as const;

const palette: IPalette = {
  common,
  primary,
  neutral,
} as const;

export default palette;
