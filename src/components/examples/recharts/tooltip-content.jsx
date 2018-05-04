// @flow

import React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.color.background};
  padding: 3px 8px;
  border-radius: .3em;
  text-align: right;
`

const Paragraph = styled.p`
  font-size: ${props => props.theme.font.chartLabelSize};
  color: ${props => props.theme.color.foreground};
  margin: 0;
`

type Props = {
  label: string,
  payload: Array<{ value: any }>,
}

const TooltipContent = ({ payload, label }: Props): Element<any> => (
  <Container>
    <Paragraph>{label}<br />{payload[0] ? payload[0].value : ''}</Paragraph>
  </Container>
)

export default TooltipContent
