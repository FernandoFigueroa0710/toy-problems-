/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

//create a function called likend list 
var LinkedList = function() {
  // define the parameters 
 this.head = null; 
 this.tail = null; 
};

// define the method add to tail 
LinkedList.prototype.addToTail = function(value) {
  //create the conditional to check if the tail is null 
if(this.tail === null) {
  //assign the value of the tail and the head to the next node
  this.tail = newNode;
  this.head = newNode; 
}  
  this.tail.next = newNode; 
  this.tail = newNode;
};

// define the remove head function
LinkedList.prototype.removeHead = function() {
  //re-assign the value to the current head as an old one; return the value  
  var oldHead = this.head; 
  this.head = oldHead.next; 
  return oldHead; 
};
// define the function contains 
LinkedList.prototype.contains = function(target) {
  //assign the value of of the current node to this head to our current node  
 var currentNode = this.head; 
 //create a condition while there's no current node  assign the target value to the node's index 
 while(!currentNode) {
  if(currentNode.value === target) {
    return true; 
  }
  currentNode = this.head.next;
 }
  return false; 
};
// define the function make node assign a value to it 
LinkedList.prototype.makeNode = function(value) {
  // define a placeholder 
  var node = {};
  node.value = value; 
  node.next = null; 

  return node; 
};

/*




*/
