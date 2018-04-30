import React from 'react'
import PropTypes from 'prop-types'

import Article from './article'
import Header from './header'
import Body from './body'

const Card = ({ title, description, children }) => (
  <Article>
    <Header title={title} />
    <Body description={description}>{children}</Body>
  </Article>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Card
