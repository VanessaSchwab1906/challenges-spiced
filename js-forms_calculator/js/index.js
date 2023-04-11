console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  // get input from form
  const formElements = event.target.elements;
  const a = parseInt(formElements.numberA.value);
  const b = parseInt(formElements.numberB.value);
  console.log(a, b);
  const sum = document.getElementById("addition").checked;
  const sub = document.getElementById("subtraction").checked;
  const mult = document.getElementById("multiplication").checked;

  if (sum === true) {
    result = add(a, b);
  } else if (sub === true) {
    result = subtract(a, b);
  } else if (mult === true) {
    result = multiply(a, b);
  } else {
    result = divide(a, b);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
