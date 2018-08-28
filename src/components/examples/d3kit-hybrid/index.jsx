import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { HybridChart } from "d3kit";
import { createComponent } from "react-d3kit";
import * as d3 from "d3";
import d3Tip from "d3-tip";
import { extentLinear } from "d3fc-extent";

import Container from "./container";

const duration = 750;
const ease = d3.easeCubic;

class HybridBarChart extends HybridChart {
  constructor(selector, options) {
    super(selector, options);

    this.layers.create(["grid", "content", "x-axis", "y-axis"]);
    this.grid = this.layers.get("grid");
    this.content = this.layers.get("content");
    this.xAxis = this.layers.get("x-axis");
    this.yAxis = this.layers.get("y-axis");

    this.x = d3.scaleBand().padding(0.2);
    this.y = d3.scaleLinear();

    this.tip = d3Tip()
      .attr("class", "d3-tip")
      .offset([10, 0])
      .html(d => d.value);

    this.content.call(this.tip);

    this.on("resize.default", this.visualize);
    this.on("data.default", this.visualize);
    this.bars = null;
    this.timer = null;
  }
  destroy() {
    super.destroy();
    this.tip.hide();
  }
  visualize = () => {
    if (!this.hasData()) {
      return;
    }

    const data = this.data();
    const transition = this.svg.transition().duration(duration);

    this.x.range([0, this.getInnerWidth()]);
    this.y.range([this.getInnerHeight(), 0]);

    const yExtent = extentLinear()
      .accessors([d => d.value])
      .pad([0, 0.1])
      .include([0]);

    this.x.domain(data.map(d => d.key));
    this.y.domain(yExtent(data));

    this.grid
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

    this.tip.hide();

    // remove old bars:
    this.bars = (this.bars || []).filter(
      bar => !(bar.current.h < 0.01 && bar.target.h === 0)
    );

    // get bars to removed animating to zero height:
    this.bars.forEach(bar => {
      let datum = _.find(data, datum => datum.key === bar.key);
      if (!datum) {
        bar.target.h = 0;
        bar.target.y = this.getInnerHeight();
      }
    });

    // add new bars and update bars that are to remain:
    data.forEach(datum => {
      let bar = _.find(this.bars, bar => bar.key === datum.key);
      if (!bar) {
        // entering
        bar = {
          key: datum.key,
          current: this.calculateBarDim(datum, true)
        };
        this.bars.push(bar);
      }
      bar.target = this.calculateBarDim(datum);
    });

    if (this.timer) {
      this.timer.stop();
    }

    this.timer = d3.timer(elapsed => {
      try {
        // compute how far through the animation we are (0 to 1)
        const t = Math.min(1, ease(elapsed / duration));

        this.bars.forEach(bar => {
          bar.current.x = bar.current.x * (1 - t) + bar.target.x * t;
          bar.current.y = bar.current.y * (1 - t) + bar.target.y * t;
          bar.current.w = bar.current.w * (1 - t) + bar.target.w * t;
          bar.current.h = bar.current.h * (1 - t) + bar.target.h * t;
        });

        // update what is drawn on screen
        this.drawBars(this.bars);

        // if this animation is over
        if (t === 1) {
          // stop this timer since we are done animating.
          this.timer.stop();
        }
      } catch (err) {
        console.log("timer error", err.message);
      }
    });

    const selection = this.content.selectAll(".bar").data(data, d => d.key);
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
      .on("mouseover", this.tip.show)
      .on("mouseout", this.tip.hide)
      .merge(selection)
      .attr("transform", d => `translate(${this.x(d.key)},${this.y(d.value)})`)
      .attr("width", this.x.bandwidth())
      .attr("height", d => this.getInnerHeight() - this.y(d.value));

    this.xAxis
      .attr("transform", "translate(0," + this.getInnerHeight() + ")")
      .transition(transition)
      .call(d3.axisBottom(this.x));

    this.yAxis.transition(transition).call(d3.axisLeft(this.y).ticks(5));
  };
  calculateBarDim = (datum, entering) => {
    const y = entering ? this.getInnerHeight() : this.y(datum.value);
    return {
      x: this.x(datum.key),
      y,
      w: this.x.bandwidth(),
      h: this.getInnerHeight() - y
    };
  };
  drawBars = bars => {
    this.clear();
    const context = this.getContext2d();
    context.fillStyle = "#CFD2DA"; // how to fix this?
    bars.forEach(bar => {
      context.fillRect(
        bar.current.x,
        bar.current.y,
        bar.current.w,
        bar.current.h
      );
    });
  };
}

const ReactHybridBarChart = createComponent(HybridBarChart);

const OPTIONS = {
  margin: { top: 10, right: 10, bottom: 30, left: 40 },
  offset: { x: 0.5, y: 0.5 }
};

const D3KitHybridExampleWrapper = ({ data }) => (
  <Container>
    <ReactHybridBarChart data={data} options={OPTIONS} watch={false} />
  </Container>
);

D3KitHybridExampleWrapper.propTypes = {
  data: PropTypes.array.isRequired
};

export default connect(state => ({ data: state.data.people }))(
  D3KitHybridExampleWrapper
);
