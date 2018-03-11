import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateBarChartData } from '../actions/data'

const UpdateButton = ({ updateBarChartData }) => (
  <button onClick={updateBarChartData}>Change Data</button>
)

UpdateButton.propTypes = {
  updateBarChartData: PropTypes.func.isRequired
}

export default connect(null, {
  updateBarChartData
})(UpdateButton)
