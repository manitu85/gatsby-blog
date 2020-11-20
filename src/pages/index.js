import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import styled from 'styled-components'

import useSiteMetadata from 'hooks/useSiteMetaData'
import Layout from "components/layout/layout"
import SEO from "components/seo/seo"
// import { GET_SINGLE_IMAGE } from 'graphql/getSingleImage'

import { Text, Heading } from 'common/typography'
import avatar from 'assets/images/gravatar.jpg'
import { Box, Flex } from 'common/layout'


const BlogIndex = () => {
  const data = useStaticQuery(GET_SINGLE_IMAGE)

  const {
    description,
    author,
  } = useSiteMetadata()
  return (
    <Layout>
      <SEO title='Home' />
      <Box m='0 auto' maxWidth='750px' >
        <Img fluid={data.img1.childImageSharp.fluid} />
      </Box>
      <User
        username={author}
        excerpt={description}
      />
      <Heading>My Blog Posts</Heading>

    </Layout>
  )
}


export default BlogIndex


export const GET_SINGLE_IMAGE = graphql`
{
  img1: file(relativePath: { eq: "meaning.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const User = ({ username, excerpt }) => (
  <UserWrapper>
    <Avatar />
    <Description>
      <Text as='p'>Hi people</Text>
      <Username>{username}</Username>
      <Excerpt>{excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)


const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px 12px;
`;

const Avatar = styled.img.attrs({
  src: avatar,
  alt: 'avatar'
})`
  flex: 0 0 150px;
  width: 150px;
  margin: 0;
  border-radius: 50%;
`;

const Description = styled.div`
  flex: 1;
  padding: 12px;
`;

const Username = styled.div`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1.25rem;
`

const Excerpt = styled.p`
  margin: 0;
`
