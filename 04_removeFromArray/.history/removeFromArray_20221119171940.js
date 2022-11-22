let array = [1,2,3,4];
let theArgs = [3, 2];

const removeFromArray = function(array, ...theArgs) {
    let index = array.indexOf(theArgs);
    
    if (index > -1) {
       let newArr = array.splice(index, 1);
    }
}
console.log(removeFromArray([1,2,3,4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
