import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.15rem;
  width: 100%;
  min-width: 300px;
  background-color: ${(props) => props.theme.colors.placeholder};

  &:not(:first-child) {
    margin-top: 1.15rem;
  }
`;
