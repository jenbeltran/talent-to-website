import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import OurStory from "../components/OurStory"
//import Team from "../components/Team"
// import CardImage from "../components/CardImage"
// import CardImageTwo from "../components/CardImageTwo"
// import Events from "../components/CardImage/data"
import SectionTitle from "../components/SectionTitles"
import Titles from "../components/SectionTitles/data"
import CardImageThree from "../components/CardImageThree"
import CardImageFour from "../components/CardImageFour"
import Events from "../components/CardImageThree/data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionTitle headline={Titles[0].headline} />
    <CardImageThree
      photo={Events[0].photo}
      alt={Events[0].alt}
      title={Events[0].title}
      description={Events[0].description}
    />
    <CardImageFour
      photo={Events[0].photo}
      alt={Events[0].alt}
      title={Events[0].title}
      description={Events[0].description}
    />
    <CardImageThree
      photo={Events[0].photo}
      alt={Events[0].alt}
      title={Events[0].title}
      description={Events[0].description}
    />
  </Layout>
)

export default IndexPage
