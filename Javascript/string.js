// // 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// console.log("Hello, " + fullName + "! Welcome!");

//Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
// var favoriteModel = prompt("Please enter your favorite mobile phone model:");
// var inputLength = favoriteModel.length;
// console.log("The length of your input is: " + inputLength + " characters.");

// Write a program to find the index of letter “n” in the word“Pakistani” and display the result
var word = "Pakistani";
var index = word.indexOf("n");
console.log("The index of 'n' in the word '" + word + "' is: " + index);

// 4. Write a program to find the last index of letter “l” in the word“Hello World” and display the result
// Define the word
var word = "Hello World";

var lastIndex = word.lastIndexOf("l");
console.log("The last index of 'l' in the word '" + word + "' is: " + lastIndex);

// 5. Write a program to find the character at 3rd index in the word“Pakistani” and display the result in your browser.
// Define the word
var word = "Pakistani";

// Find the character at the 3rd index
var character = word[3];
console.log("The character at the 3rd index in the word '" + word + "' is: " + character);

// Repeat Q1 using string concat() method.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// console.log("Hello, " + fullName + "! Welcome!");

// Write a program to replace the “Hyder” to “Islam” in the word“Hyderabad” and display the result in your browser.
// var originalWord = "Hyderabad";
// var replacedWord = originalWord.replace("Hyder", "Islam");
// console.log("Original word: " + originalWord);
// console.log("Replaced word: " + replacedWord);

// question 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
console.log("Original message: " + message);
console.log("Replaced message: " + replacedMessage);

// Question 9
var stringNumber = "472";
var parsedNumber = parseInt(stringNumber);
var numericNumber = Number(stringNumber);
console.log("Original string: " + stringNumber + " (Type: " + typeof stringNumber + ")");
console.log("Parsed number: " + parsedNumber + " (Type: " + typeof parsedNumber + ")");
console.log("Numeric number: " + numericNumber + " (Type: " + typeof numericNumber + ")");

// Question 10
// var url = prompt("Enter a URL ");
// var parts = url.split('.');
// var domainName = parts[parts.length - 2];
// console.log("Domain name: " + domainName);

// Question 11
// var userInput = prompt("Enter a text:");
// var uppercaseInput = userInput.toUpperCase();
// console.log("Input in capital letters: " + uppercaseInput);

// Question 12
// var userInput = prompt("Enter a text:");
// var lowercaseInput = userInput.toLowerCase();
// console.log("Input in capital letters: " + lowercaseInput);

// Question 13

// var userInput = prompt("Enter a text:");
// var words = userInput.split(' ');
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
// }
// var titleCaseInput = words.join(' ');
// console.log("Input in title case: " + titleCaseInput);

// Question 15& 16

var a = "3";
var b = "3";

if (a === "3" && b === "3") {
  var x = a+b;
  console.log("a + b is " + x);
  var y = a-b
  console.log("a - b is " + y);
}