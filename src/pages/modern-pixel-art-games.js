import React from "react"
import Modern from "../games/modern"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c6bc0",
    },
    secondary: {
      main: "#8e24aa",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function ModernSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Modern Pixel Art Games"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `indie`,
          `cave story`,
          `spelunky`,
          `terraria`,
          `stardew valley`,
          `shovel knight`,
        ]}
      />
      <Modern color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default ModernSlide
