console.clear();

// ### 1. Listen to the submit event

// - Write an event listener for the form submit.
// - Log the user data to the console (we will use the data later in this exercise).
// - After submit, reset the form and focus the input field with the name `headline`.

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const headline = event.target.elements.headline.value;
//   const task = event.target.elements.task.value;
//   console.log(headline, task);
//   event.target.reset();
//   event.target.elements.headline.focus();
// });

// ### 2. Create list entries

// Look at the [`index.html`](./index.html) file: there already is an `ul` for our submitted todos. We only need to write a function which creates list items and appends them to this list.

// Here are some hints to guide you:

// - The function needs one parameter (which will be the form data object).
// - The list item has
//   - a headline containing the string from `data.headline`
//   - a text element containing the string from `data.task`.
// - Make sure NOT to use `innerHTML` since it is a [security risk when working with user inputs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations).
// - Don't forget to
//   - append the headline and text element to the list item as well as the list item to the todoList
//   - call the function when the submit event is fired and pass the data object as an argument.

// Switch to the [`js/index.js`](./js/index.js) file and make things happen!

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // get input
  const formElements = event.target.elements;
  headlineInput = formElements.headline.value;
  taskInput = formElements.task.value;
  // function which creates list items and appends them to this list.
  createsList(headlineInput, taskInput);
  //reset form
  event.target.reset();
  // focus on headline after reset
  form.headline.focus();
});

function createsList(headlineInput, taskInput) {
  const newEntry = document.createElement("li");
  const newHeadline = document.createElement("h3");
  const newTask = document.createElement("p");

  todoList.append(newEntry);
  newEntry.append(newHeadline);
  newEntry.append(newTask);

  newHeadline.textContent = headlineInput;
  newTask.textContent = taskInput;
}