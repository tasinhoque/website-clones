import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './Home'
import MuiTemplates from './MuiTemplates'

function App() {
  // let history = useHistory()
  // history.push('/classical-music-recommender')

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
