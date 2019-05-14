import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f06292",
    },
    secondary: {
      main: "#03a9f4",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

const styles = theme => ({
  root: {
    maxWidth: "90%",
    margin: "auto",
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
})

function getSteps() {
  return ["Tools of the trade", "Going places", "First steps"]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Art and technology have always been close companions throughout the history of human civilisation. To recreate and reproduce what we feel and see around us requires particular kinds of ingenuity. Newer and better tools inevitably affect artistic styles, whether to reinvigorate and improve on old traditions or make past ways fade into obscurity, supplanting them with latest products of progress.`
    case 1:
      return "One such artistic style is Pixel Art. Perhaps continuing the ancient traditions of mosaics, its rich history spans just about half a century. But finding its place at the forefront of digital revolution, it evolved at breakneck pace, hitting both its zenith and nadir within a short period of time."
    case 2:
      return `To trace the life of Pixel Art, we need to look at the most prominent instances of Pixel Art games. First, let's go back to a point in time when digital entertainment was still in its infancy…`
    default:
      return "Unknown step"
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        onClick={
                          activeStep === 0
                            ? this.props.handleParallaxBack
                            : this.handleBack
                        }
                        className={classes.button}
                      >
                        Go Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "I'm Ready!"
                          : "Next!"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Start From Scratch
              </Button>
            </Paper>
          )}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(VerticalLinearStepper)
