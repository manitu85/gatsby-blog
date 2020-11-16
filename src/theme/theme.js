const theme = {
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    text: '#101010',
    background: '#fff',
    primary: '#07c',
    secondary: '#f15025',
    muted: '#191919',
    accent: '#d2aa5c',
    highlight: '#29112c',
    gray: '#999',

    primaryDark: '#0C0C0D',
    primaryLight: '#EFFFFA',
    mainWhite: '#fff',
    mainBlack: '#202020',
    mainOrange: '#f15025',
    mainYellow: '#d2aa5c',
    mainYellowDark: '#F2AF29',
    mainGreyDark: '#474747',
    mainGrey: '#efefef',
    primaryHover: '#28114a',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      }
    }
  },
  fonts: {
    body: 'Roboto Slab, serif',
    heading: 'Open Sans, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  letterSpacings: {
    normal: 'normal',
    caps: '0.25em',
    labels: '0.05em',
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [
        5,
        6
      ],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'primary',
      hover: {
        color: 'secondary'
      }
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    img: {
      'maxWidth': '100%',
      'display': 'block'
    }
  },
}



export default theme














