import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Form = styled.form``;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const About = styled.section`
  display: grid;
  gap: 1.5rem;

  /* 3 colunas para desktops grandes */
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 2 colunas para tablets */
  @media (max-width: 992px) and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 1 coluna para celulares */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
