import React from "react"
import Button from "../components/button"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
  },
}

function ImgMediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Space Invaders"
          className={classes.media}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Space Invaders"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Space Invaders
          </Typography>
          <Typography component="p">
            This is some text about the game. It's cool, I guess. More stuff
            coming.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(ImgMediaCard)
