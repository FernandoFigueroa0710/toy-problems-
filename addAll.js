/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/


var add = function(array) {
  // if the isn't elements inside the array; return 0;
  if(array.length =< 0){
    return 0;
  }
  // return the sum of the elements inside the array
  //starting at the first index position
  // recursing the form the end of the array taking 1 element each loop
  return array + add(array.slice(1));
};
/*
hack reactor's result
var add = function(array, i, total) {
 total = total || 0;
 if(i > array.length-1) {
   return total;
 } else {
   total+=array[i];
   return add(array,i+1,total);
 }
 return total;
};
*/
