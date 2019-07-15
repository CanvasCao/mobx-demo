require('babel-polyfill')

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'
import {Provider} from 'mobx-react'
import stores from './store'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('MainApp')
)
