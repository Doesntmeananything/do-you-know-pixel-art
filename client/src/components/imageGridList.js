import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import AlbumModal from "../components/albumModal"
import PlayIcon from "@material-ui/icons/PlayCircleOutline"
import Lightbox from "react-images"

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
    currentImage: 0,
  }

  handleOpen = index => {
    this.setState({ currentImage: index, modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false, currentImage: 0 })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoImage = index => {
    this.setState({
      currentImage: index,
    })
  }

  render() {
    const { classes, tileData, columns, cellHeight, mediaSteps } = this.props
    return (
      <Grid item className={classes.images}>
        <GridList
          cellHeight={cellHeight}
          className={classes.gridList}
          cols={columns}
          spacing={8}
        >
          {tileData.map((tile, index) => (
            <GridListTile
              className={classes.tile}
              key={index}
              cols={tile.cols || 1}
              onClick={() => this.handleOpen(index)}
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
          <Lightbox
            images={mediaSteps}
            isOpen={this.state.modalOpen}
            currentImage={this.state.currentImage}
            onClose={this.handleClose}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            backdropClosesModal={true}
            showCloseButton={false}
          />
        </AlbumModal>
      </Grid>
    )
  }
}

export default withStyles(styles)(ImageGridList)
