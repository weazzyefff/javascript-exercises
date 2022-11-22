const removeFromArray = function(arr, nums) {

    const numsToDel = arr.includes(nums);

    const newArr = arr.splice(numsToDel);
    return newArr;
}
console.log(newArr);
// Do not edit below this line
module.exports = removeFromArray;
