import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Slide from "@material-ui/core/Slide"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import FeedbackIcon from "@material-ui/icons/Feedback"
import { withStyles } from "@material-ui/core/styles"

function Transition(props) {
  return <Slide direction="left" {...props} />
}

const styles = {
  dialog: {},
}

class FeedbackDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <ListItem button onClick={this.handleClickOpen}>
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary={"Feedback"} />
        </ListItem>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          className={classes.dialog}
          onClose={this.handleClose}
          aria-labelledby="feedback-dialog"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Do you have any thoughts or suggestions about the website? Send me
              an email!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <a
              href="mailto:andrey.krasnov.pm@gmail.com"
              style={{ textDecorationLine: "none" }}
            >
              <Button
                onClick={this.handleClose}
                color="primary"
                variant="contained"
              >
                Send
              </Button>
            </a>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(FeedbackDialog)
