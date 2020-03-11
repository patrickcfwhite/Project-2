import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import SongTile from './components/Search'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={SongTile}/>
      <Route />
      <Route />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)