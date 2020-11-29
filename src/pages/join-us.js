import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderPicture from "../components/HeaderPicture"
import SectionTitle from "../components/SectionTitles"
import Titles from "../components/SectionTitles/data"
import CardImage from "../components/CardImage"
import CardImageTwo from "../components/CardImageTwo"
import WaysToJoin from "../components/CardImage/data"

const JoinUsPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderPicture />
    <SectionTitle headline={Titles[1].headline} />
    <CardImage
      photo={WaysToJoin[0].photo}
      alt={WaysToJoin[0].alt}
      title={WaysToJoin[0].title}
      description={WaysToJoin[0].description}
    />
    <CardImageTwo
      photo={WaysToJoin[1].photo}
      alt={WaysToJoin[1].alt}
      title={WaysToJoin[1].title}
      description={WaysToJoin[1].description}
    />
    <CardImage
      photo={WaysToJoin[2].photo}
      alt={WaysToJoin[2].alt}
      title={WaysToJoin[2].title}
      description={WaysToJoin[2].description}
    />
  </Layout>
)

export default JoinUsPage
