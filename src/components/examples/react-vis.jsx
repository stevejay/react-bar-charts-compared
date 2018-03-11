import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  XYPlot,
  Hint
} from 'react-vis'

import ExampleContainer from '../example-container'
import AutosizeContainer from '../autosize-container'

const GRID_LINE_STYLE = { stroke: '#6f7890', opacity: 0.5 }

const AXIS_STYLE = {
  line: { stroke: '#CFD2DA' },
  text: { stroke: 'none', fill: '#CFD2DA' }
}

const X_ACCESSOR = d => d.key
const Y_ACCESSOR = d => d.value

class ReactVisExample extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { hoveredCell: false }
    this.handleValueMouseOver = this.handleValueMouseOver.bind(this)
    this.handleValueMouseOut = this.handleValueMouseOut.bind(this)
  }
  handleValueMouseOver (d) {
    console.log('mouse over')
    this.setState({ hoveredCell: d })
  }
  handleValueMouseOut (d) {
    console.log('mouse out')
    this.setState({ hoveredCell: null })
  }
  render () {
    const { data } = this.props
    const { hoveredCell } = this.state
    const yMax = _.maxBy(data, 'value')

    // hint problem: https://github.com/uber/react-vis/issues/518

    // Note: you could use react-vis's FlexibleWidthXYPlot instead of
    // AutosizeContainer.

    return (
      <ExampleContainer title='React Vis'>
        <AutosizeContainer>
          <XYPlot
            width={0} // stops a props warning when using AutosizeContainer
            height={0} // stops a props warning when using AutosizeContainer
            xType='ordinal'
            yType='linear'
            yDomain={[0, yMax.value * 1.05]}
            getX={X_ACCESSOR}
            getY={Y_ACCESSOR}
            animation
          >
            <HorizontalGridLines style={GRID_LINE_STYLE} />
            <VerticalGridLines style={GRID_LINE_STYLE} />
            <XAxis style={AXIS_STYLE} />
            <YAxis style={AXIS_STYLE} />
            <VerticalBarSeries
              className='first-series'
              color='#CFD2DA'
              data={data}
            />
            {hoveredCell && <Hint value={hoveredCell} />}
          </XYPlot>
        </AutosizeContainer>
      </ExampleContainer>
    )
  }
}

ReactVisExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  ReactVisExample
)
