import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Flex } from "common/layout"
import { Text, Heading } from "common/typography"
import { Link } from "common/links"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(LOGO)
  return (
    <header style={{ background: `black`, marginBottom: `1.45rem` }} >
      <Flex
        maxWidth='1140px'
        height='100px'
        m='0 auto'
        p='1rem'
        alignItems='center'
      >
        <Link to="/" >
          <Img fixed={data.file.childImageSharp.fixed} />
        </Link>
        <Heading m='0' fontWeight='600' >
          <Text color='white'>
            {siteTitle.toUpperCase()}
          </Text>
        </Heading>
      </Flex>
    </header>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const LOGO = graphql`
  {
    file(relativePath: {eq: "astro.png" }) {
      childImageSharp{
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`