import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Container from './container'
import Dot from './dot'

class SlideIndicator extends React.PureComponent {
  render () {
    const { totalSlides, currentSlideIndex } = this.props

    return (
      <Container role='presentation'>
        {_.range(0, totalSlides).map(i => (
          <Dot key={i} index={i} selected={currentSlideIndex === i} />
        ))}
      </Container>
    )
  }
}

SlideIndicator.propTypes = {
  totalSlides: PropTypes.number.isRequired,
  currentSlideIndex: PropTypes.number.isRequired
}

export default SlideIndicator
