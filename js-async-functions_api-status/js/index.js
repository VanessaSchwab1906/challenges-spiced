// Your task is to refactor `checkIfAPIIsAvailable` so that - depending on `response.ok` - the icon displays either ✅ or ❌.

// You can use the following hints as guideline:

// - `fetch()` returns a promise, so make sure to wait for the result.
// - Check whether 'response.ok' is truthy;
//   - if so, the icon should display ✅
//   - if not, the icon should display ❌
// - Use a `try...catch` block.

const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

// Something needs to change here…
// ↙️
async function checkIfApiIsAvailable() {
  /**
   * Hint 1:
   * Use the `fetch()` function and pass the `apiStatusUrl` into it
   *
   * Hint 2:
   * The fetch function returns a promise which resolves to a Response
   * object once it is ready.
   *
   * Hint 3:
   * The Response object has a `ok` property which is true if the response
   * is okay and false if it is not.
   **/
  // --v-- write your code here --v--
  // --^-- write your code here --^--
}

button.addEventListener("click", () => {
  checkIfApiIsAvailable();
});
