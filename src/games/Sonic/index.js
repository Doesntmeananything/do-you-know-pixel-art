import React from "react"
import SlidePaper from "../../components/slidePaper"
import GameText from "../../components/gameText"
import ImageGridList from "../../components/imageGridList"
import NextSlideButton from "../../components/nextSlideButton"
import tileData from "./tileData"
import lightboxContent from "./lightboxContent"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import NavigationDrawer from "../../navigation/navigationDrawer"

function Slide(props) {
  const { color } = props
  return (
    <SlidePaper color={color}>
      <NavigationDrawer />
      <GameText
        year="1991"
        title="Sonic the Hedgehog"
        description="As the appetite of the public grew, so did the level of technological advancement. 'Bigger and better' was the motto of many game studios at the time, and countless nights were spent trying to come up with the ways to put the new tech into a hot-selling package. Ultimately, it was symbolic that somewhat shapeless Mario was replaced, albeit temporarily, by bright-blue and aerodynamic-looking Sonic, signifying a new era in entertainment systems. The game was faster, more colourful (literally), had curved scenery, and branching paths. And with this mix, it became a new icon."
      />
      <ImageGridList
        tileData={tileData}
        columns={2}
        cellHeight={180}
        lightboxContent={lightboxContent}
      />
      <AniLink
        cover
        direction="up"
        bg="#424242"
        to="/super-metroid"
        style={{ margin: "auto", textDecorationLine: "none" }}
      >
        <NextSlideButton text="I'm up to speed!" />
      </AniLink>
    </SlidePaper>
  )
}

export default Slide
