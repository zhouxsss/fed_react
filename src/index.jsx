import React from 'react'
import ReactDOM from 'react-dom'
import Sirius from 'redux-sirius'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from 'containers/App'

import './index.module.scss'

const middleware = process.env.NODE_ENV === 'development' ? [logger] : []
const store = new Sirius({
  fileModels: {
    webpackContext: require.context('./models', true, /\.js$/)
  },
  middleware
}).store()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
