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

const Menu = ({ url }) => {
  return (
    <Grid container spacing={3}>
      <CustomCard link={`${url}/sign-in`} text='Sign In' />
      <CustomCard link={`${url}/sign-in-side`} text='Sign In Side' />
      <CustomCard link={`${url}/sign-up`} text='Sign Up' />
      <CustomCard link={`${url}/blog`} text='Blog' />
      <CustomCard link={`${url}/checkout`} text='Checkout' />
      <CustomCard link={`${url}/album`} text='Album' />
      <CustomCard link={`${url}/pricing`} text='Pricing' />
      <CustomCard link={`${url}/dashboard`} text='Dashboard' />
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
      <Route path={`${path}/sign-in`}>
        <SignIn />
      </Route>
      <Route path={`${path}/sign-in-side`}>
        <SignInSide />
      </Route>
      <Route path={`${path}/sign-up`}>
        <SignUp />
      </Route>
      <Route path={`${path}/blog`}>
        <Blog />
      </Route>
      <Route path={`${path}/checkout`}>
        <Checkout />
      </Route>
      <Route path={`${path}/album`}>
        <Album />
      </Route>
      <Route path={`${path}/pricing`}>
        <Pricing />
      </Route>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
    </Switch>
  )
}

export default MuiTemplates
