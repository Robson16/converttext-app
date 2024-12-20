import {shade} from "polished";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 0.8rem;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  grid-gap: 0.5rem;
  align-items: center;
  flex: 1;
`;

export const NavLink = styled(Link)`
  padding: 1.15rem;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.textInPrimary};
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);

  &:hover {
    text-decoration: none;
    background-color: ${(props) => shade(0.1, props.theme.colors.primary)};
  }
`;
