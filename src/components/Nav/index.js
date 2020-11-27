import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

import {
  StyleNav,
  StyledNavBrand,
  StyleNavLinks,
  NavListItem,
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
          <Link to="/" aria-label="Click to navigate to homepage">
            <img src={logo} alt="TalentTO Logo" />
          </Link>
        </StyledNavBrand>

        <NavElement>
          <StyleNavLinks>
            <NavListItem>
              <Link to="/about-us">
                <Tab>About Us</Tab>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/events">
                <Tab>Events</Tab>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/join-us">
                <Tab>Join Us</Tab>
              </Link>
            </NavListItem>
          </StyleNavLinks>
        </NavElement>
      </StyleNav>
    </div>
  )
}

export default Nav
