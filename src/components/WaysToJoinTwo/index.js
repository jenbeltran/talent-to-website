import React from "react"
import {
  CardSection,
  CardPhotoMin,
  CardPhotoMax,
  Wrapper,
  Button,
} from "./css.js"
import { H3 } from "../../theme/typography"

const CardImageTwo = props => {
  const { photo, alt, title, description } = props
  return (
    <CardSection>
      <CardPhotoMin src={photo} alt={alt} />
      <Wrapper>
        <H3>{title}</H3>
        <p>{description}</p>
        <Button>Sign Up</Button>
      </Wrapper>
      <CardPhotoMax src={photo} alt={alt} />
    </CardSection>
  )
}

export default CardImageTwo
