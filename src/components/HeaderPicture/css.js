import styled from "styled-components"

import Image from "../../images/event.jpg"
import { breakpoints } from "../../theme/constants"

const { tablet } = breakpoints

export const HeaderPhoto = styled.section`
  @media (min-width: ${tablet}px) {
    position: relative;
    margin: auto;
    display: flex;
    padding: 8rem;

    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
