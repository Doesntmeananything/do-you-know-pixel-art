import React from "react"
import image1 from "../../../public/static/media/Pong/Pong1.png"
import image2 from "../../../public/static/media/Pong/Pong2Cabinet.jpg"

const lightboxContent = {
  media: [
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
  ],
  description: [
    "Classic fast paced arcade experience",
    "The artistic choices, albeit technically limited, work to accentuate what's important in the gameplay",
    "The bright colours of the arcade machine frame the screen and serve as an invitation to the players",
  ],
}

export default lightboxContent
