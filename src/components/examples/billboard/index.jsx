import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BillboardChart from 'react-billboardjs'
import 'react-billboardjs/lib/billboard.css'

import Container from './container'

class BillboardExample extends React.Component {
  constructor (props) {
    super(props)
    this.handleChartMounted = this.handleChartMounted.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    // TODO strange that I have to do it this way. What's the point of the adapter?

    if (nextProps.data !== this.props.data) {
      if (this._chart) {
        this._chart.loadData({
          json: nextProps.data,
          keys: {
            x: 'key',
            value: ['value']
          },
          type: 'bar'
        })
      }
    }
  }
  shouldComponentUpdate () {
    return false
  }
  handleChartMounted (ref) {
    this._chart = ref
  }
  render () {
    const { data } = this.props

    const axis = {
      x: {
        type: 'category'
      }
    }

    const billboardData = {
      json: data,
      keys: {
        x: 'key',
        value: ['value']
      },
      type: 'bar'
    }

    return (
      <Container>
        <BillboardChart
          isPure
          ref={this.handleChartMounted}
          data={billboardData}
          axis={axis}
          legend={{
            show: false
          }}
          padding={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 60
          }}
        />
      </Container>
    )
  }
}

BillboardExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  BillboardExample
)
