import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

// - Change the `Lights` component to render the lights dynamically based on the array in state (`.map`). You'll need to pass the array down through props.
// - Create a function to toggle the `isOn` property of a light based on its `id` and pass the handler function down to the `Light` components.
// - In the `Lights` component pass down the `onToggle` prop to the `Light` component using an inline function to pass in the `id` of the light:

//   ```js
//   onToggle={() => handleToggle(light.id)}
//   ```

//   This of course depends on the name of the handle function you choose.

// > 💡 Just pick any `id`s you want for the lights. `"1"`, `"2"`, `"3"`,… is probably the easiest.

export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light light={light} toggleLight={toggleLight} />
        </li>
      ))}
    </StyledLights>
  );
}
