const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

//console.log(arr.splice(3, 2));
// console.log(arr);
let arr = transform([1, '--double-next', 2, '--discard-prev', 3, '--discard-next', 8, 5]) //=> [1, 2, 3, 5]
function transform(arr) {

  if (Array.isArray(arr)) {
      arr = arr.map((element, index) => {
          if (element === '--double-next') {
  
              return arr[index + 1]
          }
  
          else if (element === '--double-prev') {
  
              return arr[index - 1]
          }
          else if (element === '--discard-next') {
  
              arr[index + 1] = 'del';
  
              //console.log(arr);
              
              //return element = 'del';
          }
          else if (element === '--discard-prev') {
  
              arr[index - 1] = 'del';
              console.log(arr);
              //return element = 'del';
          }
          
          else return element
  
      });
      console.log(arr);
      let arr2 = arr.filter(elem => {
          if (elem !== 'del') {
  
              return elem
  
          }
      })
      
      return arr2
  
  }
  else 
  throw new Error ("\'arr\' parameter must be an instance of the Array!")
      //arr = arr.map((el, index) => el === '--discard-next' ? arr[index + 1] : el);
      // arr2 = arr.map((el, index) => el === '--double-next' ? arr[index + 1] : el);
      // arr2 = arr.map((el, index) => el === '--double-prev' ? arr[index - 1] : el);
      //      throws an Error with message ("\'arr\' parameter must be an instance of the Array!")

  }

module.exports = {
  transform
};
