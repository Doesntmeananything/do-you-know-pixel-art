import React from "react"
import Sotn from "../games/sotn"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#330e62",
    },
    secondary: {
      main: "#212121",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function SotnSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Castlevania: Symphony of the Night"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `castlevania`,
          `castlevania sotn`,
          `sotn`,
          `symphony of the night`,
          `castlevania symphony of the night`,
        ]}
      />
      <Sotn color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default SotnSlide
