/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

  for example:

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]. */

function diffArray(arr1, arr2) {
  //create a placeholder 
  var newArr = [];
  //iterate through the first array
   for(var i = 0; i < arr1; i++) {
   	 //create a conditional comparing the arrays
   	 if(arr2.indexOf(arr1[i]) === -1) {
   	 	// push the difference into the placeholder 
   	 	newArr.push(arr1[i]);
   	 }
   }
   // return result;
   return newArr;
}
