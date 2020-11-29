import React from "react"
import { HeaderPhoto } from "./css"
import photo from "../../images/event.jpg"

const PictureHeader = () => {
  return (
    <div>
      <HeaderPhoto src={photo} alt="People at a TalentTO event" />
    </div>
  )
}

export default PictureHeader
