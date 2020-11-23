import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from 'styled-components'
import { Flex } from "common/layout"
import { Link } from "common/links"
import { Text, Heading } from "common/typography"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(LOGO)
  return (
    <header style={{ marginBottom: `1.45rem` }} >
      <Flex
        maxWidth='768px'
        width='100%'
        height='100px'
        m='0 auto'
        p='1rem'
        alignItems='center'
        justifyContent='space-between'
        templates
      >
        <Flex alignItems='center' >
          <Link to="/" >
            <Img fixed={data.file.childImageSharp.fixed} />
          </Link>
          {/* <Heading m='0' fontWeight='600' color='white'>
            {siteTitle.toUpperCase()}
          </Heading> */}
        </Flex>
        <Menu>
          <Items to="/">Posts</Items>
          <Items to="/about">About</Items>
          <Items to="/contact">Contact</Items>
        </Menu>
      </Flex>
    </header >
  )
}

const Menu = styled.nav`
`;

const Items = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  height: 100%;
  margin-left: 1rem;
  transition: all .2s ease;
  background: ${({ theme }) => theme.colors.background};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

  }
`

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