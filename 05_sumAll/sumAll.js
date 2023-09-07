const sumAll = function(numSmall, numLarge) {
    if(numSmall < 0 || numLarge < 0) return "ERROR";
    if (!Number.isInteger(numSmall) || !Number.isInteger(numLarge)) return "ERROR";
    
    if(numSmall > numLarge){
        let tmp = numLarge;
        numLarge = numSmall;
        numSmall = tmp;
    }

    let sum = 0;
    for(let i=numSmall; i<=numLarge; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
