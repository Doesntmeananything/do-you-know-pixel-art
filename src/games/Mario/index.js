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
        year="1985"
        title="Super Mario Bros."
        description="How do you create a vibrant virtual world, constantly surprising and full of eclectic characters? Now, how do you put it on a 256-kilobit cartridge? By understanding how to turn technical limitations into creative advantages. Rather than sacrifice the quality of art for its quantity, the developer team used clever techniques to create detailed objects and utilised screen positioning and palette swaps to properly contextualise them. The result is a seminal imagery that earned adoration of players across several generations."
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
        bg="#212121"
        to="/castlevania-3"
        style={{ margin: "auto", textDecorationLine: "none" }}
      >
        <NextSlideButton text="What's next?" />
      </AniLink>
    </SlidePaper>
  )
}

export default Slide
