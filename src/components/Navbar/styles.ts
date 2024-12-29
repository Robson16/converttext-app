import {shade} from "polished";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.15rem;
  margin-bottom: 1.15rem;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, auto));
  gap: 1.15rem;
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
  box-shadow: 0px 30px 40px ${(props) => props.theme.colors.shadow};

  &:hover {
    text-decoration: none;
    background-color: ${(props) => shade(0.1, props.theme.colors.primary)};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    margin-bottom: 0;
  }
`;
