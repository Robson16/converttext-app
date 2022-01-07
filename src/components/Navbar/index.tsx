import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AppContext } from '../../context/AppContext';
import { Container, NavGrid, NavLink } from './styles';

const Navbar: React.FC = () => {
  const { toggleTheme } = useContext(AppContext);
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <NavGrid>
        <NavLink to="/">Conversor de Texto</NavLink>
        <NavLink to="/binary-translator">Tradutor Binário</NavLink>
      </NavGrid>

      <label
        htmlFor="toggle-theme"
        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        <span>Mudar de tema</span>
        <Switch
          id="toggle-theme"
          name="toggle-theme"
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          // eslint-disable-next-line prettier/prettier
          checkedHandleIcon={(
            <FiMoon
              size={20}
              color={colors.background}
              style={{ margin: '3px' }}
            />
            // eslint-disable-next-line prettier/prettier
          )}
          uncheckedHandleIcon={<FiSun size={18} style={{ margin: '4px' }} />}
          onColor={colors.primary}
          offColor={shade(0.15, colors.background)}
        />
      </label>
    </Container>
  );
};

export default Navbar;
