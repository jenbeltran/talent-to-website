import React from "react"

import TextParagraph from "../TextParagraph"

import {
  TitleDiv,
  CardSection,
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
    link,
    description,
    typeform,
    photoTwo,
    altTwo,
    titleTwo,
    linkTwo,
    descriptionTwo,
    typeformTwo,
  } = props

  return (
    <div>
      {headline === "remove" ? null : (
        <TitleDiv>
          <H2>{headline}</H2>
        </TitleDiv>
      )}

      <CardSection>
        {sectionName === "about-us" ? (
          <RoundPhoto src={photo} alt={alt} />
        ) : (
          <CardPhoto src={photo} alt={alt} />
        )}

        <TextParagraph
          sectionName={sectionName}
          title={title}
          link={link}
          description={description}
          typeform={typeform}
        />
      </CardSection>

      {headline === "remove" ? null : (
        <CardSection>
          {sectionName === "about-us" ? (
            <RoundPhotoMin src={photoTwo} alt={altTwo} />
          ) : (
            <CardPhotoMin src={photoTwo} alt={altTwo} />
          )}

          <TextParagraph
            sectionName={sectionName}
            title={titleTwo}
            description={descriptionTwo}
            typeform={typeformTwo}
            link={linkTwo}
          />

          {sectionName === "about-us" ? (
            <RoundPhotoMax src={photoTwo} alt={altTwo} />
          ) : (
            <CardPhotoMax src={photoTwo} alt={altTwo} />
          )}
        </CardSection>
      )}
    </div>
  )
}

export default CardDescription
