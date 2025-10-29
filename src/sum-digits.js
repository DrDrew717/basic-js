const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString();
  let sum;
  do {
    sum = str.split('').reduce((acc, item) => acc + Number(item), 0);
    str = sum.toString();
  } while (sum > 9);
  return sum;
}

module.exports = {
  getSumOfDigits
};
