import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'common/utils/global.styled'
import theme from 'theme/theme'
import { Container } from 'common/container.styled'


const Layout = ({ children }) => {

  const data = useStaticQuery(SITE_METADATA)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header style={{ color: '#fff' }} siteTitle={`Trash Blog`} />
      <Container>
        <main>
          {children}
        </main>
        <Footer />
      </Container>
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