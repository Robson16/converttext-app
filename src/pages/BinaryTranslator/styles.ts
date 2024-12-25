import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const About = styled.section`
  display: grid;
  gap: 1.5rem;

  /* 2 colunas para tablets */
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 1 coluna para celulares */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
