import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'


const GlobalStyles = createGlobalStyle`

  root: {
    --main-black: #202020;
  }

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
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.mainWhite} ;
    /* letter-spacing: 2px; */
    /* font-family: monospace; */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      color: ${themeGet('colors.accent', '#fff')};
      /* text-decoration: underline; */
    }
  }

`

export default GlobalStyles
    /* background: ${({ theme }) => theme.colors.mainOrange}; */