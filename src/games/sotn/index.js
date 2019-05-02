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
        year="1997"
        title="Castlevania: Symphony of the Night"
        description="The inexorable march of technology not only opens space for new ideas to be realised, but also closes opportunity window for the older techniques to flourish and live up to their full potential. In the late 90s, entertainment industry was trending heavily towards 3D, and deep forays back into 2D weren't particularly welcomed neither by the general public, nor publishers. Those who were betting on 2D thus chose late mastery instead of early adoption, a decision that could be fatal at the time. In spite of all, it was decided to infuse an old series with new mechanics and add to it the best that pixel art had to offer. And a classic game was born, completing the half of now fully mature genre of platformers, 'metroidvanias'."
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
