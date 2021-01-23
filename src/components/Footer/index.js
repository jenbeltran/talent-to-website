import React from "react"

import linkedin from "../../images/linkedin.png"
import meetup from "../../images/meetup.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"

import {
  SponsorUsSection,
  Headline,
  ContactInfo,
  FooterSection,
  JenInfo,
  StyledAnchor,
  SocialIconList,
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

        <SocialIconList>
          <li>
            <a
              href="https://www.linkedin.com/company/talentto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={linkedin} alt="go to LinkedIn page" />
            </a>
          </li>
          <li>
            <a
              href="https://www.meetup.com/talentto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={meetup} alt="go to Meetup page" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/talent_to/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={instagram} alt="go to Instagram page" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/301104044607323"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={facebook} alt="go to Facebook page" />
            </a>
          </li>
        </SocialIconList>
      </FooterSection>
    </div>
  )
}

export default Footer
