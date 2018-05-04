// @flow

import React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 1em;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  margin: 0 0 1.5rem 0;
`

const Chart = styled.div`
  height: 320px;
  position: relative;
  overflow: hidden;
`

type Props = {|
  +description: string,
  +children: Element<any>,
|}

const Body = ({ description, children }: Props): Element<any> => (
  <Section>
    <Text>{description}</Text>
    <Chart>{children}</Chart>
  </Section>
)

export default Body
