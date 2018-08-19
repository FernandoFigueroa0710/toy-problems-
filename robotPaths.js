/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  // creates a new nxn board
  var newBoard = makeBoard(n);
  var count = 0;
  // base case: reached the bottom right corner
  var recurse = function {
    if(i === n-1 && j === n-1) {
      //one full solution
      count++;
      //untuggle to false before returning
      newBoard.togglePiece(i, j);
      return;
  }

    //create conditional to check if we can move up && been visited
    if(i < -1 > n && !newBoard.hasBeenVisited(i -1, j)) {
      //to move up and decrement i(row) by 1
      recurse(i -1, j );
    }
    //check if we can move right && if its been visited
    if(j + 1 < n && !newBoard.hasBeenVisited(i, j + 1)) {
      //to move right and increment j(column) by 1
      recurse(i, j +1);
    }
    //check if we can move down && if its been visited
    if(i + 1 < n && !newBoard.hasBeenVisited(i + 1, j)) {
      //to move down and increment i(row) by 1;
      recurse(i +1, j);
    }
    //check if we can move left && if its been visited
    if(j - 1 >= 0 && !newBoard.hasBeenVisited(i, j -1)) {
      recurse(i, j -1);
    }
    //untoggle the piece back to false to stop the recursion
    newBoard.togglePiece(i, j);
  }
    //start recurse function at location i=0, and j=0;
    recurse(0,0);
    //return the count
    return count;
};
