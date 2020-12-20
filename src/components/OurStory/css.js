import styled from "styled-components"

import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { greyBlue } = colors

export const StorySection = styled.section`
  padding: 2rem;
  background: ${greyBlue};
  text-align: center;

  @media (min-width: ${tablet}px) {
    font-size: 17px;
    padding: 3rem 7rem 5rem 7rem;
  }
`

export const Description = styled.p`
  line-height: 30px;
  text-align: center;
  padding: 0.5rem 0rem 0.5rem 0rem;
`

export const Quote = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  padding: 2rem 0rem 2rem 0rem;
`

export const StyledDiv = styled.div`
  padding-top: 2rem;
`
