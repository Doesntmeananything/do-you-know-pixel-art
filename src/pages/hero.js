import React from "react"
import HeroComponent from "../hero"
import SEO from "../components/seo"

function LandingPage(props) {
  return (
    <>
      <SEO
        title="Welcome"
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
