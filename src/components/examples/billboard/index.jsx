// @flow

import React from 'react'
import { connect } from 'react-redux'
import BillboardChart from 'react-billboardjs'
import 'react-billboardjs/lib/billboard.css'

import Container from './container'
import type { People, State } from '../../../types'

type Props = {
  data: People,
}

class BillboardExample extends React.Component<Props> {
  _chart: any
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
  handleChartMounted = ref => {
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

export default connect((state: State): Props => ({ data: state.data.people }))(
  BillboardExample
)
