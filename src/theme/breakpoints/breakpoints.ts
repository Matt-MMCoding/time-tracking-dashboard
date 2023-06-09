import type { BreakpointSizes, IMediaQueryBreakpoints } from './types';

const breakpointSizes = {
  xs: 375,
  md: 768,
  xl: 1440,
};

const customMediaQuery = (unit: number, direction: 'up' | 'down'): string => {
  if (direction === 'up') {
    return `@media (min-width: ${unit}px)`;
  }
  return `@media (max-width: ${unit}px)`;
};

const up = (bpSize: BreakpointSizes) => {
  const sizeValue = breakpointSizes[bpSize];

  return customMediaQuery(sizeValue, 'up');
};

const down = (bpSize: BreakpointSizes) => {
  const sizeValue = breakpointSizes[bpSize];

  return customMediaQuery(sizeValue, 'down');
};

const media: IMediaQueryBreakpoints = {
  up,
  down,
};

export default media;
