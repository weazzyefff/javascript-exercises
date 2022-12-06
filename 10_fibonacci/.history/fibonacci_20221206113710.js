const fibonacci = function (num) {

    let alpha = 0, beta = 1, nextTerm;
    if (num < 0) {
        return 'OOPS'
    }
    for (let i = 1; i <= num; i++) {
        nextTerm = alpha + beta;
        alpha = beta;
        beta = nextTerm;
    }
    return alpha
};


// Do not edit below this line
module.exports = fibonacci;
