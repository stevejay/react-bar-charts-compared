import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import window from 'global/window'

class Carousel extends React.PureComponent {
  constructor (props) {
    super(props)
    this.mounted = true
    this.state = { currentIndex: 0, style: null }
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this)
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handleSlideEnter = this.handleSlideEnter.bind(this)
    this.handleSlideEntered = this.handleSlideEntered.bind(this)
    this.handleMount = this.handleMount.bind(this)
  }
  handleMount (ref) {
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
  // componentDidMount () {
  //   const style = { height: this._contentContainer.offsetHeight }
  //   this.setState({ style })
  // }
  componentWillUnmount () {
    this.mounted = false
  }
  handlePreviousButtonClick () {
    let newIndex = this.state.currentIndex - 1

    if (newIndex < 0) {
      newIndex = this.props.total - 1
    }

    this.setState({ currentIndex: newIndex })
  }
  handleNextButtonClick () {
    let newIndex = this.state.currentIndex + 1

    if (newIndex >= this.props.total) {
      newIndex = 0
    }

    this.setState({ currentIndex: newIndex })
  }
  handleSlideEnter (node) {
    const startingHeight = this._contentContainer.scrollHeight
    const finalHeight = node.scrollHeight

    console.log('from/to', startingHeight, finalHeight)

    // const style = { height: node.scrollHeight } // scrollHeight???

    window.requestAnimationFrame(() => {
      this.mounted && this.setState({ style: { height: startingHeight } })

      window.requestAnimationFrame(() => {
        this.mounted && this.setState({ style: { height: finalHeight } })
      })
    })

    // this._contentContainer.addEventListener('transitionend', () => {
    //   this._contentContainer.removeEventListener(
    //     'transitionend',
    //     arguments.callee
    //   )

    //   this._contentContainer.style.height = null
    // })
  }
  handleSlideEntered (node) {
    window.requestAnimationFrame(() => {
      this.mounted && this.setState({ style: { height: 'auto' } })
    })
    // this._contentContainer.style.height = null
  }
  render () {
    const { currentIndex, style } = this.state

    return (
      <section className='carousel-container'>
        <button
          className='carousel-button carousel-button-previous'
          onClick={this.handlePreviousButtonClick}
        >
          Previous
        </button>
        <div
          className='carousel-content-container'
          ref={this.handleMount}
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
        <button
          className='carousel-button carousel-button-next'
          onClick={this.handleNextButtonClick}
        >
          Next
        </button>
      </section>
    )
  }
}

Carousel.propTypes = {
  total: PropTypes.number.isRequired,
  renderSlide: PropTypes.func.isRequired
}

export default Carousel
