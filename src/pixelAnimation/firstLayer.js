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

function FirstLayer(props) {
  const { classes } = props
  return (
    <div>
      {/* First layer */}
      <PixelIcon
        className={classes.icon}
        fontSize="small"
        style={{
          "--icon-color": colors[0],
          "--x": "12vw",
          "--speed": "5.5s",
        }}
      />
      <PixelIcon
        className={classes.icon}
        fontSize="small"
        style={{
          "--icon-color": colors[2],
          "--x": "34vw",
          "--speed": "6s",
        }}
      />
      <PixelIcon
        className={classes.icon}
        fontSize="small"
        style={{
          "--icon-color": colors[4],
          "--x": "64vw",
          "--speed": "7s",
        }}
      />
      <PixelIcon
        className={classes.icon}
        fontSize="small"
        style={{
          "--icon-color": colors[6],
          "--x": "87vw",
          "--speed": "6.5s",
        }}
      />
    </div>
  )
}

export default withStyles(styles)(FirstLayer)
