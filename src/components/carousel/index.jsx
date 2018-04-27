import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { injectGlobal } from 'styled-components'
import window from 'global/window'

import Container from './container'
import SlideContainer from './slide-container'

const FADE_TIMEOUT_MS = 500

// TODO find a solution for this:
injectGlobal`
  .fade-enter {
    opacity: 0.01;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity ${FADE_TIMEOUT_MS}ms ease-in-out;
  }

  .fade-enter-done {
    position: relative;
  }

  .fade-exit-active {
    opacity: 0.01;
    transition: opacity ${FADE_TIMEOUT_MS}ms ease-in-out;
  }
`

class Carousel extends React.PureComponent {
  constructor (props) {
    super(props)
    this._mounted = true
    this.state = { style: null }
  }
  handleContainerMounted = ref => {
    this._contentContainer = ref
  }
  componentWillUnmount () {
    this._mounted = false
  }
  handleSlideEnter = node => {
    this._mounted && this.setState({ style: { height: node.scrollHeight } })
  }
  handleSlideEntered = node => {
    // setTimeout works; raf didn't work:
    window.setTimeout(() => {
      this._mounted && this.setState({ style: { height: null } })
    }, 0)
  }
  render () {
    const { currentSlideIndex } = this.props
    const { style } = this.state

    return (
      <Container innerRef={this.handleContainerMounted} style={style}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={currentSlideIndex}
            timeout={FADE_TIMEOUT_MS}
            classNames='fade'
            onEnter={this.handleSlideEnter}
            onEntered={this.handleSlideEntered}
          >
            {this.props.renderSlide(currentSlideIndex)}
          </CSSTransition>
        </TransitionGroup>
      </Container>
    )
  }
}

Carousel.propTypes = {
  currentSlideIndex: PropTypes.number.isRequired,
  renderSlide: PropTypes.func.isRequired
}

Carousel.SlideContainer = SlideContainer

export default Carousel
