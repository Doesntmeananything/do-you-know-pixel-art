import React from "react"
import Sonic from "../games/Sonic"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

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
      <Sonic color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default SonicSlide
