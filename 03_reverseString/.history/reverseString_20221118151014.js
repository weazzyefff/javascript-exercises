const reverseString = function(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >=0; i--){
        reversedString += string[1];
    }
return string;
};
console.log(reverseString('Daniel'));

// Do not edit below this line
module.exports = reverseString;
