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
        year="2004-20??"
        title="Modern Pixel Art Games"
        description="With progressively better hardware and software it became clear that 3D was the future of the entertainment industry. But the tradition of pixel art was too strong to be simply forgotten. Coupled with relative simplicity of producing 2D assets and practically zero technical limitations of the yesteryear, pixel art entered the milieu of hobbyist game developers and small studios. It appeared as a symbol of Indie game production and was instrumental in success of many games, espousing old-school techniques with new creative prowess. Slowly, however, this new cycle started approaching what seemed to be the new end. Today, people tend to be less accepting the language of pixel art, and talented indies sway away from the pixelated look. What will the future bring for pixel art: obscurity, resurgence, or some sort of metamorphosis? Only time will tell, but its place in history will forever be set in stone."
      />
      <ImageGridList
        tileData={tileData}
        columns={2}
        cellHeight={180}
        lightboxContent={lightboxContent}
      />
      <NextSlideButton text="What's next?" />
    </SlidePaper>
  )
}

export default Slide
