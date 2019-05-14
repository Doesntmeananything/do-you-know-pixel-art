import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import { useTrail, animated } from "react-spring"

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    paddingBottom: "5%",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "30%",
      paddingLeft: "10%",
    },
  },
})

const items = ["Do you", "know", "Pixel Art?"]
const config = { mass: 1, tension: 280, friction: 60 }

function HeroTitleText(props) {
  const { classes } = props
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    height: 100,
    from: { opacity: 0, height: 0 },
  })
  return (
    <div className={classes.root}>
      <Typography
        className={classes.text}
        component="h1"
        variant="h1"
        gutterBottom
      >
        {trail.map(({ height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(HeroTitleText)
