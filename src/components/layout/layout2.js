import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import useSiteMetadata from 'hooks/useSiteMetaData'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'common/utils/global'
import theme from 'theme/theme'
import { Box } from 'common/layout'


const Layout = ({ children }) => {

  const {
    title: defaultTitle,
  } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header color='#fff' siteTitle={defaultTitle} />
      <Box
        maxWidth='768px'
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout