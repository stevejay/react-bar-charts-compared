export default class CanvasBar {
  constructor(datum, innerHeight, xScale, yScale) {
    this._key = datum.key;
    this._current = this._calculateBarDim(
      datum,
      true,
      innerHeight,
      xScale,
      yScale
    );
    this._target = null;
  }
  get key() {
    return this._key;
  }
  setTarget(datum, innerHeight, xScale, yScale) {
    this._target = this._calculateBarDim(
      datum,
      false,
      innerHeight,
      xScale,
      yScale
    );
  }
  get canBeRemoved() {
    return this._target.h === 0 && this._current.h < 0.01;
  }
  setTargetForRemoval(innerHeight) {
    this._target.h = 0;
    this._target.y = innerHeight;
  }
  updateCurrent(t) {
    this._current.x = this._current.x * (1 - t) + this._target.x * t;
    this._current.y = this._current.y * (1 - t) + this._target.y * t;
    this._current.w = this._current.w * (1 - t) + this._target.w * t;
    this._current.h = this._current.h * (1 - t) + this._target.h * t;
  }
  draw(context) {
    context.fillRect(
      this._current.x,
      this._current.y,
      this._current.w,
      this._current.h
    );
  }
  _calculateBarDim(datum, entering, innerHeight, xScale, yScale) {
    const y = entering ? innerHeight : yScale(datum.value);
    return {
      x: xScale(datum.key),
      y,
      w: xScale.bandwidth(),
      h: innerHeight - y
    };
  }
}
