import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import HeaderPicture from "../components/HeaderPicture"

import JoinUs from "../components/CardDescription"
import Data from "../components/CardDescription/joinUsData"
import Headline from "../components/CardDescription/headlineData"

const JoinUsPage = () => (
  <Layout>
    <SEO title="Join Us" />
    <HeaderPicture />

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
      typeformTwo={Data[1].typeform}
    />
  </Layout>
)

export default JoinUsPage
