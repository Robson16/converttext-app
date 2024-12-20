import {shade} from "polished";
import styled from "styled-components";

export const Container = styled.button`
  margin: 0 0.5rem 1rem 0;
  padding: 1.15rem;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.buttonText};
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    background-color: ${(props) => shade(0.1, props.theme.colors.primary)};
  }
`;
