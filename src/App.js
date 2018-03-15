import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateBarChartData } from './actions/data'
import UpdateButtons from './components/update-buttons'
import RechartsExample from './components/examples/recharts'
import ReactVisExample from './components/examples/react-vis'
import VictoryExample from './components/examples/victory'
// import TauchartsExample from './components/examples/taucharts'
// import C3Example from './components/examples/c3'
import BillboardExample from './components/examples/billboard'
import ChartistExample from './components/examples/chartist'
// import D3FCExample from './components/examples/d3fc'
import NivoExample from './components/examples/nivo'
import HighchartsExample from './components/examples/highcharts'
import '../node_modules/react-vis/dist/style.css'
import '../node_modules/taucharts/dist/taucharts.dark.css'
// import '../node_modules/c3/c3.css'
import '../node_modules/chartist/dist/chartist.css'
import 'react-billboardjs/lib/billboard.css'
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
          <div className='column'>
            <BillboardExample />
          </div>
          {/* <div className='column'>
            <C3Example />
          </div> */}
        </div>
        <div className='row'>
          <div className='column'>
            <ChartistExample />
          </div>
          <div className='column'>
            <NivoExample />
          </div>
          {/* <div className='column'>
            <D3FCExample />
          </div> */}
          {/* <div className='column'>
            <TauchartsExample />
          </div> */}
        </div>
        <div className='row'>
          <div className='column'>
            <HighchartsExample />
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
