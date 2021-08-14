const button = document.getElementById("button-action");
//Elementos contenedores de las imágenes
const container1 = document.getElementById("first-image");
const container2 = document.getElementById("second-image");

//Funciones

function handleClick(e) {
  let arrayClasses = [];
  for (let i = 0; i < container2.classList.length; i++) {
    const element = container2.classList[i];
    arrayClasses.push(element);
  }

  if (arrayClasses.includes("hidden")) {
    container2.classList.remove("hidden");
    container1.classList.add("hidden");
  } else {
    container2.classList.add("hidden");
    container1.classList.remove("hidden");
  }

  //SOLUCIÓN MÁS PRO
  //   container1.classList.toggle("hidden");
  //   container2.classList.toggle("hidden");
}

//Listeners
button.onclick = handleClick;
