import styled from "styled-components"
import { colors } from "./constants"

const { darkBlue } = colors

export const H1 = styled.h1`
  font-weight: 900;
  margin-bottom: 20px;
  margin-top: 0;
  color: ${darkBlue};
  font-size: 3rem;

  @media screen and (min-width: 769px) {
    font-size: 3.5rem;
  }
`

export const H2 = styled.h2`
  font-weight: 900;
  color: ${darkBlue};
  font-size: 2.5rem;
  text-align: center;
  padding: 0 2rem;

  @media screen and (min-width: 769px) {
    font-size: 3.5rem;
    padding: 0;
  }
`

export const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${darkBlue};
`
