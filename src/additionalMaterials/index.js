import React from "react"
import { withStyles } from "@material-ui/core/styles"
import AdditionalMaterialsCard from "./additionalMaterialsCard"
import Typography from "@material-ui/core/Typography"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = {
  root: {
    backgroundColor: "#f06292",
    height: "100vh",
    width: "100wh",
  },
  pageTitle: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "16px",
  },
  cardRoot: {},
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f06292",
    },
    secondary: {
      main: "#03a9f4",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function AdditionalMaterials(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Typography className={classes.pageTitle} variant="h2" gutterBottom>
          Addendum
        </Typography>
        <Grid
          container
          spacing={32}
          alignItems="center"
          justify="center"
          className={classes.cardRoot}
        >
          <Grid item>
            <AdditionalMaterialsCard
              image="http://i.ytimg.com/vi/jqyC_S56B3k/hqdefault.jpg"
              title="How Video Games Were Made"
              cardDescription="Youtuber strafefox masterfully unravels secrets of how game graphics were made during the 8- and 16-bit generation of consoles. Join him in this extremely informative and highly watchable video!"
              cardButtonText="Watch on YouTube"
              to="https://www.youtube.com/watch?v=jqyC_S56B3k"
            />
          </Grid>
          <Grid item>
            <AdditionalMaterialsCard
              image="http://www.dinofarmgames.com/wp-content/uploads/2015/04/Auro-PC-title-screen-3x1-1024x577.png"
              title="A Pixel Artist Renounces Pixel Art"
              cardDescription="Read the thoughts of a truly dedicated professional Pixel Artist, Blake Reynolds, about the past, the present, and the future of Pixel Art in this bittersweet blog post that became an instant classic."
              cardButtonText="Learn More"
              to="http://www.dinofarmgames.com/a-pixel-artist-renounces-pixel-art/"
            />
          </Grid>
          <Grid item>
            <AdditionalMaterialsCard
              image="https://img.itch.zone/aW1hZ2UvMjMwNDUvMTU0NDIwLnBuZw==/original/Wrw%2FdK.png"
              title="Aseprite — Animated Sprite Editor & Pixel Art Tool"
              cardDescription="Looking to dip your toes into Pixel Art? Favoured by many professional artists, Aseprite gives you all the tools you need without the overhead of the more general digital art software. I greatly enjoyed using it, and so may you!"
              cardButtonText="Check It Out"
              to="https://www.aseprite.org/"
            />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  )
}

export default withStyles(styles)(AdditionalMaterials)
