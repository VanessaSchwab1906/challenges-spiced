import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryEntry from ".";

// Check the [`HistoryEntry.test.js`](components/HistoryEntry/HistoryEntry.test.js), it offers two test cases with their acceptance criteria:

// - "renders name of game and 'show score' button only"
// - "renders player names and scores after button click"

// Run `npm run test`; you will notice that both tests fail. Read the error message carefully and fix the bug in [`HistoryEntry/index.js`](components/HistoryEntry/index.js) so that the test passes again. (The tests are correct, but there is something wrong with the component)

test("renders name of game and 'show score' button only", () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const nameOfGame = screen.getByText(/dodelido/i);
  const button = screen.getByRole("button", { name: /show score/i });

  expect(nameOfGame).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders player names and scores after button click", async () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const noPlayer1 = screen.queryByText(/john/i);
  const noPlayer2 = screen.queryByText(/jane/i);
  const noPlayerScore1 = screen.queryByText(/2/i);
  const noPlayerScore2 = screen.queryByText(/1/i);

  expect(noPlayer1).not.toBeInTheDocument();
  expect(noPlayer2).not.toBeInTheDocument();
  expect(noPlayerScore1).not.toBeInTheDocument();
  expect(noPlayerScore2).not.toBeInTheDocument();

  const button = screen.getByRole("button", { name: /show score/i });
  await userEvent.click(button);

  const player1 = screen.getByText(/john/i);
  const player2 = screen.getByText(/jane/i);
  const playerScore1 = screen.getByText(/2/i);
  const playerScore2 = screen.getByText(/1/i);

  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(playerScore1).toBeInTheDocument();
  expect(playerScore2).toBeInTheDocument();
});
