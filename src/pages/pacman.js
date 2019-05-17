import React from "react"
import Pacman from "../games/Pacman"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#ffee58",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function PacmanSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Pacman"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `pacman`,
          `pac man`,
          `arcade`,
        ]}
      />
      <Pacman color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default PacmanSlide
