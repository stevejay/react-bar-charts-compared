import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'babel-polyfill'

import Page from './components/page'
import PageHeader from './components/page/header'
import PageBody from './components/page/body'
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
import D3KitExample from './components/examples/d3kit'
// import D3KitTransformExample from './components/examples/d3kit-transform'
import D3KitHybridExample from './components/examples/d3kit-hybrid'
import '../node_modules/react-vis/dist/style.css'
import '../node_modules/taucharts/dist/taucharts.dark.css'
// import '../node_modules/c3/c3.css'
import Carousel from './components/carousel'
import '../node_modules/chartist/dist/chartist.css'
import 'react-billboardjs/lib/billboard.css'
import './App.css'

const CHART_EXAMPLE_COMPONENTS = [
  HighchartsExample,
  D3KitExample,
  D3KitHybridExample,
  RechartsExample,
  ReactVisExample,
  VictoryExample,
  BillboardExample,
  ChartistExample,
  NivoExample
]

const THEME = {
  gutter: '30px'
}

class App extends Component {
  componentWillMount () {
    this.props.updateBarChartData()
    this.renderSlide = this.renderSlide.bind(this)
  }
  renderSlide (index) {
    return (
      <div className='slide'>
        {React.createElement(CHART_EXAMPLE_COMPONENTS[index])}
      </div>
    )
  }
  render () {
    return (
      <ThemeProvider theme={THEME}>
        <Page>
          <PageHeader>React Bar Charts Compared</PageHeader>
          <PageBody>
            <Carousel
              total={CHART_EXAMPLE_COMPONENTS.length}
              renderSlide={this.renderSlide}
            />
          </PageBody>
          <footer>
            <UpdateButtons />
          </footer>
        </Page>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  updateBarChartData: PropTypes.func.isRequired
}

export default connect(null, {
  updateBarChartData
})(App)
