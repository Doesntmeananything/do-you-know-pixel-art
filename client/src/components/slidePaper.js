import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

function SlidePaper(props) {
  const { classes } = props
  return <Paper className={classes.paper}>{props.children}</Paper>
}

export default withStyles(styles)(SlidePaper)
