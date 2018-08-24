import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  padding: 1em;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  margin: 0 0 1.5rem 0;
`;

const Chart = styled.div`
  height: 320px;
  position: relative;
  overflow: hidden;
`;

const Body = ({ description, children }) => (
  <Section>
    <Text>{description}</Text>
    <Chart>{children}</Chart>
  </Section>
);

Body.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Body;
