import React from "react"

import photo from "../../images/event.jpg"

const PictureHeader = () => {
  return (
    <div>
      <img
        src={photo}
        alt="People at a TalentTO event"
        width="100%"
        height="220px"
      />
    </div>
  )
}

export default PictureHeader
