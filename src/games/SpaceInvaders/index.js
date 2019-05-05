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
        year="1978"
        title="Space Invaders"
        description="A staple of sci-fi aesthetics — battle between mankind and belligerent aliens — has found its pixel art interpretation in another early arcade game. Here, the shapes tell a story of a technological clash: the human player is a simple tank-like unit moving between rounded off defenses, while bio-mechanical looking aliens resemble eerie oceanic creatures with swaying tentacles as they continuously inch downward. This archetypical imagery helped propel the game to an iconic status."
      />
      <ImageGridList
        tileData={tileData}
        columns={2}
        cellHeight={160}
        lightboxContent={lightboxContent}
      />
      <Link to="/pacman" style={{ margin: "auto", textDecorationLine: "none" }}>
        <NextSlideButton text="What's next?" />
      </Link>
    </SlidePaper>
  )
}

export default Slide
