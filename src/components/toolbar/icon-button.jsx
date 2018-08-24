import React from "react";
import PropTypes from "prop-types";
import {
  FaArrowLeft as PreviousIcon,
  FaArrowRight as NextIcon
} from "react-icons/fa";
import styled from "styled-components";

import * as styledUtil from "../../utils/styled";

const StyledButton = styled.button`
  appearance: none;
  border-radius: 0px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0 0.5em;
  color: ${props => props.theme.color.brightForeground};
  cursor: pointer;
  opacity: 0.66;
  will-change: transform, opacity;
  transition: opacity ${props => props.theme.timing.hover} ease-in-out,
    transform ${props => props.theme.timing.hover} ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.075);
  }

  &:active {
    opacity: 1;
  }

  svg {
    ${styledUtil.fluidAttr("width", "2rem", ".5")} ${styledUtil.fluidAttr(
      "height",
      "2rem",
      ".5"
    )};
  }
`;

const IconButton = ({ icon, onClick }) => (
  <StyledButton onClick={onClick}>
    {icon === "previous" ? <PreviousIcon /> : <NextIcon />}
  </StyledButton>
);

IconButton.propTypes = {
  icon: PropTypes.oneOf(["previous", "next"]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconButton;
