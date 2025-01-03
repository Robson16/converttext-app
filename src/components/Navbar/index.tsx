import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { Container, Label, NavGrid, NavLink } from './styles';

const Navbar: React.FC = () => {
  const { toggleTheme } = useTheme();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { colors, title } = themeContext;

  return (
    <Container>
      <NavGrid>
        <NavLink to="/">Conversor de Texto</NavLink>
        <NavLink to="/tradutor-binario">Tradutor Binário</NavLink>
      </NavGrid>

      <Label htmlFor="toggle-theme">
        <span>Mudar de tema</span>
        <Switch
          id="toggle-theme"
          name="toggle-theme"
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          checkedHandleIcon={(
            <FiMoon
              size={20}
              color={colors.background}
              style={{ margin: '3px' }}
            />
          )}
          uncheckedHandleIcon={<FiSun size={18} style={{ margin: '4px' }} />}
          onColor={colors.primary}
          offColor={shade(0.15, colors.background)}
        />
      </Label>
    </Container>
  );
};

export default Navbar;
