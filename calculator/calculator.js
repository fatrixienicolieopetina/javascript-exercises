function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((sum, item) => sum + item, 0);
}

function multiply (arr) {
	return arr.reduce((product, num) => product * num, 1);
}

function power(base, power) {
	return Math.pow(base, power);	
}

function factorial(num) {
	let factorialNum = 1;
	for(let i = 2; i <= num; i++) {
		factorialNum = factorialNum * i;
	}

	return factorialNum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}