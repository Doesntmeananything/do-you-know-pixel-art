import React from "react"
import Modern from "../games/modern"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c6bc0",
    },
    secondary: {
      main: "#8e24aa",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function ModernSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <Modern color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default ModernSlide
