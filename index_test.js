const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is equal to 120', () => {
      // Setup
      const inputNumber = 5;
      const actual = 120;
      //Exercise
      const expectedResult = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(expectedResult, actual);
    });
    it('test if the output of 3! is equal to 6', () => {
      // Setup
      const inputNumber = 3;
      const actual = 6;
      //Exercise
      const expectedResult = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(expectedResult, actual);
    });
     it('test if the output of 0! is equal to 1', () => {
      // Setup
      const inputNumber = 0;
      const actual = 1;
      //Exercise
      const expectedResult = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(expectedResult, actual);
    });
  });
});