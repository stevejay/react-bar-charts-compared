import React from 'react'
import PropTypes from 'prop-types'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

const AutoSizerContainer = ({ className, children }) => (
  <AutoSizer className={className}>
    {({ width, height }) =>
      (!width || !height
        ? null
        : React.cloneElement(children, { width, height }))}
  </AutoSizer>
)

AutoSizerContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default AutoSizerContainer
