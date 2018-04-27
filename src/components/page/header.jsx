import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  margin-top: 0;
  padding-bottom: .5em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const Header = ({ children }) => (
  <header>
    <H1>{children}</H1>
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired
}

export default Header
