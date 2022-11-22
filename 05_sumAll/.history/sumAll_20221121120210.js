const sumAll = function(...args) {
    const lowNum = args[0];
    const highNum = args[1];
    let i = 0;
    while (i <= highNum && i >= lowNum) {
        
        const newArray = [];
        newArray.push(i);
        i++;
        return newArray;
    }
    

};
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
