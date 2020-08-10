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
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
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

const SignUp = () => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box marginTop={8}>
        <Grid container direction='column' alignItems='center'>
          <Box margin={1}>
            <Avatar className={classes.red}>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Typography variant='h5'>Sign In</Typography>
        </Grid>
        <Box marginTop={3}>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Box pr={1}>
                <TextField variant='outlined' required label='First Name' />
              </Box>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box pl={1}>
                <TextField
                  variant='outlined'
                  label='Last Name'
                  type='password'
                  required
                  autoComplete='current-password'
                />
              </Box>
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
          <Box pt={1} pb={2}>
            <TextField
              variant='outlined'
              label='Password'
              type='password'
              required
              fullWidth
              autoComplete='current-password'
            />
          </Box>
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
          <Grid container>
            <div className={classes.grow} />
            <Link href='#' variant='body2'>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Box>
        <Box marginTop={5}>
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
  )
}

export default SignUp
