/*

Complete the function compareTriplets in the editor below. 
It must return an array of two integers, 
the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):
alice 5 6 7
 bob  3 6 10
*/

function compareTriplets(a, b) {
	// create counters
    var counterA = 0;
    var counterB = 0;
    //iterate through the array
    for (var i = 0; i < a.length; i++) {
    	//if the index value of a is more than b; add one to the counter A 
        if (a[i] > b[i]) {
            counterA++;
        }
        //if index value of b is more than a; add one to the counter B 
        if (a[i] < b[i]) {
            counterB++;
        }
    }
    // return an array with both counter counts 
    return [counterA, counterB];