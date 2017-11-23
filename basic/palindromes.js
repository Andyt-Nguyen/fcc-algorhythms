// Check Palindromes
// Return true if the given string is a palindrome.
 // Otherwise, return false.

 function palindrome(str) {
	 str = str.toLowerCase();
	for(let i = 0; i < str.length; i++) {
		str = str.replace('_', '')
						.replace('-', '')
						.replace(',', '')
						.replace('/', '')
						.replace('(', '')
						.replace(')', '')
						.replace(' ', '')
						.replace('.','')
	}

	let str2 = str.split('').reverse().join('');

	return Boolean(str === str2);
 }

palindrome('race car')
/*
 palindrome("eye");
 palindrome("eye") should return a boolean.
 palindrome("eye") should return true.
 palindrome("_eye") should return true.
 palindrome("race car") should return true.
 palindrome("not a palindrome") should return false.
 palindrome("A man, a plan, a canal. Panama") should return true.
 palindrome("never odd or even") should return true.
 palindrome("nope") should return false.
 palindrome("almostomla") should return false.
 palindrome("My age is 0, 0 si ega ym.") should return true.
 palindrome("1 eye for of 1 eye.") should return false.
 palindrome("0_0 (: /-\ :) 0-0") should return true.
 palindrome("five|\_/|four") should return false.
 */
