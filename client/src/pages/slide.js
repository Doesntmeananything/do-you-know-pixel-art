import React from "react"
import SlidePaper from "../components/slidePaper"
import GameText from "../components/gameText"
import ImageGridList from "../components/imageGridList"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

export default () => (
  <>
    <Grid
      container
      style={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <SlidePaper>
        <Grid container spacing={16} style={{ maxWidth: 1100 }}>
          <Grid item style={{ maxWidth: "50%" }}>
            <GameText />
          </Grid>
          <Grid item style={{ maxWidth: "50%", textAlign: "center" }}>
            <ImageGridList />
            <Button variant="raised" style={{ marginTop: "16px" }}>
              Next Slide
            </Button>
          </Grid>
        </Grid>
      </SlidePaper>
    </Grid>
  </>
)
