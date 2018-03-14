import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryTooltip, VictoryAxis } from 'victory'

import ExampleContainer from '../example-container'
import AutosizeContainer from '../autosize-container'

// Seems harder than it should to create a chart with a fixed height and
// responsive width, and even with the 'standalone={false}' approach,
// a bar chart doesn't behave well at narrow widths.

const AXIS_STYLE = {
  axis: { stroke: '#CFD2DA' },
  grid: {
    stroke: '#6f7890'
  },
  ticks: {
    stroke: 'transparent',
    size: 0
  },
  tickLabels: {
    fill: '#CFD2DA',
    fontFamily: 'inherit',
    fontSize: 12
  }
}

const DEPENDENT_AXIS_STYLE = {
  axis: { stroke: '#CFD2DA' },
  grid: {
    stroke: '#6f7890'
  },
  ticks: {
    stroke: '#CFD2DA',
    size: 6,
    fill: '#CFD2DA'
  },
  tickLabels: {
    fill: '#CFD2DA',
    fontFamily: 'inherit',
    fontSize: 12
  }
}

class VictoryBarChart extends React.Component {
  render () {
    const { width, data } = this.props

    const mappedData = data.map(datum => ({
      x: datum.key, // can specify this mapping using the x prop on VictoryBar
      y: datum.value, // can specify this mapping using the y prop on VictoryBar
      label: datum.value
    }))

    return (
      <svg
        viewBox={'0 0 ' + width + ' 300'}
        preserveAspectRatio='none'
        width={width}
        height={300}
      >
        <VictoryChart
          standalone={false}
          width={width}
          height={300}
          animate={{ duration: 300, onLoad: { duration: 300 } }}
          domainPadding={{ x: 50, y: [0, 20] }}
        >
          <VictoryAxis style={AXIS_STYLE} />
          <VictoryAxis style={DEPENDENT_AXIS_STYLE} dependentAxis />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={mappedData}
            barRatio={1}
            style={{ data: { fill: '#CFD2DA' } }}
          />
        </VictoryChart>
      </svg>
    )
  }
}

VictoryBarChart.propTypes = {
  data: PropTypes.array.isRequired
}

const ConnectedVictoryBarChart = connect(state => ({
  data: state.data.barChart
}))(VictoryBarChart)

const VictoryExample = () => {
  return (
    <ExampleContainer title='Victory'>
      <AutosizeContainer>
        <ConnectedVictoryBarChart />
      </AutosizeContainer>
    </ExampleContainer>
  )
}

export default VictoryExample
