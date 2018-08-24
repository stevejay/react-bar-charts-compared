import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderElement = styled.header`
  height: 3em;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    ${props => props.theme.color.darkBackground},
    ${props => props.theme.color.background}
  );
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  margin: 0;
`;

const Link = styled.a`
  color: ${props => props.theme.color.foreground};
  opacity: 0.66;
  transition: opacity ${props => props.theme.timing.hover} ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Header = ({ title, url }) => (
  <HeaderElement>
    <H2>{title}</H2>
    <Link href={url} target="_blank" rel="nofollow">
      Info
    </Link>
  </HeaderElement>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Header;
