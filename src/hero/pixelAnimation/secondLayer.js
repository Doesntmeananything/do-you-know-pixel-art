import React from "react"
import PixelIcon from "@material-ui/icons/Stop"
import { withStyles } from "@material-ui/core/styles"
import colors from "./animationColors"

const styles = theme => ({
  icon: {
    animation: "rise var(--speed) infinite linear",
    color: "var(--icon-color)",
  },
  "@keyframes rise": {
    from: { transform: `translate(var(--x), 110vh)` },
    to: { transform: `translate(var(--x), -10vh)` },
  },
})

function SecondLayer(props) {
  const { classes } = props
  return (
    <div>
      {/* Second layer */}
      <PixelIcon
        className={classes.icon}
        fontSize="large"
        style={{ "--icon-color": colors[1], "--x": "5vw", "--speed": "4s" }}
      />
      <PixelIcon
        className={classes.icon}
        fontSize="large"
        style={{
          "--icon-color": colors[3],
          "--x": "23vw",
          "--speed": "3.2s",
        }}
      />
      <PixelIcon
        className={classes.icon}
        fontSize="large"
        style={{
          "--icon-color": colors[5],
          "--x": "55vw",
          "--speed": "3.5s",
        }}
      />
      <PixelIcon
        className={classes.icon}
        fontSize="large"
        style={{
          "--icon-color": colors[7],
          "--x": "76vw",
          "--speed": "3s",
        }}
      />
    </div>
  )
}

export default withStyles(styles)(SecondLayer)
