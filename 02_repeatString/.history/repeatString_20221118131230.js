



function repeatString(string, number) {
    let repeatedString = "";
    if (number < 0) {
        return ('ERROR');
    } else {
        for (let i = 1; i <= number; i++) {
            repeatedString += string;
        }
    }
    return repeatedString;
}

/*console.log(repeatString(string, num));
console.log()*/

// Do not edit below this line
module.exports = repeatString;
