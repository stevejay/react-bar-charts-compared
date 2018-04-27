import React from 'react'
import PropTypes from 'prop-types'

import IconButton from './icon-button'
import Button from './button'
import Container from './container'

class Toolbar extends React.Component {
  shouldComponentUpdate () {
    return false
  }
  handleNewValuesClick = () => {
    this.props.updateBarChartData('values')
  }
  handleNewCategoriesClick = () => {
    this.props.updateBarChartData('categories')
  }
  handlePreviousSlideSelected = () => {
    let index = this.props.currentSlideIndex - 1

    if (index < 0) {
      index = this.props.totalSlides - 1
    }

    this.props.updateSlideIndex(index)
  }
  handleNextSlideSelected = () => {
    let index = this.props.currentSlideIndex + 1

    if (index >= this.props.totalSlides) {
      index = 0
    }

    this.props.updateSlideIndex(index)
  }
  render () {
    return (
      <Container>
        <IconButton
          icon='previous'
          onClick={this.handlePreviousSlideSelected}
        />
        <Button onClick={this.handleNewValuesClick}>New Values</Button>
        <Button onClick={this.handleNewCategoriesClick}>New Categories</Button>
        <IconButton icon='next' onClick={this.handleNextSlideSelected} />
      </Container>
    )
  }
}

Toolbar.propTypes = {
  totalSlides: PropTypes.number.isRequired,
  currentSlideIndex: PropTypes.number.isRequired,
  updateBarChartData: PropTypes.func.isRequired,
  updateSlideIndex: PropTypes.func.isRequired
}

export default Toolbar
