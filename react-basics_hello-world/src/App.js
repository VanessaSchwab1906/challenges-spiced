import React from "react";
import "./styles.css";

// To do so, create a component (i.e. function) called `HelloWorld`.

// Use the following hints as guideline:

// - In the [App.js](src/App.js), create a new function called `HelloWorld()` (it does not matter whether you write it above or below the `App` function - but not inside it!).
// - `HelloWorld()` should return the same HTML heading as in the first task above.
// - In the return statement of the `App` function, replace the `h1` with your `HelloWorld` component.
// - Look at the browser and be amazed: nothing has changed, but you've built and used your first React component!

export default function App() {
  return <HelloWorld />;
}

function HelloWorld() {
  return <h1>Hello World!</h1>;
}
