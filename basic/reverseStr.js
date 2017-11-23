// Reverse the provided string.
function reverseString(str) {
	str = str.split('').reverse().join('');
  return str;
}
reverseString("hello")



// Another way to solve the str
// function reverseString(str) {
// 	str = str.split('');
// 	let reverse = [];
// 	for(let i = str.length - 1; i >= 0; i--) {
// 		reverse.push(str[i]);
// 	}
// 	reverse = reverse.join('')
// 	return reverse
// }
