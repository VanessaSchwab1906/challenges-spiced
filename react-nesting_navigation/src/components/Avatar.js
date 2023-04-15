// - Use the same JSX as in the `App.js` as basis (copy the tags including `<a>` or `<button>` tag and their children)
//   - import the `Image` component and use it.
//   - make sure to import the correct `jpg` file.
// - In the `App.js` file, import the `Logo` and `Avatar` component and replace the relevant JSX to use them.
// - Check that the UI still looks the same.

// You should now have an `App` component returning only your custom components (besides `main`)! Nice work 🎉

import avatar from "../img/avatar.jpg";
import Image from "./Image";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" />;
    </button>
  );
}
