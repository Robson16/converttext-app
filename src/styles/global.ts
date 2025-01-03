import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
    /* Ajusta a base do font-size para facilitar cálculo em rem */
    font-size: 62.5%; /* 1rem = 10px */
  }

   @media (min-width: 700px) {
    :root {
      /* Ajuste para telas maiores */
      font-size: 65%; /* 1rem = 10.4px */
    }
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html, 
  body, 
  #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textBase};
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem; /* Padrão de 16px */
    font-weight: 500;
    line-height: 1.6;
  }

  a {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  ul, 
  ol {
    margin-bottom: 1rem;
  }

  input, 
  button, 
  textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  #root {
    margin: 0 auto;
    padding: 1rem;
    max-width: 1140px;
    display: flex;
    flex-direction: column;
  }
`;
