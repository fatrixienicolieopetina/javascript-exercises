const repeatString = function(str, numOfTimes) {
    if(numOfTimes < 0) {
        return 'ERROR';
    }

    let repeatedString = '';
    while(numOfTimes > 0) {
        repeatedString = repeatedString.concat(str);
        numOfTimes--;
    }

    return repeatedString;
}

module.exports = repeatString
