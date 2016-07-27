// Given a sorted array, find the index of an element
// using a binary search algorithm.

// Example usage:

// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index); // [3]

//define function to take in a sorted array and the index position of the target that we're looking for
var binarySearch = function (array, target) {
	//set start of seach at first index of array
    var start = 0;
	//set end of search at end of array
    var end = array.length - 1;
 	//set our identifier utility to obtain the desired index
    var find;

    //while there are still elements to search in the array, look for target
    //this will stop the function when it runs out of elements, so we dont keep recursing forever
    while (start <= end) {
        //set find attempt as the result of average of beginning & end, rounded down to nearest integer in case we get a fractional
        //splits array in half and saves time by starting from the middle- the BINARY part
        find = Math.floor((start + end) / 2);
        //if find locates the target index in the array
        if (array[find] === target) {
            //stop firing the function, and return resultant target index.
            return find;
        	} else {
        		//else if find stops short of locating the target index, it was looking too low, so
                if (array[find] < target) {
                	//set find to start looking one index position up (move forward thru array)
                    start = find + 1;
    			//else, find was looking too high up in the index
                } else {
                	//set find to look one index position down (move backward thru the array)
                    end = find - 1;

            	}
        	}
    }
    //return -1 if the target index isnt present in the array, because -1 can't be an array index value
    return -1;
};

// test case:
// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index);
