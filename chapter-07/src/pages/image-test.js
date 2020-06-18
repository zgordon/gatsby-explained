import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import gatsbyIcon from "../images/gatsby-icon.png"

import "./test.css"

const ImageTest = ({ data }) => (
  <Layout>
    <SEO title="Image Test" />
    <div>
      <Img fluid={data.canyons.childImageSharp.fluid} />
    </div>
    <h1>Image Test</h1>
    {/* <img src={gatsbyIcon} alt="Gatsby Icon" /> */}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales
      sollicitudin placerat.
    </p>
    <p>
      Fusce feugiat gravida magna nec accumsan. Quisque at mi lacinia, vulputate
      urna quis, ultricies ex. Maecenas mattis sapien et enim congue, nec rutrum
      risus commodo.
    </p>
    <Img
      className="right-align"
      style={{ float: `right`, margin: `0 0 10px 10px` }}
      fixed={data.gatsbyIcon.childImageSharp.fixed}
    />
    <p>
      Donec ante diam, ullamcorper non accumsan et, bibendum vel sapien.
      Phasellus pharetra mi venenatis orci lobortis tincidunt ut ut lorem.
      Phasellus iaculis, odio quis blandit maximus, velit lacus semper quam, non
      vestibulum tortor purus at lacus.
    </p>
    <p>
      Donec placerat neque at ipsum cursus, vitae vehicula est lacinia.Aliquam
      blandit ipsum eu tincidunt volutpat. Ut iaculis mattis turpis. Maecenas
      luctus ex nec risus molestie dapibus. Vestibulum nisl neque, pretium vitae
      efficitur at, accumsan non dolor. Ut posuere est nisl, id suscipit erat
      finibus sit amet.
    </p>
  </Layout>
)

export const imageTestQuery = graphql`
  query {
    canyons: file(
      relativePath: { eq: "alan-carrillo-HIghIy9i0aY-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 500
          traceSVG: { background: "#fed49e", color: "#f48e67" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(
          width: 200
          height: 200
          traceSVG: { background: "white", color: "#a67ecf" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ImageTest
