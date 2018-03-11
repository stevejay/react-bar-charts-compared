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

const renderTooltip = d => (
  <div className='recharts-tooltip'><p>{d.label}</p></div>
)

const RechartsExample = ({ data }) => (
  <ExampleContainer title='Recharts'>
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data}>
        <CartesianGrid stroke='#6f7890' opacity={0.5} />
        <XAxis dataKey='key' stroke='#CFD2DA' tickLine={false} />
        <YAxis dataKey='value' stroke='#CFD2DA' />
        <Tooltip cursor={false} content={renderTooltip} />
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
