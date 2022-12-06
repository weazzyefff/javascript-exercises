const fibonacci = function (num) {

    let alpha = 0, beta = 1, nextTerm;
    for (let i = 1; i <= num; i++) {
        console.log('i' + i);
        nextTerm = alpha + beta;
        alpha = beta;
        beta = nextTerm;
        console.log('beta' + beta);
        console.log('nextTerm' + nextTerm);
        console.log('alpha' + alpha);
    }
    return alpha
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
