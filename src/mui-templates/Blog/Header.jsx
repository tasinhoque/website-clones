import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import {
  Button,
  Typography,
  Grid,
  Link,
  IconButton,
  Toolbar,
  Divider,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  navLink: {
    padding: theme.spacing(1),
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

const Header = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Toolbar>
        <Button>Subscribe</Button>
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
      <Toolbar className={classes.toolbarSecondary}>
        {categories.map(category => (
          <Link
            key={category}
            variant='body2'
            href='#'
            color='inherit'
            className={classes.navLink}
          >
            {category}
          </Link>
        ))}
      </Toolbar>
    </Grid>
  )
}

export default Header
