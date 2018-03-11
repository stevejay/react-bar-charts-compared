import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateBarChartData } from './actions/data'
import UpdateButtons from './components/update-buttons'
import RechartsExample from './components/examples/recharts'
import ReactVisExample from './components/examples/react-vis'
import VictoryExample from './components/examples/victory'
import '../node_modules/react-vis/dist/style.css'
import './App.css'

class App extends Component {
  componentWillMount () {
    this.props.updateBarChartData()
  }
  render () {
    return (
      <main>
        <div className='row'>
          <div className='column'>
            <RechartsExample />
          </div>
          <div className='column'>
            <ReactVisExample />
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <VictoryExample />
          </div>
        </div>
        <footer>
          <UpdateButtons />
        </footer>
      </main>
    )
  }
}

App.propTypes = {
  updateBarChartData: PropTypes.func.isRequired
}

export default connect(null, {
  updateBarChartData
})(App)
