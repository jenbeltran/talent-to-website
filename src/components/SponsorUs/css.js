import styled from "styled-components"
import { breakpoints, colors } from "../../theme/constants"

const { tablet, desktop } = breakpoints
const { greyBlue, darkBlue } = colors

export const SponsorUsSection = styled.section`
  @media (min-width: ${desktop}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${greyBlue};
    margin: auto;
    width: 100%;
  }
  @media (max-width: ${tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${greyBlue};
    text-align: center;
    padding-bottom: 1rem;
  }
`
export const Headline = styled.p`
  @media (min-width: ${desktop}px) {
    font-size: 1.3rem;
    font-weight: 500;
    padding-left: 10rem;
    color: ${darkBlue};
  }
  @media (max-width: ${tablet}px) {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${darkBlue};
  }
`

export const ContactInfo = styled.p`
  font-size: 1rem;

  @media (min-width: ${desktop}px) {
    padding-right: 10rem;
  }
`
