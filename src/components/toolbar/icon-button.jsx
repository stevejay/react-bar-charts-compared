// @flow

import React from 'react'
import type { Element } from 'react'
import PreviousIcon from 'react-icons/lib/fa/arrow-left'
import NextIcon from 'react-icons/lib/fa/arrow-right'
import styled from 'styled-components'

import * as styledUtil from '../../utils/styled'

type IconType = 'previous' | 'next'

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
  transition: opacity ${props => props.theme.timing.hover} ease-in-out, transform ${props => props.theme.timing.hover} ease-in-out;

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

type Props = {|
  +icon: IconType,
  +onClick: void => mixed,
|}

const IconButton = ({ icon, onClick }: Props): Element<any> => (
  <StyledButton onClick={onClick}>
    {icon === 'previous' ? <PreviousIcon /> : <NextIcon />}
  </StyledButton>
)

export default IconButton
