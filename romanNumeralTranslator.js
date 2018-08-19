
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  //create placeholders, define a number;
  var number = 0;
  //add roman number into a placeholder using the split method
  var romanNum = romanNumeral.split('');
  //iterate through the object
  for(var i=0; i < romanNum.length; i++){
    //assign values to the the index of the argument
    var key = letters[i];
    var next = letters[i + 1];
    //create a conditional to returning a boolean to allow the code to run
    // if the indext of the object is less than the index plus one...
    if(DIGIT_VALUES[key] < DIGIT_VALUES[next]) {
      //assign the indext of the object decreasing
      number -= DIGIT_VALUES[key];
      // or if it's the opposite
    }else{
      number += DIGIT_VALUES[key];
    }

  }
    //return the value of placeholder
    return number;
};
