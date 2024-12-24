import {createGlobalStyle} from "styled-components";

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
    background: ${(props) => props.theme.colors.background};
  }

  a {
   color: ${(props) => props.theme.colors.link};
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
    color: ${(props) => props.theme.colors.textBase};
  }

  #root {
    margin: 0 auto;
    padding: 1rem;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }
`;
