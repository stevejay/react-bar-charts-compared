// @flow

import React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  margin-top: 0;
  padding-bottom: .5em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

type Props = {
  children: Element<any>,
}

const Header = ({ children }: Props): Element<any> => (
  <header>
    <H1>{children}</H1>
  </header>
)

export default Header
