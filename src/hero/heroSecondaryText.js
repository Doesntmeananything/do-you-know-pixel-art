import React from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
})

function HeroSecondaryText(props) {
  const { classes } = props

  return (
    <Grid container spacing={32} className={classes.root}>
      <Grid item>
        <Paper>
          <Typography variant="body1" gutterBottom>
            Art and technology have always been close companions throughout the
            history of human civilisation. To recreate and reproduce what we
            feel and see around us requires particular kinds of ingenuity. Newer
            and better tools inevitably affect artistic styles, whether to
            reinvigorate and improve on old traditions or make past ways fade
            into obscurity, supplanting them with latest products of progress.
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="body1" gutterBottom>
          One such artistic style is Pixel Art. Perhaps continuing the ancient
          traditions of mosaics, its rich history spans just about half a
          century, but being at the forefront of digital revolution it evolved
          at breakneck pace, hitting both its zenith and nadir within a short
          period of time.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" gutterBottom>
          To trace the life of Pixel Art, we need to look at most prominent
          instances of Pixel Art games. First, let's go back to a point in time
          when digital entertainment was still in its infancy…
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(HeroSecondaryText)
