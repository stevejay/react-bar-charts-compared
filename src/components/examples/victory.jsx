import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryTooltip } from 'victory'

import ExampleContainer from '../example-container'
import AutosizeContainer from '../autosize-container'

const Svg = ({ width, height, children }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio='none'
    width={width}
    height={height}
  >
    {children}
  </svg>
)
const VictoryExample = ({ data }) => {
  const mappedData = data.map(datum => ({
    x: datum.key, // can specify this mapping using the x prop on VictoryBar
    y: datum.value, // can specify this mapping using the y prop on VictoryBar
    label: datum.value
  }))

  return (
    <ExampleContainer title='Victory'>
      <AutosizeContainer>
        <Svg>
          <VictoryChart
            // domainPadding={{ x: 15 }}
            standalone={false}
            animate={{ duration: 300, onLoad: { duration: 300 } }}
            domainPadding={{ x: 40 }}
          >
            <VictoryBar
              // categories={{ x: mappedData.map(datum => datum.x) }}
              labelComponent={<VictoryTooltip />}
              data={mappedData}
              barRatio={1}
              // x='key'
              // y='value'
              style={{
                data: { fill: '#CFD2DA' }
              }}
            />
            {/* <CartesianGrid stroke='#6f7890' opacity={0.5} />
        <XAxis dataKey='key' stroke='#CFD2DA' tickLine={false} />
        <YAxis dataKey='value' stroke='#CFD2DA' />
        <Tooltip cursor={false} />
        <Bar dataKey='value' fill='#CFD2DA' /> */}
          </VictoryChart>
        </Svg>
      </AutosizeContainer>
    </ExampleContainer>
  )
}

VictoryExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(VictoryExample)
