import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import LandingHeader from "../components/LandingHeader"
import OurStory from "../components/OurStory"

import JoinUs from "../components/CardDescription"
import Data from "../components/CardDescription/joinUsData"
import Headline from "../components/CardDescription/headlineData"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingHeader />
    <OurStory />
    <JoinUs
      sectionName={"join-us"}
      headline={Headline[0].headline}
      photo={Data[0].photo}
      alt={Data[0].alt}
      title={Data[0].title}
      description={Data[0].description}
      typeform={Data[0].typeform}
      photoTwo={Data[1].photo}
      altTwo={Data[1].alt}
      titleTwo={Data[1].title}
      descriptionTwo={Data[1].description}
      secondDescriptionTwo={Data[1].descriptionTwo}
      linkTwo={Data[1].link}
      typeformTwo={Data[1].typeform}
    />
  </Layout>
)

export default IndexPage
