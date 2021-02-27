const palindromes = function(str) {
    let cleanedStr = str.toLowerCase().replace(/[.,! ]/g,"");
    let reversedStr = cleanedStr.split('').reverse().join('');

    return (reversedStr == cleanedStr); 
}

module.exports = palindromes
