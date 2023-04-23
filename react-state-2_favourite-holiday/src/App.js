import React from "react";
import "./styles.css";
import { useState } from "react";

// 1. the `App` component has access to the submitted data,
// 2. the submitted data is dynamically rendered in the respective output fields below the form.

// You can use the following hints as guideline:

// - Create a separate state for `holiday` and `date`.
// - The `handleSubmit` function sets both states with its corresponding values. Do you remember how to access the values of the target fields?
// - Don't forget to dynamically render the state variables in the output area.

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setHoliday(event.target.elements.holiday.value);
    setDate(event.target.elements.date.value);
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
