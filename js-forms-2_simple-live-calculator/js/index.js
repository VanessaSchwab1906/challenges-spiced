// ## Task

// There are two form fields where the user can enter a value.
// As soon as one of these values change, both values shall be multiplied. The result is to be rendered with the help of the output element.

// ## Hints

// The following hints might guide you:

// - Consider the `input` event for both input fields.
// - How do you set the text content for an HTML element again?

// Switch to the [`js/index.js`](./js/index.js) file and implement the task.

console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (event) => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  const finalResult = firstValue * secondValue;
  result.textContent = finalResult;
});

secondInput.addEventListener("input", (event) => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  const finalResult = firstValue * secondValue;
  result.textContent = finalResult;
});
