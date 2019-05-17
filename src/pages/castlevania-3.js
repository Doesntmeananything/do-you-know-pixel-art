import React from "react"
import Castlevania3 from "../games/Castlevania3"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#b71c1c",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function Castlevania3Slide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Castlevania III: Dracula's Curse"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `castlevania`,
          `castlevania III`,
          `castlevania 3`,
        ]}
      />
      <Castlevania3 color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default Castlevania3Slide
