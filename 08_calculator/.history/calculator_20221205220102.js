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
  (accumalator, value) => accumalator * value, 1);
}

const power = function (a, b) {
return Math.pow(a, b);
}

const factorial = function (num) {
 if (num < 0) return -1;
 else if (num == 0) return 1;
 else {
  return (num * factorial(num -1));
 }
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
