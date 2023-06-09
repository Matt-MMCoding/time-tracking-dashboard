import 'styled-components';
import type { ITheme } from '../types';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
