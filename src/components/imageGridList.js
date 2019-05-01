import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import PlayIcon from "@material-ui/icons/PlayCircleOutline"
import Lightbox from "lightbox-react"
import "lightbox-react/style.css"

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
    lightboxOpen: false,
    currentImage: 0,
  }

  handleOpen = index => {
    this.setState({ currentImage: index, lightboxOpen: true })
  }

  handleClose = () => {
    this.setState({ lightboxOpen: false, currentImage: 0 })
  }

  gotoPrevious = () => {
    this.setState(({ currentImage }) => ({
      currentImage: currentImage - 1,
    }))
  }
  gotoNext = () => {
    this.setState(({ currentImage }) => ({
      currentImage: currentImage + 1,
    }))
  }
  gotoImage = index => {
    this.setState({
      currentImage: index,
    })
  }

  render() {
    const {
      classes,
      tileData,
      columns,
      cellHeight,
      lightboxContent,
    } = this.props
    const { currentImage, lightboxOpen } = this.state

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
                  <PlayIcon style={{ fontSize: "4rem" }} color="secondary" />
                </div>
              )}
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
        {lightboxOpen && (
          <Lightbox
            mainSrc={lightboxContent.media[currentImage]}
            nextSrc={lightboxContent.media[currentImage + 1]}
            prevSrc={lightboxContent.media[currentImage - 1]}
            imageCaption={lightboxContent.description[currentImage]}
            onCloseRequest={this.handleClose}
            onMoveNextRequest={this.gotoNext}
            onMovePrevRequest={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            enableZoom={true}
            style={{ display: "flex", placeItems: "center" }}
          />
        )}
      </Grid>
    )
  }
}

export default withStyles(styles)(ImageGridList)
