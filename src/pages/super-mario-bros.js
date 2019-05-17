import React from "react"
import Mario from "../games/Mario"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#d84315",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function MarioSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Super Mario Bros."
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `super mario`,
          `mario`,
          `super mario bros`,
        ]}
      />
      <Mario color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default MarioSlide
