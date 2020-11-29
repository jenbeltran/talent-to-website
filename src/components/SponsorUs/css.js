import styled from "styled-components"
import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { greyBlue, darkBlue } = colors

export const SponsorUsSection = styled.section`
  @media (min-width: ${tablet}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${greyBlue};
    margin: auto;
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${greyBlue};
  text-align: center;
`
export const Headline = styled.p`
  @media (min-width: ${tablet}px) {
    font-size: 1.3rem;
    font-weight: 500;
    padding-left: 10rem;
    color: ${darkBlue};
  }

  font-size: 1.5rem;
  font-weight: 500;
  color: ${darkBlue};
`

export const ContactInfo = styled.p`
  font-size: 1rem;

  @media (min-width: ${tablet}px) {
    padding-right: 10rem;
  }
`
