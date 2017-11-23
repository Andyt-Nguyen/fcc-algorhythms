// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

function titleCase(str) {
	str = str.toLowerCase().split(' ')
	let theFinalWords = []
	let capital = str.forEach( a => {
		let letters = a.substr(1);
		let cap = a[0].toUpperCase();
		let combo = cap + letters;
		theFinalWords.push(combo)
	})
  return theFinalWords.join(' ');
}

titleCase("sHoRt AnD sToUt");
