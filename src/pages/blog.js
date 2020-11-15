import React from 'React'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/layout/layout'
import { Text } from 'common/text.styled'
import { Box } from 'common/box.styled'

const Blog = () => {

  const data = useStaticQuery(GET_MARKDOWN_POSTS)
  const posts = data.allMarkdownRemark.edges
  console.log('posts :>> ', posts);
  return (
    <Layout>
      <Text as='h1' mb={16} color='accent' fontSize={36} >GATSBY TRASH BLOG</Text>
      <Text as='h3' mb={16}>{data.allMarkdownRemark.totalCount} Posts</Text>
      {
        posts.map(({ node: post }) => {
          return (
            <Box
              mb={24}
              key={post.id}
            >
              <Text as='h2' >{post.frontmatter.title}{' '}
                <span style={{ color: '#25f15f' }} >{post.frontmatter.date}</span>
              </Text>
              <p>{post.excerpt}</p>
            </Box>
          )
        })
      }

    </Layout>
  )
}

export default Blog

const GET_MARKDOWN_POSTS = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
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

