// Task: Create an `Image` component to render `<img>` tags.

// > 💡 This will be a helper component to create a `Logo` and `Avatar` component.

// - The `Image` component returns an `<img>` element with `className="round-image"` and
// - receives the props `src` and `alt` and passes them to the `src` and `alt` attributes.
// - as we don't need children here, this component should not have a `children` prop

export default function Image({ src, alt }) {
  return <img className="round-image" src={src} alt={alt} />;
}
