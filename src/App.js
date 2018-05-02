import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider, injectGlobal } from 'styled-components'
import 'normalize.css'
import 'babel-polyfill'

import Page from './components/page'
import Card from './components/card'
import Carousel from './components/carousel'
import Toolbar from './components/toolbar'
import SlideIndicator from './components/slide-indicator'
import { updateBarChartData } from './actions/data'
import theme from './theme'
import examples from './examples'
import * as styledUtil from './utils/styled'

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

  .d3-tip {
    pointer-events: none !important;
    line-height: 1;
    padding: 8px;
    background: rgba(0, 0, 0, 0.8);
    color: ${theme.color.foreground};
    font-size: ${theme.font.chartLabelSize};
    border-radius: .2em;
  }
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { currentSlideIndex: 0 }
    this.props.updateData()
  }
  renderSlide = index => (
    <Card {...examples[index]}>
      {React.createElement(examples[index].component)}
    </Card>
  )
  updateSlideIndex = index => {
    this.setState({ currentSlideIndex: index })
  }
  render () {
    const { updateData } = this.props
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
              totalSlides={examples.length}
              currentSlideIndex={currentSlideIndex}
            />
            <Toolbar
              totalSlides={examples.length}
              currentSlideIndex={currentSlideIndex}
              updateData={updateData}
              updateSlideIndex={this.updateSlideIndex}
            />
          </Page.Main>
        </Page>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  updateData: PropTypes.func.isRequired
}

export default connect(null, { updateData: updateBarChartData })(App)
