import React from "react";
import { useState } from "react";
import "./styles.css";

// You can use the following hints as a guideline:

// - `let` doesn't seem to be the appropriate way to declare a variable in this instance.
// - Is there a built-in React function you can use instead?
//   - Make sure to import said function.
// - At present, the `<button>`s' event handler is logging an emoji to the console.
//   - Clearly, the event handler should be handling a different type of functionality.

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleClickMinus() {
    console.log("I am clicking on -");
    setCount(count - 1);
    console.log(count);
  }

  function handleClickPlus() {
    console.log("I am clicking on +");
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleClickMinus}>
          -
        </button>
        <button type="button" onClick={handleClickPlus}>
          +
        </button>
      </div>
    </div>
  );
}
