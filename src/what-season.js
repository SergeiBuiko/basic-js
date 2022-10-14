const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  
  const month = date.getMonth()
  //console.log(typeof date);
  let currensSeason = 'winter'
  //console.log(month);

  if (typeof date == 'object') {
    //console.log('string');
    if (2 <= month && month <=4 ) {
      currensSeason = 'spring'
     }
     else if (5 <= month && month <=7) {
       currensSeason = 'summer'
     }
     else if ( 8 <= month && month <= 10) {
       currensSeason = 'autumn '
     }
     return currensSeason
    }
    return "Invalid date!"      
    
  }
  



module.exports = {
  getSeason
};
