import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.header`
  text-align: center;
  padding-bottom: ${props => props.theme.gutter};
  margin-bottom: ${props => props.theme.gutter};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const PageHeader = ({ children }) => (
  <Header>
    <h1>{children}</h1>
  </Header>
)

PageHeader.propTypes = {
  children: PropTypes.any.isRequired
}

export default PageHeader
