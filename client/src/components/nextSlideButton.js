import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

function NextSlideButton(props) {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <Button variant="contained" style={{}}>
        {props.text}
      </Button>
    </Grid>
  )
}

export default NextSlideButton
