import { useState } from "react";
import { useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// 1. Write the function `getISSCoords`. Fetch from the given url saved in the constant `URL`. After fetching successfully update the `coords` state accordingly.

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getISSCoords();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
