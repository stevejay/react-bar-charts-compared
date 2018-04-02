import React from 'react'
import PropTypes from 'prop-types'
import PreviousIcon from 'react-icons/lib/fa/arrow-left'
import NextIcon from 'react-icons/lib/fa/arrow-right'

const ICON_SIZE = 40

const CarouselButton = ({ type, ariaLabel, onClick }) => (
  <div className='carousel-button-container'>
    <button
      className={`carousel-button carousel-button-${type}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {type === 'previous'
        ? <PreviousIcon size={ICON_SIZE} />
        : <NextIcon size={ICON_SIZE} />}
    </button>
  </div>
)

CarouselButton.propTypes = {
  type: PropTypes.oneOf(['previous', 'next']).isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CarouselButton
