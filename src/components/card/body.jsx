import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  padding: 1em;
`

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  margin: 0 0 1.5em 0;
`

const Chart = styled.div`
  height: 320px;
  position: relative;
  overflow: hidden;
`

const Body = ({ description, children }) => (
  <Section>
    <Text>{description}</Text>
    <Chart>{children}</Chart>
  </Section>
)

Body.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Body
