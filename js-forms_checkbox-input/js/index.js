console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const checkbox = formElements.tos.checked;

  if (checkbox != true) {
    showTosError();
    return;
  } else {
    hideTosError();
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
