var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var div = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

// var inC = parseInt(prompt("What is the temperature in celcius?"));
//
// var inF = function() {
// 	return inC * (9 / 5) + 32;
// };
//
// var realTemp = inF();
//
// alert("It is " + realTemp + " degrees Farenheit.");

// var weight = parseInt(prompt("What is your weight in pounds?"));
// var height = parseInt(prompt("What is your height in inches?"));
//
//
// var bmi = function (weight, height) {
// 	return weight * 703 / (height * height);
// };
//
// var bmiCalc = bmi(weight, height).toFixed(2);
//
// alert("Your BMI is " + bmiCalc + ".");
