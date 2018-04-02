import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styled from 'styled-components'

import PagingIndicator from './paging-indicator'

const PagingContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`

const CarouselPaging = ({ total, currentIndex }) => (
  <PagingContainer role='presentation'>
    {_.range(0, total).map(i => (
      <PagingIndicator key={i} selected={currentIndex === i} />
    ))}
  </PagingContainer>
)

CarouselPaging.propTypes = {
  total: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default CarouselPaging
