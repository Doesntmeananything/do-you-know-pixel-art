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
        year="1980"
        title="Pacman"
        description="Arguably the greatest strength of pixel art is its ability to create striking images using simple shapes and colours — and let your imagination do the rest. The highest point was reached here, where a yellow puck travelling a maze, chasing or being chased by four cartoonish ghosts, became a pop-culture icon."
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
        bg="#42a5f5"
        to="/super-mario-bros"
        style={{ margin: "auto", textDecorationLine: "none" }}
      >
        <NextSlideButton text="Onward!" />
      </AniLink>
    </SlidePaper>
  )
}

export default Slide
