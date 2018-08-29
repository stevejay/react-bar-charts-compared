import _ from "lodash";
import CanvasBar from "./canvas-bar";

export default class CanvasBarSet {
  constructor() {
    this._bars = [];
  }
  bind(data, innerHeight, xScale, yScale) {
    this._bars = this._bars.filter(bar => !bar.canBeRemoved);

    this._bars.forEach(bar => {
      const datum = _.find(data, datum => datum.key === bar.key);
      if (!datum) {
        bar.setTargetForRemoval(innerHeight);
      }
    });

    data.forEach(datum => {
      let bar = _.find(this._bars, bar => bar.key === datum.key);
      if (!bar) {
        bar = new CanvasBar(datum, innerHeight, xScale, yScale);
        this._bars.push(bar);
      }
      bar.setTarget(datum, innerHeight, xScale, yScale);
    });
  }
  updateCurrent(t) {
    this._bars.forEach(bar => bar.updateCurrent(t));
  }
  draw(context) {
    this._bars.forEach(bar => bar.draw(context));
  }
}
