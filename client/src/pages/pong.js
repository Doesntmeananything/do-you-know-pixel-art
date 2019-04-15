import React from "react"
import Pong from "../games/Pong"
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
      <Pong color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default PongSlide
