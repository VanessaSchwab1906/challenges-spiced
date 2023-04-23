// - Use the same JSX as in the `App.js` as basis (copy the tags including `<a>` or `<button>` tag and their children)
//   - import the `Image` component and use it.
//   - make sure to import the correct `jpg` file.
// - In the `App.js` file, import the `Logo` and `Avatar` component and replace the relevant JSX to use them.
// - Check that the UI still looks the same.

// You should now have an `App` component returning only your custom components (besides `main`)! Nice work 🎉

import logo from "../img/logo.jpg";
import Image from "./Image";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo"></Image>
    </a>
  );
}
