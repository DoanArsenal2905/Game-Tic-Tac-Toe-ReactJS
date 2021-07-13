import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </BrowserRouter>
)

export default App
