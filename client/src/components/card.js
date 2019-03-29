import React from "react"
import cardStyles from "./card.module.css"
import Button from "../components/button"

const Card = props => (
  <div className={cardStyles.container}>
    <div className={cardStyles.description}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
    <div className={cardStyles.media}>{props.media}</div>
    <Button />
  </div>
)

export default Card
