/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  //define a placeholder as an array
  //define choices
  var results = [];
  var choices = ['rock', 'paper', 'scissors'];
  var previous;

  //build a base case
  if( n <= 0 ){
    return result;
  }
  if( n === 1) {
    return [['rock'], ['paper'], ['scissors']];

},
    previous = rockPaperScissors( n - 1);

    //for each loop in previous
    previous.forEach(function(array){
      //for each choice in choices
      choices.forEach(function(choice){
        //concat the previous array with choices and push to results
        result.push(Array.prototype.concat(array, choice));
      });
    });
    // return the results
    return results
};
