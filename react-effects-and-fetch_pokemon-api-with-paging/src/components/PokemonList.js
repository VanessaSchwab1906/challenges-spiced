import { useEffect, useState } from "react";

// NEXT BUTTON
// > _Hint 1:_ You need a way to store which page you are displaying right now and be able to update this value to the next page.

// > _Hint 2:_ Have a look at the URL parameter `?offset=` used for `fetch`. The API starts by giving you the first `20` Pokémon. In the end the URL needs to change. You can either keep track of the offset yourself, or use the value given and `next` in the API response.

// PREV BUTTON

// You might experience that the app crashes when you are on the first page and click on the "Previous Page" button. Can you find a way to hide the button on the first page?

// > _Hint:_ There is also a `previous` value given in the API response.

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, settOffSet] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  function handleNextPage() {
    settOffSet(offset + 20);
  }

  function handlePrevPage() {
    settOffSet(offset - 20);
  }

  return (
    <main>
      <button
        onClick={handlePrevPage}
        hidden={offset === 0 ? true : false}
        type="button"
      >
        Previous Page
      </button>
      <button onClick={handleNextPage} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
