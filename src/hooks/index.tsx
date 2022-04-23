import React from 'react';

import { ThemeProvider } from './useTheme';
import { TextConverterProvider } from './useTextConverter';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <TextConverterProvider>{children}</TextConverterProvider>
  </ThemeProvider>
);

export default AppProvider;
