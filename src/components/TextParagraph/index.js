import React from "react"
import { Wrapper, StyledLink, Button } from "./css.js"
import { H3 } from "../../theme/typography"

const TextParagraph = props => {
  const {
    alt,
    title,
    dashTitle,
    subtitle,
    description,
    secondDescription,
    thirdDescription,
    link,
    sectionName,
    typeform,
  } = props

  return (
    <Wrapper>
      {sectionName === "about-us" ? (
        <H3>
          <StyledLink href={link} alt={alt} target="_blank">
            {title} - {dashTitle}
          </StyledLink>
        </H3>
      ) : (
        <H3>
          <StyledLink href={link} alt={alt} target="_blank">
            {title}
          </StyledLink>
        </H3>
      )}
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <p>{secondDescription}</p>
      <p>{thirdDescription}</p>

      {/* If the page is "join-us", then add a button to the card  */}
      {sectionName === "join-us" ? (
        <Button>
          <StyledLink
            href={typeform}
            target="_blank"
            rel="noreferrer"
            alt={"Click here to fill out our typeform"}
          >
            Sign Up
          </StyledLink>
        </Button>
      ) : null}
    </Wrapper>
  )
}

export default TextParagraph
