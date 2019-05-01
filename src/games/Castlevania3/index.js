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
        year="1989"
        title="Castlevania 3"
        description="The endless possibilities of pixel art opened up a lot of stylistic niches, and it wasn't long before darker and more grounded aesthetic became prominent. By borrowing from the gothic horror ethos, Castlevania espoused medieval imagery with pop-culture sensibilities. Even though it was bound my many technical limitations of its time, this mix proved to be as volatile as it was immensely appealing. In many ways, Castlevania 3 became the apogee of the style that the series itself created in the middle 80s."
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
