// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  //base case, if the string is not defined; then return an empty object
  if(str === '') {
    return obj;
    //if the string inside the object is ALSO undefined
  }else if(obj[str[0]] === undefined) {
    //assign the value of 1 the first character in the object's string
    obj[str[0]] = 1;
    // and continue to add one and assign ine to the rest of the characters
  }else{
    obj[str[0]] +=1;
  }
  //recurse case, where we are taking one charcter form the string everytime 
  return letterTally(str.slice(1), obj);
};
