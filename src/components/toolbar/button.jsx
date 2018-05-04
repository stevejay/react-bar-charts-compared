// @flow

import React from 'react'
import type { Element, ElementType } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  text-decoration: none;
  margin: 0 .5em;
  text-transform: none;
  letter-spacing: normal;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: .25em .5em;
  line-height: 1.5;
  border-radius: .25em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  background-color: transparent;
  text-shadow: none;
  color: ${props => props.theme.color.primary};
  border-color: ${props => props.theme.color.primary};
  transition: background-color ${props => props.theme.timing.hover}, color ${props => props.theme.timing.hover};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${props => props.theme.color.brightForeground};
    background-color: ${props => props.theme.color.primary};
    box-shadow: none;
  }
`

type Props = {
  children: ElementType,
  onClick: void => void,
}

const Button = ({ children, onClick }: Props): Element<any> => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
