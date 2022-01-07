import React, { createContext, useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistentState from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface AppContextData {
  toggleTheme(): void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>(
    'converttext-theme',
    light,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
