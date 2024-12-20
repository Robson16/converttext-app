import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0 3rem;
  padding: 1.15rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);

  h1 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 4.2rem;
    color: ${(props) => props.theme.colors.titleInPrimary};
  }

  p {
    margin-top: 1.2rem;
    font-size: 1.5rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme.colors.titleInPrimary};
  }
`;
