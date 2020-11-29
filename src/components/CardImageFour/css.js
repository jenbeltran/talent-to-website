import styled from "styled-components"
import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { darkBlue, lightGrey } = colors

export const CardSection = styled.section`
  @media (min-width: ${tablet}px) {
    background-color: ${lightGrey};
    position: relative;
    display: flex;
    margin-top: auto;
    padding: 2rem 5rem 3rem 5rem;
  }

  margin: auto;
  background-color: ${lightGrey};
`

export const CardPhotoMin = styled.img`
  @media (min-width: ${tablet}px) {
    height: 0%;
    width: 0%;
    margin: auto;
    position: relative;
  }

  height: 100%;
  width: 100%;
  margin: auto;
  position: relative;
`

export const CardPhotoMax = styled.img`
  @media (min-width: ${tablet}px) {
    height: 300px;
    width: 475px;
    position: relative;
    display: flex;
    margin: auto;
    box-shadow: 10px 10px ${darkBlue};
    border-radius: 5%;
  }

  height: 0%;
  width: 0%;
  margin: auto;
  position: relative;
`

export const Wrapper = styled.div`
  @media (min-width: ${tablet}px) {
    padding-right: 5rem;
    padding-top: 1rem;
  }

  margin: auto;
  padding: 2rem;
  text-align: center;
`
