import Pokemon from "./Pokemon";

export default function PokeList({ pokeData }) {
  const pokeList = pokeData.map((pokemon) => {
    return <Pokemon pokemon={pokemon} key={pokemon.id} />;
  });

  return <div className="pokelist">{pokeList}</div>;
}
