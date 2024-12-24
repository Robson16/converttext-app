import {styled} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.15rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.textInPrimary};
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme.colors.titleInPrimary};
  }
`;
