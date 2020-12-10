import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import HeaderPicture from "../components/HeaderPicture"
import OurStory from "../components/OurStory"
import TeamBio from "../components/CardDescription"
import Headline from "../components/CardDescription/headlineData"
import Data from "../components/CardDescription/teamData"

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" />
    <HeaderPicture />
    <OurStory />
    <TeamBio
      sectionName={"about-us"}
      headline={Headline[2].headline}
      photo={Data[0].photo}
      alt={Data[0].name}
      title={Data[0].name}
      description={Data[0].bio}
      link={Data[0].profile}
      photoTwo={Data[1].photo}
      altTwo={Data[1].name}
      titleTwo={Data[1].name}
      descriptionTwo={Data[1].bio}
      linkTwo={Data[1].profile}
    />
    <TeamBio
      sectionName={"about-us"}
      headline={"remove"}
      photo={Data[2].photo}
      alt={Data[2].name}
      title={Data[2].name}
      description={Data[2].bio}
      link={Data[2].profile}
    />
  </Layout>
)

export default AboutUsPage
