import React from 'react'
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom'
import { SignIn, SignInSide, SignUp } from './mui-templates'

const Menu = ({ url }) => {
  return (
    <ul>
      <li>
        <Link to={`${url}/sign-up`}>Sign In</Link>
      </li>
      <li>
        <Link to={`${url}/sign-in-side`}>Sign In Side</Link>
      </li>
      <li>
        <Link to={`${url}/sign-in`}>Sign Up</Link>
      </li>
    </ul>
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
    </Switch>
  )
}

export default MuiTemplates
