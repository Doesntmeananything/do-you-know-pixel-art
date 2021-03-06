import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SlidePaper from "../../components/slidePaper"
import GameText from "../../components/gameText"
import ImageGridList from "../../components/imageGridList"
import NextSlideButton from "../../components/nextSlideButton"
import tileData from "./tileData"
import lightboxContent from "./lightboxContent"
import NavigationDrawer from "../../navigation/navigationDrawer"

function Slide(props) {
  const { color } = props
  return (
    <SlidePaper color={color}>
      <NavigationDrawer />
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
      <AniLink
        cover
        direction="up"
        bg="#4caf50"
        to="/space-invaders"
        style={{ margin: "auto", textDecorationLine: "none" }}
      >
        <NextSlideButton text="Let's continue!" />
      </AniLink>
    </SlidePaper>
  )
}

export default Slide
