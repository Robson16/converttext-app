import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 0.8rem;
  padding: 1.5rem 0;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  grid-gap: 0.8rem;
  align-items: center;
  flex: 1;
`;

export const NavLink = styled(Link)`
  padding: 1rem;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.textInPrimary};
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);

  &:hover {
    text-decoration: none;
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
  }
`;
