import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.color.background};
  padding: 3px 8px;
  border-radius: 0.3em;
  text-align: right;
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.font.chartLabelSize};
  color: ${props => props.theme.color.foreground};
  margin: 0;
`;

const TooltipContent = ({ payload, label }) => (
  <Container>
    <Paragraph>
      {label}
      <br />
      {payload[0] ? payload[0].value : ""}
    </Paragraph>
  </Container>
);

TooltipContent.propTypes = {
  label: PropTypes.string.isRequired,
  payload: PropTypes.arrayOf(PropTypes.object)
};

export default TooltipContent;
