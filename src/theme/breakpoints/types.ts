export type BreakpointSizes = 'xs' | 'md' | 'xl';

export interface IMediaQueryBreakpoints {
  up: (bpSize: BreakpointSizes) => string;
  down: (bpSize: BreakpointSizes) => string;
}
