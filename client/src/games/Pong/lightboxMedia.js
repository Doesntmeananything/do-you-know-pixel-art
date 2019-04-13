import React from "react"
import image1 from "../../../public/static/media/Pong/Pong1.png"
import image2 from "../../../public/static/media/Pong/Pong2Cabinet.jpg"

const lightboxMedia = [
  <iframe
    src="https://www.youtube.com/embed/fiShX2pTz9A"
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
]

export default lightboxMedia
