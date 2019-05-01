import React from "react"
import Mario from "../games/Mario"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"

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
      <Mario color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default MarioSlide
