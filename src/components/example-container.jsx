import React from 'react'
import PropTypes from 'prop-types'

const ExampleContainer = ({ title, children }) => (
  <article>
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
  children: PropTypes.any
}

export default ExampleContainer
