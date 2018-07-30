import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './Home'
import AlbumView from './AlbumView'
import PhotoView from './PhotoView'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/album/:id" component={AlbumView} />
            <Route path="/photo/:id" component={PhotoView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
