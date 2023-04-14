import Card from "./components/Card";

// Create an array 'fruits'. It should contain at least 5 objects which all have the properties 'name', 'id', 'color', e.g.:

// ```
// {
//   id: 1337,
//   name: '🍌 Banana',
//   color: 'yellow',
// }
// ```

// - Hint: the ids need to be unique.

// Use the array method `map` to create a Card component for each fruit in your array. Use the name of each object as the text of the component and the id as the key prop.

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "Apple",
      color: "red",
    },
    {
      id: 1338,
      name: "Peach",
      color: "orange",
    },
    {
      id: 1339,
      name: "Grapes",
      color: "purple",
    },
    {
      id: 1340,
      name: "Pineapple",
      color: "green",
    },
    {
      id: 1341,
      name: "Mango",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map(({ id, name }) => (
        <Card key={id} name={name} />
      ))}
    </div>
  );
}
