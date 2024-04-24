const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
let total = 0;
  for (num of array){
    total = num + total;
  }
  return parseInt(total);
};

const multiply = function(array) {
  let total = 1;
  for (num of array){
    total = num * total;
  }
return total;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  let total = 1;
	if (num === 0){
    return 1;
  } else {
    for (i = num; i > 0; i--){
      total = total * i;
    }
    return total;
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
