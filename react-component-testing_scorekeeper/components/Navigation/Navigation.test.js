import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

// - The exact acceptance criteria is also already defined inside of the test case. You just have to implement the test code inside the return statement of the `test()` function.
// - An HTML `<a>` tag has the accessible role "link".

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const historyLink = screen.getByRole("link", { name: /History/i });
  const playLink = screen.getByRole("link", { name: /Play/i });
  expect(historyLink).toBeInTheDocument();
  expect(playLink).toBeInTheDocument();
});
