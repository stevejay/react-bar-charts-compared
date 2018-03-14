import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from 'recharts'

import ExampleContainer from '../example-container'

const ExampleTooltip = ({ payload, label }) => (
  <div className='recharts-tooltip'>
    <p>{label}<br />{payload[0] ? payload[0].value : ''}</p>
  </div>
)

const RechartsExample = ({ data }) => (
  <ExampleContainer title='Recharts'>
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data}>
        <CartesianGrid stroke='#6F7890' opacity={0.5} />
        <XAxis dataKey='key' stroke='#CFD2DA' tickLine={false} />
        <YAxis dataKey='value' stroke='#CFD2DA' />
        <Tooltip
          cursor={false}
          content={ExampleTooltip}
          isAnimationActive={false}
        />
        <Bar dataKey='value' fill='#CFD2DA' />
      </BarChart>
    </ResponsiveContainer>
  </ExampleContainer>
)

RechartsExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  RechartsExample
)
