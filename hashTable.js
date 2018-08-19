/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    //check the index(hashed) value of the key; add it to a temporary placeholder
    var tempIndex = getIndexBelowMaxForKey(key);
    //conditional statement
    if (!storage[tempIndex]){
      //create a temporary placeholder
      //if no collision, insert
      var tempArray= new Array(key, value);
      storage[tempIndex].push(tempArray);

    }else{
    //if there's collisions, make a bucket
    // store existing into the bucket
    var tempBucket= storage[tempIndex];
    //add new value to the bucket
    var tempArray= new Array(key, value);
    tempBucket.push(tempArray);
    //place the bucket into previous location
    storage[tempIndex]=tempBucket;
    }
  };

  result.retrieve = function(key) {
    // find the index for the key
    var tempIndex = getIndexBelowMaxForKey(key);
    //return hashed index of THAT key
    return (storage[tempIndex]) ? (storage[tempIndex][key]) : undefined;

  };

  result.remove = function(key) {
    //find the index of the key
    var tempIndex = getIndexBelowMaxForKey(key);
    //if the key exists in the hash table, remove its value
    if(storage[tempIndex][key]) {
      delete storage[tempIndex][key;]
    }
  };

  return result;
};

/*
var getIndexBelowMaxForKey = function(str, max) {
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash << 5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};

var makeHashTable = function() {
 var result = {};
 var storage = [];
 var storageLimit = 1000;


 result.insert = function(  key, value ) {

   var index = getIndexBelowMaxForKey(key, storageLimit);
   storage[index] = storage[index] || [];
   var pairs = storage[index];
   var pair;
   var replaced = false;
   for (var i = 0; i < pairs.length; i++) {
     pair = pairs[i];
     if (pair[0] === key) {
       pair[1] = value;
       replaced = true;
     }
   }

   if (!replaced) {
     pairs.push([key, value]);
   }

 };

 result.retrieve = function( key ) {
   // TODO: implement `retrieve()`

   var index = getIndexBelowMaxForKey(key, storageLimit);
   var pairs = storage[index];
   if (!pairs) { return; }
   var pair;
   for (var i = 0; i < pairs.length; i++) {
     pair = pairs[i];
     if (pair && pair[0] === key) {
       return pair[1];
     }
   }

 };

 result.remove = function(key ) {
   // TODO: implement `remove()`

   var index = getIndexBelowMaxForKey(key, storageLimit);
   var pairs = storage[index];
   var pair;
   for (var i = 0; i < pairs.length; i++) {
     pair = pairs[i];
     if (pair[0] === key) {
       var value = pair[1];
       delete pairs[i];
       return value;
     }
   }

 };

 return result;
};
*/
