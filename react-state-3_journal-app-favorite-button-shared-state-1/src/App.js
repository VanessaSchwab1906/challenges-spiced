import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

// - Add the key `isFavorite` with the value `false` to each entry in the `initialEntries` array.

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
    isFavorite: false,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  // - Add the key `isFavorite` with the value `false` to a newly created entry in the function `handleAddEntry`.

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { id: uid(), date, ...newEntry, isFavorite: false },
      ...entries,
    ]);
  }

  // - Create a new function called `handleToggleFavorite` which accepts `id` as parameter.
  // - Inside this function update the state by calling `setEntries`. To create a new state value iterate over the `entries` array and search for the entry matching the `id`. If the `id` matches invert the value of `isFavorite`. (hint: you can use the array method `map` for this)
  // - Adjust the integration of the `EntrySection` component to pass the function `handleToggleFavorite` to the `onToggleFavorite` prop.

  function handleToggleFavorite(id) {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, isFavorite: !entry.isFavorite };
      }
      return entry;
    });
    setEntries(newEntries);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
