import React from "react"
import slideStyles from "./slide.module.css"

// A heading with the year for a paticular slide
// A flexbox with two parts:
// 1. A heading and a paragraph
// 2. Image carousel

const Slide = ({ props }) => (
  <div className={slideStyles.year}>
    {props.year}
    <div className={slideStyles.card}>
      <div className={slideStlyes.description}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <img src={props.image} className={slideStyles.carousel} alt="" />
      </div>
    </div>
  </div>
)

export default Slide
