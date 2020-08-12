import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Paper,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  first: {
    paddingRight: theme.spacing(1),
  },
  last: {
    paddingLeft: theme.spacing(1),
  },
}))

const Checkout = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar color='inherit'>
        <Toolbar>
          <Typography variant='h6'>Company name</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth='sm'>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Typography variant='h6' className={classes.marginBottom}>
            Shipping address
          </Typography>
          <Grid container className={classes.marginBottom}>
            <Grid xs={12} sm={6} className={classes.first}>
              <TextField variant='outlined' required label='First Name' />
            </Grid>
            <Grid xs={12} sm={6} className={classes.last}>
              <TextField variant='outlined' label='Last Name' required />
            </Grid>
          </Grid>
          <TextField
            variant='outlined'
            required
            fullWidth
            label='Address line 1'
            className={classes.marginBottom}
          />
          <TextField
            variant='outlined'
            required
            fullWidth
            label='Address line 2'
            className={classes.marginBottom}
          />
          <Grid container className={classes.marginBottom}>
            <Grid xs={12} sm={6} className={classes.first}>
              <TextField variant='outlined' required label='City' />
            </Grid>
            <Grid xs={12} sm={6} className={classes.last}>
              <TextField variant='outlined' label='State/Province/Region' />
            </Grid>
          </Grid>
          <Grid container className={classes.marginBottom}>
            <Grid xs={12} sm={6} className={classes.first}>
              <TextField variant='outlined' required label='Zip/Postal Code' />
            </Grid>
            <Grid xs={12} sm={6} className={classes.last}>
              <TextField variant='outlined' label='Country' required />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label='Use this address for payment details'
          />
          <Grid container justify='flex-end'>
            <Button variant='contained' color='primary'>
              Next
            </Button>
          </Grid>
        </Paper>
        <Typography variant='body2' align='center' color='textSecondary'>
          Copyright &copy;{' '}
          <Link color='inherit' href='#'>
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </>
  )
}

export default Checkout
