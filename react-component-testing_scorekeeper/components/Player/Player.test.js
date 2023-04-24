import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

// - To find all buttons at once, there is `getAllByRole` which returns an array; you can then expect a specific `toHaveLength(expectedNumber)`.
// - To check the callback functions of a component, remember to mock them first and then pass the mocked function to the rendered component.
// - Your `user.click` does not call the mocked functions properly? Don't forget to use `await`.

test("renders player information and two buttons", () => {
  render(<Player name="Vanessa" score={0} />);
  const player = screen.getByText("Vanessa");
  const score = screen.getByText("0");
  const buttons = screen.getAllByRole("button");

  expect(player).toBeInTheDocument();
  expect(score).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const onIncrease = jest.fn();
  const onDecrease = jest.fn();
  const user = userEvent.setup();

  render(
    <Player name="Vanessa" score={0} onIncreasePlayerScore={onIncrease} />
  );
  const increaseButton = screen.getByRole("button", { name: "Increase Score" });
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });
  await user.click(increaseButton);
  expect(onIncrease).toHaveBeenCalledTimes(1);
  await user.click(decreaseButton);
  expect(onDecrease).toHaveBeenCalledTimes(0);
});
