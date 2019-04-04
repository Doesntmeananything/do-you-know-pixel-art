import React from "react"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import tileData from "./tileData"
import AlbumModal from "../components/albumModal"

const styles = theme => ({
  root: {},
  tile: {
    cursor: "zoom-in",
    transition: "0.4s",
    "&:hover": {
      opacity: 0.6,
    },
  },
})

function ImageGridList(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList
        cellHeight="140"
        className={classes.gridList}
        cols={3}
        spacing={8}
      >
        {tileData.map(tile => (
          <GridListTile
            className={classes.tile}
            key={tile.img}
            cols={tile.cols || 1}
            onClick={AlbumModal.handleOpen}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageGridList)
