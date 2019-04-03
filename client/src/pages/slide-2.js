import React from "react"
import SlidePaper from "../components/slidePaper"
import GameText from "../components/gameText"
import ImageGridList from "../components/imageGridList"
import Grid from "@material-ui/core/Grid"

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
        <Grid container spacing={16}>
          <Grid item>
            <GameText />
          </Grid>
          <Grid item>
            <ImageGridList />
          </Grid>
        </Grid>
      </SlidePaper>
    </Grid>
  </>
)
