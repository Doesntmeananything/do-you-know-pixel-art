import React from "react"
import image1 from "../../images/3rdstrike/3rdstrike1.jpg"
import image2 from "../../images/3rdstrike/3rdstrike2.gif"
import image3 from "../../images/3rdstrike/3rdstrike3.gif"

const lightboxContent = {
  media: [
    <iframe
      src="https://www.youtube.com/embed/FCN7QBekjk8"
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
    <iframe
      src="https://www.youtube.com/embed/JzS96auqau0"
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
    "The game takes its 'Street' name quite seriously and establishes an urban street art theme from the first moments",
    "Trailing silhouettes are used extensively to add more weight and power to special attacks",
    "Each move expresses unique personality of characters",
    "When animating fast motions, the artists weren't afraid to stretch and contract character sprites in order to add elasticity and fluidity but without distorting weight distribution (something that's very hard to do in 3D)",
    "Perhaps the biggest contribution of 3rd Strike to the videogame history is the legendary 'Evo Moment #37'",
  ],
}

export default lightboxContent
