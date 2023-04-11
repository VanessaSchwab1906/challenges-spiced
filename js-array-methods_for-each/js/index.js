const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// - For each hex code a new `div` with the class `color-box` should be created.
// - The `background-color` of the `div` should be the current hex code.
// - The element should be added to the page.

colors.forEach((color) => {
  const colorElement = document.createElement("div");
  colorElement.classList.add("color-box");
  console.log(colorElement);
  colorElement.style.backgroundColor = color;
  document.body.append(colorElement);
});
