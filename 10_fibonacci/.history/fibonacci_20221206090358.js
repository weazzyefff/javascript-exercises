const fibonacci = function(num) {
   let alpha = 0;
   let beta = 1;
   let nextTerm = 0;

   for (let i = 1; i <= num; i++) {
nextTerm = alpha + beta;
alpha = beta;
beta = nextTerm;

   }

};

// Do not edit below this line
module.exports = fibonacci;
