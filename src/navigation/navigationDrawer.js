import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Menu from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import AddendumIcon from "@material-ui/icons/ViewDay"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeedbackDialog from "./feebackDialog"
import { titles, releaseYears, gameRoutes } from "./navigationDrawerData"
import { Location } from "@reach/router"

const styles = {
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "10px 4px",
  },
  list: {
    width: 250,
  },
  listItemButton: {
    color: "#f06292",
  },
  listItemFocus: {
    color: "#f06292",
  },
}

class NavigationDrawer extends React.Component {
  state = {
    right: false,
    selectedIndex: "",
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          {titles.map((title, index) => (
            <Location key={title}>
              {({ location }) => (
                <AniLink
                  paintDrip
                  hex="#f06292"
                  to={gameRoutes[index]}
                  style={{ textDecorationLine: "none" }}
                >
                  <ListItem
                    button
                    selected={gameRoutes[index] === `${location.pathname}`}
                    onClick={event =>
                      this.handleListItemClick(event, `${location.pathname}`)
                    }
                    classes={{
                      root: classes.listItem,
                      button: classes.listItemButton,
                      focusVisible: classes.listItemFocus,
                    }}
                  >
                    <ListItemText
                      primary={title}
                      secondary={releaseYears[index]}
                    />
                  </ListItem>
                </AniLink>
              )}
            </Location>
          ))}
          <Divider />
          <AniLink
            paintDrip
            hex="#f06292"
            to="/hero"
            style={{ textDecorationLine: "none" }}
          >
            <ListItem
              button
              classes={{
                root: classes.listItem,
                button: classes.listItemButton,
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </AniLink>
          <AniLink
            paintDrip
            hex="#f06292"
            to="/addendum"
            style={{ textDecorationLine: "none" }}
          >
            <ListItem
              button
              classes={{
                root: classes.listItem,
                button: classes.listItemButton,
              }}
            >
              <ListItemIcon>
                <AddendumIcon />
              </ListItemIcon>
              <ListItemText primary={"Addendum"} />
            </ListItem>
          </AniLink>
          <FeedbackDialog />
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <IconButton
          aria-label="Open Navigation Menu"
          onClick={this.toggleDrawer("right", true)}
        >
          <Menu fontSize="large" />
        </IconButton>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          {sideList}
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(NavigationDrawer)
