import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 800,
    minHeight: 400,
  },
})

function Layout(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <Typography variant="h1">Space Invaders</Typography>
            <Typography variant="body1">
              This is some text about the game and its visual style. More stuff
              coming soon.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Layout)
