const reverseString = function(str) {
    let reversedStr = '';

    for(let i = str.length; i >= 0; --i) {
        reversedStr = reversedStr.concat(str.charAt(i));
    }

    return reversedStr;
}

module.exports = reverseString
