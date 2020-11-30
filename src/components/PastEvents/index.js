import React from "react"
import { CardSection, CardPhoto, Wrapper } from "./css.js"
import { H3 } from "../../theme/typography"

const CardImage = props => {
  const { photo, alt, title, description } = props
  return (
    <CardSection>
      <CardPhoto src={photo} alt={alt} />
      <Wrapper>
        <H3>{title}</H3>
        <p>{description}</p>
      </Wrapper>
    </CardSection>
  )
}

export default CardImage
