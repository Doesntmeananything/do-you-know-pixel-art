import React from "react"
import AdditionalMaterials from "../additionalMaterials"
import SEO from "../components/seo"

function Addendum(props) {
  return (
    <>
      <SEO
        title="Addendum"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `aseprite`,
          `game development`,
        ]}
      />
      <AdditionalMaterials />
    </>
  )
}

export default Addendum
