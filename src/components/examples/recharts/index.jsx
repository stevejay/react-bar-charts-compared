import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { withTheme } from 'styled-components'

import Container from './container'
import TooltipContent from './tooltip-content'

const RechartsExample = ({ data, theme }) => (
  <Container width='100%' height='100%'>
    <BarChart data={data}>
      <CartesianGrid stroke={theme.color.darkForeground} opacity={0.5} />
      <XAxis dataKey='key' stroke={theme.color.foreground} tickLine={false} />
      <YAxis dataKey='value' stroke={theme.color.foreground} />
      <Tooltip
        cursor={false}
        content={TooltipContent}
        isAnimationActive={false}
      />
      <Bar dataKey='value' fill={theme.color.foreground} />
    </BarChart>
  </Container>
)

RechartsExample.propTypes = {
  data: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
}

export default connect(state => ({ data: state.data.people }))(
  withTheme(RechartsExample)
)
