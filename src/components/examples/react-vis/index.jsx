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
  FlexibleWidthXYPlot
} from 'react-vis'
import 'react-vis/dist/style.css'
import { withTheme } from 'styled-components'

import Container from './container'
import Tooltip from './tooltip'

const X_ACCESSOR = d => d.key
const Y_ACCESSOR = d => d.value
const SERIES_CLASS_NAME = 'first-series'

class ReactVisExample extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { hoveredCell: false }
  }
  handleValueMouseOver = d => {
    this.setState({ hoveredCell: d })
  }
  handleValueMouseOut = d => {
    this.setState({ hoveredCell: false })
  }
  render () {
    const { data, theme } = this.props
    const { hoveredCell } = this.state
    const yMax = _.maxBy(data, 'value')

    // hint problem: https://github.com/uber/react-vis/issues/518

    const GRID_LINE_STYLE = { stroke: theme.color.darkForeground, opacity: 0.5 }

    const AXIS_STYLE = {
      line: { stroke: theme.color.foreground },
      text: { stroke: 'none', fill: theme.color.foreground }
    }

    return (
      <Container seriesClassName={SERIES_CLASS_NAME}>
        <FlexibleWidthXYPlot
          height={320}
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
            className={SERIES_CLASS_NAME}
            color={theme.color.foreground}
            data={data}
            onValueMouseOver={this.handleValueMouseOver}
            onValueMouseOut={this.handleValueMouseOut}
          />
          {hoveredCell && <Tooltip value={hoveredCell} />}
        </FlexibleWidthXYPlot>
      </Container>
    )
  }
}

ReactVisExample.propTypes = {
  data: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  withTheme(ReactVisExample)
)
