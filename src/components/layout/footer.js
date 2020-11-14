import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  return (
    <footer style={{ marginTop: `2rem` }}>
      © {new Date().getFullYear()}, Built with{` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer

// const FOOTER_METADATA = graphql`
//   query {

//   }
// `