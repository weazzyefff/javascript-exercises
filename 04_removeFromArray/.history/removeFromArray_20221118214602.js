const removeFromArray = function(arr, nums) {

    const numsToDel = arr.includes(nums);

    const newArr = arr.splice(numsToDel);
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
