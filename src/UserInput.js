import { useState } from "react";

export default function UserInput({ generatePokemons }) {
  const [number, setNumber] = useState();

  function handleSubmit(event) {
    event.preventDefault()
    generatePokemons(number);
  }

  return (
    <form className="user-input" onSubmit={handleSubmit}>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button type="submit" hidden />
    </form>
  );
}
