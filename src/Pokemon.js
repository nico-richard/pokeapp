export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon-name">{pokemon.name}</div>
      <div className="pokemon-stats">
        <div className="stats-hp stats-section">HP : {pokemon.stats.HP}</div>
        <div className="stats-attack stats-section">ATT : {pokemon.stats.attack}</div>
        <div className="stats-defense stats-section">DEF : {pokemon.stats.defense}</div>
        <div className="stats-speed stats-section">SPD : {pokemon.stats.speed}</div>
      </div>
      <img
        className="pokemon-image"
        src={pokemon.sprite}
        alt={`${pokemon.name}`}
      />
    </div>
  );
}
