import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout/layout'
import { Text } from 'common/typography'
import { Box } from 'common/layout'


const PostTemplate = ({ data: post }) => {
  return (
    <Layout>
      <Text as='h1' mb={2} fontSize={4} >
        {post.markdownRemark.frontmatter.title}
      </Text>
      <Text as='h4' mb={2} fontSize={3} >
        {post.markdownRemark.timeToRead}{' '}
        {post.markdownRemark.timeToRead > 1 ? 'minutes' : 'minute'}
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
      timeToRead 
      frontmatter {
        title
      }
    }
  }
`

// {
//   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//     edges {
//       node {
//         timeToRead
//         excerpt(pruneLength: 25)
//         frontmatter {
//           title
//           date(difference: "days")
//         }
//       }
//     }
//   }
// }
