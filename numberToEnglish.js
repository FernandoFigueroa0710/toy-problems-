/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};
var numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

// create a helper function to:
// determine how many numbers to place
// input : number
// output : string (obj value)

Number.prototype.getPlace = function(num) {
  // define palceholder
  var result = "";

  //change the parameter number (num) to a string
  var numStr = "" + num;

  //iterate through the object numbersToPlace
  for (var key in numbersToPlace) {
    //if the key.length is less or equal to to numStr.length
    if (key.length <= numStr.length) {
      // the result is euqal to the value
      result = numbersToPlace[key];
    } else {
      return result;
    }
  }
  return result;
};
// console.log(Number.prototype.getPlace(700)); // > "hundred"
// console.log(Number.prototype.getPlace(78193512)); // > "million
/*************************************************************************************/

// helper function to:
// create a function to convert 3-digit (or smaller number) to english
// input: number
// output: string

Number.prototype.threeDigitsToEnglish = function(num) {
  //define a placeholder
  var result = "";
  // change the parameter number (num) to string
  var numStr = "" + num;

  //if the string (numStr) is strictly equal to 3 digits
  if (numStr.length === 3) {
    //create a variable and add the value to the first index value of the string
    var hundredsDigitStr = numbersToWords[numStr[0]];
    //assign and add the variable to the result plus the word "hundred";
    result += hundredsDigitStr + " hundred ";
    //remove the last index of the number
    numStr = numStr.slice(1);
  }
  //if the string (numStr) is strictly equal  to 2 digits
  if (numStr.length === 2) {
    //create variable for teen numbers and add the value of the first index plus 0;
    var tensDigitStr = numbersToWords[numStr[0] + "0"];
    //add the variable to the result plus an empty string
    result += tensDigitStr + " ";
    //remove the last index
    numStr = numStr.slice(1);
  }
  //if the srting (numStr) is strictly equal to 1 digit
  if (numStr === 1) {
    //create the variable for single numbers and add the value of the string index
    var onesDigitStr = numbersToWords[numStr[0]];
    // add the value to the result
    result += onesDigitStr;
  }
  // retunrn the result
  return result;
};
// console.log(Number.prototype.threeDigitsToEnglish(574));
// console.log(Number.prototype.threeDigitsToEnglish(83));
// console.log(Number.prototype.threeDigitsToEnglish(15));
// console.log(Number.prototype.threeDigitsToEnglish(6));
// console.log(Number.prototype.threeDigitsToEnglish(0));
/************************************************************************************/

//main function:
//convert the numbers into string of letters
//input: number
//output: string

Number.prototype.toEnglish = function() {
  // define placeholder
  var result = "";
  var num = this;

  //change the num to string;
  var numStr = "" + num;

  // if the string length (numStr) isn't a multiple of 3;
  if (numStr.length % 3 !== 0) {
    //add a variable and add the string as a multiple of 3
    var numberOfZeroesNeeded = 3 - (numStr.length % 3);
    //iterate through the variable
    for (var i = 0; i < numberOfZeroesNeeded; i++) {
      //add the value of cero to the variable of numStr
      numStr = "0" + num;
    }
  }
  //inner help function as:
  // base case
  var innerFunc = function(numStr) {
    if (numStr.length < 3) {
      return;
    }
    // get 3 numbers in English
    var numToConvert = numStr.slice(0, 3);
    var threeNumStr = Number.prototype.threeDigitsToEnglish(numToConvert);
    result += " " + threeNumStr;

    //Get starting place
    if (numStr.length > 3) {
      var startingPlace = Number.prototype.getPlace(num);
      //console.log(startingPlace)
      result += " " + startingPlace;
    }
    // Removing the last 3 digits
    innerFunc(numStr.slice(3));
  };
  innerFunc(numStr);
  // return the result
  return result;
};

/*
*reference material:  
*https://medium.com/@katestamas/programming-interview-toy-problem-numbers-to-english-40be06db16a2
*/