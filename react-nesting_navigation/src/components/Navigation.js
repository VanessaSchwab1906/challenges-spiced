// - Create `src/components/Navigation.js`.
// - The `Navigation` should receive a `children` prop used in its return statement.
//   - 💡 Note that the `nav` does not have a `className`, so there is no need to add this attribute.
// - In the `App.js` file, import the `Navigation` component and replace the `<nav></nav>` tags with it.

export default function Navigation({ children }) {
  return <nav>{children}</nav>;
}
