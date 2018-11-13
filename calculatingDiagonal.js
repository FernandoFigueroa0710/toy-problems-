/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix
is shown below: 

1 2 3
4 5 6
9 8 9  


Function description
It must return an integer representing the absolute diagonal difference.
diagonalDifference takes the following parameter:
 matrix: an array of integers .

*/


//Time complexity O(n*n) 
function calculateDiagonal(matrix) {
 //set the matrix length into a variable 
  var n = matrix.length; 
   //set up placeholders for the diagonals 
   var diag1 = 0;
   var diag2 = 0;
   //iterate through the main array 
   for ( var i =0;  i < n; i++ ){
     //iterate through the inner arrays
     for ( var j=0; j < n; j++ ){
       //if an element from the main diagonal 
       if ( i === j ) {
         //sum the elements that met the conditions
         diag1 += matrix[i][j];
       }       
       //an element from the second diagonal 
       if ( i + j === n -1) {
         //sum the elements that met the conditions
         diag2 += matrix[i][j];
       }
     }
   }
   //return the difference of the sum of the diagonals 
   return Math.abs(diag1 - diag2);
 }



//time complexity O(n)
function calculateDiagonal(matrix) {
  var n = matrix.length;
  var diag1 = 0;
  var diag2 = 0;

  for (var i =0; i < n; i++){
    diag1 += matrix[i][i];
    diag2 += matrix[i][n - i - 1];
  }
return Math.abs(diag1 - diag2);
}

var matrix =[
[1, 2, 3],
[4, 5, 6],
[9, 8, 9 ]
]
calculateDiagonal(matrix);