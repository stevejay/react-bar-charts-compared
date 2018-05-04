// @flow

import styled from 'styled-components'

const Container = styled.div`
  & {
    font-size: ${props => props.theme.font.chartLabelSize};
  }

  & ${props => props.seriesClassName} rect {
    transition: fill ${props => props.theme.timing.hover} ease-in-out, stroke ${props => props.theme.timing.hover} ease-in-out;
  }

  & ${props => props.seriesClassName} rect:hover {
    fill: ${props => props.theme.color.secondary} !important;
    stroke: ${props => props.theme.color.secondary} !important;
  }
`

export default Container
