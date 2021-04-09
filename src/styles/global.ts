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
    position: relative;
    height: 100vh;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {    
    background: var(--white-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
  }

  a {
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

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }  
`