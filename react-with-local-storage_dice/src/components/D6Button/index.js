// import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

// The `D6Button` component should have the following props:

// - `value` which represents the current roll value (because the button only needs to know the most recent value)
// - `onRoll` which is a function that get called on roll (when the button is clicked)

// > 💡 When designing the interface of your component (which props it has), think about what the component needs to know to function properly. In this case the component only needs to know the current value it should show, and a function that gets called when the button is clicked. Hence you should not pass the whole `rolls` array to the component.

export function D6Button({ currentRollValue, onRoll }) {
  // const [rolls, setRolls] = useState([]);

  // const handleRoll = () => {
  //   setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  // };

  // const currentRollValue = rolls[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}
