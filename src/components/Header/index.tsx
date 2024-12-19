import React, { ReactNode } from 'react';
import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Header;
