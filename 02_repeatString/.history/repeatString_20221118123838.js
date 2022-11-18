



function repeatString(string, num) {
    let repeatedString = "";
    for (let i = 1; i <= num; i++) {
        if (i < 0) {
            console.log('ERROR');
        } else {
            repeatedString += string;
        }
    }
    return repeatedString;
}


/*console.log(repeatString(string, num));
console.log()*/

// Do not edit below this line
module.exports = repeatString;
