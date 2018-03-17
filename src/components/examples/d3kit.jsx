import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SvgChart } from 'd3kit'
import { createComponent } from 'react-d3kit'
import * as d3 from 'd3'
import d3scription from 'd3scription'

// https://github.com/GlobalWebIndex/d3scription

import ExampleContainer from '../example-container'

window.d3 = d3

class BarChart extends SvgChart {
  constructor (selector, options) {
    super(selector, options)
    this.layers.create(['grid', 'content', 'x-axis', 'y-axis'])

    this.grid = this.layers.get('grid')
    this.content = this.layers.get('content')
    this.xAxis = this.layers.get('x-axis')
    this.yAxis = this.layers.get('y-axis')

    this.x = d3.scaleBand().padding(0.2)
    this.y = d3.scaleLinear()
    this.y.ticks(5) // TODO why isn't this working?

    this.on('resize.default', this.visualize)
    this.on('data.default', this.visualize)
  }
  visualize = () => {
    if (!this.hasData()) {
      return
    }

    const data = this.data()
    const transition = this.svg.transition().duration(500)

    const tipFactory = d3scription(d => d.value)
    const tip = tipFactory().element(this.content)

    this.x.range([0, this.getInnerWidth()])
    this.y.range([this.getInnerHeight(), 0])

    this.x.domain(data.map(d => d.key))
    this.y.domain([0, d3.max(data, d => d.value)])

    this.grid
      .transition(transition)
      .call(
        d3
          .axisLeft(this.y)
          .tickSize(-this.getInnerWidth())
          .tickFormat('')
          .ticks(5)
      )
      .select('.domain')
      .remove()

    const selection = this.content.selectAll('.bar').data(data, d => d.key)

    selection
      .exit()
      .transition(transition)
      .attr('y', this.getInnerHeight())
      .attr('height', 0)
      .style('opacity', 0.01)
      .remove()

    selection
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.x(d.key))
      .attr('width', this.x.bandwidth())
      .attr('y', this.getInnerHeight())
      .attr('height', 0)
      .style('opacity', 0)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .merge(selection)
      .transition(transition)
      .style('opacity', 1)
      .attr('x', d => this.x(d.key))
      .attr('width', this.x.bandwidth())
      .attr('y', d => this.y(d.value))
      .attr('height', d => this.getInnerHeight() - this.y(d.value))

    this.xAxis
      .attr('transform', 'translate(0,' + this.getInnerHeight() + ')')
      .transition(transition)
      .call(d3.axisBottom(this.x))

    this.yAxis.transition(transition).call(d3.axisLeft(this.y))
  }
}

const ReactBarChart = createComponent(BarChart)

const FIT_OPTIONS = { width: '100%', height: 300 }

const OPTIONS = {
  margin: { top: 10, right: 10, bottom: 30, left: 40 },
  offset: { x: 0.5, y: 0.5 } // add little offset for sharp-edge rendering
}

const D3KitExampleWrapper = ({ data }) => (
  <ExampleContainer title='D3Kit'>
    <ReactBarChart
      data={data}
      options={OPTIONS}
      fitOptions={FIT_OPTIONS}
      watch
    />
  </ExampleContainer>
)

D3KitExampleWrapper.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  D3KitExampleWrapper
)
