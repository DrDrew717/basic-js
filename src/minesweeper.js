const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = Array(matrix[i].length).fill(0);
    for (let y = 0; y < matrix[i].length; y += 1) {
      if (matrix[i][y + 1]) result[i][y] += 1;
      if (y - 1 >= 0 && matrix[i][y - 1]) result[i][y] += 1;
      if (i + 1 < matrix.length && matrix[i + 1][y]) result[i][y] += 1;
      if (i - 1 >= 0 && matrix[i - 1][y]) result[i][y] += 1;
      if (i - 1 >= 0 && y - 1 >= 0 && matrix[i - 1][y - 1]) result[i][y] += 1;
      if (i - 1 >= 0 && y + 1 < matrix[i].length && matrix[i - 1][y + 1]) result[i][y] += 1;
      if (i + 1 < matrix.length && y - 1 >= 0 && matrix[i + 1][y - 1]) result[i][y] += 1;
      if (i + 1 < matrix.length && y + 1 < matrix[i].length && matrix[i + 1][y + 1]) result[i][y] += 1;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
