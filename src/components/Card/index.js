import React from "react"

import { H3 } from "../../theme/typography"
import {
  CardSection,
  CardPhoto,
  CardTextSection,
  CardH2,
  CardP,
  Button,
  Wrapper,
} from "./css"

const CardImage = props => {
  const {
    alt,
    headline,
    headlineTwo,
    pointOne,
    pointTwo,
    pointThree,
    photo,
    buttonLink,
    buttonText,
  } = props
  return (
    <CardSection>
      <Wrapper>
        <CardPhoto src={photo} alt={alt} />
        <CardTextSection>
          <CardH2>{headline}</CardH2>
          <H3>{headlineTwo}</H3>
          <CardP>{pointOne}</CardP>
          <CardP>{pointTwo}</CardP>
          <CardP>{pointThree}</CardP>
          {buttonText && (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <Button>{buttonText}</Button>
            </a>
          )}
        </CardTextSection>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
