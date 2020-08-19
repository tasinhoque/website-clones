import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import MuiTemplates from './MuiTemplates'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/mui-templates'>
        <MuiTemplates />
      </Route>
    </Switch>
  )
}

export default App
