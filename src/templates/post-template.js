import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout/layout'
import { Text } from 'common/typography'
import { Box } from 'common/layout'


const PostTemplate = ({ data: post }) => {
  return (
    <Layout>
      <Text as='h1' mb={16} fontSize={24} >
        {post.markdownRemark.frontmatter.title}
      </Text>
      <Box
        dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}
      />
    </Layout>
  )
}

export default PostTemplate

// context: {slug: post.fields.slug}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`