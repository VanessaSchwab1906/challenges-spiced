import "./styles.css";

// - Write the `Greeting` component inside of the [`App.js`](src/App.js).
//   - It accepts a prop called `name` (make sure to destructure it).
//   - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
// - Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.
// Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.

export default function App() {
  return (
    <div>
      <Greeting name="Klaus" isCoach />
      <Greeting name="Sven" isCoach />
      <Greeting name="Gimena" isCoach />
      <Greeting name="Vanessa" />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <div>
      {isCoach ? "Hello, Coach!" : <p>Hello, {name}!</p>}
      {/* <p>Hello {name}</p> */}
    </div>
  );
}
