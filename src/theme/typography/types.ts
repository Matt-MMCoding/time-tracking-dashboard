export interface ITypographySize {
  reset: string;
  small: string;
  body: string;
  large: string;
}

export interface ITypographyFamily {
  body: string;
}

export interface ITypographyWeight {
  light: number;
  regular: number;
  bold: number;
}

export interface ITypography {
  size: ITypographySize;
  family: ITypographyFamily;
  weight: ITypographyWeight;
}
