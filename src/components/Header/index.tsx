import React, { ReactNode } from 'react';
import GoogleAdSense from '../GoogleAdSense';
import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const adClient = import.meta.env.VITE_AD_CLIENT;
  const adSlotHeader = import.meta.env.VITE_AD_SLOT_HEADER;

  return (
    <>
      <GoogleAdSense
        style={{ display: 'inline-block', width: '960px', height: '90px' }}
        adClient={adClient}
        adSlot={adSlotHeader}
      />
      <Container>
        {children}
      </Container>
    </>
  )
};

export default Header;
