// @flow

import React from 'react'
import _ from 'lodash'

import Container from './container'
import Dot from './dot'

type Props = {|
  +totalSlides: number,
  +currentSlideIndex: number,
|}

class SlideIndicator extends React.PureComponent<Props> {
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

export default SlideIndicator
