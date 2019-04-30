import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  text: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
  },
})

function GameText(props) {
  const { classes } = props
  return (
    <Grid item className={classes.text}>
      <Typography gutterBottom={true} variant="h6">
        {props.year}
      </Typography>
      <Typography gutterBottom={true} variant="h4">
        {props.title}
      </Typography>
      <Typography variant="subtitle1">{props.description}</Typography>
    </Grid>
  )
}

export default withStyles(styles)(GameText)