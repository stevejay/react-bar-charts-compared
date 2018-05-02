import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SvgChart } from 'd3kit'
import { createComponent } from 'react-d3kit'
import * as d3 from 'd3'
// import d3Tip from 'd3-tip'
import * as fc from 'd3fc' // use d3fc-extent instead

import ExampleContainer from '../example-container'

// This approach is pointless as SVG rendering in browsers is not
// optimised to use compositing when only transform and/or opacity
// is being animated.

class BarChartTransform extends SvgChart {
  constructor (selector, options) {
    super(selector, options)

    this.layers.create(['grid', 'content', 'x-axis', 'y-axis'])
    this.grid = this.layers.get('grid')
    this.content = this.layers.get('content')
    this.xAxis = this.layers.get('x-axis')
    this.yAxis = this.layers.get('y-axis')

    this.x = d3.scaleBand().padding(0.2)
    this.y = d3.scaleLinear()

    // this.tip = d3Tip()
    //   .attr('class', 'd3-tip')
    //   .offset([10, 0])
    //   .html(d => d.value)

    // this.content.call(this.tip)

    this.on('resize.default', this.visualize)
    this.on('data.default', this.visualize)
  }
  visualize = () => {
    if (!this.hasData()) {
      return
    }

    const data = this.data()
    const transition = this.svg.transition().duration(500)

    this.x.range([0, this.getInnerWidth()])
    this.y.range([this.getInnerHeight(), 0])

    const yExtent = fc.extentLinear().accessors([d => d.value]).pad([0, 0.1])

    this.x.domain(data.map(d => d.key))
    this.y.domain(yExtent(data))

    // this.grid
    //   .transition(transition)
    //   .call(
    //     d3
    //       .axisLeft(this.y)
    //       .ticks(5)
    //       .tickSize(-this.getInnerWidth())
    //       .tickFormat('')
    //   )
    //   .select('.domain')
    //   .remove()

    const selection = this.content.selectAll('.bar').data(data, d => d.key)

    selection.exit().transition(transition).style('opacity', 0.01).remove()

    selection
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', this.x.bandwidth())
      .attr('height', this.getInnerHeight())
      .attr('x', 0)
      .attr('y', 0)
      .attr('transform-origin', 'top left')
      .attr('transform', d => {
        const scaleX = 1
        const scaleY =
          1 / this.getInnerHeight() * (this.getInnerHeight() - this.y(d.value))
        const translateX = this.x(d.key)
        const translateY = this.y(d.value)
        return `translate(${translateX} ${translateY}) scale(${scaleX} ${scaleY})`
      })
      .style('opacity', 0.01)
      // .on('mouseover', this.tip.show)
      // .on('mouseout', this.tip.hide)
      .merge(selection)
      .transition(transition)
      .attr('transform', d => {
        const scaleX = 1
        const scaleY =
          1 / this.getInnerHeight() * (this.getInnerHeight() - this.y(d.value))
        const translateX = this.x(d.key)
        const translateY = this.y(d.value)
        return `translate(${translateX} ${translateY}) scale(${scaleX} ${scaleY})`
      })
      .style('opacity', 1)

    // this.xAxis
    //   .attr('transform', 'translate(0,' + this.getInnerHeight() + ')')
    //   .transition(transition)
    //   .call(d3.axisBottom(this.x))

    // this.yAxis.transition(transition).call(d3.axisLeft(this.y).ticks(5))
  }
}

const ReactBarChartTransform = createComponent(BarChartTransform)

const FIT_OPTIONS = { width: '100%', height: 300 }

const OPTIONS = {
  margin: { top: 10, right: 10, bottom: 30, left: 40 },
  offset: { x: 0.5, y: 0.5 } // add little offset for sharp-edge rendering
}

const D3KitTransformExampleWrapper = ({ data }) => (
  <ExampleContainer title='D3Kit Transform'>
    <ReactBarChartTransform
      data={data}
      options={OPTIONS}
      fitOptions={FIT_OPTIONS}
      watch
    />
  </ExampleContainer>
)

D3KitTransformExampleWrapper.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  D3KitTransformExampleWrapper
)
