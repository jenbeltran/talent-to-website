import styled from "styled-components"

import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { skyBlue, black, greyBlue, darkBlue } = colors

//Sponsor Us banner
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

//Footer Section
export const FooterSection = styled.section`
  @media (min-width: ${tablet}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${skyBlue};
    margin: auto;
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${skyBlue};
  text-align: center;
`

export const JenInfo = styled.p`
  font-size: 1rem;

  @media (min-width: ${tablet}px) {
    padding-left: 3rem;
  }
`

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${black};

  &:hover {
    cursor: pointer;
  }
`
export const SocialIconList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;

  @media screen and (min-width: ${tablet}px) {
    justify-content: flex-start;
  }
`

export const SocialIcon = styled.img`
  height: 35px;
  width: 35px;
  padding: 1rem;

  @media (min-width: ${tablet}px) {
    padding-right: 2rem;
  }
`
