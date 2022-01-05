import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 3rem;

  label {
    font-size: 1.6rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 15rem;
    margin-top: 0.8rem;
    border-radius: 0;
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.lineInWhite};
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
  }
`;
