import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Paper,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ShippingAddress from './ShippingAddress'
import PaymentDetails from './PaymentDetails'
import ReviewOrder from './ReviewOrder'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },
  marginBottom: {
    marginBottom: theme.spacing(4),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

const getStepContent = activeStep => {
  switch (activeStep) {
    case 0:
      return <ShippingAddress />
    case 1:
      return <PaymentDetails />
    case 2:
      return <ReviewOrder />
    default:
      throw new Error('Unknown step')
  }
}

const Checkout = () => {
  const classes = useStyles()
  const steps = ['Shipping address', 'Payment details', 'Review your order']
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <>
      <CssBaseline />
      <AppBar color='inherit' position='absolute'>
        <Toolbar>
          <Typography variant='h6'>Company name</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant='h5' gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography>
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Grid container justify='flex-end' spacing={2}>
                {activeStep !== 0 && (
                  <Grid item>
                    <Button onClick={handleBack} variant='text'>
                      Back
                    </Button>
                  </Grid>
                )}
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
        <Typography
          variant='body2'
          align='center'
          color='textSecondary'
          gutterBottom
        >
          Copyright &copy;{' '}
          <Link color='inherit' href='#'>
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </main>
    </>
  )
}

export default Checkout
