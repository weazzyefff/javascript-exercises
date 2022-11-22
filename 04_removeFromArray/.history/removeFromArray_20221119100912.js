let arr = [1,2,3,4];
let nums = [3, 2];

const removeFromArray = function(arr, nums) {
    let newArr = arr.splice(nums);
    return newArr;
}
console.log(removeFromArray(arr, nums));

// Do not edit below this line
module.exports = removeFromArray;
