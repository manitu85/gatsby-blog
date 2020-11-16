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
    color: ${({ theme }) => theme.colors.mainWhite};
    letter-spacing: 2px;
    font-size: .9rem;
    /* font-family: monospace; */
    background-color: ${({ theme }) => theme.colors.text} ;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: ${themeGet('colors.accent', '#fff')}
    }
  }

`

export default GlobalStyles
    /* background: ${({ theme }) => theme.colors.mainOrange}; */