import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ImageGridList from "./imageGridList"

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "90vh",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: 800,
    minHeight: 400,
  },
})

function Layout(props) {
  const { classes } = props
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <Typography variant="h3">Space Invaders</Typography>
            <Typography variant="body1">
              This is some text about the game and its visual style. More stuff
              coming soon.
            </Typography>
          </Grid>
          <Grid item>
            <ImageGridList />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(Layout)
