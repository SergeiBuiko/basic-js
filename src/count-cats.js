const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let one = matrix.join(',').split(',');
  console.log(one);
  let res = one.filter(item => item === '^^');
  console.log(res.length); 
  return res.length
}

module.exports = {
  countCats
};
