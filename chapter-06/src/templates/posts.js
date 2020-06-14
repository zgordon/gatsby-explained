import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

const PostsTemplate = ({ data, classes, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title={`Blog Post Archive - Page ${pageContext.currentPage}`} />
      {posts.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p style={{ fontSize: `70%` }}>Published {node.frontmatter.date}</p>
          <p>{node.frontmatter.excerpt}</p>
        </article>
      ))}
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default PostsTemplate

export const postsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            slug
            title
          }
        }
      }
    }
  }
`
