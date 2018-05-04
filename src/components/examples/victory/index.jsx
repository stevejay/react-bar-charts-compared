import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryTooltip, VictoryAxis } from 'victory'
import { withTheme } from 'styled-components'

import AutoSizerContainer from '../../auto-sizer-container'

// It seems harder than it should be to create a chart with a fixed height and
// a responsive width. Also, even with the 'standalone={false}' approach,
// the bar chart doesn't behave well at narrow widths.

class VictoryBarChart extends React.PureComponent {
  render () {
    const { width, data, theme } = this.props

    const mappedData = data.map(datum => ({
      x: datum.key, // can specify this mapping using the x prop on VictoryBar
      y: datum.value, // can specify this mapping using the y prop on VictoryBar
      label: datum.value
    }))

    const AXIS_STYLE = {
      axis: { stroke: theme.color.foreground },
      grid: {
        stroke: theme.color.darkForeground
      },
      ticks: {
        stroke: 'transparent',
        size: 0
      },
      tickLabels: {
        fill: theme.color.foreground,
        fontFamily: 'inherit',
        fontSize: '14px' // has to be px
      }
    }

    const DEPENDENT_AXIS_STYLE = {
      axis: { stroke: theme.color.foreground },
      grid: {
        stroke: theme.color.darkForeground
      },
      ticks: {
        stroke: theme.color.foreground,
        size: 6,
        fill: theme.color.foreground
      },
      tickLabels: {
        fill: theme.color.foreground,
        fontFamily: 'inherit',
        fontSize: '14px' // has to be px
      }
    }

    return (
      <svg
        viewBox={'0 0 ' + width + ' 320'}
        preserveAspectRatio='none'
        width={width}
        height={320}
      >
        <VictoryChart
          standalone={false}
          width={width}
          height={320}
          animate={{ duration: 300, onLoad: { duration: 300 } }}
          domainPadding={{ x: 50, y: [0, 20] }}
        >
          <VictoryAxis style={AXIS_STYLE} />
          <VictoryAxis style={DEPENDENT_AXIS_STYLE} dependentAxis />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={mappedData}
            barRatio={1}
            style={{ data: { fill: theme.color.foreground } }}
          />
        </VictoryChart>
      </svg>
    )
  }
}

VictoryBarChart.propTypes = {
  width: PropTypes.number,
  data: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
}

const VictoryExample = props => (
  <AutoSizerContainer>
    <VictoryBarChart {...props} />
  </AutoSizerContainer>
)

export default connect(state => ({
  data: state.data.people
}))(withTheme(VictoryExample))
