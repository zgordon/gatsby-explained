import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            location
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="About" />
      <h1>About {site.siteMetadata.title}</h1>
      <ul>
        <li>Author: {site.siteMetadata.author}</li>
        <li>Location: {site.siteMetadata.location}</li>
      </ul>
      <p>Where do you want to go now?</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2/">Page 2</Link>
        </li>{" "}
        <li>
          <Link to="/fake-url/">404 Page</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default AboutPage
