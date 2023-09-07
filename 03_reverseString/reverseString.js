const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let reversedString = reverseArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
