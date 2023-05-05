import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import Lights from "../components/Lights";

export default function App({ Component, pageProps }) {
  // const [isOn, setIsOn] = useState(false);
  const initialLights = [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];

  const [lights, setLights] = useState([...initialLights]);

  function toggleLight(id, isOn) {
    console.log(id, isOn);
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !isOn } : light
      )
    );
  }

  const lengthOfOnLights = lights.filter((light) => light.isOn === true).length;
  const isItDimmed = lengthOfOnLights === 0;
  return (
    <Layout isDimmed={isItDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        setLights={setLights}
      />
    </Layout>
  );
}
