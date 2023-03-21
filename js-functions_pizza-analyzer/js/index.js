console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
});

// Task 1

// ### 1 Calculate the Pizza Gain

// First, we want to calculate the difference of the two pizza areas for two given pizza diameters. For that, do the following:

// 1. Write a function `calculatePizzaGain` which expects the two diameters of the two pizzas: `diameter1` and `diameter2`. (Not the radii of the pizzas!)
// 2. Inside this function, calculate the areas of both pizzas.
//    > 💡 you can find the formula for that online. The value of pi can be accessed via `Math.PI`.
// 3. Calculate the pizza gain in percent relative to the first pizza
//    > 💡 The formula is: `(area2 - area1) / area1 * 100`.
// 4. Set the `textContent` of the output element to that value. Use `Math.round(calculatedValue)` to round the pizza gain to the next whole integer value.
// 5. Inside both event listeners, save the current values of both pizza inputs in two variables `pizzaSize1` and `pizzaSize2`
//    > 💡 You can use the queried elements and get their value like this: `pizzaInput.value`
// 6. Now call the function and pass in the two pizza sizes as the arguments.

function calculatePizzaGain(diameter1, diameter2) {
  console.log(
    "area of pizza 1 is:",
    Math.PI * (diameter1 / 2) * (diameter1 / 2)
  );
  console.log(
    "area of pizza 2 is:",
    Math.PI * (diameter2 / 2) * (diameter2 / 2)
  );
}

calculatePizzaGain(12, 15);

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
