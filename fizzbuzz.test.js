// fizzbuzz.test.js

const fizzBuzz = require('./fizzbuzz');

test('return Fizz if the number is divisible by 3, otherwise return the number itself', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
//   expect(fizzBuzz(5)).toBe(5);
//   expect(fizzBuzz(7)).toBe(7);
//   expect(fizzBuzz(11)).toBe(11);
});

test('return Buzz if the number is divisible by 5, otherwise return the number itself', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(20)).toBe('Buzz');
//   expect(fizzBuzz(3)).toBe(3);
//   expect(fizzBuzz(7)).toBe(7);
//   expect(fizzBuzz(11)).toBe(11);
});

test('return FizzBuzz if the number is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

test('throw error for invalid input parameter', () => {
    expect(() => fizzBuzz('invalid')).toThrow('Invalid input. Number expected.');
    expect(() => fizzBuzz(true)).toThrow('Invalid input. Number expected.');
    expect(() => fizzBuzz(null)).toThrow('Invalid input. Number expected.');
    expect(() => fizzBuzz(undefined)).toThrow('Invalid input. Number expected.');
  });
