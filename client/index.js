import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import Home from './components/Home/Home'

// Font Awesome
require('font-awesome-webpack2')

// Styles
import './index.scss'

// The application mount point
const mount = document.getElementById('app')

// The router middleware
const router = routerMiddleware(hashHistory)


render(
  <Home />,
  mount
)
