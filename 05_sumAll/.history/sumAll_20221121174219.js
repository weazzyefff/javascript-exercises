const sumAll = function (...args) {
    
    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    const newArray = [];
    console.log(lowNum, highNum);
    console.log(typeof lowNum, typeof highNum);
    if (args.includes(string)) {
        return ('ERROR');
    }
    if (lowNum < 0 ) {
        return ('ERROR');
    } else if (highNum < 0) {
        return ('ERROR');
    } else if (lowNum == NaN) {
        return ('ERROR');
    } else if (highNum == NaN) {
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

console.log(sumAll(-2, 'the'));


// Do not edit below this line
module.exports = sumAll;
