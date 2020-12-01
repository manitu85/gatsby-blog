const path = require("path")
const { createFilePath } = require('gatsby-source-filesystem')


// Create slugs for posts
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {

  // const { createNodeField } = actions

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
const blogTemplate = path.resolve('./src/templates/blog-template.js')
const blogPost = path.resolve('./src/templates/blog-post.js')

// create pages with post slug
// Implement the Gatsby API “createPages”. This is called once the
exports.createPages = async ({ graphql, reporter, actions: { createPage } }) => {
  // const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const res = await graphql( // apprentices with graphql here !!!
    `
      {
        allMarkdownRemark(limit: 1000) {
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

  // console.log('RESULT :>> ', res);

  // Pragmatically create pages
  const posts = res.data.allMarkdownRemark.edges

  posts.forEach(({ node: post }) => {
    createPage({
      path: post.fields.slug,
      component: blogPost,
      context: {
        slug: post.fields.slug
      }
    })
  })


  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.fields.slug
      }
    })
  })

  const postsPerPage = 2
  const totalPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: totalPages }).forEach((_, idx,) => {
    const currentPage = idx + 1
    const isFirstPage = idx === 0
    const isLastPage = currentPage === totalPages

    createPage({
      path: isLastPage ? `/blog/` : `/blog/${currentPage}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: idx * postsPerPage,
        currentPage,
        isFirstPage,
        isLastPage,
        totalPages
      }
    })

  });

}