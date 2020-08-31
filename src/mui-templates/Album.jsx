import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  makeStyles,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import Footer from './Footer'
import { v4 as uniqueKey } from 'uuid'

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(8, 0, 6, 0),
  },
  mainSection: {
    padding: theme.spacing(8, 0),
  },
  media: {
    height: 160,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const PictureCard = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image='https://source.unsplash.com/random'
      />
      <CardContent>
        <Typography variant='h5' gutterBottom>
          Heading
        </Typography>
        <Typography variant='body1'>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary'>View</Button>
        <Button color='primary'>Edit</Button>
      </CardActions>
    </Card>
  )
}

const Album = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit'>
            <PhotoCameraIcon />
          </IconButton>
          <Typography variant='h6'>Album layout</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm' className={classes.header}>
        <Typography variant='h2' gutterBottom align='center'>
          Album layout
        </Typography>
        <Typography variant='h5' color='textSecondary' paragraph align='center'>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <Grid
          container
          spacing={2}
          justify='center'
          className={classes.heroButtons}
        >
          <Grid item>
            <Button variant='contained' color='primary' size='small'>
              Main call to action
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='primary' size='small'>
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md'>
        <Grid container spacing={4} className={classes.mainSection}>
          {Array(9)
            .fill(null)
            .map(() => (
              <Grid key={uniqueKey()} item xs={12} sm={6} md={4}>
                <PictureCard />
              </Grid>
            ))}
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default Album
