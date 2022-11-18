
let string = 'hey';
let num = 3;

function repeatString(string, num) {
    for (let i = 0; i <= num; i++) {
        var repeatedString = "";
        repeatedString += string;
    }
    return repeatedString;
}


console.log(repeatString(string, num));
console.log()

// Do not edit below this line
module.exports = repeatString;
