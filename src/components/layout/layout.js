import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'common/global.styled'
import theme from 'theme/theme'


const Layout = ({ children }) => {

  const data = useStaticQuery(SITE_METADATA)

  return (
    <ThemeProvider theme={theme}>
      <Header title={data.site.siteMetadata.title || `Title`} />
      <GlobalStyles />
      <main>
        {children}
      </main>
      <Footer />
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