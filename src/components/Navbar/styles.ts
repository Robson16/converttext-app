import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  grid-gap: 0.8rem;
  width: 100%;
  padding-bottom: 1.5rem;
  background-color: ${props => props.theme.colors.background};
`;

export const NavLink = styled(Link)`
  padding: 1rem;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.textInPrimary};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    text-decoration: none;
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
  }
`;
