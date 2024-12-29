import { ReactNode } from "react";
import GoogleAdSense from "../GoogleAdSense";
import { Container, NavGrid, NavLink } from "./styles";

interface FooterProps {
  children?: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  const adClient = import.meta.env.VITE_AD_CLIENT;
  const adSlotFooter = import.meta.env.VITE_AD_SLOT_FOOTER;

  return (
    <>
      <GoogleAdSense
        style={{ display: 'inline-block', width: '960px', height: '90px' }}
        adClient={adClient}
        adSlot={adSlotFooter}
      />
      <Container>
        {children}
        <NavGrid>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/politica-de-privacidade">Politica de Privacidade</NavLink>
        </NavGrid>
        <span>© 2021 - Todos os direitos reservados.</span>
      </Container>
    </>
  )
}

export default Footer;