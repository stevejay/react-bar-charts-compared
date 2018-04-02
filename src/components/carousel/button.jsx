import React from 'react'
import PropTypes from 'prop-types'
import AngleLeftIcon from 'react-icons/lib/fa/angle-left'
import AngleRightIcon from 'react-icons/lib/fa/angle-right'

const ICON_SIZE = 90

const CarouselButton = ({ type, ariaLabel, onClick }) => (
  <div className='carousel-button-container'>
    <button
      className={`carousel-button carousel-button-${type}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {type === 'previous'
        ? <AngleLeftIcon size={ICON_SIZE} />
        : <AngleRightIcon size={ICON_SIZE} />}
    </button>
  </div>
)

CarouselButton.propTypes = {
  type: PropTypes.oneOf(['previous', 'next']).isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CarouselButton
