import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import styled from 'styled-components'

import useSiteMetadata from 'hooks/useSiteMetaData'
import Layout from "components/layout/layout"
import SEO from "components/seo/seo"
import { Link } from 'common/links'

// import { GET_SINGLE_IMAGE } from 'graphql/getSingleImage'

import { Box, Flex } from 'common/layout'
import { Text, Heading, SubHeading } from 'common/typography'
import avatar from 'assets/images/gravatar.jpg'


const BlogIndex = () => {
  const { img, posts } = useStaticQuery(QUERY)

  const {
    description,
    author,
  } = useSiteMetadata()


  return (
    <Layout>
      <SEO title='Blog' />
      <Box m='0 auto' p={10, 0} maxWidth='750px' >
        <Img fluid={img.childImageSharp.fluid} />
      </Box>
      <User
        username={author}
        excerpt={description}
      />
      <Heading
        mb={3}
        color='mainGreyDark'
        fontWeight='display'
        fontSize={[3, 4, 5]}
      >My Blog Posts</Heading>
      <SubHeading mb='1rem' >{posts.totalCount} Posts</SubHeading>

      {
        posts.edges.map(({ node: post }) => {
          return (
            <Box
              mb={4}
              key={post.id}
            >
              <Link to={`${post.fields.slug}`} >
                <Text
                  as='h3'
                  textStyle='display'
                  color='primary'
                >{post.frontmatter.title}{' '}
                  <span style={{ color: '#595959' }} >{post.frontmatter.date}</span>
                </Text>
              </Link>
              <Text as='p' mt='4px' >{post.excerpt}</Text>
            </Box>
          )
        })
      }

    </Layout>
  )
}


export default BlogIndex

// GET_MARKDOWN_POSTS
const QUERY = graphql`
  query {
    posts: allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY, h:mm:ss a", locale: "sr")
          }
          excerpt(pruneLength: 120)
        }
      }
    },
    img: file(relativePath: { eq: "meaning.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const GET_SINGLE_IMAGE = graphql`
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
