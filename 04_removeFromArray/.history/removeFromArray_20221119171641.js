let array = [1,2,3,4];
let theArgs = [3, 2];

const removeFromArray = function(array, ...theArgs) {
    let index = array.indexOf(theArgs);
    
    if (index > -1) {
       let newArr = array.splice(index, 1);
    }
    
    return newArr;
}
console.log(removeFromArray());

// Do not edit below this line
module.exports = removeFromArray;