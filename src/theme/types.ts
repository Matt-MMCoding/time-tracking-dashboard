import type { IMediaQueryBreakpoints } from './breakpoints';
import type { IPalette } from './palette';

export interface ITheme {
  palette: IPalette;
  media: IMediaQueryBreakpoints;
}
