import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ExampleContainer from '../example-container'
import ReactTaucharts from '../react-taucharts'
import AutosizeContainer from '../autosize-container'

const TauchartsExample = ({ data }) => (
  <ExampleContainer title='Taucharts'>
    <AutosizeContainer>
      <ReactTaucharts
        data={data}
        options={{
          type: 'bar',
          x: 'key',
          y: 'value',
          color: 'priority'
        }}
      />
    </AutosizeContainer>
  </ExampleContainer>
)

TauchartsExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  TauchartsExample
)
