const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const arr = s1.split('');
  for (let i = 0; i < s2.length; i += 1) {
    if(arr.includes(s2[i])) {
      result += 1;
      let index = arr.indexOf(s2[i]);
      arr.splice(index, 1);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
