const fibonacci = function(num) {
    let fibNum = parseInt(num);

    if(!Number.isInteger(fibNum) || fibNum < 0) {
        return 'OOPS';
    }

    let arr = [1, 1];

    for (let i = 2; i <= fibNum; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[num - 1];
}

module.exports = fibonacci
