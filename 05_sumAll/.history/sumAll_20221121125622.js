const sumAll = function(...args) {
    const lowNum = args[0];
    const highNum = args[1];
    const newArray = [];
   
    for (let i = lowNum; i<= highNum; i++) {
        
        newArray.push(i);
                
    }
    console.log(newArray);
    let sum = 0;
    for (const element of newArray) {
        sum += element;
    }
    return sum;
};

console.log(sumAll(123,1));


// Do not edit below this line
module.exports = sumAll;