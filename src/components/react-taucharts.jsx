import React from 'react'
import PropTypes from 'prop-types'
import { Chart } from 'taucharts'
import equal from 'deep-equal'

// From https://github.com/Semigradsky/taucharts-react/blob/master/src/index.js

class ReactTaucharts extends React.Component {
  constructor (props) {
    super(props)
    this.handleMounted = this.handleMounted.bind(this)
  }
  handleMounted (ref) {
    this._placeholderRef = ref
  }
  componentWillUnmount () {
    this.chart.destroy()
  }
  componentDidMount () {
    this._renderChart()
  }
  shouldComponentUpdate (nextProps) {
    if (
      nextProps.className === this.props.className &&
      nextProps.height === this.props.height &&
      nextProps.width === this.props.width &&
      equal(nextProps.options, this.props.options, { strict: true })
    ) {
      this.chart.setData(nextProps.data)
      return false
    }

    return true
  }
  componentDidUpdate () {
    this.chart.destroy()
    this._renderChart()
  }
  _renderChart () {
    this.chart = new Chart({
      ...this.props.options,
      data: this.props.data
      // size: { height: this.props.height, width: this.props.width }
    })

    if (this.props.height && this.props.width) {
      this.chart.renderTo(this._placeholderRef, {
        height: this.props.height,
        width: this.props.width
      })
    } else {
      this.chart.renderTo(this._placeholderRef)
    }
  }
  render () {
    return (
      <div
        ref={this.handleMounted}
        className={this.props.className}
        style={{
          width: '100%',
          height: 300,
          margin: 0,
          padding: 0
        }}
      />
    )
  }
}

ReactTaucharts.propTypes = {
  options: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ReactTaucharts
