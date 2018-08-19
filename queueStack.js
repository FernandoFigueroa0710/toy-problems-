/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
   this.storage = {};
   this.key = 0;
};
  // add an item to the top of the stack
  Stack.prototype.push = function(value) {
    // assign to value the key of the storage placeholder
    // assign the value of 1
    this.storage[this.key]= value;
    this.key += 1;
  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function(value) {
    //create a conditional
    if(this.key === 0){
      return undefined;
    }
    //create a temporary placeholder, removing the last item    var deleted = this.storage[this.key -1];
    // delete the last key of the stirage object

    delete this.storage[this.key -1];
    // decreaase the count
    this.key --;
    // return the value of the placeholder
    return deleted;
  };


  // return the number of items in the stack
  Stack.prototype.size = function(value) {
    //return the value of the keys inside the storage object
    return  this.key;
  };



/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
}
  // called to add an item to the `queue`
  this.enqueue = function(value) {
    // push the parameter value into the "inbox" variable
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    //if the size of the outbox equeals to cero
    if (outbox.size() === 0) {
      //or while it doesn't equal to cero
      while(inbox.size() !== 0 ) {
        //push the the properties of the inbox into the outbox,
        //first in first out method
        outbox.push( inbox.pop());

      }
    }
      //return the value of the outbox
      return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    // return the value of the actual key minus the lowest key
    return inbox.size() + outbox.size();

  };

  /*

  */
