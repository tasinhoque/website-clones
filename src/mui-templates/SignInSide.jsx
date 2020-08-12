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
  CssBaseline,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  lockIcon: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    padding: '6px auto',
  },
  largeMarginTop: {
    marginTop: theme.spacing(8),
  },
  smallMarginTop: {
    marginTop: theme.spacing(1),
  },
}))

const SignInSide = () => {
  const classes = useStyles()

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container component='main'>
          <Grid
            container
            direction='column'
            alignItems='center'
            className={classes.largeMarginTop}
          >
            <Avatar className={classes.lockIcon}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>Sign In</Typography>
          </Grid>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            autoComplete='email'
            className={classes.smallMarginTop}
          />
          <TextField
            variant='outlined'
            margin='normal'
            label='Password'
            type='password'
            required
            fullWidth
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label='Remember me'
          />
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            fullWidth
          >
            Sign In
          </Button>
          <Grid container justify='space-between'>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
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
      </Grid>
    </Grid>
  )
}

export default SignInSide
