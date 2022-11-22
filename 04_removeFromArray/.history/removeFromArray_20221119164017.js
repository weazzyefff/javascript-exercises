let arr = [1,2,3,4];
let theNums = [3, 2];

const removeFromArray = function(arr,...theNums) {
    let index = arr.indexOf(theNums);
    
    let newArr = arr.splice(theNums);
    return newArr;
}
console.log(removeFromArray(newArr));

// Do not edit below this line
module.exports = removeFromArray;
