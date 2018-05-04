import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ExampleContainer from '../example-container'
import ReactTaucharts from '../react-taucharts'
import AutoSizerContainer from '../auto-sizer-container'

const TauchartsExample = ({ data }) => (
  <ExampleContainer title='Taucharts'>
    <AutoSizerContainer>
      <ReactTaucharts
        data={data}
        options={{
          type: 'bar',
          x: 'key',
          y: 'value',
          color: 'priority'
        }}
      />
    </AutoSizerContainer>
  </ExampleContainer>
)

TauchartsExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.people }))(
  TauchartsExample
)
