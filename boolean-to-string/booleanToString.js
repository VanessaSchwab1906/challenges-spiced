// PART 1
// Declare a variable name input and assign a boolean value and a variable name result. Write an if statement, that takes our input value and assign to result a string "Yes" if input is true, or a "No" if input is false. Console Log result

let input = false;
let result;

if (input) {
  result = "Yes";
} else {
  result = "No";
}

console.log(result);

// Part 2
// Redo part 1 but using the ternary operator instead of the if statement

// condition ? expressionIfTrue : expressionIfFalse;

input ? (result = "Yes") : (result = "No");
