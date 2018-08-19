/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  //describe placeholders 
  var result = []; 
  var storage ={};
  var letter; 
  var letters;

  //itereate throught the string 
  for(var = 0; i < string.length; i++){
  	//assign the value to the placeholder letter using the substring method
  	letter = string.substring(i, 1); 
  	//assing the letter value to the storage 
  	storage[letter] = storage[letter] +1 || 1;
    }
    //assign to the placeholder letters the keys of the value storage 
    letters = Object.keys(storage);
    //iterarte through the object letters 
    for(var i =0; i < letters.length; i++){
    	//push into the placeholder result the indexes of the letters and storage placeholders
    	result.push([letters[i], storage[letters[i]]]);
    }

    //sort though the letters 
    result.sort(function(a, b) {
    //order of frequency descending
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } 
    //order of char ascending
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return - 1;
    }
    //or return cero
    return 0;
  });
 
  //return result placeholder 
  return result;
};
