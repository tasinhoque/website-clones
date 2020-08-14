import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Link, Paper } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'November 1999',
  'October 1999',
  'September 1999',
  'August 1999',
  'July 1999',
  'June 1999',
  'May 1999',
  'April 1999',
]

const icons = [
  { Icon: GitHubIcon, name: 'GitHub' },
  { Icon: TwitterIcon, name: 'Twitter' },
  { Icon: FacebookIcon, name: 'Facebook' },
]

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}))

const RightNavigation = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.paper}>
        <Typography variant='h6' gutterBottom>
          About
        </Typography>
        <Typography>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
      </Paper>
      <Typography variant='h6' className={classes.sidebarSection} gutterBottom>
        Archive
      </Typography>
      {archives.map(archive => (
        <Typography>
          <Link key={archive} href='#'>
            {archive}
            <br />
          </Link>
        </Typography>
      ))}
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {icons.map(({ Icon, name }) => (
        <Link key={name}>
          <Grid container spacing={1}>
            <Grid item>
              <Icon />
            </Grid>
            <Grid item>
              <Typography>{name}</Typography>
            </Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}

export default RightNavigation
