import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Body from './body'

const Card = ({ title, url, description, children }) => (
  <article>
    <Header title={title} url={url} />
    <Body description={description}>{children}</Body>
  </article>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Card
