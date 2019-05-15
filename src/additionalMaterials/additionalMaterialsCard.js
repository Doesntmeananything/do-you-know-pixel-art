import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: "cover",
  },
  link: {
    textDecorationLine: "none",
  },
  button: {
    marginBottom: "8px",
  },
  actionsRoot: {
    justifyContent: "center",
  },
}

function AdditionalMaterialsCard(props) {
  const { classes } = props
  return (
    <Card raised={true} className={classes.card}>
      <CardMedia
        component="img"
        alt={props.title}
        className={classes.media}
        height="140"
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">{props.cardDescription}</Typography>
      </CardContent>
      <CardActions className={classes.actionsRoot}>
        <a href={props.to} className={classes.link} target="_blank">
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            className={classes.button}
          >
            {props.cardButtonText}
          </Button>
        </a>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(AdditionalMaterialsCard)
