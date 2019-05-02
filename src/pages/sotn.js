import React from "react"
import Sotn from "../games/sotn"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4a148c",
    },
    secondary: {
      main: "#212121",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function SotnSlide() {
  return (
    <MuiThemeProvider theme={theme}>
      <Sotn color={theme.palette.primary.main} />
    </MuiThemeProvider>
  )
}

export default SotnSlide
