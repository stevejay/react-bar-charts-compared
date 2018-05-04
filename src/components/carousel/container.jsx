// @flow

import styled from 'styled-components'

export default styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: height ${props => props.animationMs + 'ms'} ease-out;
  background-color: ${props => props.theme.color.lightBackground};
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
