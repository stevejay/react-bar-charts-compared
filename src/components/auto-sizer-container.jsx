// @flow

import React from 'react'
import type { Element } from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

type Props = {
  className: string,
  children: Element<any>,
}

type RenderProps = {
  width: number,
  height: number,
}

const AutoSizerContainer = ({ className, children }: Props): Element<any> => (
  <AutoSizer className={className}>
    {({ width, height }: RenderProps) =>
      (!width || !height
        ? null
        : React.cloneElement(children, { width, height }))}
  </AutoSizer>
)

export default AutoSizerContainer
