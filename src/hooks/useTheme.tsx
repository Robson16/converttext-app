import React, { ReactNode, createContext, useCallback, useContext } from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledComponentThemeProvider,
} from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import usePersistentState from './usePersistedState';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>(
    'converttext-theme',
    light,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledComponentThemeProvider theme={theme}>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
