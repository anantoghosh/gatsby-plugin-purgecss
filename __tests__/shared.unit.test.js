import { stats } from '../src/shared';

describe('Test Shared Stats', () => {
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
    stats.addSize("a".repeat(2048));
    expect(stats.totalCssSize).toBe(2048);
  });

  it('Should add string size to removedCssSize', () => {
    stats.addRemovedSize("a".repeat(1024));
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
});
