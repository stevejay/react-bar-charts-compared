import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import window from 'global/window'

import CarouselButton from './button'
import CarouselPaging from './paging'

class Carousel extends React.PureComponent {
  constructor (props) {
    super(props)
    this._mounted = true
    this.state = { currentIndex: 0, style: null }
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this)
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handleSlideEnter = this.handleSlideEnter.bind(this)
    this.handleSlideEntered = this.handleSlideEntered.bind(this)
    this.handleContainerMounted = this.handleContainerMounted.bind(this)
  }
  handleContainerMounted (ref) {
    this._contentContainer = ref
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.total !== this.props.total) {
      if (nextProps.total === 0) {
        this.setState({ currentIndex: 0 })
      } else if (this.state.currentIndex >= nextProps.total) {
        this.setState({ currentIndex: nextProps.total - 1 })
      }
    }
  }
  componentWillUnmount () {
    this._mounted = false
  }
  handlePreviousButtonClick () {
    const newIndex = this.state.currentIndex === 0
      ? this.props.total - 1
      : this.state.currentIndex - 1

    this._setNewCurrentIndex(newIndex)
  }
  handleNextButtonClick () {
    let newIndex = this.state.currentIndex + 1

    if (newIndex >= this.props.total) {
      newIndex = 0
    }

    this._setNewCurrentIndex(newIndex)
  }
  handleSlideEnter (node) {
    this._mounted && this.setState({ style: { height: node.scrollHeight } })
  }
  handleSlideEntered (node) {
    // This works; raf didn't work:
    window.setTimeout(() => {
      this._mounted && this.setState({ style: { height: null } })
    }, 0)
  }
  _setNewCurrentIndex (newIndex) {
    this.setState({
      currentIndex: newIndex,
      style: { height: this._contentContainer.scrollHeight }
    })

    // this._mounted && this.props.onShowSlide && this.props.onShowSlide(newIndex)
  }
  render () {
    const { total } = this.props
    const { currentIndex, style, ariaLabelledby } = this.state

    return (
      <section className='carousel-container' aria-labelledby={ariaLabelledby}>
        <div
          className='carousel-content-container'
          ref={this.handleContainerMounted}
          style={style}
        >
          <TransitionGroup component={null}>
            <CSSTransition
              key={currentIndex}
              timeout={500}
              classNames='fade'
              onEnter={this.handleSlideEnter}
              onEntered={this.handleSlideEntered}
            >
              {this.props.renderSlide(currentIndex)}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className='carousel-controls-container'>
          <CarouselButton
            type='previous'
            ariaLabel='previous'
            onClick={this.handlePreviousButtonClick}
          />
          <CarouselPaging total={total} currentIndex={currentIndex} />
          <CarouselButton
            type='next'
            ariaLabel='next'
            onClick={this.handleNextButtonClick}
          />
        </div>
      </section>
    )
  }
}

Carousel.propTypes = {
  total: PropTypes.number.isRequired,
  renderSlide: PropTypes.func.isRequired,
  ariaLabelledby: PropTypes.string
}

export default Carousel
