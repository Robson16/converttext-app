import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
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
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.primary}
        offColor={shade(0.15, colors.background)}
      />
    </Container>
  );
};

export default Navbar;
