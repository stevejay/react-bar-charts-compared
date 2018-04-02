import React from 'react'
import PropTypes from 'prop-types'

const ExampleContainer = ({ title, children, className, style }) => (
  <article className={className}>
    <header>
      <h2>{title}</h2>
    </header>
    <section style={style}>
      {children}
    </section>
  </article>
)

ExampleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default ExampleContainer
