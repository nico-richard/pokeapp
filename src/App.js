import { useState, useEffect } from "react";

function App() {
  const [numberOfItems, setNumberOfItems] = useState();

  function handleNumberOfItems(count) {
    setNumberOfItems(count);
  }

  return (
    <div className="app">
      <UserInput onNumberOfItems={handleNumberOfItems} />
      {numberOfItems > 0 ? (
        <PokeList numberOfItems={numberOfItems} />
      ) : (
        <h3>No pokemon found</h3>
      )}
    </div>
  );
}

export default App;

function PokeList({ numberOfItems }) {
  const [pokeData, setPokeData] = useState([]);

  function getRandomPokemons() {
    let randomList = [];

    fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < numberOfItems; i++) {
          let randomPokemon = data[Math.floor(Math.random() * data.length)];
          randomList.push(randomPokemon);
        }
        setPokeData(randomList);
      });
  }

  useEffect(() => {
    getRandomPokemons();
    // eslint-disable-next-line
  }, [numberOfItems]);

  const pokeList = pokeData.map((pokemon) => {
    return <Pokemon pokemon={pokemon} />;
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
      className="pokelist"
    >
      {pokeList}
    </div>
  );
}

function Pokemon({ pokemon }) {
  return (
    <div
      key={pokemon.id}
      className="pokemon"
      style={{
        display: "flex",
        alignItems: "center",
        listStyleType: "none",
        border: "1px solid black",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: "#eee",
      }}
    >
      <div style={{ margin: "5px" }}>{pokemon.name}</div>
      <div style={{ color: "red" }}>{pokemon.stats.HP}</div>
      <img src={pokemon.sprite} alt={`${pokemon.name}`} />
    </div>
  );
}

function UserInput({ onNumberOfItems }) {
  const [number, setNumber] = useState();

  function handleClick() {
    onNumberOfItems(number);
  }

  return (
    <div className="user-input">
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button type="submit" onClick={handleClick}>
        Get {number} pokemons
      </button>
    </div>
  );
}
