export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
        <h3>{pokemon.id}</h3>
      <div className="pokemon-name">{pokemon.name}</div>
      <div className="pokemon-stats">{pokemon.stats.HP}</div>
      <img
        className="pokemon-image"
        src={pokemon.sprite}
        alt={`${pokemon.name}`}
      />
    </div>
  );
}
