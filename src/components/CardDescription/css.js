import styled from "styled-components"
import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { darkBlue, lightGrey, black } = colors

export const TitleDiv = styled.div`
  @media (min-width: ${tablet}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${lightGrey};
`

export const CardSection = styled.section`
  @media (min-width: ${tablet}px) {
    background-color: ${lightGrey};
    position: relative;
    display: flex;
    margin: auto;
    padding: 2rem 5rem 3rem 5rem;
  }

  margin: auto;
  background-color: ${lightGrey};
`

export const CardPhoto = styled.img`
  @media (min-width: ${tablet}px) {
    height: 300px;
    width: 475px;
    position: relative;
    display: flex;
    margin: auto;
    box-shadow: -10px 10px ${darkBlue};
    border-radius: 5%;
  }

  height: 100%;
  width: 100%;
  margin: auto;
  position: relative;
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

//Round Photo
export const RoundPhoto = styled.img`
  @media (min-width: ${tablet}px) {
    height: 300px;
    width: 300px;
    border: 2px solid ${black};
    border-radius: 50%;
    object-fit: cover;
  }

  height: 100%;
  width: 100%;
  margin: auto;
  position: relative;
`
export const RoundPhotoMin = styled.img`
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

export const RoundPhotoMax = styled.img`
  @media (min-width: ${tablet}px) {
    height: 300px;
    width: 300px;
    border: 2px solid ${black};
    border-radius: 50%;
    object-fit: cover;
  }

  height: 0%;
  width: 0%;
  margin: auto;
  position: relative;
`
