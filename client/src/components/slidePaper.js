import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
})

function SlidePaper(props) {
  const { classes } = props
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16} className={classes.container}>
          {props.children}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(SlidePaper)
