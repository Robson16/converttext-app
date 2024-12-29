import {darken} from "polished";
import styled from "styled-components";

export const Container = styled.button`
  margin: 0 1.15rem 1.15rem 0;
  padding: 1.15rem;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.buttonText};
  background-color: ${(props) => props.theme.colors.buttonBackground};
  box-shadow: 0px 30px 40px ${(props) => props.theme.colors.shadow};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.buttonBackground)};
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;
