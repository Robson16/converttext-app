import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { Container, NavLink } from './styles';

const Navbar: React.FC = () => {
  const { toggleTheme } = useContext(AppContext);
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <NavLink to="/">Conversor de Texto</NavLink>
      <NavLink to="/binary-translator">Tradutor Binário</NavLink>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.primary}
        offColor={shade(0.1, colors.textComplement)}
      />
    </Container>
  );
};

export default Navbar;
