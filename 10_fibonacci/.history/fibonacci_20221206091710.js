const fibonacci = function(num) {
   let alpha = 0;
   let beta = 1;
   nextTerm;

   for (let i = 1; i <= num; i++) {
nextTerm = alpha + beta;
alpha = beta;
beta = nextTerm;

   }

};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
