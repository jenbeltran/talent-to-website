import React from "react"
import { TitleDiv } from "./css.js"
import { H2 } from "../../theme/typography"

const SectionTitle = props => {
  const { headline } = props
  return (
    <div>
      <TitleDiv>
        <H2>{headline}</H2>
      </TitleDiv>
    </div>
  )
}

export default SectionTitle
