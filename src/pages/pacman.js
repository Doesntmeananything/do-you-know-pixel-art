import React from "react"
import Pacman from "../games/Pacman"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#ffee58",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function PacmanSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <Pacman color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default PacmanSlide
