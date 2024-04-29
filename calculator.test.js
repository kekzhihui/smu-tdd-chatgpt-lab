// calculator.test.js

const { add, subtract, multiply, divide } = require('./calculator');

test('add two numbers together', () => {
  expect(add(3, 5)).toBe(8);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});

test('subtract two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 7)).toBe(3);
  expect(subtract(-5, 3)).toBe(-8);
});

test('multiply two numbers', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(-2, 5)).toBe(-10);
  expect(multiply(0, 10)).toBe(0);
});

test('divide two numbers', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(15, 3)).toBe(5);
  expect(divide(8, 4)).toBe(2);
});

test('divide by zero', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
});
