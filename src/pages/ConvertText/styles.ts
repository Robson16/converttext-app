import styled from 'styled-components';

export const Container = styled.div``;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;
