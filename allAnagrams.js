/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
  //create a function called all anagrams
  var allAnagrams = function(string) {
    //define placeholders
     var newString = '';
     var newArr = [];
     //iterate through the string
     for (var i = 0; i < string.length; i += 1) {
       //add the string index into a value
       var first = string[i];
       //iterate a seccond time
       for (var j = 0; j < string.length; j += 1) {
         //add the string index into the second value
         var second = string[j];
         //iterate the string
         for (var k = 0; k < string.length; k += 1) {
           //add the value into the thrird value
           var third = string[k];
           //if the values aren't euqal to each other then
          if (first !== second && first !== third && second !== third && second !== first) {
            // push them into the placeholder
           newArr.push(first + second +third);
          }

         }
       }
     }
     //return the value of the new array
     return newArr;
   };
   /*
    hack reactor's : 
   allAnagrams = function(string) {
var anagrams = {};
var generator = function(text, options){
  if (text.length === string.length){
    anagrams[text] = true
  }
  for (var i = 0; i < options.length; i++){
    generator(text + options[i],
    options.slice(0, i) + options.slice(i+1))
  }
}
generator(‘’, string);
return Object.keys(anagrams);
}
   */
