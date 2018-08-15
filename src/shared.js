import util from 'util';
import fs from 'fs-extra';
import { color } from './utils';

class Stats {
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

  toKB(value) {
    return (value / 1024).toFixed(2);
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
    if (this.totalCssSize <= 0) {
      return '0.00';
    }

    return (
      ((this.totalCssSize - this.purgedCssSize) / this.totalCssSize) *
      100
    ).toFixed(2);
  }

  printStats() {
    console.log(color.FgGreen, `\ngatsby-plugin-purgecss:`);
    console.log(color.FgCyan, `Previous CSS Size: ${this.oldSize} KB`);
    console.log(
      color.FgCyan,
      `New CSS Size: ${this.newSize} KB (-${this.percentChange}%)`
    );
    console.log(color.FgYellow, `Removed ~${this.sizeDifference} KB of CSS`);
    console.log(color.Reset);
  }
}

export const stats = new Stats();

export class Debug {
  static writeConfig(config) {
    console.debug(
      '\ngatsby-plugin-purgecss: Writing config to gatsby-plugin-purgecss-debug-config.js'
    );

    try {
      fs.writeFileSync(
        'gatsby-plugin-purgecss-debug-config.js',
        util.inspect(config, { depth: 15 }),
        'utf8'
      );
    } catch (error) {
      console.log('\nCould not write file.');
      console.log(error);
      return -1;
    }

    return 0;
  }

  static writeAppendError(error) {
    console.debug(
      'gatsby-plugin-purgecss: Writing errors to gatsby-plugin-purgecss-debug.js'
    );

    try {
      fs.appendFileSync(
        'gatsby-plugin-purgecss-debug.js',
        util.inspect(error),
        'utf8'
      );
    } catch (error) {
      console.log('\nCould not write file.');
      console.log(error);
      return -1;
    }

    return 0;
  }
}
