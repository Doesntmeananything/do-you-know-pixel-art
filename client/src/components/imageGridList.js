import React from "react"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import tileData from "./tileData"

const styles = theme => ({
  root: {},
})

function ImageGridList(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList
        cellHeight="160"
        className={classes.gridList}
        cols={3}
        spacing={8}
      >
        {tileData.map(tile => (
          <GridListTile
            className={classes.tile}
            key={tile.img}
            cols={tile.cols || 1}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageGridList)
