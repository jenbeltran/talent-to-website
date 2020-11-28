import React from "react"
import logo from "../../images/logo.png"

import {
  StyleNav,
  StyledNavBrand,
  StyleNavLinks,
  NavListItem,
  StyledLink,
  CheckboxInput,
  CheckboxLabel,
  MobileNavIcon,
  NavElement,
  Tab,
} from "./css"

const Nav = () => {
  return (
    <div id="navbar">
      <CheckboxLabel htmlFor="mobile-nav-icon">
        <MobileNavIcon />
      </CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        id="mobile-nav-icon"
        name="mobile-nav-icon"
      />

      <StyleNav id="#nav">
        <StyledNavBrand id="icon">
          <StyledLink to="/" aria-label="Click to navigate to homepage">
            <img src={logo} alt="TalentTO Logo" />
          </StyledLink>
        </StyledNavBrand>

        <NavElement>
          <StyleNavLinks>
            <NavListItem>
              <StyledLink to="/about-us">
                <Tab>About Us</Tab>
              </StyledLink>
            </NavListItem>
            <NavListItem>
              <StyledLink to="/events">
                <Tab>Events</Tab>
              </StyledLink>
            </NavListItem>
            <NavListItem>
              <StyledLink to="/join-us">
                <Tab>Join Us</Tab>
              </StyledLink>
            </NavListItem>
          </StyleNavLinks>
        </NavElement>
      </StyleNav>
    </div>
  )
}

export default Nav
