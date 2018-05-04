// @flow

import React from 'react'
import type { Element } from 'react'

import Header from './header'
import Body from './body'

type Props = {
  title: string,
  url: string,
  description: string,
  children: Element<any>,
}

const Card = ({ title, url, description, children }: Props): Element<any> => (
  <article>
    <Header title={title} url={url} />
    <Body description={description}>{children}</Body>
  </article>
)

export default Card
