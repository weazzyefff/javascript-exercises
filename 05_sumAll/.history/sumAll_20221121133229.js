const sumAll = function (...args) {

    const lowNum = Math.min(...args);
    const highNum = Math.max(...args);
    const newArray = [];
    const array = args;

    array.forEach(element => {
        if (element <= 0) {
            console.log('ERROR');
        }
        else {
            for (let i = lowNum; i <= highNum; i++) {

                newArray.push(i);

            }

            let sum = 0;
            for (const element of newArray) {
                sum += element;
            }
        }
    });
    return sum;
};

console.log(sumAll(-10, 4));


// Do not edit below this line
module.exports = sumAll;
