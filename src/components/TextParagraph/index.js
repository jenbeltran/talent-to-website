import React from "react"
import { Wrapper, StyledLink, Button } from "./css.js"
import { H3 } from "../../theme/typography"

const TextParagraph = props => {
  const { alt, title, description, link, sectionName, typeform } = props
  return (
    <Wrapper>
      <H3>
        <StyledLink href={link} alt={alt} target="_blank">
          {title}
        </StyledLink>
      </H3>
      <p>{description}</p>
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
