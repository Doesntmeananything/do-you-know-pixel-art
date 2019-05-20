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
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 600,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 860,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1180,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1820,
    },
  },
})

function SlidePaper(props) {
  const { classes, theme, color } = props
  return (
    <Grid container className={classes.root} style={{ backgroundColor: color }}>
      <Paper className={classes.paper} elevation={6}>
        <Grid container spacing={16} className={classes.container}>
          {props.children}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(SlidePaper)
