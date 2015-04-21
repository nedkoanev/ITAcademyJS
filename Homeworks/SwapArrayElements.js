function indent (array, i) {
	var j;
	if (i > 0) {
		for (j = 0; j < i*6; j++) {
	    	array.push(array.shift());
		}
		console.log(array);
	} else {
		for (j = 0; j < -i; j++) {
	    	array.push(array.shift());
		}
		console.log(array);
	}
}

indent( [1, 2, 3, 4, 5, 6, 7], 3 ); // must return [5, 6, 7, 1, 2, 3, 4]
indent( [1, 2, 3, 4, 5, 6, 7], 5 ); // must return [3, 4, 5, 6, 7, 1, 2]
indent( [1, 2, 3, 4, 5, 6, 7], 15 ); // must return [7, 1, 2, 3, 4, 5, 6]
indent( [1, 2, 3, 4, 5, 6, 7], -3 ); // must return [4, 5, 6, 7, 1, 2, 3]
indent( [1, 2, 3, 4, 5, 6, 7], -13 ); // must return [7, 1, 2, 3, 4, 5, 6]