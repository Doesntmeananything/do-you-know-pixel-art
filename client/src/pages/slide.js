import React from "react"
import SlidePaper from "../components/slidePaper"
import GameText from "../components/gameText"
import ImageGridList from "../components/imageGridList"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ImageStepper from "../components/imageStepper"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 900,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1100,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 2300,
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
  },
  images: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
  },
})

function Slide(props) {
  const { classes } = props
  return (
    <>
      <Grid container className={classes.root}>
        <SlidePaper>
          <Grid container spacing={16} className={classes.container}>
            <Grid item className={classes.text}>
              <GameText />
            </Grid>
            <Grid item className={classes.images}>
              <ImageGridList />
              <Button variant="contained" style={{ marginTop: "16px" }}>
                Next Slide
              </Button>
            </Grid>
          </Grid>
          <ImageStepper />
        </SlidePaper>
      </Grid>
    </>
  )
}

export default withStyles(styles)(Slide)
