import type {
  ITypography,
  ITypographyFamily,
  ITypographySize,
  ITypographyWeight,
} from './types';

const size: ITypographySize = {
  reset: '10px',
  small: '1.4rem',
  body: '1.8rem',
  large: '2.2rem',
} as const;

const family: ITypographyFamily = {
  body: '"Rubik", sans-serif',
};

const weight: ITypographyWeight = {
  light: 300,
  regular: 400,
  bold: 500,
};

const typography: ITypography = {
  size,
  family,
  weight,
};

export default typography;
