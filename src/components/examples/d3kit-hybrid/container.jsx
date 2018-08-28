import styled from "styled-components";

import AutoSizerContainer from "../../auto-sizer-container";

export default styled(AutoSizerContainer)`
  & .d3kit-chart-root {
    overflow: hidden !important;
  }

  & .d3kit-chart-root canvas {
    z-index: 1;
    pointer-events: none;
  }

  & .d3kit-chart-root svg {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  & .d3kit-chart-root .content-layer .bar {
    fill: ${props => props.theme.color.foreground};
    transition: fill ${props => props.theme.timing.hover} ease-in-out;
  }

  & .d3kit-chart-root .content-layer .bar:hover {
    fill: ${props => props.theme.color.secondary};
  }

  & .d3kit-chart-root g[class*="axis-layer"] .domain,
  & .d3kit-chart-root g[class*="axis-layer"] .tick line {
    stroke: ${props => props.theme.color.foreground};
  }

  & .d3kit-chart-root g[class*="axis-layer"] .tick text {
    fill: ${props => props.theme.color.foreground};
    font-size: ${props => props.theme.font.chartLabelSize};
  }

  & .d3kit-chart-root .grid-layer .tick line {
    stroke: ${props => props.theme.color.darkForeground};
  }

  & .d3kit-chart-root .grid-layer .domain {
    opacity: 0;
  }

  & .d3kit-chart-root text {
    line-height: 1.4;
  }
`;
