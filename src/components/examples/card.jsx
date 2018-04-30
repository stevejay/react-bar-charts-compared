import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Article = styled.article`
  background-color: ${props => props.theme.color.lightBackground};
`

const Header = styled.header`
  background: linear-gradient(90deg, ${props => props.theme.color.darkBackground}, ${props => props.theme.color.background});
`

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  padding: .75em 1em;
  margin: 0;
`

const Section = styled.section`
  padding: 1em;
`

const ChartContainer = styled.div`
  height: 320px;
  position: relative;
  overflow: hidden;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 0 1.5em 0;
`

const Card = ({ title, description, children }) => (
  <Article>
    <Header>
      <H2>{title}</H2>
    </Header>
    <Section>
      <Text>
        {description}
      </Text>
      <ChartContainer>{children}</ChartContainer>
    </Section>
  </Article>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default Card
