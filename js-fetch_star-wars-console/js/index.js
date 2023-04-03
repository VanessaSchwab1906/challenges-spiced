console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
      console.log("Bad request!");
    } else {
      console.log("Fetch worked!");
    }
    const starWarsData = await response.json();
    console.log(starWarsData.results[2].eye_color);
  } catch (e) {
    console.error(e);
  }
}

fetchData();
