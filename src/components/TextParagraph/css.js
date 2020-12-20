import styled from "styled-components"
import { breakpoints, colors } from "../../theme/constants"

const { tablet } = breakpoints
const { darkBlue, lightBlue } = colors

export const Wrapper = styled.div`
  @media (min-width: ${tablet}px) {
    padding-left: 3rem;
    padding-top: 1rem;
    margin: auto;
  }

  margin: auto;
  padding: 2rem;
  text-align: center;
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${darkBlue};
`
export const Button = styled.button`
  background-color: ${lightBlue};
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 75px;
  height: 45px;

  &:hover {
    cursor: pointer;
  }
`
