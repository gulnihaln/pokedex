import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event){
      console.log(city);
    setCity(event.target.value);
  }

  return (
    <div className="pokemonCity">
      <input value={city} type="text" onChange={updateCity}></input>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
