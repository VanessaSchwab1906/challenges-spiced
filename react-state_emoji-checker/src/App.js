import React from "react";
import "./styles.css";
import { useState } from "react";

// - Most importantly, you need to import a built-in React function you'll be using during this challenge.
// - You need to make sure to declare a state variable.
// - Write a `handleClick` function that updates the state variable according to which emoji button was clicked. The `handleClick` function will be called in every onClick of the buttons.

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(code, icon) {
    code === "?" ? (code = icon) : (code = code + icon);
    return code;
  }

  function resetCode() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            {
              console.log("Click Kugelfisch");
              setCode(handleClick(code, "🐡"));
            }
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Click Blue Fish");
            setCode(handleClick(code, "🐋"));
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Click Wal");
            setCode(handleClick(code, "🐠"));
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          resetCode();
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
