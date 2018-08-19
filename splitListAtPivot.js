/*6.Split a list of numbers with regard to a pivot element.
All elements smaller than the pivot element go in the first return list,
all other elements go into the second return list. Both return list are inside one
list. [2,7,8,3,1,4] , 4 Returns [[2,3,1],[7,8,4]]*/

var split = function(array, pivot, i, resultA, resultB) {

  //build a base case:
  if(array.length === 0){
    return 0;
  }
  // create conditions to recurse
  // if the elements on the array are lass than the pivot store on a placeholder
  if(array[0] < pivot) {
    return resultA[0].push(array[0]);
  }else{
    //if the elements are larger than the pivot, store on the placeholder
  return  resultB[0].push(array[0]);
  }
  // recursion case, 
  return (split(array.slice(1), pivot, i, resultA, resultB));
};
