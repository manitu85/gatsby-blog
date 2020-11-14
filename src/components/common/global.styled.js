import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

  *,
  *:before,
  *:after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit; 
  }

  html {
    box-sizing: border-box;
    font-size: 1rem;
    /* font-size: 62.5%; */
  }

  body {
    color: ${({ theme }) => theme.colors.mainWhite};
    letter-spacing: 10px;
    font-size: .9rem;
    /* font-family: monospace; */
    background-color: ${({ theme }) => theme.colors.mainBlack} !important;
  }

`

export default GlobalStyles
    /* background: ${({ theme }) => theme.colors.mainOrange}; */