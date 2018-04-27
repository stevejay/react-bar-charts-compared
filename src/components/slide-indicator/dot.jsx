import PropTypes from 'prop-types'
import styled from 'styled-components'
import CircleIcon from 'react-icons/lib/fa/circle'

const Dot = styled(CircleIcon)`
  color: ${props => props.theme.color.brightForeground};
  opacity: ${props => (props.selected ? 0.75 : 0.25)};
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: 0 3px;
  transform: scale(${props => (props.selected ? 1.15 : 1)});
  will-change: transform, opacity;
  transition: opacity .15s ease-in-out, transform .15s ease-in-out;
`

Dot.propTypes = {
  selected: PropTypes.bool.isRequired
}

export default Dot
