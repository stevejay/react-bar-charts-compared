import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  FlexibleWidthXYPlot
} from 'react-vis'

import ExampleContainer from '../example-container'

const GRID_LINE_STYLE = { stroke: '#6f7890', opacity: 0.5 }

const AXIS_STYLE = {
  line: { stroke: '#CFD2DA' },
  text: { stroke: 'none', fill: '#CFD2DA' }
}

const X_ACCESSOR = d => d.key
const Y_ACCESSOR = d => d.value

const ReactVisExample = ({ data }) => {
  const yMax = _.maxBy(data, 'value')

  return (
    <ExampleContainer title='React Vis BarChart'>
      <FlexibleWidthXYPlot
        height={300}
        xType='ordinal'
        yType='linear'
        yDomain={[0, yMax.value * 1.05]}
        getX={X_ACCESSOR}
        getY={Y_ACCESSOR}
      >
        <HorizontalGridLines style={GRID_LINE_STYLE} animation />
        <VerticalGridLines style={GRID_LINE_STYLE} animation />
        <XAxis style={AXIS_STYLE} animation />
        <YAxis style={AXIS_STYLE} animation />
        <VerticalBarSeries
          animation
          className='first-series'
          color='#CFD2DA'
          data={data}
        />
      </FlexibleWidthXYPlot>
    </ExampleContainer>
  )
}

export default connect(state => ({ data: state.data.barChart }))(
  ReactVisExample
)
