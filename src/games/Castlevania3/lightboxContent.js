import React from "react"
import image1 from "../../images/castlevania3/castle1.gif"
import image2 from "../../images/castlevania3/castle2.png"
import image3 from "../../images/castlevania3/castle3.jpg"

const lightboxContent = {
  media: [
    <iframe
      src="https://www.youtube.com/embed/Cw0l0MUttsk?start=2938"
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
    "The Japanese version, having been released on Famicom, boasted better sound than its western version due to an additional audio chip, but also used different sprites (e.g. the statue in the begging of this level was 'clothed' in the US release) and was overall easier",
    "The intro scene sets the tone for the game and is an example of clever visual techniques used throughout the game to simulate complex graphical effects, like lightning casting sharp shadows",
    "Visual designers paid great attention to detail, creating consistent lighting across incredibly detailed backgrounds",
    "The foliage in this scene is a great visual way of doing a lot with very little",
  ],
}

export default lightboxContent
