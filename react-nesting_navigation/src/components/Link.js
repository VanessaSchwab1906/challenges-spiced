// - Create a file for the `Link` component.
// - The `Link` component returns an `<a>` element with `className="navigation__link"` and receives the props
//   - `href` which is passed to the `href` attribute of the `<a>` tag and
//   - `children` passed between the opening and closing `<a>` tags.
// - In the `App.js` file, import the `Link` component and replace the `<a></a>` tags with it.
//   - Make sure to pass the correct prop(s?).

export default function Link({ children, href }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
