import React from "react"
import Pong from "../games/Pong/index"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fbc02d",
    },
    secondary: {
      main: "#fff8e1",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function PongSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <Pong />
    </MuiThemeProvider>
  )
}

export default PongSlide
