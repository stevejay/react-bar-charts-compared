import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ChartistGraph from "react-chartist";
import "chartist/dist/chartist.css";

import Container from "./container";

const ChartistGraphShim = ({ width, height, data }) => {
  const mappedData = {
    labels: data.map(datum => datum.key),
    series: [data.map(datum => datum.value)]
  };

  const options = { width, height };
  return <ChartistGraph data={mappedData} options={options} type="Bar" />;
};

ChartistGraphShim.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array.isRequired
};

const ChartistExample = ({ data }) => (
  <Container>
    <ChartistGraphShim data={data} />
  </Container>
);

ChartistExample.propTypes = {
  data: PropTypes.array.isRequired
};

export default connect(state => ({ data: state.data.people }))(ChartistExample);
