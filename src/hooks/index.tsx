import React from 'react';

import { ThemeProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;
