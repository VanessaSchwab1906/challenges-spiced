import "./Tab.css";

// Locate the component that renders the `button` JSX tag. In the template there is `Tab` used as a wrapping component around the `button` tag. To have the button clickable we need to pass the `onClick` prop to it.

// - Add the prop `onClick` to the function declaration of this component
// - Pass the prop to the `button` tag like this: `onClick={onClick}`

export default function Tab({ children, isActive, onClick }) {
  return (
    <button
      className={`tab${isActive ? " tab--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
