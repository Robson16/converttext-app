import styled from "styled-components";

interface ContainerProps {
  customStyle?: React.CSSProperties;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 300px;

  ${({customStyle}) =>
    customStyle &&
    Object.entries(customStyle).map(([key, value]) => `${key}: ${value};`)}
`;
