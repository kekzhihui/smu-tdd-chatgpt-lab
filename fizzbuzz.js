// fizzbuzz.js

function fizzBuzz(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('Invalid input. Number expected.');
    }
  
    switch (true) {
      case number % 3 === 0 && number % 5 === 0:
        return 'FizzBuzz';
      case number % 3 === 0:
        return 'Fizz';
      case number % 5 === 0:
        return 'Buzz';
      default:
        return number;
    }
  }
  
  module.exports = fizzBuzz;
  