import React from 'react'
import PropTypes from 'prop-types'
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

class HighchartsExample extends React.PureComponent {
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

HighchartsExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default withHighcharts(
  connect(state => ({ data: state.data.barChart }))(HighchartsExample),
  Highcharts
)
