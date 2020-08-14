import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Link, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
  },
  primaryFeaturedPost: {
    padding: theme.spacing(3),
  },
}))

const PrimaryFeaturedPost = () => {
  const classes = useStyles()

  return (
    <Grid item container>
      <Paper className={classes.image}>
        <Grid item xs={12} md={6} className={classes.primaryFeaturedPost}>
          <Typography variant='h3' color='inherit' gutterBottom>
            Title of a longer featured blog post
          </Typography>
          <Typography variant='h5' paragraph>
            Multiple lines of text that form the lead, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
          <Link variant='subtitle1' href='#'>
            Continue reading…
          </Link>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default PrimaryFeaturedPost
