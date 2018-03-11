import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateBarChartData } from './actions/data'
// import ExampleContainer from './components/example-container'
import UpdateButtons from './components/update-buttons'
import RechartExample from './components/examples/rechart'
import './App.css'

class App extends Component {
  componentWillMount () {
    this.props.updateBarChartData()
  }
  render () {
    return (
      <main>
        <RechartExample />
        {/* <ExampleContainer title='Some Library'>
          The bar chart
        </ExampleContainer>
        <ExampleContainer title='Another Library'>
          The other bar chart
        </ExampleContainer> */}
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
