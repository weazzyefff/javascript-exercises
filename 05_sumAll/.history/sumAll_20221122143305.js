const sumAll = function (...args) {

    const newArray = [];

    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    console.log(lowNum, highNum); //NaN NaN
    console.log(typeof lowNum, typeof highNum);// number number

    let sum = 0;
    /*for (const item of args){
        if (!Number.isInteger(item)){
            return ('ERROR')
        }
    }*/
    if (lowNum < 0) {
        return ('ERROR');
    } else if (highNum < 0) {
        return ('ERROR');
    } else if(!Number.isInteger(lowNum)) {
        return ('ERROR');
    } else if(!Number.isInteger(highNum)) {
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



console.log(sumAll(-2, 'the'));


// Do not edit below this line
module.exports = sumAll;