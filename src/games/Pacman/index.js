import React from "react"
import SlidePaper from "../../components/slidePaper"
import GameText from "../../components/gameText"
import ImageGridList from "../../components/imageGridList"
import NextSlideButton from "../../components/nextSlideButton"
import tileData from "./tileData"
import lightboxContent from "./lightboxContent"

function Slide(props) {
  const { color } = props
  return (
    <SlidePaper color={color}>
      <GameText
        year="1980"
        title="Pacman"
        description="One of the greatest strengths of pixel art is its ability to create striking images using simple shapes and colours — and let your imagination do the rest. The highest point was reached here, where a yellow puck travelling a maze, chasing or being chased by four cartoonish ghosts, became a pop-culture icon."
      />
      <ImageGridList
        tileData={tileData}
        columns={2}
        cellHeight={160}
        lightboxContent={lightboxContent}
      />
      <NextSlideButton text="What's next?" />
    </SlidePaper>
  )
}

export default Slide
