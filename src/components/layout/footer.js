import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

  const data = useStaticQuery(AUTHOR)
  const { author } = data.site.siteMetadata

  return (
    <footer style={{ marginTop: `2rem`, textAlign: 'textLeft' }}>
      {author} © {new Date().getFullYear()}, Built with{` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer

const AUTHOR = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`