import React from 'React'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'

const Blog = () => {

  const data = useStaticQuery(GET_MARKDOWN_POSTS)
  const posts = data.allMarkdownRemark.edges
  console.log('posts :>> ', posts);
  return (
    <Layout>
      <h1 style={{ marginBottom: '2.5rem' }}>GATSBY TRASH BLOG</h1>
      <h3 style={{ marginBottom: '2rem' }}>{data.allMarkdownRemark.totalCount} Posts</h3>
      {
        posts.map(({ node: post }) => {
          return (
            <div
              style={{ marginBottom: '2rem' }}
              key={post.id} >
              <h2 style={{ textTransform: 'uppercase' }} >{post.frontmatter.title}{' '}
                <span style={{ color: '#f15025' }} >{post.frontmatter.date}</span>
              </h2>
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