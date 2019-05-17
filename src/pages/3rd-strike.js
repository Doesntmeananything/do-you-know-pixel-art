import React from "react"
import ThirdStrike from "../games/3rdstrike"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e65100",
    },
    secondary: {
      main: "#fbc02d",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function ThirdStrikeSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SEO
        title="Street Fighter III: 3rd Strike"
        keywords={[
          `pixel`,
          `art`,
          `pixel art`,
          `evolution`,
          `history`,
          `videogames`,
          `video games`,
          `street fighter`,
          `street fighter III`,
          `third strike`,
        ]}
      />
      <ThirdStrike color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default ThirdStrikeSlide
