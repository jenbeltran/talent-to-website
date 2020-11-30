import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderPicture from "../components/HeaderPicture"
import SectionTitle from "../components/SectionTitles"
import Titles from "../components/SectionTitles/data"
import WaysToJoin from "../components/WaysToJoin"
import WaysToJoinTwo from "../components/WaysToJoinTwo"
import Data from "../components/WaysToJoin/data"

const JoinUsPage = () => (
  <Layout>
    <SEO title="Join Us" />
    <HeaderPicture />
    <SectionTitle headline={Titles[1].headline} />
    <WaysToJoin
      photo={Data[0].photo}
      alt={Data[0].alt}
      title={Data[0].title}
      description={Data[0].description}
    />
    <WaysToJoinTwo
      photo={Data[1].photo}
      alt={Data[1].alt}
      title={Data[1].title}
      description={Data[1].description}
    />
  </Layout>
)

export default JoinUsPage
