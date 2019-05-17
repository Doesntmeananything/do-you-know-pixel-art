import React from "react"
import Pong from "../games/Pong"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fbc02d",
    },
    secondary: {
      main: "#fbc02d",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function PongSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Pong"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `pong`,
          `arcade`,
        ]}
      />
      <Pong color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default PongSlide
