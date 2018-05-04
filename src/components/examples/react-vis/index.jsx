// @flow

import React from 'react'
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
import type { People, Theme, State } from '../../../types'

const X_ACCESSOR = d => d.key
const Y_ACCESSOR = d => d.value
const SERIES_CLASS_NAME = 'first-series'

type Props = {
  data: People,
  theme: Theme,
}

class ReactVisExample
  extends React.PureComponent<
    Props,
    {| hoveredCell: ?{ key: string, value: number } |}
  > {
  constructor (props) {
    super(props)
    this.state = { hoveredCell: null }
  }
  handleValueMouseOver = d => {
    this.setState({ hoveredCell: d })
  }
  handleValueMouseOut = d => {
    this.setState({ hoveredCell: null })
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
          {!!hoveredCell && <Tooltip value={hoveredCell} />}
        </FlexibleWidthXYPlot>
      </Container>
    )
  }
}

export default connect((state: State) => ({ data: state.data.people }))(
  withTheme(ReactVisExample)
)
