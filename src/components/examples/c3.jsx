import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import C3Chart from 'react-c3js'

import ExampleContainer from '../example-container'
import AutoSizerContainer from '../auto-sizer-container'

const C3Example = ({ data }) => {
  const axis = {
    x: {
      type: 'categories'
    }
  }

  const c3Data = {
    json: data,
    keys: {
      x: 'key',
      value: ['value']
    },
    type: 'bar'
  }

  return (
    <ExampleContainer title='C3'>
      <AutoSizerContainer>
        <C3Chart
          data={c3Data}
          bar={{ width: { ratio: 0.8 } }}
          axis={axis}
          legend={{
            show: false
          }}
          padding={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 60
          }}
        />
      </AutoSizerContainer>
    </ExampleContainer>
  )
}

C3Example.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(C3Example)
