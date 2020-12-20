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
      dashTitle={Data[0].position}
      subtitle={Data[0].degree}
      description={Data[0].bio}
      secondDescription={Data[0].bioTwo}
      link={Data[0].profile}
      photoTwo={Data[1].photo}
      altTwo={Data[1].name}
      titleTwo={Data[1].name}
      dashTitleTwo={Data[1].position}
      subtitleTwo={Data[1].degree}
      descriptionTwo={Data[1].bio}
      linkTwo={Data[1].profile}
    />
    <TeamBio
      sectionName={"about-us"}
      headline={"remove"}
      photo={Data[2].photo}
      alt={Data[2].name}
      title={Data[2].name}
      dashTitle={Data[2].position}
      description={Data[2].bio}
      secondDescription={Data[2].bioTwo}
      link={Data[2].profile}
      photoTwo={Data[3].photo}
      altTwo={Data[3].name}
      titleTwo={Data[3].name}
      dashTitleTwo={Data[3].position}
      descriptionTwo={Data[3].bio}
      secondDescriptionTwo={Data[3].bioTwo}
      thirdDescriptionTwo={Data[3].bioThree}
      linkTwo={Data[3].profile}
    />
  </Layout>
)

export default AboutUsPage
