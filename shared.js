"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Logger {
  constructor() {
    this.removedQuantity = 0;
  }

  add(quantity) {
    this.removedQuantity = this.removedQuantity + quantity;
  }
}

const logger = new Logger();

exports.default = logger;