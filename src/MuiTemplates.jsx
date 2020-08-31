import React from 'react'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import {
  SignIn,
  SignInSide,
  SignUp,
  Blog,
  Checkout,
  Album,
  Pricing,
  Dashboard,
} from './mui-templates'
import { Grid } from '@material-ui/core'
import CustomCard from './CustomCard'
import signIn from './mui-templates/previews/sign-in.jpg'
import signInSide from './mui-templates/previews/sign-in-side.jpg'
import signUp from './mui-templates/previews/sign-up.jpg'
import blog from './mui-templates/previews/blog.jpg'
import checkout from './mui-templates/previews/checkout.jpg'
import pricing from './mui-templates/previews/pricing.jpg'
import dashboard from './mui-templates/previews/dashboard.jpg'
import album from './mui-templates/previews/album.jpg'

const muiClones = [
  {
    img: signIn,
    text: 'Sign In',
    CloneComponent: SignIn,
  },
  {
    img: signInSide,
    text: 'Sign In Side',
    CloneComponent: SignInSide,
  },
  {
    img: signUp,
    text: 'Sign Up',
    CloneComponent: SignUp,
  },
  {
    img: blog,
    text: 'Blog',
    CloneComponent: Blog,
  },
  {
    img: checkout,
    text: 'Checkout',
    CloneComponent: Checkout,
  },
  {
    img: pricing,
    text: 'Pricing',
    CloneComponent: Pricing,
  },
  {
    img: dashboard,
    text: 'Dashboard',
    CloneComponent: Dashboard,
  },
  {
    img: album,
    text: 'Album',
    CloneComponent: Album,
  },
]

const Menu = ({ url }) => {
  return (
    <Grid container spacing={3}>
      {muiClones.map(clone => (
        <CustomCard
          key={clone.text}
          img={clone.img}
          link={`${url}/${clone.text.toLowerCase().replace(/[ ]/g, '-')}`}
          text={clone.text}
        />
      ))}
    </Grid>
  )
}

const MuiTemplates = () => {
  const { path, url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <Menu url={url} />
      </Route>
      {muiClones.map(clone => (
        <Route
          key={clone.text}
          path={`${path}/${clone.text.toLowerCase().replace(/[ ]/g, '-')}`}
        >
          <clone.CloneComponent />
        </Route>
      ))}
    </Switch>
  )
}

export default MuiTemplates
