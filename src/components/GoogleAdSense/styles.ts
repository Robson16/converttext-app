import styled from "styled-components";

interface ContainerProps {
  customStyle?: React.CSSProperties;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  min-width: 100%;

  ${({customStyle}) =>
    customStyle &&
    Object.entries(customStyle).map(([key, value]) => `${key}: ${value};`)}
`;
