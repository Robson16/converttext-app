import {Link} from "react-router-dom";
import {styled} from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.15rem;
  padding: 3rem 0;
  font-size: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const NavGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  flex: 1;
`;

export const NavLink = styled(Link)`
  padding: 1.15rem;
  text-align: center;
  text-decoration: none;
  border: none;

  &:hover {
  }
`;
