import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OurStory from "../components/OurStory"
import Team from "../components/Team"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <OurStory />
    <Team />
  </Layout>
)

export default IndexPage
