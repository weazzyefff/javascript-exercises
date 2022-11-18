



function repeatString(string, num) {
    let repeatedString = "";
    if (num < 0) {
        console.log('ERROR');
    } else {
        for (let i = 1; i <= num; i++) {
        
            repeatedString += string;
        }
    }
    return repeatedString;
}


/*console.log(repeatString(string, num));
console.log()*/

// Do not edit below this line
module.exports = repeatString;
