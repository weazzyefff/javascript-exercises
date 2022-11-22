const sumAll = function(...args) {
    const lowNum = args[0];
    const highNum = args[1];
    const newArray = [];
   
    for (let i = lowNum; i<= highNum; i++) {
        
        newArray.push(i);
                
    }
    return newArray

};

console.log(sumAll(1,4));


// Do not edit below this line
module.exports = sumAll;
