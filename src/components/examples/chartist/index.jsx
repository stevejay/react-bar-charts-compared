// @flow

import React from 'react'
import type { Element } from 'react'
import { connect } from 'react-redux'
import ChartistGraph from 'react-chartist'
import 'chartist/dist/chartist.css'

import Container from './container'
import type { People, State } from '../../../types'

type ShimProps = {|
  +width?: number,
  +height?: number,
  +data: People,
|}

const ChartistGraphShim = ({ width, height, data }: ShimProps): Element<
  any
> => {
  const mappedData = {
    labels: data.map(datum => datum.key),
    series: [data.map(datum => datum.value)]
  }

  const options = { width, height }
  return <ChartistGraph data={mappedData} options={options} type='Bar' />
}

type Props = {|
  +data: People,
|}

const ChartistExample = ({ data }: Props): Element<any> => (
  <Container>
    <ChartistGraphShim data={data} />
  </Container>
)

export default connect((state: State) => ({ data: state.data.people }))(
  ChartistExample
)
