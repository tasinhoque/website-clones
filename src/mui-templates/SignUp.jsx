import React from 'react'
import {
  Grid,
  Typography,
  Avatar,
  Link,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const useStyles = makeStyles(theme => ({
  lockIcon: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
    margin: theme.spacing(1),
  },
  password: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    padding: '6px auto',
  },
  largeMarginTop: {
    marginTop: theme.spacing(8),
  },
  mediumMarginTop: {
    marginTop: theme.spacing(3),
  },
  smallMarginTop: {
    marginTop: theme.spacing(1),
  },
  firstName: {
    paddingRight: theme.spacing(1),
  },
  lastName: {
    paddingLeft: theme.spacing(1),
  },
}))

const SignUp = () => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.largeMarginTop}
      >
        <Avatar className={classes.lockIcon}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>Sign Up</Typography>
      </Grid>
      <Grid container className={classes.mediumMarginTop}>
        <Grid xs={12} sm={6} className={classes.firstName}>
          <TextField variant='outlined' required label='First Name' />
        </Grid>
        <Grid xs={12} sm={6} className={classes.lastName}>
          <TextField variant='outlined' label='Last Name' required />
        </Grid>
      </Grid>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        autoComplete='email'
      />
      <TextField
        variant='outlined'
        label='Password'
        type='password'
        required
        fullWidth
        autoComplete='current-password'
        className={classes.password}
      />
      <FormControlLabel
        control={<Checkbox color='primary' />}
        label='I want to receive inspiration, marketing promotions and updates via email.'
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        fullWidth
      >
        Sign In
      </Button>
      <Grid container justify='flex-end'>
        <Link href='#' variant='body2'>
          Don't have an account? Sign Up
        </Link>
      </Grid>
      <Typography
        variant='body2'
        align='center'
        color='textSecondary'
        className={classes.largeMarginTop}
      >
        Copyright &copy;{' '}
        <Link color='inherit' href='#'>
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  )
}

export default SignUp
