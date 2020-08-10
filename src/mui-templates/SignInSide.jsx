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
  Box,
  Container,
  CssBaseline,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { red } from '@material-ui/core/colors'

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
  red: {
    color: theme.palette.getContrastText(red.A700),
    backgroundColor: red.A700,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    padding: '6px auto',
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
          <Box marginTop={8}>
            <Grid container direction='column' alignItems='center'>
              <Box margin={1}>
                <Avatar className={classes.red}>
                  <LockOutlinedIcon />
                </Avatar>
              </Box>
              <Typography variant='h5'>Sign In</Typography>
            </Grid>
            <Box marginTop={1}>
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
              <Grid container>
                <Link href='#' variant='body2' className={classes.grow}>
                  Forgot password?
                </Link>
                <Link href='#' variant='body2'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Box>
            <Box marginTop={8}>
              <Typography variant='body2' align='center' color='textSecondary'>
                Copyright &copy;{' '}
                <Link color='inherit' href='#'>
                  Your Website
                </Link>{' '}
                {new Date().getFullYear()}.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  )
}

export default SignInSide
