import React from "react"
import ThirdStrike from "../games/3rdstrike"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

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
      <ThirdStrike color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default ThirdStrikeSlide
