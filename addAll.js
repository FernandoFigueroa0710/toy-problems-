/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/

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
