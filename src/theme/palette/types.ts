export interface IPaletteCommon {
  white: string;
}

export interface IPalettePrimary {
  userProfileBackground: string;
  workBackground: string;
  playBackground: string;
  studyBackground: string;
  exerciseBackground: string;
  socialBackground: string;
  selfCareBackground: string;
}

export interface IPaletteNeutral {
  bodyBackground: string;
  cardBackground: string;
  cardBackgroundHover: string;
  cardBtnBackground: string;
}

export interface IPalette {
  common: IPaletteCommon;
  primary: IPalettePrimary;
  neutral: IPaletteNeutral;
}
