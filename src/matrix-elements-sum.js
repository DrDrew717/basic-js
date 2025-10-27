const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix[i].length; y += 1) {
      if (i === 0) {
        result += matrix[i][y];
      } else {
        if (matrix[i - 1][y] !== 0) result += matrix[i][y];
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
