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
  FlexibleWidthXYPlot,
  Hint
} from 'react-vis'

import ExampleContainer from '../example-container'

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
  }
  handleValueMouseOver = d => {
    console.log('mouse over')
    this.setState({ hoveredCell: d })
  }
  handleValueMouseOut = d => {
    console.log('mouse out')
    this.setState({ hoveredCell: false })
  }
  render () {
    const { data } = this.props
    const { hoveredCell } = this.state
    const yMax = _.maxBy(data, 'value')

    // hint problem: https://github.com/uber/react-vis/issues/518

    return (
      <ExampleContainer title='React Vis'>
        <FlexibleWidthXYPlot
          height={300}
          xType='ordinal'
          yType='linear'
          yDomain={[0, yMax.value * 1.05]}
          getX={X_ACCESSOR}
          getY={Y_ACCESSOR}
          animation={!hoveredCell}
        >
          <HorizontalGridLines style={GRID_LINE_STYLE} />
          <VerticalGridLines style={GRID_LINE_STYLE} />
          <XAxis style={AXIS_STYLE} />
          <YAxis style={AXIS_STYLE} />
          <VerticalBarSeries
            className='first-series'
            color='#CFD2DA'
            data={data}
            onValueMouseOver={this.handleValueMouseOver}
            onValueMouseOut={this.handleValueMouseOut}
          />
          {hoveredCell &&
            <Hint value={hoveredCell}>
              <aside>
                <p>{hoveredCell.key}</p>
                <p>{hoveredCell.value}</p>
              </aside>
            </Hint>}
        </FlexibleWidthXYPlot>
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
