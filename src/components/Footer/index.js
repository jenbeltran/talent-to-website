import React from "react"

import linkedin from "../../images/linkedin.png"

import { FooterSection, ContactInfo, SocialIcon } from "./.css.js"

const Footer = () => {
  return (
    <FooterSection id="contact">
      <ContactInfo>
        {" "}
        TalentTO © {new Date().getFullYear()} - Built with &#9825; by Jen
        Beltran
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
