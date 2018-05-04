// @flow

import styled from 'styled-components'

export default styled.div`
  & .highcharts-background {
    fill: transparent;
  }

  & .highcharts-axis-labels text {
    font-size: ${props => props.theme.font.chartLabelSize} !important;
    fill: ${props => props.theme.color.foreground} !important;
    color: ${props => props.theme.color.foreground} !important;
  }

  & .highcharts-yaxis-grid {
    stroke: ${props => props.theme.color.darkForeground};
    opacity: 0.5;
  }

  & .highcharts-column-series rect {
    fill: ${props => props.theme.color.foreground};
    stroke: ${props => props.theme.color.foreground};
    transition: fill ${props => props.theme.timing.hover} ease-in-out, stroke ${props => props.theme.timing.hover} ease-in-out;
  }

  & .highcharts-column-series rect.highcharts-point-hover {
    fill: ${props => props.theme.color.secondary};
    stroke: ${props => props.theme.color.secondary};
  }
`
