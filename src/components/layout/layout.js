import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'common/utils/global.styled'
import theme from 'theme/theme'
import { Box } from 'common/layout'


const Layout = ({ children }) => {

  const data = useStaticQuery(SITE_METADATA)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header style={{ color: '#fff' }} siteTitle={`Trash Blog`} />
      <Box
        maxWidth='1140px'
        width='100%'
        m='0 auto'
        p='0 2rem'
      >
        <main>
          {children}
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export const SITE_METADATA = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout