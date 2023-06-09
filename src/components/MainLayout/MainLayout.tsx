'use client';

import type { FC } from 'react';
import type { IMainLayoutProps } from './types';
import { ThemeProvider } from 'styled-components';
import * as theme from '@/theme';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { StyledLayoutWrapper } from './styles';

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledLayoutWrapper>{children}</StyledLayoutWrapper>
    </ThemeProvider>
  );
};

export default MainLayout;
