import styled from 'styled-components';

export const Container = styled.div`
  & > main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
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
