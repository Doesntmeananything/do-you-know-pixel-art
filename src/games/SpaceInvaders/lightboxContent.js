import React from "react"
import image1 from "../../../public/static/media/Space Invaders/SI1.png"
import image2 from "../../../public/static/media/Space Invaders/SI2.png"
import image3 from "../../../public/static/media/Space Invaders/SI3.jpg"

const lightboxContent = {
  media: [
    <iframe
      src="https://www.youtube.com/embed/MU4psw3ccUI?start=7"
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
    image1,
    image2,
    image3,
  ],
  description: [
    "The less the aliens on the screen, the faster the game is — this variable rendering speed became an intentional and importnant game mechanic",
    "The western arcade release has a painted moon backdrop against the game screen",
    "Each alien type is scored differently, and it's important that they're easily distinguished",
    "The elusive red UFO grants the highest amount of points but can be a challenge to shoot down",
  ],
}

export default lightboxContent
