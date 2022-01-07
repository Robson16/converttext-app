import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 3rem;

  label {
    font-size: 1.6rem;
  }

  textarea {
    margin-top: 0.8rem;
    padding: 1.2rem 1.6rem;
    width: 100%;
    height: 16rem;
    min-height: 15rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.inputText};
    border-radius: 3px;
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid
      ${props => shade(0.25, props.theme.colors.inputBackground)};
    resize: vertical;
  }
`;
