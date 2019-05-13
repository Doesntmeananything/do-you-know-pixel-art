import React from "react"
import PixelIcon from "@material-ui/icons/Stop"
import { withStyles } from "@material-ui/core/styles"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import HeroTitleText from "./heroTitleText"

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
    overflow: "hidden",
  },
  icon: {
    animation: "rise var(--speed) infinite linear",
    color: "var(--icon-color)",
  },
  "@keyframes rise": {
    from: { transform: `translate(var(--x), 110vh)` },
    to: { transform: `translate(var(--x), -10vh)` },
  },
})

function LandingBackground(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Parallax pages={2}>
        {/* First layer */}
        <ParallaxLayer offset={0} speed={0.5}>
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
        </ParallaxLayer>
        {/* Second layer */}
        <ParallaxLayer offset={0} speed={1.5}>
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
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <HeroTitleText />
        </ParallaxLayer>
        {/* Third Layer */}
        <ParallaxLayer offset={0} speed={2.5}>
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
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default withStyles(styles)(LandingBackground)
