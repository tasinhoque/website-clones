import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Link, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    margin: theme.spacing(2, 0),
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Grid item container direction='column' className={classes.footer}>
      <Grid item>
        <Typography align='center' variant='h6'>
          Footer
        </Typography>
      </Grid>
      <Grid item>
        <Typography align='center' color='textSecondary'>
          Something here to give the footer a purpose!
        </Typography>
      </Grid>
      <Grid item>
        <Typography align='center' variant='body2' color='textSecondary'>
          Copyright &copy;{' '}
          <Link color='inherit' href='#'>
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
