import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import SongTile from './components/SongTile'
import Results from './components/Results'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={Results} />
      <Route exact path='/birthday' component={Results} />
      <Route exact path='/results' component={Results} />
      <Route />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)