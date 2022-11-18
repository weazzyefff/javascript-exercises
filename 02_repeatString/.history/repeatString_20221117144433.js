
let string = 'hey';
let num = 3;
let repeatedString = "";

function repeatString(string, num) {
    for (let i = 1; i <= num; i++) {
        repeatedString += string;
    }
    return repeatedString;
}


/*console.log(repeatString(string, num));
console.log()*/

// Do not edit below this line
module.exports = repeatString;
