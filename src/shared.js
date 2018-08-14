class Logger {
  constructor() {
    this.removedQuantity = 0;
  }

  add(quantity) {
    this.removedQuantity = this.removedQuantity + quantity;
  }
}

const logger = new Logger();

export default logger;
