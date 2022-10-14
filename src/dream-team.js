const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(members) {
  
//   function typ(element, index, array) {
//     return typeof element == 'string';
//   }
  
//   if (members.every(typ)) {
//   let i =  members.map(el => el.replace(/\s/g,'').slice(0, 1));
//   console.log(i.sort().join(''));
//   return i.sort().join('').toUpperCase() 
//   }
//   return false
  
// }


function createDreamTeam(members) {
  let arr = []
  if (Array.isArray(members)) {
    for (let el of members) {
      if (typeof el == 'string') {
        //console.log(el);
        el = el.split(' ').join('');
        console.log(el);
        arr.push(el[0].toUpperCase());
        //console.log(arr);
      }
  }
  return arr.sort().join('')
  }
  return false
  }




module.exports = {
  createDreamTeam
};
