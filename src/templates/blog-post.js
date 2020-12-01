import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout/layout'
import { Text } from 'common/typography'
import { Box } from 'common/layout'

const BlogPost = ({ data }) => {

  const post = data.markdownRemark

  return (
    <Layout>
      <Text as='h1' mb={2} fontSize={4} >
        {post.frontmatter.title}
      </Text>
      <Text as='h4' mb={2} fontSize={3} >
        {post.timeToRead}{' '}
        {post.timeToRead > 1 ? 'minutes' : 'minute'}
      </Text>
      <Box
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`