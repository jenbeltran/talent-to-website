import React from "react"

import TextParagraph from "../TextParagraph"

import {
  CardSection,
  TitleDiv,
  CardPhoto,
  CardPhotoMin,
  CardPhotoMax,
  RoundPhoto,
  RoundPhotoMin,
  RoundPhotoMax,
} from "./css.js"
import { H2 } from "../../theme/typography"

const CardDescription = props => {
  const {
    sectionName,
    headline,
    photo,
    alt,
    title,
    dashTitle,
    subtitle,
    link,
    description,
    secondDescription,
    typeform,
    photoTwo,
    altTwo,
    titleTwo,
    dashTitleTwo,
    subtitleTwo,
    linkTwo,
    descriptionTwo,
    secondDescriptionTwo,
    thirdDescriptionTwo,
    typeformTwo,
  } = props

  return (
    <div>
      {/* If you use headline={"remove"}, it will remove the headline so you can reuse the 
      photo/card components without the title  */}
      {headline === "remove" ? null : (
        <TitleDiv>
          <H2>{headline}</H2>
        </TitleDiv>
      )}

      {/* If the section is "about-us", the photos are rounded */}
      <CardSection>
        {sectionName === "about-us" ? (
          <RoundPhoto src={photo} alt={alt} />
        ) : (
          <CardPhoto src={photo} alt={alt} />
        )}

        <TextParagraph
          sectionName={sectionName}
          title={title}
          dashTitle={dashTitle}
          subtitle={subtitle}
          link={link}
          description={description}
          secondDescription={secondDescription}
          typeform={typeform}
        />
      </CardSection>

      {/* If the section is "about-us", the photos are rounded */}
      <CardSection>
        {sectionName === "about-us" ? (
          <RoundPhotoMin src={photoTwo} alt={altTwo} />
        ) : (
          <CardPhotoMin src={photoTwo} alt={altTwo} />
        )}

        <TextParagraph
          sectionName={sectionName}
          title={titleTwo}
          dashTitle={dashTitleTwo}
          subtitle={subtitleTwo}
          description={descriptionTwo}
          secondDescription={secondDescriptionTwo}
          thirdDescription={thirdDescriptionTwo}
          typeform={typeformTwo}
          link={linkTwo}
        />

        {/* If the section is "about-us", the photos are rounded */}
        {sectionName === "about-us" ? (
          <RoundPhotoMax src={photoTwo} alt={altTwo} />
        ) : (
          <CardPhotoMax src={photoTwo} alt={altTwo} />
        )}
      </CardSection>
    </div>
  )
}

export default CardDescription
