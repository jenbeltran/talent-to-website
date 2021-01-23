import styled from "styled-components"
import { H2 } from "../../theme/typography"
import { colors, breakpoints } from "../../theme/constants"
const { desktop, tablet } = breakpoints

const { white, lightBlue } = colors

export const CardSection = styled.section`
  background-color: ${white};
  position: relative;
  display: flex;

  @media screen and (min-width: ${desktop}px) {
    padding: 5rem 1.25rem 8rem 1.25rem;
  }
`

export const CardPhoto = styled.img`
  @media (min-width: 850px) {
    height: 550px;
    width: auto;
    position: absolute;
  }

  @media (max-width: ${tablet}px) {
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const CardTextSection = styled.div`
  @media (min-width: 1025px) {
    background-color: ${white};
    position: relative;
    height: 400px;
    width: 700px;
    margin-left: 30rem;
    margin-right: 5rem;
    transform: translateY(1.5rem);
    padding: 3rem;
  }

  @media (min-width: 850px) and (max-width: 1024px) {
    background-color: ${white};
    position: relative;
    height: 400px;
    width: 700px;
    margin-left: 13rem;
    padding: 1rem;
    transform: translateY(1.5rem);
  }

  @media (max-width: ${tablet}px) {
    background: rgba(255, 255, 255, 0.75);
    padding: 3rem 0.5rem;
    text-align: center;
  }
`

export const CardH2 = styled(H2)`
  margin-top: 0;
  text-align: center;

  @media screen and (min-width: ${desktop}px) {
    text-align: left;
  }
`

export const CardP = styled.p`
  line-height: 2rem;
`

export const Wrapper = styled.div`
  margin: auto;
`

export const Button = styled.button`
  background-color: ${lightBlue};
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 120px;
  height: 45px;

  &:hover {
    cursor: pointer;
  }
`
