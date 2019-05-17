import React from "react"
import Sonic from "../games/Sonic"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#283593",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function SonicSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Sonic The Hedgehog"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `sonic`,
          `sonic the hedgehog`,
          `sega`,
        ]}
      />
      <Sonic color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default SonicSlide
