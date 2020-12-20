import React from "react"
import { Story, Mission, Vision } from "./data"
import { StorySection, Description, Quote, StyledDiv } from "./css.js"
import { H2, H3 } from "../../theme/typography"

const OurStory = () => {
  return (
    <StorySection>
      <H2>{Story.headline}</H2>
      <Description>{Story.point1}</Description>
      <Description>{Story.point2}</Description>
      <Description>{Story.point3}</Description>
      <Quote>{Story.point4}</Quote>
      <Description>{Story.point5}</Description>

      <StyledDiv>
        <H3>{Mission.headline}</H3>
        <Description>{Mission.point1}</Description>
      </StyledDiv>

      <StyledDiv>
        <H3>{Vision.headline}</H3>
        <Description>{Vision.point1}</Description>
      </StyledDiv>
    </StorySection>
  )
}

export default OurStory
