const add = function (num1, num2) {
  return num1 + num2;
};


const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce(
    (accumalator, value) => accumalator + value, 0);
}

console.log(multiply([2, 4]));

const multiply = function (a, b) {
 return a * b;
};

const power = function () {

};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
