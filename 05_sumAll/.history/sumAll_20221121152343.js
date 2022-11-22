const sumAll = function (...args) {

    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    const newArray = [];
    //console.log(lowNum, highNum);
    //console.log(args);
    //console.log(...args);

    if (args < 0) {
        return console.error('ERROR');
    }
    let sum = 0;

    for (let i = lowNum; i <= highNum; i++) {
        newArray.push(i);
    }
    for (const element of newArray) {
        sum += element;
    }
    return sum;
}

console.log(sumAll(-10, 4));


// Do not edit below this line
module.exports = sumAll;
