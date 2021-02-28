import { color } from './utils';

const PRECISION = 2;
const KiB = 1024;

const HUNDRED = 100;
class Stats {
  totalCssSize: number;
  purgedCssSize: number;

  constructor() {
    this.totalCssSize = 0;
    this.purgedCssSize = 0;
  }

  addSize(css: string) {
    this.totalCssSize = this.totalCssSize + Buffer.byteLength(css, 'utf8');
  }

  addRemovedSize(css: string) {
    this.purgedCssSize = this.purgedCssSize + Buffer.byteLength(css, 'utf8');
  }

  toKB(value: number) {
    return (value / KiB).toFixed(PRECISION);
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
      HUNDRED
    ).toFixed(PRECISION);
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
