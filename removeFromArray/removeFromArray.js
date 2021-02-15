const removeFromArray = function(array, ...args) {
    for(let i = args.length; i >= 0; --i) {
        let elementIndex = array.indexOf(args[i]);
        while(elementIndex > -1) {
            array.splice(elementIndex, 1);
            elementIndex = array.indexOf(args[i]);
        }
    }

    return array;
}

module.exports = removeFromArray
