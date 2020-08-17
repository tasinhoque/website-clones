import React from 'react'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import { SignIn, SignInSide, SignUp, Blog, Checkout } from './mui-templates'
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
    </Switch>
  )
}

export default MuiTemplates
