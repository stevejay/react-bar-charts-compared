// @flow

import React from 'react'

import IconButton from './icon-button'
import Button from './button'
import Container from './container'
import type { UpdateType } from '../../types'

type Props = {
  totalSlides: number,
  currentSlideIndex: number,
  updateData: UpdateType => void,
  updateSlideIndex: number => void,
}

class Toolbar extends React.Component<Props> {
  shouldComponentUpdate () {
    return false
  }
  handleNewValuesClick = () => {
    this.props.updateData('values')
  }
  handleNewCategoriesClick = () => {
    this.props.updateData('categories')
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

export default Toolbar
