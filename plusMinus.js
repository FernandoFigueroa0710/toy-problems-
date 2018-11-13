/*

Given an array of integers, calculate the fractions of its elements that are positive, 
negative, and are zeros. 
Print the decimal value of each fraction on a new line.
It should print out the ratio of positive, negative and zero items in the array, 
each on a separate line rounded to six decimals.
plusMinus has the following parameter(s):
arr: an array of integers

*/

function plusMinus(arr) {
	//assign a variable to the array's length
	var length = arr.length;
	//assign placeholders for the decimal values oof each fraction
	var positive = 0;
	var negative = 0;
	var zero = 0;

	//iterate through the array
	for (var i = 0; i < length; i++) {
		var value = arr[i];
		if (value > 0) {
			positive += 1;
		} else if (value < 0) {
			negative += 1;
		} else {
			zero += 1;
		}
	}
	//set up the division  between the value of the integers between the lenght of the array
	var FractionOfPositive = positive / length;
	var FractionOfNegative = negative / length;
	var FractionOfZero = zero / length;

	//return the results in an array
	return [FractionOfPositive, FractionOfNegative, FractionOfZero];
}