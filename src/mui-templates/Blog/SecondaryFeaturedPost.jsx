import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Hidden,
  CardContent,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
  },
  image: {
    width: 160,
  },
  featuredPost: {
    flex: 1,
  },
}))

const SecondaryFeaturedPost = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card className={classes.flex}>
          <CardContent className={classes.featuredPost}>
            <Typography variant='h5'>Featured Post</Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Nov 11
            </Typography>
            <Typography variant='subtitle1' paragraph>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
            <Typography color='primary' variant='subtitle1'>
              Continue reading…
            </Typography>
          </CardContent>
          <Hidden xsDown>
            <CardMedia
              image='https://source.unsplash.com/random'
              className={classes.image}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default SecondaryFeaturedPost
