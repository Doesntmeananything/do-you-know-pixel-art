import React from "react"
import SuperMetroid from "../games/supermetroid"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#ffd54f",
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
