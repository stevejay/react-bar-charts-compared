import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider, injectGlobal } from 'styled-components'
import 'normalize.css'
import 'babel-polyfill'
import 'react-vis/dist/style.css'
import 'taucharts/dist/taucharts.dark.css'
import 'chartist/dist/chartist.css'
import 'react-billboardjs/lib/billboard.css'

import Page from './components/page'
import Carousel from './components/carousel'
import Toolbar from './components/toolbar'
import SlideIndicator from './components/slide-indicator'
import RechartsExample from './components/examples/recharts'
import ReactVisExample from './components/examples/react-vis'
import VictoryExample from './components/examples/victory'
import BillboardExample from './components/examples/billboard'
import ChartistExample from './components/examples/chartist'
import NivoExample from './components/examples/nivo'
import HighchartsExample from './components/examples/highcharts'
import D3KitExample from './components/examples/d3kit'
import D3KitHybridExample from './components/examples/d3kit-hybrid'
import { updateBarChartData } from './actions/data'
import theme from './theme'
import * as styledUtil from './utils/styled'
import './app.css'

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

injectGlobal`
  body {
    box-sizing: border-box;
    min-height: 100vh;
    min-width: 320px;
    background-color: ${theme.color.background};
    color: ${theme.color.foreground};
    font-family: ${theme.font.defaultFamily};
    ${styledUtil.fluidAttr('font-size', '.875rem', '.5')}
    ${styledUtil.fluidAttr('padding', '.875rem', '1.75')}
  }
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { currentSlideIndex: 0 }
    this.props.updateBarChartData()
  }
  renderSlide = index => (
    <Carousel.SlideContainer>
      {React.createElement(CHART_EXAMPLE_COMPONENTS[index])}
    </Carousel.SlideContainer>
  )
  updateSlideIndex = index => {
    this.setState({ currentSlideIndex: index })
  }
  render () {
    const { updateBarChartData } = this.props
    const { currentSlideIndex } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Page.Header>React Bar Charts Compared</Page.Header>
          <Page.Main>
            <Carousel
              currentSlideIndex={currentSlideIndex}
              renderSlide={this.renderSlide}
            />
            <SlideIndicator
              totalSlides={CHART_EXAMPLE_COMPONENTS.length}
              currentSlideIndex={currentSlideIndex}
            />
            <Toolbar
              totalSlides={CHART_EXAMPLE_COMPONENTS.length}
              currentSlideIndex={currentSlideIndex}
              updateBarChartData={updateBarChartData}
              updateSlideIndex={this.updateSlideIndex}
            />
          </Page.Main>
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
