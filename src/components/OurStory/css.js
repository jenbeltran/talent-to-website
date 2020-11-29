import styled from "styled-components"
import { H2 } from "../../theme/typography"

import { colors } from "../../theme/constants"

const { greyBlue } = colors

const StorySection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${greyBlue};
  text-align: center;
`

const Storyh1 = styled(H2)`
  margin: 0;
`

const Storydiv = styled.div`
  @media (min-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Storyp = styled.p`
  line-height: 30px;
  text-align: center;
  padding: 20px 50px 0px 50px;
`

export { StorySection, Storyh1, Storydiv, Storyp }
