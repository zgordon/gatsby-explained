import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Disqus } from "gatsby-plugin-disqus"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const disqusConfig = {
    shortname: `your-site-shortname`,
    config: { identifier: frontmatter.slug, title: frontmatter.title },
  }
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <p style={{ fontSize: `70%` }}>Published {frontmatter.date}</p>
      <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      <MDXRenderer>{body}</MDXRenderer>
      <Disqus {...disqusConfig} />
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
