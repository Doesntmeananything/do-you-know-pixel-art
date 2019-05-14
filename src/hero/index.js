import React from "react"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import { withStyles } from "@material-ui/core/styles"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import HeroTitleText from "./heroTitleText"
import HeroSecondaryText from "./heroSecondaryText"
import { FirstLayer, SecondLayer, ThirdLayer } from "./pixelAnimation"

const styles = theme => ({
  root: {
    background: "#f06292",
    width: "100vw",
    height: "100vh",
  },
  downIcon: {
    cursor: "pointer",
    animation: "delayedFade 1s ease-out 5s infinite alternate",
    position: "absolute",
    bottom: "5px",
    left: "40%",
    opacity: 0,
    fontSize: 60,
  },
  "@keyframes delayedFade": {
    from: { transform: "translate(0, 10vh)" },
    to: { opacity: 1, transform: "translate(0, 0)" },
  },
})

class HeroComponent extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Parallax
          ref={ref => (this.parallax = ref)}
          pages={2}
          scrolling={false}
        >
          {/* Page 1 */}
          {/* First layer animation */}
          <ParallaxLayer offset={0} speed={0.5}>
            <FirstLayer />
          </ParallaxLayer>
          {/* Second layer animation */}
          <ParallaxLayer offset={0} speed={1.5}>
            <SecondLayer />
          </ParallaxLayer>
          {/* Title */}
          <ParallaxLayer offset={0} speed={1.5}>
            <HeroTitleText />
          </ParallaxLayer>
          {/* Third Layer animation */}
          <ParallaxLayer
            offset={0}
            speed={2.5}
            onClick={() => this.parallax.scrollTo(1)}
          >
            <ThirdLayer />
            <ArrowDownward className={classes.downIcon} />
          </ParallaxLayer>
          {/* Page 2 */}
          {/* All animation layers */}
          <ParallaxLayer offset={1} speed={1.5}>
            <FirstLayer />
            <SecondLayer />
            <ThirdLayer />
          </ParallaxLayer>
          {/* Text */}
          <ParallaxLayer offset={1} speed={0.5}>
            <HeroSecondaryText
              handleParallaxBack={() => this.parallax.scrollTo(0)}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
}

export default withStyles(styles)(HeroComponent)
