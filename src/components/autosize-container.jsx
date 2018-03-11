import React from 'react'
import PropTypes from 'prop-types'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

const AutosizeContainer = ({ children }) => (
  <AutoSizer>
    {({ width, height }) =>
      (!width || !height
        ? null
        : React.cloneElement(children, { width, height }))}
  </AutoSizer>
)

AutosizeContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default AutosizeContainer
