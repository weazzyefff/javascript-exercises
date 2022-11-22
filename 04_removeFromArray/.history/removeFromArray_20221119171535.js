let arr = [1,2,3,4];
let theArgs = [3, 2];

const removeFromArray = function(arr, ...theArgs) {
    let index = arr.indexOf(theArgs);
    
    if (index > -1) {
       let newArr = arr.splice(index, 1);
    }
    
    return newArr;
}
console.log(removeFromArray());

// Do not edit below this line
module.exports = removeFromArray;
