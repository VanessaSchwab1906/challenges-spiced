import { useState } from "react";
import { useEffect } from "react";

// - Remove the 'Load Pokémon' button.
// - Change the code below so that the `loadPokemon` function is only executed when the app component is rendered initially
// _Hint:_ Don't forget the dependency array!

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    return () => {
      loadPokemon();
    };
  }, []);

  async function loadPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
