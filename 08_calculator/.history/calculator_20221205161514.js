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

const multiply = function (array) {
 return array.reduce(
  (accumalator, value) => accumalator * value, 0);
}

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
