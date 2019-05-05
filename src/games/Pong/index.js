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
        year="1972"
        title="Pong"
        description="One of the first majorly popular videogames presents a simple yet uncluttered monochromatic board and uses symmetry to create dynamic visuals with shapes as simple as those found in basic geometry. Stripped down to an essential table tennis paraphernalia — a score screen and two pads hitting a ball across a net — Pong serves as an example of art and game design working in close tandem at its very abstract."
      />
      <ImageGridList
        tileData={tileData}
        columns={2}
        cellHeight={160}
        lightboxContent={lightboxContent}
      />
      <Link to="/si" style={{ margin: "auto", textDecorationLine: "none" }}>
        <NextSlideButton text="Let's continue!" />
      </Link>
    </SlidePaper>
  )
}

export default Slide
