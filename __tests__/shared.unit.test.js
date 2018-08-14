import Logger from '../src/shared';

describe('Test Shared Logger', () => {
  it('removedQuantity should be 0 initially', () => {
    expect(Logger.removedQuantity).toBe(0);
  });

  it('Logger should update removedQuantity with new value', () => {
    Logger.add(5);
    expect(Logger.removedQuantity).toBe(5);
  });

  it('Logger should add to removedQuantity', () => {
    Logger.add(6);
    expect(Logger.removedQuantity).toBe(11);
  });
});
