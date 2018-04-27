import React from 'react'
import PropTypes from 'prop-types'
import PreviousIcon from 'react-icons/lib/fa/arrow-left'
import NextIcon from 'react-icons/lib/fa/arrow-right'
import styled from 'styled-components'

import * as styledUtil from '../../utils/styled'

const ICON_PREVIOUS = 'previous'
const ICON_NEXT = 'next'

const StyledButton = styled.button`
  appearance: none;
  border-radius: 0px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0 .5em;
  color: ${props => props.theme.color.brightForeground};
  cursor: pointer;
  opacity: 0.66;
  will-change: transform, opacity;
  transition: opacity .15s ease-in-out, transform .15s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.075);
  }

  &:active {
    opacity: 1;
  }

  svg {
    ${styledUtil.fluidAttr('width', '2rem', '.5')}
    ${styledUtil.fluidAttr('height', '2rem', '.5')}
  }
`

const IconButton = ({ icon, onClick }) => (
  <StyledButton onClick={onClick}>
    {icon === ICON_PREVIOUS ? <PreviousIcon /> : <NextIcon />}
  </StyledButton>
)

IconButton.propTypes = {
  icon: PropTypes.oneOf([ICON_PREVIOUS, ICON_NEXT]).isRequired,
  onClick: PropTypes.func.isRequired
}

export default IconButton
