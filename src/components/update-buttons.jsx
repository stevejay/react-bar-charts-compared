import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateBarChartData } from '../actions/data'

class UpdateButtons extends React.Component {
  constructor (props) {
    super(props)
    this.handleChangeValuesClick = this.handleChangeValuesClick.bind(this)
    this.handleChangeCategoriesClick = this.handleChangeCategoriesClick.bind(
      this
    )
  }
  handleChangeValuesClick () {
    this.props.updateBarChartData('values')
  }
  handleChangeCategoriesClick () {
    this.props.updateBarChartData('categories')
  }
  render () {
    return (
      <React.Fragment>
        <button onClick={this.handleChangeValuesClick}>Change Values</button>
        <button onClick={this.handleChangeCategoriesClick}>
          Change Values and Categories
        </button>
      </React.Fragment>
    )
  }
}

UpdateButtons.propTypes = {
  updateBarChartData: PropTypes.func.isRequired
}

export default connect(null, {
  updateBarChartData
})(UpdateButtons)
