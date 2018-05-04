// @flow

import React from 'react'
import type { Element } from 'react'
import styled from 'styled-components'

const HeaderElement = styled.header`
  height: 3em;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, ${props => props.theme.color.darkBackground}, ${props => props.theme.color.background});
`

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  margin: 0;
`

const Link = styled.a`
  color: ${props => props.theme.color.foreground};
  opacity: .66;
  transition: opacity ${props => props.theme.timing.hover} ease-in-out;

  &:hover {
    opacity: 1;
  }
`

type Props = {
  title: string,
  url: string,
}

const Header = ({ title, url }: Props): Element<any> => (
  <HeaderElement>
    <H2>{title}</H2>
    <Link href={url} target='_blank' rel='nofollow'>
      Info
    </Link>
  </HeaderElement>
)

export default Header
