const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let times = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      times += 1;
    } else {
      if (times > 1) {
        result += times + str[i]
       } else {
        result += str[i];
       }
      times = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
