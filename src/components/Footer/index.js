import React from "react"

import linkedin from "../../images/linkedin.png"

import {
  SponsorUsSection,
  Headline,
  ContactInfo,
  FooterSection,
  JenInfo,
  StyledAnchor,
  SocialIcon,
} from "./.css.js"

const Footer = () => {
  return (
    <div>
      <SponsorUsSection>
        <Headline>Sponsor Us</Headline>
        <ContactInfo>
          For sponsorship packages, please reach out to
          TalentTOCommunity@gmail.com
        </ContactInfo>
      </SponsorUsSection>

      <FooterSection id="contact">
        <JenInfo>
          {" "}
          TalentTO © {new Date().getFullYear()} - Built with &#9825; by{" "}
          <StyledAnchor
            href="https://www.linkedin.com/in/jenfbeltran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jen Beltran
          </StyledAnchor>
        </JenInfo>

        <a
          href="https://www.linkedin.com/company/talentto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={linkedin} />
        </a>
      </FooterSection>
    </div>
  )
}

export default Footer
