// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
	let theBigFour = [];
  arr.forEach(a => {
		a.sort((a, b) => b - a);
		theBigFour.push(a[0]);
	});
  return theBigFour;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
