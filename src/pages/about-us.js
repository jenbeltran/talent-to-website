import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OurStory from "../components/OurStory"
import Team from "../components/Team"
import HeaderPicture from "../components/HeaderPicture"

const AboutUsPage = () => (
  <Layout>
    <SEO title="About-Us" />
    <HeaderPicture />
    <OurStory />
    <Team />
  </Layout>
)

export default AboutUsPage
