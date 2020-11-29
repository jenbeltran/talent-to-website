import styled from "styled-components"
import { breakpoints } from "../../theme/constants"

const { tablet } = breakpoints

export const HeaderPhoto = styled.img`
  @media (min-width: ${tablet}px) {
    width: 100%;
    height: 220px;
  }

  height: 0%;
  width: 0%;
  margin: auto;
  position: relative;
`
