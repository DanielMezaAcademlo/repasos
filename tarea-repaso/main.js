const pokemon = [
  { name: "pikachu", type: "electric" },
  { name: "charmander", type: "fire" },
  { name: "eevee", type: "normal" },
  { name: "squirtle", type: "water" }
];
const div1 = document.getElementById("div1");

const pokemonList = () => {
  pokemon.forEach(currentPokemon => {
    console.log(currentPokemon);
  });
};

pokemonList();
