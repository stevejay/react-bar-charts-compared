import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ChartistGraph from 'react-chartist'

import ExampleContainer from '../example-container'
import AutosizeContainer from '../autosize-container'

const ChartistSizingShim = ({ width, height, data }) => {
  const dataFoo = {
    labels: data.map(datum => datum.key),
    series: [data.map(datum => datum.value)]
  }

  const options = {
    width: width,
    height: height
  }

  return <ChartistGraph data={dataFoo} options={options} type='Bar' />
}

const ChartistExample = ({ data }) => {
  return (
    <ExampleContainer title='Chartist'>
      <AutosizeContainer>
        <ChartistSizingShim data={data} />
      </AutosizeContainer>
    </ExampleContainer>
  )
}

ChartistExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  ChartistExample
)
