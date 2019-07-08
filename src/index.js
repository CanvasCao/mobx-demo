require('babel-polyfill')

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './pages/App'

const mountNode = document.getElementById('MainApp')

const Root = (<App />)

ReactDOM.render(
  Root, mountNode
)
