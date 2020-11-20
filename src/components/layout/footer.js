import React from 'react'
import useSiteMetadata from 'hooks/useSiteMetaData'

const Footer = () => {

  const { author } = useSiteMetadata()

  return (
    <footer style={{ marginTop: `2rem`, textAlign: 'center' }}>
      {author} © {new Date().getFullYear()}, Built with{` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer

