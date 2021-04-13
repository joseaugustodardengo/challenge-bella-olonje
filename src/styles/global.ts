import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-color: #ffffff;
    --dark-white-color: #F7F7F7;
    --secondary-text:  #737373;;
    --orange-color: #FA4A0C;   
    --dark-blue: #252B42;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    width: 100%;
    max-width: 1880px;
    height: 100vh;
    background: var(--white-color);
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 1.6rem;
  }

  a, p {
    font-weight: 600;
    color: var(--dark-blue);
    text-decoration: none;    
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  h4 {
    font-weight: 500;
  } 

  button {
    cursor: pointer;
    color: var(--white-color);
  }  
`