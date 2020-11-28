import styled from "styled-components"
import { breakpoints, colors } from "../../theme/constants"

const { tablet, desktop } = breakpoints
const { skyBlue } = colors

const FooterSection = styled.section`
  @media (min-width: ${desktop}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${skyBlue};
    position: absolute;
    bottom: 0;
    margin: auto;
    width: 100%;
  }
  @media (max-width: ${tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${skyBlue};
    text-align: center;
  }
`

const Headline = styled.p`
  @media (min-width: ${desktop}px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
  @media (max-width: ${tablet}px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

const ContactInfo = styled.p`
  font-size: 1rem;

  @media (min-width: ${desktop}px) {
    padding-left: 3rem;
  }
`

const SocialIcon = styled.img`
  height: 35px;
  padding: 1rem;

  @media (min-width: ${desktop}px) {
    padding-right: 3rem;
  }
`

export { FooterSection, Headline, ContactInfo, SocialIcon }
