import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import UpcomingEventCard from "../components/UpcomingEvents"
import { UpcomingEvent } from "../components/UpcomingEvents/data"

import PastEvents from "../components/CardDescription"
import Data from "../components/CardDescription/pastEventsData"
import Headline from "../components/CardDescription/headlineData"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <UpcomingEventCard
      photo={UpcomingEvent.photo}
      alt={UpcomingEvent.alt}
      headline={UpcomingEvent.headline}
      headlineTwo={UpcomingEvent.headlineTwo}
      pointOne={UpcomingEvent.pointOne}
      pointTwo={UpcomingEvent.pointTwo}
      buttonText={UpcomingEvent.buttonText}
      buttonLink={UpcomingEvent.buttonLink}
    />

    <PastEvents
      sectionName={"events"}
      headline={Headline[1].headline}
      photo={Data[0].photo}
      alt={Data[0].alt}
      title={Data[0].title}
      description={Data[0].description}
      photoTwo={Data[0].photo}
      altTwo={Data[0].alt}
      titleTwo={Data[0].title}
      descriptionTwo={Data[0].description}
    />
    <PastEvents
      sectionName={"events"}
      headline={"remove"}
      photo={Data[0].photo}
      alt={Data[0].alt}
      title={Data[0].title}
      description={Data[0].description}
    />
  </Layout>
)

export default EventsPage
