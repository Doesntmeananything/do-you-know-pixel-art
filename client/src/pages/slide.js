import React from "react"
import TitularYear from "../components/titular-year"
import BackgroundLayer from "../components/background-layer"
import Card from "../components/card"

export default () => (
  <>
    <BackgroundLayer />
    <TitularYear year="1975" />
    <Card
      title="Space Invaders"
      text="This is a text about this game."
      media="Some image"
    />
  </>
)
