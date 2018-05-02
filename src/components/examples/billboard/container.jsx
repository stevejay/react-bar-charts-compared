import styled from 'styled-components'

import AutoSizerContainer from '../../auto-sizer-container'

export default styled(AutoSizerContainer)`
  & .bb .bb-axis path,
  & .bb .tick line {
    stroke: ${props => props.theme.color.foreground}
  }

  & .bb .tick text {
    font-size: ${props => props.theme.font.chartLabelSize};
    fill: ${props => props.theme.color.foreground};
  }

  & .bb .bb-bar {
    fill: ${props => props.theme.color.foreground} !important;
  }
`
