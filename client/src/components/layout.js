import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ImageGridList from "./imageGridList"
import Button from "@material-ui/core/Button"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: "#11cb5f" },
  },
  typography: { useNextVariants: true },
})

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "90vh",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: 320,
    minHeight: 400,
  },
  button: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
})

function Layout(props) {
  const { classes } = props
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <Typography variant="h3" gutterBottom="true">
              Space Invaders
            </Typography>
            <Typography variant="body1">
              This is some text about the game and its visual style. More stuff
              coming soon.
            </Typography>
          </Grid>
          <Grid item className={classes.imageGridList}>
            <ImageGridList />
            <Grid container className={classes.button}>
              <MuiThemeProvider theme={theme}>
                <Button color="secondary">Next Slide</Button>
              </MuiThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(Layout)
