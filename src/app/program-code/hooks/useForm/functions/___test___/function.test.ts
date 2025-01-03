import { addTwoNumbers } from '../../functions/function';

describe('addTwoNumbers', () => {
  it('should return the sum of two positive numbers', () => {
    const result = addTwoNumbers(2, 3);
    expect(result).toBe(5);
  });

  it('should return the sum of two negative numbers', () => {
    const result = addTwoNumbers(-2, -3);
    expect(result).toBe(-5);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = addTwoNumbers(2, -3);
    expect(result).toBe(-1);
  });

  it('should return the sum of a number and zero', () => {
    const result = addTwoNumbers(2, 0);
    expect(result).toBe(2);
  });

  it('should return the sum of zero and a number', () => {
    const result = addTwoNumbers(0, 3);
    expect(result).toBe(3);
  });

  it('should return the sum of two zeros', () => {
    const result = addTwoNumbers(0, 0);
    expect(result).toBe(0);
  });

  it('should return the sum of two large numbers', () => {
    const result = addTwoNumbers(1000000, 2000000);
    expect(result).toBe(3000000);
  });
});