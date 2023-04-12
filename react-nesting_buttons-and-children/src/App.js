import React from "react";
import "./styles.css";

// 1. in the `Button` component, receive the `children` prop as parameter; make sure to destructure it.
// 2. replace the "Click me!" text with the `children` prop (don't forget the curly braces `{}`).
// 3. in the `App` component, change the `Button` elements from being self-closing to have an opening and closing tag.
// 4. add text of your choice between the opening and closing tags of the Button elements (use different texts to see any difference in the browser!)

export default function App() {
  return (
    <main>
      <Button> Button 1 </Button>
      <Button> Button 2 </Button>
      <Button>Button 3 </Button>
      <Button>Button 4 </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
