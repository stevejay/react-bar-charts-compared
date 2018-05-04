// @flow

import React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'
import { Hint } from 'react-vis'

const Aside = styled.aside`
  background-color: ${props => props.theme.color.background};
  padding: 4px 8px;
  border-radius: 4px;
  text-align: right;
`

const Paragraph = styled.p`
  color: ${props => props.theme.color.foreground};
  font-size: ${props => props.theme.font.chartLabelSize};
  margin: 0;
`

type Props = {
  value: { key: string, value: number },
}

const Tooltip = (props: Props): Element<any> => (
  <Hint {...props}>
    <Aside>
      <Paragraph>{props.value.key}</Paragraph>
      <Paragraph>{props.value.value}</Paragraph>
    </Aside>
  </Hint>
)

export default Tooltip
