import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
