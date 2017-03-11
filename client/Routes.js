import { Router, Route } from 'react-router';
import React, { Component } from 'react'
import Home from './components/Home/Home'
import Store from './components/Store/Store'
import Library from './components/Library/Library'
import Community from './components/Community/Community'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/library" component={Library} />
        <Route path="/community" component={Community} />
      </Router>
    )
  }
}