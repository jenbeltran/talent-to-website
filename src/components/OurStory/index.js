import React from "react"
import { StoryInfo, StoryTitle } from "./data"
import { StorySection, Storyh1, Storydiv, Storyp } from "./css.js"

const OurStory = () => {
  const { point1, point2 } = StoryInfo
  const { headline } = StoryTitle
  return (
    <StorySection>
      <Storydiv>
        <Storyh1>{headline}</Storyh1>
      </Storydiv>
      <Storyp>{point1}</Storyp>
      <Storyp>{point2}</Storyp>
    </StorySection>
  )
}

export default OurStory
