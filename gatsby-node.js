const path = require("path")
const { createFilePath } = require('gatsby-source-filesystem')

// Create slugs for posts
exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

const postTemplate = path.resolve('./src/templates/post-template.js')

// create pages with post slug
// Implement the Gatsby API “createPages”. This is called once the
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const res = await graphql( // apprentices with graphql here !!!
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      } 
    `
  )
  // Handle errors
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Pragmatically create pages
  const posts = res.data.allMarkdownRemark.edges

  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.fields.slug
      }
    })
  })
}