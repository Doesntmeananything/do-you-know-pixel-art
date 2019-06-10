import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  text: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "50%",
    },
  },
  paragraph: {
    "&:first-letter": {
      padding: "0 .3rem",
      margin: "0 .3rem 0 0",
      marginBottom: "-0.7rem",
      fontStyle: "italic",
      fontSize: "4rem",
      float: "left",
      lineHeight: "1",
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
      <Typography className={classes.paragraph} variant="subtitle1">
        {props.description}
      </Typography>
    </Grid>
  )
}

export default withStyles(styles)(GameText)
