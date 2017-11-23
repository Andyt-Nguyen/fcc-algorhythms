// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
	str = str.split(' ');
	let sortWords = str.sort((a,b) => (
		b.length - a.length
	))

	let longWord = sortWords[0].length;
	return longWord;
}

findLongestWord("May the force be with you");
