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
        year="1994"
        title="Super Metroid"
        description="In many ways, technological progress allows us to revisit our previous ideas and to reimagine and reiterate on them within a wider creative space. Almost a decade since the release of the original Metroid, its successor not only rose above most of the action games of the time, but added such irreducibly enticing elements to its exploration aspect as to inspire many games to come. The visual style of the game helped create a tangible cinematic feel in the vein of darker sci-fi action films, jumping effortlessly between suspense and thrill."
      />
      <ImageGridList
        tileData={tileData}
        columns={3}
        cellHeight={160}
        lightboxContent={lightboxContent}
      />
      <AniLink
        cover
        direction="up"
        bg="#330e62"
        to="/symphony-of-the-night"
        style={{ margin: "auto", textDecorationLine: "none" }}
      >
        <NextSlideButton text="What's next?" />
      </AniLink>
    </SlidePaper>
  )
}

export default Slide
