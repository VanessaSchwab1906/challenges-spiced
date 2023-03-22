console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const date = new Date().getHours();
  if (6 <= date <= 12) {
    return "Good Morning";
  }
  if (13 <= date <= 18) {
    return "Good Afternoon";
  }
  if (19 <= date <= 22) {
    return "Good Evening";
  }
  if (23 <= date <= 5) {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const weekday = new Date().getDay();
  if (weekday === "monday") {
    return "darkgray";
  } else if (weekday === "saturday" || weekday === "sunday") {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
