import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

// - Change `Light` component to receive at least `isOn`, `name`, `onToggle` as props and remove the internal state from the component.

export default function Light({ light, toggleLight }) {
  // const [isOn, setIsOn] = useState(false);

  return (
    <LightButton
      type="button"
      onClick={() => {
        toggleLight(light.id, light.isOn);
      }}
      isOn={light.isOn}
    >
      <Icon isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
