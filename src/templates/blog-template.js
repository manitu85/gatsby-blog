
import React from 'React'
import { graphql } from 'gatsby'

import Layout from 'components/layout/layout'
import { Text, Heading, SubHeading } from 'common/typography'
import { Box, Flex } from 'common/layout'
import { Link } from 'common/links'

const Blog = ({ data, pageContext }) => {
  // console.log('Data :>> ', data);
  const { currentPage, isFirstPage, isLastPage } = pageContext

  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${String(currentPage - 1)}`

  const posts = data.allMarkdownRemark.edges
  // console.log('posts :>> ', posts);
  return (
    <Layout>
      <Heading mb='1rem' color='accent' fontSize={36} >GATSBY TRASH BLOG</Heading>
      <SubHeading mb='1rem' >{data.allMarkdownRemark.totalCount} Posts</SubHeading>
      {
        posts.map(({ node: post }) => {
          return (
            <Box
              mb={24}
              key={post.id}
            >
              <Link to={`/posts${post.fields.slug}`} >
                <Text as='h3' >{post.frontmatter.title}{' '}
                  <span style={{ color: '#25f15f' }} >{post.frontmatter.date}</span>
                </Text>
              </Link>
              <Text as='p' mt='4px' >{post.excerpt}</Text>
            </Box>
          )
        })
      }
      {/* Pagination links */}
      <Flex
        maxWidth='200px'
        justifyContent='space-between'
      >
        {
          !isFirstPage && (
            <Link to={prevPage} rel='prev'>Prev Page</Link>
          )
        }{' '}
        {
          !isLastPage && (
            <Link to={nextPage} rel='next'>Next Page</Link>
          )
        }
      </Flex>
    </Layout>
  )
}

export default Blog

// GET_MARKDOWN_POSTS
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(skip: $skip, limit: $limit) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

