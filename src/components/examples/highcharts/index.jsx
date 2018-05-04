// @flow

import React from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts'
import {
  withHighcharts,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  ColumnSeries,
  Tooltip
} from 'react-jsx-highcharts'

import Container from './container'
import type { People, State } from '../../../types'

type Props = {|
  +data: People,
  +width: number,
|}

class HighchartsExample extends React.PureComponent<Props> {
  render () {
    const { data, width } = this.props

    return (
      <Container>
        <HighchartsChart>
          <Chart width={width} height={320} />
          <XAxis categories={data.map(datum => datum.key)} type='category' />
          <YAxis id='number'>
            <ColumnSeries
              id='installation'
              data={data.map(datum => datum.value)}
            />
          </YAxis>
          <Tooltip />
        </HighchartsChart>
      </Container>
    )
  }
}

export default withHighcharts(
  connect((state: State) => ({ data: state.data.people }))(HighchartsExample),
  Highcharts
)
