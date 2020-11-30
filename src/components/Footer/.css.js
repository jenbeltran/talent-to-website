import styled from "styled-components"

import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { skyBlue, black } = colors

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

export const ContactInfo = styled.p`
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

export const SocialIcon = styled.img`
  height: 35px;
  padding: 1rem;

  @media (min-width: ${tablet}px) {
    padding-right: 3rem;
  }
`
