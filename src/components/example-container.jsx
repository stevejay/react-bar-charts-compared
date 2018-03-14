import React from 'react'
import PropTypes from 'prop-types'

const ExampleContainer = ({ title, children, className }) => (
  <article className={className}>
    <header>
      <h2>{title}</h2>
    </header>
    <section>
      {children}
    </section>
  </article>
)

ExampleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string
}

export default ExampleContainer
