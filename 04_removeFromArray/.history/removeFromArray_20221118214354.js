const removeFromArray = function(arr, nums) {

    const incNums = arr.includes(nums);

    const newArr = arr.splice(incNums);
    return newArr;
}
console.log(newArr);
// Do not edit below this line
module.exports = removeFromArray;
