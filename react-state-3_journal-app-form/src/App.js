import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

// The component rendering the entries and the component with the form needs to share this state of entries. We need to lift the state up to the first common ancestor of these two components. In the template it is the `App` component.

// - Update the function declaration of the `EntriesSection` component to accept a new prop called `entries`.

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

// - Create a function called `handleAddEntry`.
// - The function should accept a parameter called `newEntry`, which should be an object describing the new entry.

// - Create a string containing the date in the desired format with the snippet below.
// - Add the key `date` to the object describing the new entry

// - Call the `setEntries` function and insert the new entry at the beginning of the array.
// - Pass the `handleAddEntry` function with the prop `onAddEntry` to the `EntryForm` component.

function App() {
  const [entries, setEntries] = useState(initialEntries);
  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([...newEntry, date, { id: uid(), ...entries }]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
