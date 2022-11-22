const sumAll = function(...args) {
    const lowNum = args[0];
    const highNum = args[1];
    const newArray = [];
    for (let i = 0; i<= highNum && i >= lowNum; i++) {
        
        newArray.push(i);
        
        console.log(i)
    }
    

};
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
