console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const value = event.target.value;
  //   console.log(value);
  event.target.value = value.toUpperCase();
});
