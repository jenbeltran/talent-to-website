import styled from "styled-components"
import Image from "../../images/event.jpg"
import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints

const { black } = colors

export const AboutSection = styled.section`
  @media (min-width: ${tablet}px) {
    position: relative;
    margin: auto;
    display: flex;
    padding: 5rem;

    background-image: url(${Image});
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 50% 100%;
  }
`

export const Wrapper = styled.div`
  @media (min-width: ${tablet}px) {
    padding-left: 2rem;
    margin-right: 60%;
    border-left: 5px solid ${black};
  }
  padding: 2rem;
`

export const Description = styled.p`
  font-size: 1.3rem;
`

export const Photo = styled.img`
  @media (min-width: ${tablet}px) {
    display: none;
  }
  width: 100%;
  height: auto;
`
