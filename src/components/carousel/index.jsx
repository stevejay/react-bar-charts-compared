import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { injectGlobal } from 'styled-components'
import window from 'global/window'

import Container from './container'

const FADE_TIMEOUT_MS = 400
const FADE_CLASSNAME = 'carousel-fade'

injectGlobal`
  .${FADE_CLASSNAME}-enter {
    opacity: 0.01;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .${FADE_CLASSNAME}-enter-active {
    opacity: 1;
    transition: opacity ${FADE_TIMEOUT_MS}ms ease-in-out;
  }

  .${FADE_CLASSNAME}-enter-done {
    position: relative;
  }

  .${FADE_CLASSNAME}-exit-active {
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
  componentWillReceiveProps (nextProps) {
    if (nextProps.currentSlideIndex !== this.props.currentSlideIndex) {
      this._contentContainer.style.height =
        this._contentContainer.scrollHeight + 'px'

      // flush the above change to the DOM:
      // eslint-disable-next-line
      this._contentContainer.scrollHeight
    }
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
      <Container
        innerRef={this.handleContainerMounted}
        style={style}
        animationMs={FADE_TIMEOUT_MS}
      >
        <TransitionGroup component={null}>
          <CSSTransition
            key={currentSlideIndex}
            timeout={FADE_TIMEOUT_MS}
            classNames={FADE_CLASSNAME}
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

export default Carousel
