import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  Link,
  IconButton,
  Toolbar,
  Divider,
  CssBaseline,
  Paper,
  Card,
  CardActionArea,
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  marginBottom: {
    marginBottom: theme.spacing(4),
  },
  white: {
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
  paper: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  primaryFeaturedPost: {
    padding: theme.spacing(6, 0, 6, 6),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  featuredPostPadding: {
    padding: theme.spacing(2),
  },
  linkMargin: {
    marginBottom: theme.spacing(1),
  },
  article: {
    paddingTop: theme.spacing(3),
  },
  footer: {
    margin: theme.spacing(8, 0),
  },
  secondaryFeaturedPost: {
    marginBottom: theme.spacing(4),
  },
}))

const categories = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
]

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

const PrimaryFeaturedPost = ({ classes }) => (
  <Grid
    className={clsx(classes.image, classes.marginBottom)}
    xs={12}
    component={Paper}
    rounded
  >
    <Grid xs={12} md={6} className={classes.primaryFeaturedPost}>
      <Typography
        variant='h3'
        className={clsx(classes.white, classes.title)}
        gutterBottom
      >
        Title of a longer featured blog post
      </Typography>
      <Typography variant='h5' className={classes.white} gutterBottom>
        Multiple lines of text that form the lede, informing new readers quickly
        and efficiently about what's most interesting in this post's contents.
      </Typography>
      <Link href='#'>
        <Typography variant='subtitle1'>Continue reading…</Typography>
      </Link>
    </Grid>
  </Grid>
)

const SecondaryFeaturedPost = ({ classes }) => (
  <Grid item xs={12} md={6}>
    <Card>
      <Grid container>
        <Grid xs={9}>
          <CardActionArea className={classes.featuredPostPadding}>
            <Typography variant='h5'>Featured Post</Typography>
            <Typography variant='subtitle1' color='textSecondary' gutterBottom>
              Nov 11
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
            <Link href='#'>
              <Typography variant='subtitle1' className={classes.linkMargin}>
                Continue reading…
              </Typography>
            </Link>
          </CardActionArea>
        </Grid>
        <Grid className={classes.image} xs={3} />
      </Grid>
    </Card>
  </Grid>
)

const Articles = ({ classes }) => (
  <Grid item xs={12} md={8}>
    <Typography variant='h6'>From the firehose</Typography>
    <Divider />
    <Typography variant='h5' className={classes.article}>
      Sample blog post
    </Typography>
    <Typography variant='caption'>
      {new Date().toDateString()} by <Link href='#'>Oliver</Link>
    </Typography>
    <br />
    <br />
    <Typography>
      This blog post shows a few different types of content that are supported
      and styled with Material styles. Basic typography, images, and code are
      all supported. You can extend these by modifying <code>Markdown.js</code>.
    </Typography>
    <br />
    <Typography>
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
      venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
      consectetur purus sit amet fermentum.
    </Typography>
    <br />
    <Typography>
      Curabitur blandit tempus porttitor.{' '}
      <b>Nullam quis risus eget urna mollis</b> ornare vel eu leo. Nullam id
      dolor id nibh ultricies vehicula ut id elit.
    </Typography>
    <br />
    <Typography>
      Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
      purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
    </Typography>
    <br />
    <Typography variant='h6'>Heading</Typography>
    <Typography>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros.
      <br />
      <br />
      Sub-heading
      <br />
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </Typography>
  </Grid>
)

const RightNavigation = ({ classes }) => (
  <Grid item xs={12} md={4}>
    <Paper elevation={0} className={classes.paper}>
      <Typography variant='h6' gutterBottom>
        About
      </Typography>
      <Typography>
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
        purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
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

const Blog = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Button variant='text' color='inherit'>
          Subscribe
        </Button>
        <Typography className={classes.grow} align='center' variant='h5'>
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant='outlined' color='inherit'>
          Sign Up
        </Button>
      </Toolbar>
      <Divider />
      <Toolbar>
        <Grid container>
          {categories.map(category => (
            <Grid item className={classes.grow}>
              <Link href='#' color='inherit'>
                <Typography key={category} variant='body2'>
                  {category}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
      <PrimaryFeaturedPost classes={classes} />
      <Grid container spacing={4} className={classes.secondaryFeaturedPost}>
        <SecondaryFeaturedPost classes={classes} />
        <SecondaryFeaturedPost classes={classes} />
      </Grid>
      <Grid container spacing={6}>
        <Articles classes={classes} />
        <RightNavigation classes={classes} />
      </Grid>
      <footer className={classes.footer}>
        <Typography align='center' variant='h6'>
          Footer
        </Typography>
        <Typography align='center' color='textSecondary'>
          Something here to give the footer a purpose!
        </Typography>
        <Typography variant='body2' align='center' color='textSecondary'>
          Copyright &copy;{' '}
          <Link color='inherit' href='#'>
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </footer>
    </Container>
  )
}

export default Blog
