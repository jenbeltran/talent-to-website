import React from "react"

import linkedin from "../../images/linkedin.png"

import { FooterSection, ContactInfo, StyledAnchor, SocialIcon } from "./.css.js"

const Footer = () => {
  return (
    <FooterSection id="contact">
      <ContactInfo>
        {" "}
        TalentTO © {new Date().getFullYear()} - Built with &#9825; by{" "}
        <StyledAnchor
          href="https://www.linkedin.com/in/jenfbeltran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jen Beltran
        </StyledAnchor>
      </ContactInfo>

      <a
        href="https://www.linkedin.com/company/talentto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={linkedin} />
      </a>
    </FooterSection>
  )
}

export default Footer
