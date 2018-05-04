import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as d3 from 'd3'
import * as fc from 'd3fc'

import ExampleContainer from '../example-container'

class D3FCChart extends React.Component {
  constructor (props) {
    super(props)
    this.handleMounted = this.handleMounted.bind(this)
  }
  componentDidMount () {
    this._update(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.data !== this.props.data) {
      this._update(nextProps)
    }
  }
  handleMounted (ref) {
    this._chart = ref
  }
  shouldComponentUpdate () {
    return false
  }
  _update (props) {
    // const { width, height, data } = props
    const { data } = props
    const gridlines = fc.annotationSvgGridline()

    const yExtent = fc
      .extentLinear()
      .include([0])
      .pad([0, 0.1])
      .accessors([d => d.value])

    const chart = fc
      .chartSvgCartesian(d3.scaleBand(), d3.scaleLinear())
      .xDomain(data.map(datum => datum.key))
      .xPadding(0.2)
      .yDomain(yExtent(data))
      .yNice()

    const series = fc
      .autoBandwidth(fc.seriesSvgBar())
      .align('left')
      .key(d => d.key)
      .crossValue(d => d.key)
      .mainValue(d => d.value)

    const multi = fc.seriesSvgMulti().series([gridlines, series])

    chart.plotArea(multi)

    d3.select(this._chart).datum(data).transition().duration(500).call(chart)

    // console.log('updating')

    // const chart = d3.select(this._chart)
    // let svg = chart.selectAll('svg').data([data])

    // svg = svg
    //   .enter()
    //   .append('svg')
    //   .merge(svg)
    //   .attr('width', width)
    //   .attr('height', height)

    // const xScale = d3
    //   .scalePoint()
    //   .domain(data.map(datum => datum.key))
    //   .range([0, width])
    //   .padding(0.5)

    // const yScale = d3
    //   .scaleLinear()
    //   .domain([0, dataDomain[1]])
    //   .range([height, 0])

    // const series = fc
    //   .seriesSvgBar()
    //   // .bandwidth(40)
    //   .crossValue(d => d.key)
    //   .mainValue(d => d.value)
    //   .xScale(xScale)
    //   .yScale(yScale)

    // svg.data([data]).transition().duration(500).call(series)
  }
  render () {
    return (
      <div ref={this.handleMounted} style={{ width: '100%', height: 300 }} />
    )
  }
}

D3FCChart.propTypes = {
  // width: PropTypes.number,
  // height: PropTypes.number,
  data: PropTypes.array.isRequired
}

const D3FCExample = ({ data }) => (
  <ExampleContainer title='D3FC'>
    <D3FCChart data={data} />
  </ExampleContainer>
)

D3FCExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.people }))(D3FCExample)
