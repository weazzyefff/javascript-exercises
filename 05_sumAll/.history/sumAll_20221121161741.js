const sumAll = function (...args) {

    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    const newArray = [];
    //console.log(lowNum, highNum);
    //console.log(args);
    console.log(...args);
    console.log(typeof args);
    let sum = 0;
    
    if (lowNum < 0) {
        return ('ERROR');
    } else if (highNum < 0) {
        return ('ERROR');
    } else if((typeof lowNum === 'string' || lowNum instanceof String)) {
        return ('ERROR')
    }  else if((typeof highNum === 'string' || highNum instanceof String)) {
        return ('ERROR')
    } else {
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
