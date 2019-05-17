import React from "react"
import HeroComponent from "../hero"
import SEO from "../components/seo"

function LandingPage(props) {
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
        ]}
      />
      <HeroComponent />
    </>
  )
}

export default LandingPage
