import React from "react"
import image1 from "../../../public/static/media/Pacman/PM1.png"
import image2 from "../../../public/static/media/Pacman/PM2.png"

const lightboxContent = {
  media: [
    image1,
    image2,
    <iframe
      src="https://www.youtube-nocookie.com/embed/DRiHMc9yi7g"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{
        minWidth: "50vw",
        minHeight: "70vh",
        maxWidth: "97%",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    />,
  ],
  description: [
    "Set against a black and blue-neon background, the characters and items are vibrant and pop off the screen",
    "Colour servers an important gameplay purpose, as it allows experienced players to keep track of each ghost and their movement patterns",
    "Intermissions between the levels toy with the character designs and interactions and give them a bit more depth",
  ],
}

export default lightboxContent
