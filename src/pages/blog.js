import React from 'React'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/layout/layout'
import styled from 'styled-components';
import { typography, color, space } from 'styled-system'

const Blog = () => {

  const data = useStaticQuery(GET_MARKDOWN_POSTS)
  const posts = data.allMarkdownRemark.edges
  console.log('posts :>> ', posts);
  return (
    <Layout>
      <Text as='h1' mb={16} color='accent' fontSize={36} >GATSBY TRASH BLOG</Text>
      <Text as='h3' h3 mb={16}>{data.allMarkdownRemark.totalCount} Posts</Text>
      {
        posts.map(({ node: post }) => {
          return (
            <div
              style={{ marginBottom: '2rem' }}
              key={post.id} >
              <Text as='h2' >{post.frontmatter.title}{' '}
                <span style={{ color: '#25f15f' }} >{post.frontmatter.date}</span>
              </Text>
              <p>{post.excerpt}</p>
            </div>
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

const Text = styled.div`
  ${typography}
  ${color}
  ${space}
`;

