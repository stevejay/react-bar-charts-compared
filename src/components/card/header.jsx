import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderElement = styled.header`
  background: linear-gradient(90deg, ${props => props.theme.color.darkBackground}, ${props => props.theme.color.background});
`

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  padding: .75em 1em;
  margin: 0;
`

const Header = ({ title }) => (
  <HeaderElement>
    <H2>{title}</H2>
  </HeaderElement>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
