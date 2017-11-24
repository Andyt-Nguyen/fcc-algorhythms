// Mutations
// Return true if the string in the first element of the array contains all
// of the letters of the string in the second element of the array.

function deleteDup(arr) {
	let nonDups = [];
	for(let i = 0; i < arr.length; i++) {
		if(nonDups.indexOf(arr[i]) === -1) {
			nonDups.push(arr[i])
		}
	}
	return nonDups;
}

function mutation(arr) {
	let sort = arr.sort((a,b) => a.length - b.length);
	let shortWord = sort[0].toLowerCase();
	let longWord = sort[1].toLowerCase();
	let similarLetters = [];

	if(shortWord === longWord) {
		return true;
	} else {
		shortWord = shortWord.split('');
		longWord = longWord.split('');
		for(let i = 0; i < longWord.length; i++) {
			for(let j = 0; j < shortWord.length; j++) {
				if(shortWord[j] === longWord[i]) {
					similarLetters.push(shortWord[j]);
				}
			}
		}
	}

	let nonDups = deleteDup(similarLetters);
	let noShortWordDup = deleteDup(shortWord);

	return nonDups.length === noShortWordDup.length ? true : false;
}

mutation(["voodoo", "o"]);

// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
//
