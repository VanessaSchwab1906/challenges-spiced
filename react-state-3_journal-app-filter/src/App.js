import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
  },
];

// - Create a new state called `filter`, which stores a string with `"all"` as initial value.
// - Create a function called `handleShowFavoriteEntries` which sets the `filter` state to `"favorites"`.
// - Create a function called `handleShowAllEntries` which sets the `showFavorites` state to `"all"`.
// - Pass the two functions down to the `EntriesSection` component via the props `onShowAllEntries` and `onShowFavoriteEntries` you introduced earlier

// - Besides the `entries` array which is stored in state, create a new array called `favoriteEntries`, which **should not** be stored in state.
// - The value of `favoriteEntries` should be all element from the `entries` array where `isFavorite` is `true` (hint: you can use the array method `filter`).

function App() {
  const [entries, setEntries] = useState(initialEntries);

  let favoriteEntries = entries.filter((entry) => entry.isFavorite === true);

  const [filter, setFilter] = useState("all");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={filter === "all" ? entries : favoriteEntries}
          filer={filter}
          onToggleFavorite={handleToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          allEntriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
