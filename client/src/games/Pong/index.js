import React from "react"
import { withStyles } from "@material-ui/core/styles"
import SlidePaper from "../../components/slidePaper"
import GameText from "../../components/gameText"
import ImageGridList from "../../components/imageGridList"
import NextSlideButton from "../../components/nextSlideButton"
import tileData from "./tileData"
import lightboxContent from "./lightboxContent"

const styles = theme => ({})

function Slide(props) {
  const { classes } = props
  return (
    <>
      <SlidePaper>
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
        <NextSlideButton text="Next Slide" />
      </SlidePaper>
    </>
  )
}

export default withStyles(styles)(Slide)
