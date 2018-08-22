/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, context) {
  //name two parameters and also return an inner function
  var previousArgs = [].slice.call(arguments, 2);


  return function(){
    //create array-like argumets for func once apply is complete
    var currentArgs = [].slice.call(arguments);
    var combinedArgs = [].concat(previousArgs, currentArgs);
    // context is the context passed in above
    return func.apply(context);
  }
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function( context ) {

  // the method is attached to the prototype so we refer to it as this
  var previousArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = previousArgs.concat(args);

    return func.apply(context, args);
  };
};
/*
EXPLANATION: 
*https://medium.com/@mrjimbot/function-bind-implementation-a69d60c5a17e
*/
