import React from "react"
import { AboutData } from "./data"
import { AboutSection, Wrapper, Description, Photo } from "./css.js"
import { H1 } from "../../theme/typography"

const LandingHeader = () => {
  const { photo, alt, headline, pointOne } = AboutData
  return (
    <AboutSection>
      <Wrapper>
        <H1>{headline}</H1>
        <Description>{pointOne}</Description>
        <Description>{pointOne}</Description>
        <Description>{pointOne}</Description>
      </Wrapper>
      <Photo src={photo} alt={alt} />
    </AboutSection>
  )
}

export default LandingHeader
