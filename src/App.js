import { useState } from "react";
import PokeList from "./PokeList";
import UserInput from "./UserInput";
import "./App.sass";
import Fighter from "./Fighter";

export default function App() {
  const [pokeData, setPokeData] = useState([]);

  function getRandomPokemons(numberOfItems) {
    let randomList = [];

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/200`)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < numberOfItems; i++) {
          let randomPokemon = data[Math.floor(Math.random() * data.length)];
          randomList.push(randomPokemon);
        }
        setPokeData(randomList);
      });
  }

  function generatePokemons(numberOfItems) {
    getRandomPokemons(numberOfItems);
  }

  return (
    <div className="app">
      <UserInput generatePokemons={generatePokemons} />
      {pokeData.length > 0 ? (
        <PokeList pokeData={pokeData} />
      ) : (
        <h3>No pokemon found</h3>
      )}
      <Fighter />
    </div>
  );
}
