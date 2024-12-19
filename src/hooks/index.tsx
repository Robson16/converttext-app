import React, { ReactNode } from 'react';

import { ThemeProvider } from './useTheme';
import { TextConverterProvider } from './useTextConverter';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider>
    <TextConverterProvider>{children}</TextConverterProvider>
  </ThemeProvider>
);

export default AppProvider;
