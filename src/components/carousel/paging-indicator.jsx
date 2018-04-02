import PropTypes from 'prop-types'
import styled from 'styled-components'

const INDICATOR_DIM = 7

const PagingIndicator = styled.div`
  width: ${INDICATOR_DIM}px;
  height: ${INDICATOR_DIM}px;
  margin: 0 3px;
  border-radius: 500px;
  opacity: ${props => (props.selected ? 0.75 : 0.25)};
  background-color: white;
  transition: opacity .15s ease-in-out;
`

PagingIndicator.propTypes = {
  selected: PropTypes.bool.isRequired
}

export default PagingIndicator
