import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  div,
  body,
  input,
  button,
  textarea {
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;
  }

  body,
  input,
  button,
  textarea {
    color: ${props => props.theme.colors.textBase};
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 1140px;
    margin: 0 auto;
    padding-top: 1rem;

    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }
`;
