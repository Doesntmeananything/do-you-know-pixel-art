import React from "react"
import SlidePaper from "../../components/slidePaper"
import GameText from "../../components/gameText"
import ImageGridList from "../../components/imageGridList"
import NextSlideButton from "../../components/nextSlideButton"
import tileData from "./tileData"
import lightboxContent from "./lightboxContent"
import { Link } from "gatsby"

function Slide(props) {
  const { color } = props
  return (
    <SlidePaper color={color}>
      <GameText
        year="1999"
        title="Street Fighter III: 3rd Strike"
        description="One of the purest form of competition in the virtual world is fighting games. Pit against your opponent 1 versus 1, you can rely only on your reactions, tactics, and strategy either to be rewarded with a fist-pump win or to suffer a heartbreaking loss. At the turn of the millennia, Capcom was determined to bring the most enticing competitive experience, iteration after iteration. 2D played a large role in achieving the required level of speed and precision, which was difficult to do in 3D at the time. Nevertheless, the art design was hardly the weak part of the game: incredibly colourful, meticulously detailed, and wonderfully stylised, it used a wider range of techniques to create fluid and powerful action. To this day, it serves as an interactive manual on how to do masterful pixel art."
      />
      <ImageGridList
        tileData={tileData}
        columns={3}
        cellHeight={160}
        lightboxContent={lightboxContent}
      />
      <Link to="/modern" style={{ margin: "auto", textDecorationLine: "none" }}>
        <NextSlideButton text="What's next?" />
      </Link>
    </SlidePaper>
  )
}

export default Slide
