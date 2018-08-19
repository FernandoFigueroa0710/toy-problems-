/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
	// edge case 
	if(!Array.isArray(arr) || arr === 0) {
		return null; 
	}

	// define placeholders 
	var obj = {};
	var newArr = [];
	//build a helper function 
	//iterate through the array 
	for( var i = 0; i < arr.length; i++) {
		//add the value of the array's index to a placeholder
		var num = arr[i]; 
		//conditional to assign values to the obj indexe's
		if(obj[num] === undefined) {
			obj[num] = 1; 
		}else{
			ob[num] +=1;
		}
	}
	//create a main function 
	//iterate through the object created (on the helper function)
	for(var key in obj) {
		//find the even occurences in the object 
		if(obj[key] % 2 === 0) {
			//push those keys to the new array 
			newArr.push(key);
		}
	}
	// return the new array's first place 
	return newArr[0];
};
