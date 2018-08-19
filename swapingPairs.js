/*Swap all elements in pairs. If the length of the list is odd, the last element stays
in place. [2,7,8,3,1,4] Returns [7,2,3,8,4,1] [3,6,8,1,5] Returns [6,3,1,8,5]*/

var swapElements = function(array) {
  //create a placeholder
  let newVar = 0;
  //conditional to return elements of the array
if (array.length === 1) {
return [array[array.length-1]];
}
//base case
if (array.length === 0) {
return [];
}
//reassing the value of the placeholder
newVar = array[1];
array[1] = array[0];
array[0] = newVar;
//recursion case 
return [array[0], array[1]].concat(swapElements(array.slice(2)));
};
