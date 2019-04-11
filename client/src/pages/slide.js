import React from "react"
import SlidePaper from "../components/slidePaper"
import GameText from "../components/gameText"
import ImageGridList from "../components/imageGridList"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({})

function Slide(props) {
  const { classes } = props
  return (
    <>
      <SlidePaper>
        <GameText
          year="1978"
          title="Space Invaders"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio minima quibusdam molestiae modi fugiat sed, maxime enim voluptatibus ducimus? Illo repellat nostrum labore odit voluptatibus, provident temporibus quas consequuntur possimus assumenda, minima eaque. Facere ab voluptate suscipit voluptatem voluptates aut nam sed ea inventore atque? Error voluptatibus id explicabo eum?"
        />
        <ImageGridList />
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <Button variant="contained" style={{}}>
            Next Slide
          </Button>
        </Grid>
      </SlidePaper>
    </>
  )
}

export default withStyles(styles)(Slide)
