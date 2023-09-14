// var userInput = +prompt("Enter a positive integer:");
// var roundValue = Math.round(userInput);
// var floorValue = Math.floor(userInput);
// var ceilValue = Math.ceil(userInput);
// console.log("Number: " + userInput);
// console.log("Round off value: " + roundValue);
// console.log("Floor value: " + floorValue);
// console.log("Ceil value: " + ceilValue);

// var userInput = +prompt("Enter a Negative integer:");
// var roundValue = Math.round(userInput);
// var floorValue = Math.floor(userInput);
// var ceilValue = Math.ceil(userInput);
// console.log("Number: -" + userInput);
// console.log("Round off value: -" + roundValue);
// console.log("Floor value: -" + floorValue);
// console.log("Ceil value: -" + ceilValue);

// var floating = +prompt("Enter a positive floating-point number:");
// var roundValue = Math.round(floating );
// var floorValue = Math.floor(floating );
// var ceilValue = Math.ceil(floating );

// console.log("Number: " + floating );
// console.log("Round off value: " + roundValue);
// console.log("Floor value: " + floorValue);
// console.log("Ceil value: " + ceilValue);

// var floating = +prompt("Enter a Negative floating-point number:");
// var roundValue = Math.round(floating );
// var floorValue = Math.floor(floating );
// var ceilValue = Math.ceil(floating );

// console.log("Number: " + floating );
// console.log("Round off value: " + roundValue);
// console.log("Floor value: " + floorValue);
// console.log("Ceil value: " + ceilValue);

// var number = prompt("Enter a number:");
// var absoluteValue = Math.abs(number);
// console.log("The absolute value of " + number + " is " + absoluteValue);


var diceValue = Math.floor(Math.random() * 6) + 1;
console.log("The dice rolled: " + diceValue);

var coinToss = Math.random();
var coinResult;
if (coinToss < 0.5) {
  coinResult = "Heads";
} else {
  coinResult = "Tails";
}
console.log("The coin landed on: " + coinResult)

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randomNumber);

