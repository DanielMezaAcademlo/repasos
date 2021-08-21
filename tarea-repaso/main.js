const pokemon = [
  { name: "pikachu", type: "electric" },
  { name: "charmander", type: "fire" },
  { name: "eevee", type: "normal" },
  { name: "squirtle", type: "water" }
];

//DIV CONTENEDOR PRINCIPAL
const div1 = document.getElementById("div1");

//FUNCIÓN QUE RECORRE EL OBJETO
const pokemonList = () => {
  pokemon.forEach(currentPokemon => {
    console.log(currentPokemon);
    const pokemonContainer = document.createElement("div");
    pokemonContainer.classList.add("pokemonElement");
    div1.appendChild(pokemonContainer);

  });
};

//LLAMADO A LA FUNCIÓN
pokemonList();


