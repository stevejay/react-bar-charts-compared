import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HybridChart } from "d3kit";
import { createComponent } from "react-d3kit";
import { withTheme } from "styled-components";
import * as d3 from "d3";
import d3Tip from "d3-tip";
import { extentLinear } from "d3fc-extent";
import Container from "./container";
import CanvasBarSet from "./canvas-bar-set";

const DURATION_MS = 750;
const EASE = d3.easeCubic;

class HybridBarChart extends HybridChart {
  constructor(selector, options) {
    super(selector, options);

    console.log("options", JSON.stringify(options));

    this.layers.create(["grid", "content", "x-axis", "y-axis"]);
    this.x = d3.scaleBand().padding(0.2);
    this.y = d3.scaleLinear();

    this._tip = d3Tip()
      .attr("class", "d3-tip")
      .offset([10, 0])
      .html(d => d.value);
    this.layers.get("content").call(this._tip);

    this.on("resize.default", this.visualize);
    this.on("data.default", this.visualize);
    this._bars = new CanvasBarSet();
    this._timer = null;
  }
  destroy() {
    super.destroy();
    this._timer && this._timer.stop();
    this._tip.hide();
  }
  visualize = () => {
    if (!this.hasData()) {
      return;
    }

    const data = this.data();
    const transition = this.svg.transition().duration(DURATION_MS);

    this.x.range([0, this.getInnerWidth()]);
    this.x.domain(data.map(d => d.key));
    this.layers
      .get("x-axis")
      .attr("transform", "translate(0," + this.getInnerHeight() + ")")
      .transition(transition)
      .call(d3.axisBottom(this.x));

    this.y.range([this.getInnerHeight(), 0]);
    this.y.domain(
      extentLinear()
        .accessors([d => d.value])
        .pad([0, 0.1])
        .include([0])(data)
    );
    this.layers
      .get("y-axis")
      .transition(transition)
      .call(d3.axisLeft(this.y).ticks(5));

    this.layers
      .get("grid")
      .transition(transition)
      .call(
        d3
          .axisLeft(this.y)
          .ticks(5)
          .tickSize(-this.getInnerWidth())
          .tickFormat("")
      )
      .select(".domain")
      .remove();

    this._bars.bind(data, this.getInnerHeight(), this.x, this.y);

    if (this._timer) {
      this._timer.stop();
    }

    this._timer = d3.timer(elapsed => {
      try {
        // compute how far through the animation we are (0 to 1)
        const t = Math.min(1, EASE(elapsed / DURATION_MS));
        this._bars.updateCurrent(t);
        this.clear();
        const context = this.getContext2d();
        context.fillStyle = "#CFD2DA"; // how to fix this?
        this._bars.draw(context);
        if (t === 1) {
          this._timer.stop();
        }
      } catch (err) {
        console.error("timer error", err.message);
      }
    });

    const selection = this.layers
      .get("content")
      .selectAll(".bar")
      .data(data, d => d.key);

    selection
      .exit()
      .on("mouseover", null)
      .on("mouseout", null)
      .remove();

    selection
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("opacity", 0)
      .attr("x", 0)
      .attr("y", 0)
      .on("mouseover", this._tip.show)
      .on("mouseout", this._tip.hide)
      .merge(selection)
      .attr("transform", d => `translate(${this.x(d.key)},${this.y(d.value)})`)
      .attr("width", this.x.bandwidth())
      .attr("height", d => this.getInnerHeight() - this.y(d.value));
  };
}

const ReactHybridBarChart = createComponent(HybridBarChart);

const OPTIONS = {
  margin: { top: 10, right: 10, bottom: 30, left: 40 },
  offset: { x: 0.5, y: 0.5 }
  // colors: {
  //   foo: "red"
  // }
};

const D3KitHybridExampleWrapper = ({ data }) => {
  // console.log("THEME", JSON.stringify(theme), {
  //   margin: OPTIONS.margin,
  //   offset: OPTIONS.offset,
  //   color: theme.color
  // });
  const foo = {
    margin: OPTIONS.margin,
    offset: OPTIONS.offset
    // color: "red" // theme.color
  };
  return (
    <Container>
      <ReactHybridBarChart data={data} options={foo} watch={false} />
    </Container>
  );
};

D3KitHybridExampleWrapper.propTypes = {
  data: PropTypes.array.isRequired
};

export default connect(state => ({ data: state.data.people }))(
  D3KitHybridExampleWrapper
);
