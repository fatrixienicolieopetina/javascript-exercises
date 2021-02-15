const sumAll = function(num1, num2) {

    if(Number.isInteger(num1) && Number.isInteger(num2)) {

        if(num1 < 0 || num2 < 0) {
            return 'ERROR';
        }

        let sum = 0;
        let i = (num1 <= num2) ? num1: num2;
        let j = (num1 <= num2) ? num2: num1;

        for(let k = i; k <= j; k++) {
            sum = sum + k;
        }

        return sum;
    } else {
        return 'ERROR';
    }

}

module.exports = sumAll
