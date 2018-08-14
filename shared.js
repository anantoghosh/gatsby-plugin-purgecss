'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Logger {
  constructor() {
    this.removedQuantity = 0;
    this.totalCssSize = 0;
    this.purgedCssSize = 0;
  }

  add(quantity) {
    this.removedQuantity = this.removedQuantity + quantity;
  }

  addSize(css) {
    this.totalCssSize = this.totalCssSize + Buffer.byteLength(css, 'utf8');
  }

  addRemovedSize(css) {
    this.purgedCssSize = this.purgedCssSize + Buffer.byteLength(css, 'utf8');
  }

  toKB(number) {
    return (number / 1024).toFixed(2);
  }

  get sizeDifference() {
    return this.toKB(this.totalCssSize - this.purgedCssSize);
  }

  get newSize() {
    return this.toKB(this.purgedCssSize);
  }

  get oldSize() {
    return this.toKB(this.totalCssSize);
  }

  get percentChange() {
    return ((this.totalCssSize - this.purgedCssSize) / this.totalCssSize * 100).toFixed(2);
  }
}

const logger = exports.logger = new Logger();