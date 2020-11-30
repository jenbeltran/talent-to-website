import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpcomingEventCard from "../components/UpcomingEvents"
import { UpcomingEvent } from "../components/UpcomingEvents/data.js"

import SectionTitle from "../components/SectionTitles"
import Titles from "../components/SectionTitles/data"
import PastEvents from "../components/PastEvents"
import PastEventsTwo from "../components/PastEventsTwo"
import EventData from "../components/PastEvents/data"

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
      point={UpcomingEvent.point}
      buttonText={UpcomingEvent.buttonText}
      buttonLink={UpcomingEvent.buttonLink}
    />
    <SectionTitle headline={Titles[0].headline} />
    <PastEvents
      photo={EventData[0].photo}
      alt={EventData[0].alt}
      title={EventData[0].title}
      description={EventData[0].description}
    />
    <PastEventsTwo
      photo={EventData[0].photo}
      alt={EventData[0].alt}
      title={EventData[0].title}
      description={EventData[0].description}
    />
  </Layout>
)

export default EventsPage
