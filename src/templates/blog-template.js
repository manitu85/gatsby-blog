
import React from 'React'
import { graphql } from 'gatsby'

import Layout from 'components/layout/layout'
import { Text, Heading, SubHeading } from 'common/typography'
import { Box, Flex } from 'common/layout'
import { Link } from 'common/links'

const Blog = ({ data, pageContext }) => {
  // console.log('Data :>> ', data);
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext

  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${String(currentPage - 1)}`

  const posts = data.allMarkdownRemark.edges
  // console.log('posts :>> ', posts);
  return (
    <Layout>
      <Heading mb={3} color='accent' fontSize={[3, 4, 5]} >GATSBY TRASH BLOG</Heading>
      <SubHeading mb='1rem' >{data.allMarkdownRemark.totalCount} Posts</SubHeading>
      {
        posts.map(({ node: post }) => {
          return (
            <Box
              mb={4}
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
        maxWidth='300px'
        justifyContent='space-around'
        alignItems='center'
        m='0 auto'
      >
        {
          !isFirstPage && (
            <Link to={prevPage} rel='prev'>Prev Page</Link>
          )
        }{' '}
        {
          Array.from({ length: totalPages }, (_, idx) => (
            <Link
              key={idx}
              to={`/blog/${idx === 0 ? "" : idx + 1}`}
            >
              {idx + 1}
            </Link>
          ))
        }
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
  allMarkdownRemark(
    skip: $skip
    limit: $limit
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
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
  }
}
`
