const repeatString = function(givenString, givenNumber) {
    if(givenNumber < 0){
        return "ERROR";
    }
    let finalString = "";
    for(let i=0; i<givenNumber; i++){
        finalString += givenString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
