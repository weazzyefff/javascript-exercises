const reverseString = function (string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};
console.log(reverseString('Daniel'));
console.log('hello');
// Do not edit below this line
module.exports = reverseString;