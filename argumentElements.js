// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5);
// [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  //build a base case,if the array is 0 return an empty;
  if(array.length ==== 0){
    return [];
    //if the array has elements in it;
  }
    //return the value in the array pairing with the element outside the array
    //recurse the elements in the array
     return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};