import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  root: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    paddingBottom: "6%",
  },
}

const words = ["Do ", "you ", "know ", "Pixel ", "Art", "?"]

function Types(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography
        className={classes.text}
        component="h1"
        variant="h1"
        gutterBottom
      >
        {words.map(word => word)}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Types)
