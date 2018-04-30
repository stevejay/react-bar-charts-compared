import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'
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

injectGlobal`
  .highcharts-background {
    fill: transparent;
  }

  .highcharts-axis-labels text {
    font-size: 12px !important;
    fill: #CFD2DA !important;
    color: #CFD2DA !important;
  }

  .highcharts-yaxis-grid {
    stroke: #6f7890;
    opacity: 0.5;
  }

  .highcharts-column-series rect {
    fill: #CFD2DA;
    stroke: #CFD2DA;
  }

  .highcharts-column-series rect.highcharts-point-hover {
    fill: #1EE3A1;
    stroke: #1EE3A1;
  }
`

class HighchartsExample extends React.PureComponent {
  render () {
    const { data, width } = this.props

    return (
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
