// Factorialize Num
function factorialize(num) {
	let factor = 1;
	while(num > 0) {
		factor *= num;
		num--;
	}
  return factor;
}

factorialize(10);
