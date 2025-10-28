const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthOfArr = 1;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        let nestedArrDepth = this.calculateDepth(item) + 1;
        if (depthOfArr < nestedArrDepth) depthOfArr = nestedArrDepth;
      }
    })
    return depthOfArr;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
