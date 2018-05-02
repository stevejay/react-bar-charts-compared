import styled from 'styled-components'
import { ResponsiveContainer } from 'recharts'

const Container = styled(ResponsiveContainer)`
  font-size: ${props => props.theme.font.chartLabelSize};

  & .recharts-bar-rectangle .recharts-rectangle {
    transition: fill ${props => props.theme.timing.hover} ease-in-out;
  }

  & .recharts-bar-rectangle .recharts-rectangle:hover {
    fill: ${props => props.theme.color.secondary} !important;
  }
`

export default Container
