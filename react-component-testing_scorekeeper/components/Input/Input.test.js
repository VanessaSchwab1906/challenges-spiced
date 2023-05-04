import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// Switch to [`Input.test.js`](components/Input/Input.test.js) and write the tests for all given acceptance criteria.

// - To check for attributes like `placeholder` or `name`, you can use the matcher `toHaveAttribute(attributeName, value)`.
// - The `Input` component receives an `onChange` callback; in order to test it, remember that you have to mock if first.
// - You can check how often a function has been called with `toHaveBeenCalledTimes(numberOfExpectedCalls)`.

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Name" name="name" placeholder="placeholder" />);
  const input = screen.getByLabelText("Name");
  expect(input).toHaveAttribute("name", "name");
  expect(input).toHaveAttribute("placeholder", "placeholder");
});

test("calls callback on every user input", async () => {
  // mock functions
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(<Input onChange={handleChange} labelText="Name" name="name" />);
  const input = screen.getByLabelText("Name");

  await user.type(input, "Test");

  expect(handleChange).toHaveBeenCalledTimes(4);
});
