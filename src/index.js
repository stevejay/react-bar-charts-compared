import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import document from 'global/document'

// import 'semantic-ui-css/semantic.min.css'
import App from './app'
import store from './store'

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
