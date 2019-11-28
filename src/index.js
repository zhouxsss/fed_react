import React from 'react'
import ReactDOM from 'react-dom'
import Sirius from 'redux-sirius'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import 'normalize.css'
import './index.module.scss'

import App from 'containers/App'

const middleware = process.env.NODE_ENV === 'development' ? [logger] : []
const store = new Sirius({
  fileModels: {
    webpackContext: require.context('./models', true, /\.js$/)
  },
  middleware
}).store()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
