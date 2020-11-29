import styled from "styled-components"

import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { lightGrey } = colors

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
