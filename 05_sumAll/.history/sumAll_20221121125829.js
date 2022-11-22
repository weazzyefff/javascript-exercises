const sumAll = function(...args) {
    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    const newArray = [];
   
    for (let i = lowNum; i<= highNum; i++) {
        
        newArray.push(i);
                
    }
    
    let sum = 0;
    for (const element of newArray) {
        sum += element;
    }
    return sum;
};

console.log(sumAll(123,1));


// Do not edit below this line
module.exports = sumAll;
