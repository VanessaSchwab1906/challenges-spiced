import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

// - To find all buttons at once, there is `getAllByRole` which returns an array; you can then expect a specific `toHaveLength(expectedNumber)`.
// - To check the callback functions of a component, remember to mock them first and then pass the mocked function to the rendered component.
// - Your `user.click` does not call the mocked functions properly? Don't forget to use `await`.

test("renders player information and two buttons", () => {});

test("calls callbacks when increasing or decreasing score", async () => {});
