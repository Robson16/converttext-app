import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  margin: 0 0.75rem 1.5rem 0;
  padding: 1.5rem;
  border: none;
  border-radius: 0;
  color: ${props => props.theme.colors.buttonText};
  background: ${props => props.theme.colors.primary};

  &:hover,
  &:focus {
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
  }
`;
