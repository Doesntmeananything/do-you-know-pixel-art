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

function ThirdLayer(props) {
  const { classes } = props
  return (
    <div>
      {/* Third Layer */}
      <PixelIcon
        className={classes.icon}
        style={{
          "--icon-color": colors[3],
          "--x": "5vw",
          "--speed": "2.5s",
          fontSize: 60,
        }}
      />
      <PixelIcon
        className={classes.icon}
        style={{
          "--icon-color": colors[2],
          "--x": "24vw",
          "--speed": "2.2s",
          fontSize: 60,
        }}
      />
      <PixelIcon
        className={classes.icon}
        style={{
          "--icon-color": colors[0],
          "--x": "45vw",
          "--speed": "2s",
          fontSize: 60,
        }}
      />
      <PixelIcon
        className={classes.icon}
        style={{
          "--icon-color": colors[9],
          "--x": "56vw",
          "--speed": "1.8s",
          fontSize: 60,
        }}
      />
    </div>
  )
}

export default withStyles(styles)(ThirdLayer)
