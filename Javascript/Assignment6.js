 for (var i = 0; i < 5; i++) {
            console.log("Hello World!");
        }

for (var i = 1; i <= 10; i++) {
            console.log(i);
}

  var tableNumber = +(prompt("Enter the table number:"));
  var tableLength = +(prompt("Enter the table length:"));

  if (isNaN(tableNumber) || isNaN(tableLength)) {
      alert("Please enter valid numbers.");
  } else {

      for (var i = 1; i <= tableLength; i++) {
         var result = tableNumber * i;
          console.log(tableNumber+ " x " + i + " = " + result);
      }
  }
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (var i = 0; i < A.length; i++) {
  console.log(A[i]);
}
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log(fruits.indexOf(fruits[i])+ " element of index " + fruits[i])
}

var N = +(prompt("Enter the number of items:"));


if (isNaN(N)) {
    alert("Please enter a valid number.");
} else {

    var items = [];

    for (var i = 0; i < N; i++) {
        var item = prompt("Enter item " + (i + 1));
        items.push(item);
    }
    console.log("Array of items:", items);
}

console.log("Counting:");
for (var i = 1; i <= 15; i++) {
    console.log(i);
}


console.log("\nReverse counting:");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// Even numbers: 0 to 20 (increment by 2)
console.log("\nEven:");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Odd numbers: 1 to 19 (increment by 2)
console.log("\nOdd:");
for (var i = 1; i <= 19; i += 2) {
    console.log(i);
}

// Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("\nSeries:");
for (var i = 1; i <= 10; i++) {
    var result = i * 2;
    console.log(result + "k");
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter a bakery items");

let items = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        items = true;
        break;
    }
}
if (items) {
    alert( userInput + "  is found in the list");
} else {
    alert(userInput +" is not found in the list");
}

var A = [24, 53, 78, 91, 12, 11, 1045];

var largest = A[0]; 
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
alert("The largest number in the array is: " + largest );

var smallest = A[0]; 
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
alert("The smallest number in the array is: " + smallest );

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i + " x  5 = "+ i/5 );
    }
}

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];


if (students.length === scores.length) {
  for (var i = 0; i < students.length; i++) {
    console.log("Student: " + students[i] + ", Score: " + scores[i]);
  }
} else {
  console.log("Error: The number of students does not match the number of scores.");
}
var scores = [12, 45, 3, 22, 34, 50, 51, 55, 20, 52];

var scores = [12, 45, 3, 22, 34, 50];
var stopValue = prompt("Enter the stop value:");

stopValue = +stopValue;

if (stopValue !== null ) {
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] <= stopValue) {
      console.log(scores[i]);
    } else {
      break;
    }
  }
} else {
  console.log("Invalid input. Please enter a number.");
}
var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < A.length; i++) {
  for (var m = 0; m < A[i].length; m++) {
    console.log(A[i][m]);
  }
}

var num = +prompt("Enter a number:");


if (num > 0) {
    for (num = num; num > 0; num -= 0.5) {
          console.log(num);
    }
}else if(num < 0){
    for (num = num; num < 0; num += 0.5) {
        console.log(num);
  }
}else {
  console.log("Invalid input. You Enter a wrong value.");
}
userInput = +prompt("Enter limit")
for (var i = 0; i <= userInput; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
// More Are Remaining
  




