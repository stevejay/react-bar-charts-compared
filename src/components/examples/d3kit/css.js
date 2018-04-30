import { injectGlobal } from 'styled-components'

export default injectGlobal`
  .d3kit-chart-root {
    overflow: hidden !important;
  }

  .d3kit-chart-root .content-layer .bar {
    fill: #CFD2DA;
    transition: fill .15s ease-in-out;
  }

  .d3kit-chart-root .content-layer .bar:hover {
    fill: #1EE3A1;
  }

  .d3kit-chart-root g[class*="axis-layer"] .domain,
  .d3kit-chart-root g[class*="axis-layer"] .tick line {
    stroke: #CFD2DA;
  }

  .d3kit-chart-root g[class*="axis-layer"] .tick text {
    fill: #CFD2DA;
    font-size: 12px;
  }

  .d3kit-chart-root .grid-layer .tick line {
    stroke: #6f7890;
  }

  .d3kit-chart-root .grid-layer .domain {
    opacity: 0;
  }

  .d3kit-chart-root text {
    line-height: 1.4;
  }

  .d3-tip {
    pointer-events: none !important;
    line-height: 1;
    padding: 8px;
    background: rgba(0, 0, 0, 0.8);
    color: #CFD2DA;
    border-radius: 2px;
  }

  .d3kit-chart-root svg {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`
