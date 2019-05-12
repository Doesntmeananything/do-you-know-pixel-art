import React from "react"
import PixelIcon from "@material-ui/icons/Stop"
import { withStyles } from "@material-ui/core/styles"
import { useSpring, animated } from "react-spring"

const colors = [
  "#e65100",
  "#212121",
  "#5c6bc0",
  "#1a237e",
  "#fbc02d",
  "#b71c1c",
  "#42a5f5",
  "#424242",
  "#330e62",
]

const styles = theme => ({
  root: {
    background: "hotpink",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    animation: "rise 5s infinite linear",
    color: "var(--icon-color)",
  },
  "@keyframes rise": {
    from: { transform: `translate(var(--x), 60vh)` },
    to: { transform: `translate(var(--x), -60vh)` },
  },
})

function LandingBackground(props) {
  const { classes } = props
  const x = Math.floor(Math.random() * 50)
  const color = Math.floor(Math.random() * colors.length)
  return (
    <div className={classes.root} style={{}}>
      <PixelIcon
        className={classes.icon}
        style={{ "--icon-color": colors[color], "--x": `${x}vw` }}
      />
      <PixelIcon
        className={classes.icon}
        style={{ "--icon-color": colors[color], "--x": `${x}vw` }}
      />
      <PixelIcon
        className={classes.icon}
        style={{ "--icon-color": colors[color], "--x": `${x}vw` }}
      />
      <PixelIcon
        className={classes.icon}
        style={{ "--icon-color": colors[x], "--x": `${x}vw` }}
      />
    </div>
  )
}

export default withStyles(styles)(LandingBackground)
