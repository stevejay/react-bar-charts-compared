import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  withHighcharts,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  ColumnSeries,
  Tooltip
} from 'react-jsx-highcharts'
import Highcharts from 'highcharts'

import Card from './card'

let HighchartsWrapper = ({ data, width }) => (
  <HighchartsChart>
    <Chart width={width} height={320} />
    <XAxis categories={data.map(datum => datum.key)} type='category' />
    <YAxis id='number'>
      <ColumnSeries id='installation' data={data.map(datum => datum.value)} />
    </YAxis>
    <Tooltip />
  </HighchartsChart>
)

HighchartsWrapper = withHighcharts(HighchartsWrapper, Highcharts)

const HighchartsExample = ({ data }) => (
  <Card
    title='Foo'
    description='A mature charting solution with a React adaptor. Not free for commercial use. Makes great use of the available screen space.'
  >
    <HighchartsWrapper data={data} />
  </Card>
)

HighchartsExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  HighchartsExample
)
