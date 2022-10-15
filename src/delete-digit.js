const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = n.toString()
  let y = []
  for (let i = 1; i < n.length+1; i++) {
    
    y.push(Number(n.slice(0, i-1)+ n.slice(i, n.length+1))); 
    console.log(y);
  
  }
  let max = Math.max(...y)
  return max
}

module.exports = {
  deleteDigit
};
