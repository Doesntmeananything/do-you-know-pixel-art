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
        year="1989"
        title="Castlevania III: Dracula's Curse"
        description="The endless possibilities of pixel art opened up a lot of stylistic niches, and it wasn't long before darker and more grounded aesthetic became prominent. By borrowing from the gothic horror ethos, Castlevania espoused medieval imagery with pop-culture sensibilities. Even though it was bound my many technical limitations of its time, this mix proved to be as volatile as it was immensely appealing. In many ways, Castlevania III became the apogee of the style that the series itself created in the middle 80s."
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
        bg="#b71c1c"
        to="/sonic-the-hedgehog"
        style={{ margin: "auto", textDecorationLine: "none" }}
      >
        <NextSlideButton text="What's next?" />
      </AniLink>
    </SlidePaper>
  )
}

export default Slide
