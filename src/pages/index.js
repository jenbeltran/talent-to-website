import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import OurStory from "../components/OurStory"
// import Team from "../components/Team"
import CardImage from "../components/CardImage"
import CardImageTwo from "../components/CardImageTwo"
import WaysToJoin from "../components/CardImage/data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CardImage
      photo={WaysToJoin[0].photo}
      alt={WaysToJoin[0].alt}
      title={WaysToJoin[0].title}
      description={WaysToJoin[0].description}
    />
    <CardImageTwo
      photo={WaysToJoin[1].photo}
      eventAlt={WaysToJoin[1].alt}
      title={WaysToJoin[1].title}
      description={WaysToJoin[1].description}
    />
    <CardImage
      photo={WaysToJoin[2].photo}
      eventAlt={WaysToJoin[2].alt}
      title={WaysToJoin[2].title}
      description={WaysToJoin[2].description}
    />
  </Layout>
)

export default IndexPage
