import React from 'react';

import { Container, NavLink } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavLink to="/">Conversor de Texto</NavLink>
      <NavLink to="/binary-translator">Tradutor Binário</NavLink>
    </Container>
  );
};

export default Navbar;
