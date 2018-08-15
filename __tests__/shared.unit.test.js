import { stats, Debug } from '../src/shared';
import fs from 'fs-extra';
jest.mock('fs-extra');

describe('Test Stats', () => {
  it('Should report percent size difference without totatCssSize', () => {
    expect(stats.percentChange).toBe('0.00');
  });

  it('removedQuantity should be 0 initially', () => {
    expect(stats.removedQuantity).toBe(0);
  });

  it('Should update removedQuantity with new value', () => {
    stats.add(5);
    expect(stats.removedQuantity).toBe(5);
  });

  it('Should add to removedQuantity', () => {
    stats.add(6);
    expect(stats.removedQuantity).toBe(11);
  });

  it('Should add string size to totalCssSize', () => {
    stats.addSize('a'.repeat(2048));
    expect(stats.totalCssSize).toBe(2048);
  });

  it('Should add string size to removedCssSize', () => {
    stats.addRemovedSize('a'.repeat(1024));
    expect(stats.purgedCssSize).toBe(1024);
  });

  it('toKB should return string in KB upto 2 decimal places', () => {
    const kb = stats.toKB(2437);
    expect(kb).toBe('2.38');
  });

  it('Should report total css size in KB', () => {
    expect(stats.oldSize).toBe('2.00');
  });

  it('Should report new css size in KB', () => {
    expect(stats.newSize).toBe('1.00');
  });

  it('Should report percent size difference', () => {
    expect(stats.percentChange).toBe('50.00');
  });

  it('Should report size difference', () => {
    expect(stats.sizeDifference).toBe('1.00');
  });

  it('Contains relevant stats in output', () => {
    let outputData = '';
    const storeLog = (color, inputs) => (outputData += inputs);
    console['log'] = jest.fn(storeLog);
    stats.printStats();
    expect(outputData).toContain(stats.oldSize);
    expect(outputData).toContain(stats.newSize);
    expect(outputData).toContain(stats.percentChange);
    expect(outputData).toContain(stats.sizeDifference);
  });
});

describe('Test Debug class', () => {
  it('Should write error file', () => {
    expect(Debug.writeAppendError({ error: 'error' })).toBe(0);
  });

  it('Should throw error', () => {
    fs.appendFileSync.mockImplementation(() => {
      throw new Error();
    });
    expect(Debug.writeAppendError({ error: 'error' })).toBe(-1);
  });

  it('Should write config file', () => {
    expect(Debug.writeConfig({ config: 'config' })).toBe(0);
  });

  it('Should throw error', () => {
    fs.writeFileSync.mockImplementation(() => {
      throw new Error();
    });
    expect(Debug.writeConfig({ config: 'config' })).toBe(-1);
  });
});
