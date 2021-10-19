// import logo from "./logo.svg";
import "./App.css";
import React from  "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const appName = "Gulnihal's Pokedex";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
const App = () => {
  function logWhenClicked() {
    console.log("Button was clicked!");
  }
  return (
    <div>
      <Logo appName = {appName} handleClick={logWhenClicked}/>
      <BestPokemon abilities = {abilities}/>
      <CaughtPokemon date ={date}/>
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};
export default App;