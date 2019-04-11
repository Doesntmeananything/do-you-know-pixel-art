import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import tileData from "./tileData"
import AlbumModal from "../components/albumModal"
import ImageStepper from "../components/imageStepper"

const styles = theme => ({
  images: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%",
    },
  },
  tile: {
    cursor: "zoom-in",
    transition: "0.4s",
    "&:hover": {
      opacity: 0.6,
    },
  },
})

class ImageGridList extends React.Component {
  state = {
    modalOpen: false,
  }

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    const { classes } = this.props
    return (
      <Grid item className={classes.images}>
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
              onClick={this.handleOpen}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
        <AlbumModal open={this.state.modalOpen} handleClose={this.handleClose}>
          <ImageStepper />
        </AlbumModal>
      </Grid>
    )
  }
}

export default withStyles(styles)(ImageGridList)
