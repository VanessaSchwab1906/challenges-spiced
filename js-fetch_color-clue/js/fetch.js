import { setColorToGuess, getRandomHexCode } from "./utils.js";

// 1. Use the `fetch()` function to get data from the Color API.
// 2. Use the `.json()` method to parse the body of the response and convert it into an object.
// 3. Inspect the parsed object (e.g. by logging it to the console) and find the hex value and name of the closest named color.
// 4. Call the `setColorToGuess()` function with the hex value and name of the closest named color.
// 5. Guess colors! 🎉

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the closest named color
   */

  // --v-- your code here --v--
  try {
    const response = await fetch(colorApiUrl);
    const colorData = await response.json();
    // console.log(colorData);
    let hexCode = colorData.hex.value;
    let colorName = colorData.name.value;
    // console.log(colorValue, colorName);
    setColorToGuess(hexCode, colorName);
  } catch (e) {
    console.error(e);
  }
  // --^-- your code here --^--
}
