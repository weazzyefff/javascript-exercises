const sumAll = function (...args) {
    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    const newArray = [];
    console.log(lowNum, highNum);
    console.log(args);
    console.log(...args);
    console.log(typeof lowNum, typeof highNum);
    console.log(args.includes(typeof NaN));
    
    if (lowNum < 0) {
        return ('ERROR');
    } else if (args < 0) {
        return ('ERROR');
        
    } else {
        let sum = 0;
        for (let i = lowNum; i <= highNum; i++) {
            newArray.push(i);
        }
        for (const element of newArray) {
            sum += element;
        }
        return sum;
    }
}

console.log(sumAll(-2, -50));


// Do not edit below this line
module.exports = sumAll;