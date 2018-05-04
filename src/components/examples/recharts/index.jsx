// @flow

import React from 'react'
import type { Element } from 'react'
import { connect } from 'react-redux'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { withTheme } from 'styled-components'

import Container from './container'
import TooltipContent from './tooltip-content'
import type { People, Theme, State } from '../../../types'

type Props = {|
  +data: People,
  +theme: Theme,
|}

const RechartsExample = ({ data, theme }: Props): Element<any> => (
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

export default connect((state: State) => ({ data: state.data.people }))(
  withTheme(RechartsExample)
)
