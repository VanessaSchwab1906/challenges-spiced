import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

// - `add()`

// export function add(a, b) {
//     return a + b;
//   }

//   - returns 5 if called with add(2, 3)
//   - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
//   - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)

test("adds the numbers 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("adds two numbers as arguments, the greater one is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("adds 0.1 and 0.2 as argument", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// - `subtract()`

// export function subtract(a, b) {
//     return a - b;
//   }

//   - returns 10 if called with subtract(15, 5)
//   - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

test("adds 15 and 5 as argument", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("adds a positive number as first argument and a greater number as scond argument", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

// - `multiply()`

// export function multiply(a, b) {
//     return a * b;
//   }

//   - returns 8 if called with multiply(2, 4)
//   - returns a negative value if only the first argument is negative
//   - returns a negative value if only the second argument is negative
//   - returns a positive value if called with two negative arguments

test("adds 2 and 4 as an argument", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("add two numbers as argument, first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("add two numbers as argument, second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("addd two negative numbers as arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

// - `divide()`

// export function divide(a, b) {
//     if (b === 0) {
//       return "You should not do this!";
//     }

//     return a / b;
//   }
//   - returns 3 if called with divide(9, 3)
//   - returns "You should not do this!" if called with 0 as second argument

test("add 9 and 3 as arguments", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("add two numbers as arguments, the second one is 0", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
