import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OurStory from "../components/OurStory"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <OurStory />
  </Layout>
)

export default IndexPage
