import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import AlbumModal from "../components/albumModal"
import ImageStepper from "../components/imageStepper"
import PlayIcon from "@material-ui/icons/PlayCircleOutline"

const styles = theme => ({
  images: {
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
    const { classes, tileData, columns, cellHeight } = this.props
    return (
      <Grid item className={classes.images}>
        <GridList
          cellHeight={cellHeight}
          className={classes.gridList}
          cols={columns}
          spacing={8}
        >
          {tileData.map(tile => (
            <GridListTile
              className={classes.tile}
              key={tile.img}
              cols={tile.cols || 1}
              onClick={this.handleOpen}
            >
              {tile.isVideo && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "lightcyan",
                    zIndex: "1",
                  }}
                >
                  <PlayIcon style={{ fontSize: "4rem" }} color="primary" />
                </div>
              )}
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
