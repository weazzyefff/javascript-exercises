const sumAll = function (...args) {

    console.log(args);
    for (const item of args) {
        if (!Number.isInteger(item)) {
            return (`${item} ERROR`);
        }
    }
    //Below this line works fine
    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    console.log(lowNum, highNum); //NaN NaN
    console.log(typeof lowNum, typeof highNum);// number number
    const newArray = [];
    let sum = 0;
    if (lowNum < 0) {
        return ('ERROR');
    } else if (highNum < 0) {
        return ('ERROR');

    }
    for (let i = lowNum; i <= highNum; i++) {
        newArray.push(i);
    }
    for (const element of newArray) {
        sum += element;
    }
    return sum;
}



console.log(sumAll(1, 4));


// Do not edit below this line
module.exports = sumAll;
