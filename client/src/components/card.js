import React from "react"
import Button from "../components/button"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    maxWidth: 800,
    maxHeight: 600,
    backgroundColor: "bluegray",
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
  },
}

function ImgMediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card} raised="true">
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
      <Button />
    </Card>
  )
}

export default withStyles(styles)(ImgMediaCard)
