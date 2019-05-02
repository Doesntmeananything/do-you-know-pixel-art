import React from "react"
import SuperMetroid from "../games/supermetroid"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8e24aa",
    },
    secondary: {
      main: "#f57f17",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function SuperMetroidSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <SuperMetroid color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default SuperMetroidSlide
