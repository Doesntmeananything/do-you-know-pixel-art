import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    outline: "none",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})

class AlbumModal extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item>
          <Modal
            aria-labelledby="game-gallery"
            aria-describedby="check-art-in-detail"
            open={this.props.open}
            onClose={this.props.handleClose}
            className={classes.modal}
          >
            <div className={classes.paper}>{this.props.children}</div>
          </Modal>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AlbumModal)
