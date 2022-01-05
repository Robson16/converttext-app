import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;