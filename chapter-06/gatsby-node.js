/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = require.resolve(`./src/templates/page.js`)

  const pages = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(pages)/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL pages query.`)
    return
  }
  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(`Creating Page: /${node.frontmatter.slug}`)
    createPage({
      path: `/${node.frontmatter.slug}`,
      component: pageTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const postTemplate = require.resolve(`./src/templates/post.js`)
  const posts = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (posts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL posts query.`)
    return
  }
  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(`Creating Post: /blog/${node.frontmatter.slug}`)
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const postsTemplate = require.resolve(`./src/templates/posts.js`)
  const postsPerPage = 2
  const numPages = Math.ceil(
    posts.data.allMarkdownRemark.edges.length / postsPerPage
  )
  Array.from({ length: numPages }).forEach((_, i) => {
    const path = i === 0 ? `/blog` : `/blog/${i}`
    console.log(`Creating Blog: ${path}`)
    createPage({
      path,
      component: postsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
