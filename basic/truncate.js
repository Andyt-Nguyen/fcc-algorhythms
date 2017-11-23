// Truncate a string
// Truncate a string (first argument) if it is longer than the given maximum
//  string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
	const dots = '...';
	if(num > 3 && str.length > num) {
		let cuts = num - 3;
		str = str.slice(0, cuts);
		return str + dots;
	} else if(num < 3) {
		str = str.slice(0,num)
		return str + dots;
	} else {
		return str;
	}
}

console.log(truncateString("A-", 1));

//
// truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".
