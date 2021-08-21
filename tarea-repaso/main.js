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
    //Creamos el contenedor de cada pokemon
    const pokemonContainer = document.createElement("div");
    //Creamos p para el nombre y tipo
    const pokemonName = document.createElement("p");
    const pokemonType = document.createElement("p");
    //Agregar text a los párrafos
    pokemonName.innerText = currentPokemon.name;
    pokemonType.innerText = currentPokemon.type;

    pokemonType.classList.add("col-3");
    pokemonName.classList.add("col-3");

    //Agregar un bg
    pokemonType.style.color = switchColor(currentPokemon.type);

    //Agregar una clase al contenedor creado
    pokemonContainer.classList.add("pokemonElement");

    //Agregar elementos

    //Contenedor principal de cada pokemon al contenedor principal general
    div1.appendChild(pokemonContainer);
    //Agregar nombre y tipo al contenedor de cada pokemon
    pokemonContainer.appendChild(pokemonName);
    pokemonContainer.appendChild(pokemonType);
  });
};

const switchColor = tipo => {
  if (tipo === "electric") {
    return "yellow";
  } else if (tipo === "fire") {
    return "red";
  } else if (tipo === "normal") {
    return "grey";
  } else if (tipo === "water") {
    return "blue";
  }
};
//LLAMADO A LA FUNCIÓN
pokemonList();
