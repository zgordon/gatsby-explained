import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gatsbyIcon from "../images/gatsby-icon.png"
import Image from "../components/image"

import "./test.css"

const ImageTest = () => (
  <Layout>
    <SEO title="Image Test" />
    <h1>Image Test</h1>
    <img src={gatsbyIcon} alt="Gatsby Icon" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default ImageTest
