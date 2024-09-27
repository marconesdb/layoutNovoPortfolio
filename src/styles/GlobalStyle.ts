import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input {
  font-family: 'Fira Code', sans-serif;
  }


  html {
    scroll-behavior: smooth;
  }

  body {
    
  background-color: #282c33;
 

  }
`;

export default GlobalStyles;
