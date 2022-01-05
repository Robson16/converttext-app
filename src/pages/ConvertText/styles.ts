import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;
