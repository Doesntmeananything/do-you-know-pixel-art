import React from "react"
import SpaceInvaders from "../games/SpaceInvaders"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: "#c62828",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function SpaceInvadersSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SpaceInvaders color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default SpaceInvadersSlide
